#!/usr/bin/env python3
"""
Rendered DOM, Interactive Runtime, Search, Tool Finder, Compass & DataMend Verification Suite.
Executes the compiled HTML and JavaScript runtime (`dist/index.html`, `dist/compass/index.html`,
`dist/assets/compass_engine.js`, and `dist/assets/app.js`) inside a deterministic Node.js DOM
verification harness so tests complete in <1s without browser daemon hangs.
"""
import json
import subprocess
import unittest
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]

NODE_DOM_HARNESS = r"""
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const repoRoot = process.cwd();
const html = fs.readFileSync(path.join(repoRoot, 'dist/index.html'), 'utf8');
const compassHtml = fs.readFileSync(path.join(repoRoot, 'dist/compass/index.html'), 'utf8');
const css = fs.readFileSync(path.join(repoRoot, 'dist/assets/styles.css'), 'utf8');
const compassEngineCode = fs.readFileSync(path.join(repoRoot, 'dist/assets/compass_engine.js'), 'utf8');
const appJsCode = fs.readFileSync(path.join(repoRoot, 'dist/assets/app.js'), 'utf8');

// Build lightweight DOM registry from dist/index.html
const elementsById = new Map();
function makeEl(id, tag = 'div', initialHtml = '') {
  const el = {
    id,
    tagName: tag.toUpperCase(),
    innerHTML: initialHtml,
    textContent: initialHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
    value: '',
    checked: true,
    style: {},
    dataset: {},
    attributes: {},
    classList: {
      _set: new Set(),
      add(...cls) { cls.forEach(c => this._set.add(c)); },
      remove(...cls) { cls.forEach(c => this._set.delete(c)); },
      toggle(c, force) {
        if (force === undefined) {
          if (this._set.has(c)) { this._set.delete(c); return false; }
          this._set.add(c); return true;
        }
        if (force) this._set.add(c); else this._set.delete(c);
        return !!force;
      },
      contains(c) { return this._set.has(c); }
    },
    setAttribute(k, v) { this.attributes[k] = String(v); if (k === 'href') this.href = String(v); },
    removeAttribute(k) { delete this.attributes[k]; },
    getAttribute(k) { return this.attributes[k] !== undefined ? this.attributes[k] : (k === 'href' ? this.href : null); },
    addEventListener() {},
    removeEventListener() {},
    scrollIntoView() {},
    focus() {},
    click() {},
    querySelector() { return makeEl('anon'); },
    querySelectorAll() { return []; },
    appendChild() {},
    removeChild() {}
  };
  Object.defineProperty(el, 'innerText', {
    get() {
      return (this.innerHTML || this.textContent || '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&rarr;|&#8594;/g, '→')
        .replace(/&ndash;|&#8211;/g, '–')
        .replace(/&amp;/g, '&')
        .replace(/\s+/g, ' ')
        .trim();
    },
    set(v) { this.textContent = String(v); this.innerHTML = String(v); }
  });
  return el;
}

// Parse all id="..." elements and their initial inner text from dist/index.html
const tagIdRegex = /<([a-zA-Z0-9]+)\b[^>]*\bid="([^"]+)"[^>]*>/g;
let match;
while ((match = tagIdRegex.exec(html)) !== null) {
  const [fullOpen, tag, id] = match;
  const closeIdx = html.indexOf("</" + tag + ">", match.index + fullOpen.length);
  const inner = closeIdx !== -1 ? html.slice(match.index + fullOpen.length, Math.min(closeIdx, match.index + fullOpen.length + 600)) : "";
  elementsById.set(id, makeEl(id, tag, inner));
}

const sandbox = {
  console,
  setTimeout: (fn) => { try { fn(); } catch (_) {} return 1; },
  clearTimeout: () => {},
  setInterval: () => 1,
  clearInterval: () => {},
  requestAnimationFrame: (fn) => { try { fn(); } catch (_) {} return 1; },
  URL: { createObjectURL: () => 'blob:mock', revokeObjectURL: () => {} },
  Blob: function(parts, opts) { this.parts = parts; this.opts = opts; },
  XMLSerializer: function() { this.serializeToString = () => '<svg></svg>'; },
  localStorage: {
    _data: new Map(),
    getItem(k) { return this._data.has(k) ? this._data.get(k) : null; },
    setItem(k, v) { this._data.set(k, String(v)); },
    removeItem(k) { this._data.delete(k); }
  },
  navigator: { webdriver: true, clipboard: { writeText: async () => {} } },
  location: { hash: '', pathname: '/datasense-studio/', href: 'https://rkohnmn.github.io/datasense-studio/', origin: 'https://rkohnmn.github.io' },
  history: { pushState: () => {}, replaceState: () => {} },
  addEventListener: () => {},
  removeEventListener: () => {},
  scrollTo: () => {},
  matchMedia: () => ({ matches: false, addEventListener: () => {} }),
  document: {
    documentElement: {
      scrollWidth: 1440,
      clientWidth: 1440,
      setAttribute() {},
      removeAttribute() {},
      getAttribute() { return 'light'; }
    },
    head: { appendChild() {} },
    body: { appendChild() {}, removeChild() {}, classList: { add() {}, remove() {}, toggle() {} } },
    createElement(tag) { return makeEl('created_' + tag, tag); },
    getElementById(id) {
      if (!elementsById.has(id)) elementsById.set(id, makeEl(id));
      return elementsById.get(id);
    },
    querySelector(sel) {
      if (sel && sel.startsWith('#')) return this.getElementById(sel.slice(1));
      return makeEl('qs');
    },
    querySelectorAll() { return []; },
    addEventListener() {}
  }
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;

vm.createContext(sandbox);
vm.runInContext(compassEngineCode, sandbox);
vm.runInContext(appJsCode, sandbox);
sandbox.initApp();

// 1. Verify Hero Title & Human-First Lead
const heroTitle = sandbox.document.getElementById('hero-title').innerText;
assert.ok(heroTitle.includes('A clearer way to work with data'), 'Hero title must include "A clearer way to work with data", got: ' + heroTitle);
assert.ok(elementsById.has('hero-start-data-btn'), 'Hero must include #hero-start-data-btn primary CTA');

// 2. Verify all 10 Authoritative URLs exist in rendered DOM sections
const fullRenderedHtml = html + '\n' + Array.from(elementsById.values()).map(e => e.innerHTML).join('\n');
const expectedUrls = [
  'https://rkohnmn.github.io/quartetlab/',
  'https://github.com/rkohnmn/quartetlab',
  'https://rkohnmn.github.io/resamplelab/',
  'https://github.com/rkohnmn/resamplelab',
  'https://rkohnmn.github.io/forecastlab/',
  'https://github.com/rkohnmn/forecastlab',
  'https://rkohnmn.github.io/datamend-lab/',
  'https://github.com/rkohnmn/datamend-lab',
  'https://rkohnmn.github.io/visualgrammar/',
  'https://github.com/rkohnmn/visualgrammar'
];
expectedUrls.forEach(u => {
  assert.ok(fullRenderedHtml.includes(u), 'Missing authoritative URL in rendered DOM: ' + u);
});

// 3. Verify Tool Finder Single & Multi-Stage Recommendations (Scenarios 9 & 10)
sandbox.selectFinderTask('create-chart');
const chartFinderText = sandbox.document.getElementById('home-finder-result').innerText;
assert.ok(chartFinderText.includes('VisualGrammar'), 'create-chart must recommend VisualGrammar');
assert.ok(chartFinderText.includes('Cleveland–McGill'), 'create-chart must explain Cleveland-McGill encoding');

sandbox.selectFinderTask('clean-and-forecast-messy');
const multiFinderText = sandbox.document.getElementById('home-finder-result').innerText;
assert.ok(multiFinderText.includes('DataMend Lab → ForecastLab'), 'clean-and-forecast-messy must recommend DataMend Lab -> ForecastLab');
assert.ok(multiFinderText.includes('FILE-BASED HANDOFF'), 'clean-and-forecast-messy must specify FILE-BASED HANDOFF');

// 4. Verify Global Search Queries (Section 27)
const searchQueries = {
  'clean CSV': 'DataMend Lab',
  'histogram': 'VisualGrammar',
  'regression': 'QuartetLab',
  'bootstrap': 'ResampleLab',
  'forecast': 'ForecastLab'
};
for (const [q, expectedApp] of Object.entries(searchQueries)) {
  sandbox.runGlobalSearch(q);
  const resText = sandbox.document.getElementById('global-search-results').innerText;
  assert.ok(resText.includes(expectedApp), `Search query "${q}" did not surface ${expectedApp}`);
}

// 5. Verify Homepage Compass Entry & 5-Step /compass/ Workspace
const compassHomeHeading = sandbox.document.getElementById('compass-home-heading').innerText;
assert.ok(compassHomeHeading.includes('Not sure where to begin? Start with your data.'), 'Updated Compass home heading missing');
assert.ok(elementsById.has('compass-home-pillars'), 'Compass 3-pillar strip must exist on homepage');
assert.ok(elementsById.has('compass-step-progression'), 'Compass 5-step progression bar must exist in /compass/');

// 6. Verify Compass Sample Switching & Honest DataMend Modal
sandbox.selectCompassSample('messy_import', false);
const readinessBadgeText = sandbox.document.getElementById('compass-ws-readiness-badge').innerText;
assert.ok(readinessBadgeText.includes('Fix this issue before continuing'), 'Dirty dataset should show plain-language "Fix this issue before continuing" badge');

sandbox.openCompassRoundTripModal().then(() => {
  const rtModalText = sandbox.document.getElementById('compass-rt-modal-body').innerText;
  assert.ok(rtModalText.includes('Operational File-Based Workflow'), 'DataMend modal must clearly present Operational File-Based Workflow');
  assert.ok(rtModalText.includes('datamend-compass-adapter.js'), 'DataMend modal must transparently explain adapter requirement');
  assert.ok(rtModalText.includes('Non-Destructive Local Preview'), 'DataMend modal must label in-app cleaning as Non-Destructive Local Preview');
  console.log('ALL_DOM_SCENARIOS_PASSED');
});
"""


class TestRenderedBrowserScenarios(unittest.TestCase):
    def test_rendered_dom_and_interactive_scenarios(self):
        proc = subprocess.run(
            ["node", "-e", NODE_DOM_HARNESS],
            cwd=str(REPO_ROOT),
            capture_output=True,
            text=True,
            timeout=15,
        )
        self.assertEqual(
            proc.returncode,
            0,
            f"Node DOM harness failed:\nSTDOUT:\n{proc.stdout}\nSTDERR:\n{proc.stderr}",
        )
        self.assertIn("ALL_DOM_SCENARIOS_PASSED", proc.stdout)


if __name__ == "__main__":
    unittest.main(verbosity=2)
