# Web Performance Engineering Report

## 1. HTML Payload Reduction (1.38 MB → 81.9 KB)
By separating inline base64 images, stylesheets, and scripts into external cached assets (`dist/assets/`), the initial HTML document size dropped by **94.1%**:

| Artifact | Before Refactor | After Modular Build (`dist/`) | Improvement |
| :--- | :--- | :--- | :--- |
| `dist/index.html` | 1,370,079 bytes (1.37 MB) | **81,897 bytes (80.0 KB)** | **-94.0% HTML payload** |
| `dist/compass/index.html` | 1,370,093 bytes (1.37 MB) | **81,983 bytes (80.1 KB)** | **-94.0% HTML payload** |
| `dist/assets/styles.css` | Inlined | **69,112 bytes** (browser-cached) | Shared across `/` and `/compass/` |
| `dist/assets/compass_engine.js` | Inlined | **127,225 bytes** (browser-cached) | Shared across `/` and `/compass/` |
| `dist/assets/app.js` | Inlined | **174,310 bytes** (browser-cached) | Shared across `/` and `/compass/` |
| `dist/assets/screenshots/*.webp` | Inlined Base64 (+33% overhead) | **Binary `.webp` files** (`loading="lazy"`) | Eliminates Base64 bloat & defers offscreen decoding |
