"""Capture the real browser baseline or revised UI; report route overflow."""
import argparse
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

parser = argparse.ArgumentParser()
parser.add_argument('--label', default='after')
parser.add_argument('--url', default='http://localhost:8080')
args = parser.parse_args()
out = Path(__file__).resolve().parents[2] / 'artifacts' / 'qa'
out.mkdir(parents=True, exist_ok=True)
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(device_scale_factor=1)
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto(args.url, wait_until='networkidle')
    results = []
    for width in [1440, 1024, 768, 390]:
        page.set_viewport_size({'width': width, 'height': 1000 if width > 768 else 844})
        for route in ['home', 'compass', 'apps', 'workflows', 'finder', 'learn', 'methods', 'about']:
            page.evaluate('r => navigateTo(r)', route)
            page.wait_for_timeout(300)
            metrics = page.evaluate('({width: innerWidth, scroll: document.documentElement.scrollWidth})')
            results.append({'route': route, **metrics})
            if width in [1440, 390]:
                page.screenshot(path=str(out / f'{args.label}-{route}-{width}.png'), full_page=True)
    report = {'routes': results, 'errors': errors}
    if args.label == 'after':
        page.set_viewport_size({'width': 1440, 'height': 1000})
        page.evaluate("navigateTo('compass'); selectCompassSample('messy_import')")
        page.screenshot(path=str(out / 'after-readiness-cautions.png'), full_page=True)
        page.evaluate('openCompassPasteModal()')
        page.locator('#compass-paste-textarea').fill('[null]')
        page.get_by_role('button', name='Parse & Load in Compass').click()
        page.screenshot(path=str(out / 'after-invalid-import.png'))
        page.keyboard.press('Escape')
        page.evaluate("navigateTo('apps')")
        page.locator('#dir-search-input').fill('no-such-method')
        page.screenshot(path=str(out / 'after-empty-directory.png'))
        page.evaluate("document.documentElement.dataset.theme='dark';navigateTo('compass');selectCompassSample('housing')")
        page.screenshot(path=str(out / 'after-compass-dark.png'))
    (out / f'{args.label}-browser.json').write_text(json.dumps(report, indent=2))
    print(json.dumps(report, indent=2))
    browser.close()
