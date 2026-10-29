# Unified Automated Verification & Testing Guide

Run the complete test suite with a single command from any fresh clone:

```bash
npm test
```

## What `npm test` Executes
1. **DataSense Compass Statistical & Scenario Suite (`node tests/test_compass_engine.js`)**:
   - Verifies all 6 built-in benchmark datasets, RFC-4180 CSV parsing (BOM, quoted commas, multiline fields, escaped quotes, leading-zero identifiers), numeric/categorical/temporal profiling, tie-corrected Spearman rank correlation, constant-column `Undefined` handling, non-linear curvature ($\eta^2_{	ext{binned}} - r^2$) detection, plain-language readiness gating (*Ready to explore*, *Review these cautions*, *Fix this issue before continuing*), DataMend cleaning + renamed variable lineage restoration, and JSON/CSV exports.
2. **Registry, Link, Asset Separation & Portability Suite (`python3 tests/unit/test_registry_and_links.py`)**:
   - Verifies all 5 products, all 10 authoritative URLs (`https://rkohnmn.github.io/...` and `https://github.com/rkohnmn/...`), workflow and task integrity, root portfolio protection in `src/config/deployment.json`, external asset separation in `dist/`, and **zero hardcoded container paths** across all repository files.
3. **Rendered DOM & Interactive Behavioral Suite (`python3 tests/browser/test_rendered_dom.py`)**:
   - Executes `dist/index.html`, `dist/assets/compass_engine.js`, and `dist/assets/app.js` inside a deterministic Node VM DOM harness verifying the redesigned Hero headline and primary CTA, all 10 authoritative links in the rendered DOM, single- and multi-stage Tool Finder recommendations, site-wide search queries (`clean CSV`, `histogram`, `regression`, `bootstrap`, `forecast`), the 3-pillar Homepage Compass entry, the 5-step `/compass/` progression bar, and the honest 3-mode DataMend Round-Trip modal.
# Real-browser product regressions (October 2026 audit)

`tests/browser/test_rendered_dom.py` is a deterministic VM DOM harness; it does not render browser layout. Use the separate Chromium suite for actual browser verification:

```bash
python -m pip install -r requirements-dev.txt
python -m playwright install chromium
npm run build
npm run test:browser
```

The suite starts its own loopback server and verifies routes/product details at 390, 768, 1024 and 1440px in light/dark themes; samples and analysis modes; valid, empty, malformed, unreadable and oversized imports; adversarial column names; keyboard dialog handling; exports; and cleaning preview/restoration. It also fails on uncaught browser errors or failed requests.

For screenshot evidence, run `npm run serve`, then `python scripts/screenshots/audit_ui.py --label after`. Generated evidence is saved in `artifacts/qa/` and is not committed. See `PRODUCT_AUDIT.md` for verified outcomes and coverage limitations. These checks do not certify WCAG compliance or cross-browser support.
