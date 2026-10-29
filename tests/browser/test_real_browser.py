"""Real Chromium regressions. Build first; install requirements-dev.txt and Chromium."""
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import json
import threading
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parents[2]

class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(ROOT / 'dist')))
threading.Thread(target=server.serve_forever, daemon=True).start()
url = f'http://127.0.0.1:{server.server_port}'
results = []
try:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1440, 'height': 1000}, reduced_motion='reduce')
        errors = []
        failed_requests = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.on('requestfailed', lambda request: failed_requests.append(request.url))
        page.goto(url, wait_until='networkidle')
        page.locator('#hero-start-data-btn').click()
        expect(page.locator('#view-compass')).to_be_visible()
        results.append('Primary CTA opens Compass')

        for width in [1440, 1024, 768, 390]:
            page.set_viewport_size({'width': width, 'height': 900})
            for theme in ['light', 'dark']:
                page.evaluate('t => document.documentElement.dataset.theme = t', theme)
                for route in ['home', 'compass', 'apps', 'workflows', 'finder', 'learn', 'methods', 'about']:
                    page.evaluate('r => navigateTo(r)', route)
                    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), (width, theme, route)
                for product in ['datamend-lab', 'visualgrammar', 'quartetlab', 'resamplelab', 'forecastlab']:
                    page.evaluate('id => openProductDetail(id)', product)
                    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), (width, theme, product)
        results.append('8 routes + 5 product details × 4 widths × 2 themes: no page overflow')

        page.set_viewport_size({'width': 1440, 'height': 1000})
        page.evaluate("navigateTo('compass')")
        for sample in page.evaluate('Object.keys(DataSenseCompassEngine.SAMPLE_DATASETS)'):
            page.evaluate('id => selectCompassSample(id)', sample)
            for mode in ['explorer', 'matrix', 'pair', 'table']:
                page.evaluate('mode => setCompassCenterMode(mode)', mode)
                expect(page.locator(f'#compass-pane-{mode}')).to_be_visible()
        results.append('All 6 sample datasets and 4 analysis modes render')

        title = page.locator('#compass-ws-title').inner_text()
        for invalid in ['', 'a,b', '[null, 1]', '{"rows":[{"a":{"x":1}}]}', 'a,b\n"unclosed,2']:
            page.evaluate('openCompassPasteModal()')
            page.locator('#compass-paste-textarea').fill(invalid)
            page.get_by_role('button', name='Parse & Load in Compass').click()
            expect(page.locator('#compass-paste-status')).to_contain_text('unchanged')
            expect(page.locator('#compass-ws-title')).to_have_text(title)
            page.keyboard.press('Escape')
            expect(page.locator('#compass-paste-backdrop')).not_to_be_visible()
        results.append('Empty, header-only, malformed CSV and invalid JSON preserve the current dataset')

        page.evaluate('openCompassPasteModal()')
        page.locator('#compass-paste-textarea').fill('day,value\n2026')
        page.keyboard.press('/')
        expect(page.locator('#compass-paste-textarea')).to_have_value('day,value\n2026/')
        expect(page.locator('#search-modal-backdrop')).not_to_be_visible()
        for _ in range(12):
            page.keyboard.press('Tab')
            assert page.evaluate("document.getElementById('compass-paste-backdrop').contains(document.activeElement)")
        page.keyboard.press('Escape')
        results.append('Slash remains text in paste dialog; Tab stays inside; Escape closes it')

        # A column name must stay data across JS-string and HTML-attribute contexts.
        hostile = "x');window.__injected=1;//"
        content = 'safe,"' + hostile + '"\n1,2\n2,4\n3,5\n4,8'
        page.locator('#compass-ws-file-input').set_input_files({'name': 'quoted.csv', 'mimeType': 'text/csv', 'buffer': content.encode()})
        expect(page.locator('#compass-import-status')).to_contain_text('Loaded quoted.csv')
        page.locator('#compass-ws-var-list button').filter(has_text=hostile).click()
        assert page.evaluate('compassState.secondaryVar') == hostile
        assert page.evaluate('window.__injected === undefined')
        page.locator('#compass-ws-var-list select').nth(1).select_option('continuous_numeric')
        assert page.evaluate('window.__injected === undefined')
        results.append('Quoted/injection-shaped column names are inert and selectable')

        page.locator('#compass-ws-file-input').set_input_files({'name': 'big.csv', 'mimeType': 'text/csv', 'buffer': b'a' * (2 * 1024 * 1024 + 1)})
        expect(page.locator('#compass-import-status')).to_contain_text('exceeds 2 MB')
        expect(page.locator('#compass-ws-title')).to_have_text('quoted.csv')
        page.evaluate("processUploadedCompassFile({name:'bad.exe',size:1})")
        expect(page.locator('#compass-import-status')).to_contain_text('Choose a CSV')
        page.evaluate("""() => {
            const Original = window.FileReader;
            window.FileReader = class { readAsText() { this.onerror(); } };
            processUploadedCompassFile({name:'unreadable.csv',size:20});
            window.FileReader = Original;
        }""")
        expect(page.locator('#compass-import-status')).to_contain_text('could not be read')
        results.append('Oversized, unsupported, and unreadable files have recoverable errors')

        page.evaluate("""() => {
            const Original = window.FileReader;
            window.FileReader = class { readAsText() { setTimeout(() => this.onload({target:{result:'a,b\\n1,2'}}), 30); } };
            processUploadedCompassFile({name:'stale.csv',size:10});
            selectCompassSample('housing');
            window.FileReader = Original;
        }""")
        page.wait_for_timeout(100)
        expect(page.locator('#compass-ws-title')).to_contain_text('Housing')
        over_limit = 'a,b\n' + '1,2\n' * 5001
        page.locator('#compass-ws-file-input').set_input_files({'name':'rows.csv','mimeType':'text/csv','buffer':over_limit.encode()})
        expect(page.locator('#compass-import-status')).to_contain_text('interactive limit')
        expect(page.locator('#compass-ws-title')).to_contain_text('Housing')
        results.append('Stale file readers cannot overwrite a newer sample; row limits preserve current data')

        for edge in ['value\n1', 'a,b\nNA,NA\nNA,NA', 'a,b\n1,1\n1,1']:
            page.evaluate('s => loadCompassImport(s, "edge.csv", true)', edge)
            expect(page.locator('#compass-ws-title')).to_have_text('edge.csv')
        page.evaluate("selectCompassSample('housing'); onCompassSubsetVarChange('neighborhood'); onCompassSubsetValChange('not-a-real-category')")
        expect(page.locator('#compass-ws-dimensions')).to_contain_text('0 observations')
        page.evaluate('clearCompassSubsetFilter()')
        results.append('Single-row, missing-only, constant data and empty subsets render safely')

        # Exercise the accepted upper row bound with deterministic numeric data.
        large = 'value,signal\n' + '\n'.join(f'{i},{i*2+(i%7)}' for i in range(5000))
        page.locator('#compass-ws-file-input').set_input_files({'name': 'large.csv', 'mimeType': 'text/csv', 'buffer': large.encode()})
        expect(page.locator('#compass-import-status')).to_contain_text('5,000 rows', timeout=30000)
        with page.expect_download() as download:
            page.get_by_role('button', name='↓ Dataset CSV', exact=True).click()
        assert download.value.suggested_filename.endswith('.csv')
        results.append('5,000-row dataset imports and exports')

        page.evaluate("selectCompassSample('messy_import')")
        page.evaluate('openCompassRoundTripModal()')
        page.get_by_role('button', name='Apply local cleaning preview', exact=True).click()
        expect(page.locator('#compass-ws-title')).to_contain_text('(Cleaned)')
        page.evaluate('restoreOriginalCompassDataset()')
        expect(page.locator('#compass-ws-title')).not_to_contain_text('(Cleaned)')
        results.append('Local cleaning preview and restoration work')

        page.evaluate("navigateTo('apps')")
        page.locator('#dir-search-input').fill('no-such-method-987')
        expect(page.locator('#directory-results-grid')).to_contain_text('No')
        page.locator('#dir-search-input').fill('bootstrap')
        expect(page.locator('#directory-results-grid')).to_contain_text('ResampleLab')
        page.evaluate('openSearchModal()')
        page.locator('#global-search-input').fill('forecast')
        expect(page.locator('#search-modal-backdrop')).to_contain_text('ForecastLab')
        page.keyboard.press('Escape')
        results.append('Directory empty/filter states and global search work')

        page.goto(url + '/compass/', wait_until='networkidle')
        expect(page.locator('#view-compass')).to_be_visible()
        assert not errors, errors
        assert not failed_requests, failed_requests
        results.append('Direct /compass/ entry works; zero uncaught browser errors')
        browser.close()
    print(json.dumps({'status': 'PASS', 'checks': results}, indent=2))
finally:
    server.shutdown()
