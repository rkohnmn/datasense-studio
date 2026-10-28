# Architecture & Build Pipeline Specification

## 1. Single Authoritative Source of Truth
All website pages and bundles are compiled from `src/` (`src/styles/main.css`, `src/templates/body.html`, `src/scripts/app.js`, `src/config/products/registry.json`, `src/config/deployment.json`) and `compass/compass_engine.js` via `scripts/asset-optimization/build_static.py`.

- **Zero Competing Copies**: Stale duplicate HTML files have been eliminated. `scripts/asset-optimization/build_static.py` outputs `dist/index.html` (~81 KB) and `dist/compass/index.html` (~81 KB) alongside external cached assets in `dist/assets/`.
- **Zero Hardcoded Paths**: All scripts resolve paths relative to `Path(__file__).resolve().parents[2]`, enforced automatically by `tests/unit/test_registry_and_links.py`.

## 2. External Asset Separation (`dist/assets/`)
- `dist/assets/styles.css` (~69 KB): Complete editorial light/dark CSS system.
- `dist/assets/compass_engine.js` (~127 KB): Pure-JavaScript statistical profiling, RFC-4180 CSV parser, readiness gate, and routing engine.
- `dist/assets/app.js` (~173 KB): Interactive 5-stage hero sandboxes, Designeer micro-instruments, global search, and Compass UI controller.
- `dist/assets/screenshots/*.webp`: Optimized high-DPI WebP captures loaded externally with `loading="lazy"` on below-the-fold showcases.

## 3. Single-File Canvas Bundle Mode
When invoked with `--single-file-out <path>`, `build_static.py` compiles the exact same source files into a self-contained single-file HTML bundle with inlined styles, scripts, and WebP data URIs for standalone sandbox previewing.
