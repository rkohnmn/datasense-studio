# Navigation Contract

## 1. Hub-to-Application Links
- Every product card, showcase, directory row, and detail page exposes two primary external actions:
  1. **Primary Action (`Open App`)**: Points to the exact `https://rkohnmn.github.io/<app>/` URL. Never points to a GitHub repository.
  2. **Secondary Action (`View Source`)**: Points to the exact `https://github.com/rkohnmn/<app>` repository URL.

## 2. Internal Hub Routes
- `#/home` — Flagship Homepage
- `#/apps` — Complete Applications Directory with search and stage filters
- `#/product-<id>` — Dedicated Product Detail Page for each of the 5 laboratories
- `#/workflows` — Cross-Application Workflows & File Transfer Guide
- `#/finder` — Full-page Find Your Tool Recommender
- `#/learn` — Cross-Application Statistical & Visualization Atlas
- `#/methods` — Shared Statistical, Perceptual, and Data Standards
- `#/about` — Studio Mission & Open-Source Architecture
