"""Real same-origin transfer. Set DATAMEND_ROOT to the companion checkout in CI."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit, unquote
import os, threading, json
from playwright.sync_api import sync_playwright, expect

ROOT=Path(__file__).resolve().parents[2]
DM=Path(os.environ.get('DATAMEND_ROOT',str(ROOT.parent/'ecosystem-repos/datamend-lab'))).resolve()
assert (DM/'js/compass-transfer.js').exists(), 'Set DATAMEND_ROOT to the updated DataMend checkout'
class Handler(SimpleHTTPRequestHandler):
    def log_message(self,*args): pass
    def translate_path(self,path):
        path=unquote(urlsplit(path).path)
        prefix='/datamend-lab/' if path.startswith('/datamend-lab/') else '/datasense-studio/'
        root=DM if prefix=='/datamend-lab/' else ROOT/'dist'
        target=(root/path.removeprefix(prefix)).resolve()
        return str(target if target.is_relative_to(root.resolve()) else root/'not-found')
server=ThreadingHTTPServer(('127.0.0.1',0),Handler)
threading.Thread(target=server.serve_forever,daemon=True).start()
base=f'http://127.0.0.1:{server.server_port}'
try:
    with sync_playwright() as p:
        browser=getattr(p,os.environ.get('BROWSER','chromium')).launch()
        page=browser.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto(base+'/datasense-studio/compass/',wait_until='networkidle')
        page.locator('#compass-ws-file-input').set_input_files({'name':'roundtrip.csv','mimeType':'text/csv','buffer':b'name,id,value\nAlice,001,2\nBob,002,4\nCarol,003,6'})
        expect(page.locator('#compass-ws-title')).to_contain_text('roundtrip')
        page.evaluate('openCompassRoundTripModal()')
        page.locator('#compass-transfer-launch').click()
        page.wait_for_url('**/datamend-lab/**')
        expect(page.get_by_role('button',name='Load transferred dataset')).to_be_visible()
        page.get_by_role('button',name='Load transferred dataset').click()
        expect(page.get_by_role('button',name='Return cleaned dataset to Compass')).to_be_enabled()
        # Use the real transformation engine, then verify its approved values
        # survive serialization, navigation, and Compass reanalysis.
        before=page.evaluate('''async()=>{const {APP_STATE}=await import('./js/app.js');
          const ds=APP_STATE.datasets.find(d=>d.id===APP_STATE.activeDatasetId);
          return {rows:ds.rows.length,headers:ds.columns.map(c=>c.displayName)};}''')
        page.evaluate('''async()=>{const {APP_STATE}=await import('./js/app.js');
          const {applyTransformation}=await import('./js/transforms.js');
          const ds=APP_STATE.datasets.find(d=>d.id===APP_STATE.activeDatasetId);
          applyTransformation(ds,'STANDARDIZE_CASE',{columnName:'name',mode:'upper'});}''')
        transfer_url=page.url
        page.get_by_role('button',name='Return cleaned dataset to Compass').click()
        page.wait_for_url('**/datasense-studio/compass/**')
        page.wait_for_function("!location.search.includes('compass_return')")
        assert page.evaluate('compassState.lastAnalysis.dataset.rows.length')==before['rows']
        assert page.evaluate('compassState.lastAnalysis.dataset.headers')==before['headers']
        assert page.evaluate('compassState.lastAnalysis.dataset.rows[0].name')=='ALICE'
        assert page.evaluate('compassState.lastAnalysis.dataset.rows[0].id')=='001'
        # Replay is refused after consumption; missing and expired records fail closed.
        page.goto(transfer_url,wait_until='networkidle')
        expect(page.locator('#compass-transfer')).to_contain_text('already been used')
        page.goto(base+'/datamend-lab/?compass_handoff=ds_handoff_missing',wait_until='networkidle')
        expect(page.locator('#compass-transfer')).to_contain_text('missing or incompatible')
        awaitable='''async()=>{await DataSenseHandoff.write({protocol:'datasense_compass_handoff_v1',schemaVersion:'1.0.0',sourceApp:'datasense-compass',targetApp:'datamend',handoffId:'ds_handoff_expired',state:'READY_FOR_TARGET',expiresAt:'2000-01-01',returnUrl:location.origin+'/datasense-studio/',dataset:{headers:['x'],rows:[{x:1}]}})}'''
        page.evaluate(awaitable)
        page.goto(base+'/datamend-lab/?compass_handoff=ds_handoff_expired',wait_until='networkidle')
        expect(page.locator('#compass-transfer')).to_contain_text('expired')
        blocked=browser.new_context();blocked.add_init_script("Object.defineProperty(window,'indexedDB',{get(){throw new Error('blocked')}})")
        denied=blocked.new_page();denied.goto(base+'/datamend-lab/?compass_handoff=ds_handoff_blocked',wait_until='networkidle')
        expect(denied.locator('#compass-transfer')).to_contain_text('storage is unavailable')
        assert not errors,errors
        browser.close()
    print(json.dumps({'status':'PASS','checks':['real workspace round trip','consumed replay refused','missing and expired transfers','storage denied recovery']}))
finally: server.shutdown()
