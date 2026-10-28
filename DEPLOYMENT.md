# GitHub Pages Deployment & Root Portfolio Protection Guide

## 1. Protecting `https://rkohnmn.github.io/`
The repository `rkohnmn/rkohnmn.github.io` currently hosts a personal portfolio at the root domain (`https://rkohnmn.github.io/`). To protect the root portfolio while deploying DataSense Studio:

1. **Recommended Subpath Deployment (`/datasense-studio/`)**:
   - Create or push to the repository `rkohnmn/datasense-studio`.
   - Enable GitHub Pages via **Settings → Pages → Source: GitHub Actions**.
   - The included `.github/workflows/deploy.yml` runs `npm run build` and `npm test`, then uploads only the built `dist/` folder to `https://rkohnmn.github.io/datasense-studio/` (with Compass at `https://rkohnmn.github.io/datasense-studio/compass/`).
2. **Optional Root Domain Migration (`/`)**:
   - If you later choose to promote DataSense Studio to the root domain (`https://rkohnmn.github.io/`), update `"publicBasePath": "/"` in `src/config/deployment.json` (or set `PUBLIC_BASE_PATH=/` in `.github/workflows/deploy.yml`).
