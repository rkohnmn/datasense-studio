#!/usr/bin/env python3
"""
Portable Static Site & Single-File Bundle Builder for DataSense Studio.
Zero hardcoded machine/container paths — resolves all inputs relative to REPO_ROOT.

Outputs:
1. Modular production static site in `dist/` (and synchronized root `index.html` + `compass/index.html`):
   - dist/index.html (~82 KB, external cached CSS, JS, and WebP/PNG screenshots)
   - dist/compass/index.html (~82 KB, boots directly into DataSense Compass)
   - dist/404.html (custom 404 listing all ecosystem endpoints)
   - dist/robots.txt (SEO crawler instructions pointing to sitemap.xml)
   - dist/sitemap.xml (Google SEO index for hub, compass, and 5 laboratories)
   - dist/site.webmanifest (PWA / mobile installability)
   - dist/assets/styles.css
   - dist/assets/compass_engine.js
   - dist/assets/app.js
   - dist/assets/screenshots/*.webp & *.png
   - dist/.nojekyll
2. Optional single-file self-contained HTML bundle via `--single-file-out <path>` for Canvas preview.
"""
import argparse
import base64
import json
import os
import shutil
from pathlib import Path

try:
    from PIL import Image
    HAS_PIL = True
except ImportError:
    HAS_PIL = False

REPO_ROOT = Path(__file__).resolve().parents[2]
SRC_DIR = REPO_ROOT / "src"
PUBLIC_SCREENSHOTS = REPO_ROOT / "public" / "screenshots"
COMPASS_ENGINE_PATH = REPO_ROOT / "compass" / "compass_engine.js"
DIST_DIR = REPO_ROOT / "dist"

ROBOTS_TXT_CONTENT = """User-agent: *
Allow: /
Sitemap: https://rkohnmn.github.io/datasense-studio/sitemap.xml
"""

SITEMAP_XML_CONTENT = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rkohnmn.github.io/datasense-studio/</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://rkohnmn.github.io/datasense-studio/compass/</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://rkohnmn.github.io/datamend-lab/</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rkohnmn.github.io/visualgrammar/</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rkohnmn.github.io/quartetlab/</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rkohnmn.github.io/resamplelab/</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rkohnmn.github.io/forecastlab/</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
"""

SITE_WEBMANIFEST_CONTENT = json.dumps({
    "name": "DataSense Studio",
    "short_name": "DataSense",
    "description": "Unified Browser-Native Statistical Instrument Ecosystem & Compass",
    "start_url": "/datasense-studio/",
    "display": "standalone",
    "background_color": "#F6F4EE",
    "theme_color": "#F6F4EE",
    "icons": [
        {
            "src": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230D1014'/%3E%3Cpath d='M7 22 L13 14 L18 18 L25 9' stroke='%2310B981' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='25' cy='9' r='2.5' fill='%23D9381E'/%3E%3C/svg%3E",
            "sizes": "any",
            "type": "image/svg+xml"
        }
    ]
}, indent=2)


def load_json(path: Path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def build_head_html(
    title: str,
    canonical_url: str,
    description: str,
    css_href: str = None,
    inline_css: str = None,
    manifest_href: str = "site.webmanifest",
) -> str:
    style_block = (
        f'  <link rel="stylesheet" href="{css_href}">'
        if css_href
        else f"  <style>\n{inline_css}\n  </style>"
    )

    schema_graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://rkohnmn.github.io/datasense-studio/#website",
                "name": "DataSense Studio",
                "url": "https://rkohnmn.github.io/datasense-studio/",
                "description": "Unified browser-native statistical instrument ecosystem and intelligent discovery hub.",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://rkohnmn.github.io/datasense-studio/#apps",
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://rkohnmn.github.io/datasense-studio/#app-studio",
                "name": "DataSense Studio",
                "applicationCategory": "ScientificApplication",
                "operatingSystem": "Web Browser",
                "url": "https://rkohnmn.github.io/datasense-studio/",
                "description": "Unified suite of five browser-based statistical and data-analysis laboratories with DataSense Compass intelligent dataset profiling and routing.",
                "author": {
                    "@type": "Person",
                    "name": "rkohnmn"
                },
                "hasPart": [
                    {
                        "@type": "SoftwareApplication",
                        "name": "DataMend Lab",
                        "url": "https://rkohnmn.github.io/datamend-lab/",
                        "description": "01 · Prepare — Audit hygiene, parse formats, impute sentinels, and export clean data."
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": "VisualGrammar",
                        "url": "https://rkohnmn.github.io/visualgrammar/",
                        "description": "02 · Visualize — Grammar of Graphics exploratory canvas with interactive encodings."
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": "QuartetLab",
                        "url": "https://rkohnmn.github.io/quartetlab/",
                        "description": "03 · Investigate — Anscombe quartet, Simpson's paradox, and bivariate diagnostics."
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": "ResampleLab",
                        "url": "https://rkohnmn.github.io/resamplelab/",
                        "description": "04 · Infer — Bootstrap confidence intervals and permutation inference."
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": "ForecastLab",
                        "url": "https://rkohnmn.github.io/forecastlab/",
                        "description": "05 · Forecast — STL decomposition, seasonality modeling, and horizon forecasting."
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://rkohnmn.github.io/datasense-studio/#app-compass",
                "name": "DataSense Compass",
                "applicationCategory": "ScientificApplication",
                "operatingSystem": "Web Browser",
                "url": "https://rkohnmn.github.io/datasense-studio/compass/",
                "description": "Intelligent browser-native dataset profiler, readiness gate, relationship explorer, and ecosystem router.",
                "isPartOf": {
                    "@id": "https://rkohnmn.github.io/datasense-studio/#website"
                }
            },
            {
                "@type": "ItemList",
                "@id": "https://rkohnmn.github.io/datasense-studio/#laboratories",
                "name": "DataSense Statistical Laboratories",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "DataMend Lab",
                        "url": "https://rkohnmn.github.io/datamend-lab/",
                        "description": "Audit hygiene, parse formats, impute sentinels, and export clean data."
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "VisualGrammar",
                        "url": "https://rkohnmn.github.io/visualgrammar/",
                        "description": "Grammar of Graphics exploratory canvas with interactive encodings."
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "QuartetLab",
                        "url": "https://rkohnmn.github.io/quartetlab/",
                        "description": "Anscombe quartet, Simpson's paradox, and bivariate diagnostics."
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "ResampleLab",
                        "url": "https://rkohnmn.github.io/resamplelab/",
                        "description": "Bootstrap confidence intervals and permutation inference."
                    },
                    {
                        "@type": "ListItem",
                        "position": 5,
                        "name": "ForecastLab",
                        "url": "https://rkohnmn.github.io/forecastlab/",
                        "description": "STL decomposition, seasonality modeling, and horizon forecasting."
                    }
                ]
            }
        ]
    }
    schema_json_text = json.dumps(schema_graph, indent=2)

    return f"""<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content="{description}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="googlebot" content="index, follow" />
  <meta name="author" content="rkohnmn — DataSense Studio" />
  <meta name="keywords" content="DataSense Studio, DataSense Compass, statistical software, browser data analysis, DataMend Lab, VisualGrammar, QuartetLab, ResampleLab, ForecastLab, Anscombe quartet, bootstrap confidence intervals, STL decomposition, exploratory data analysis" />
  <meta name="theme-color" content="#F6F4EE" />
  <link rel="canonical" href="{canonical_url}" />
  <link rel="manifest" href="{manifest_href}" />

  <!-- Open Graph / Facebook -->
  <meta property="og:site_name" content="DataSense Studio" />
  <meta property="og:title" content="{title}" />
  <meta property="og:description" content="{description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{canonical_url}" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:image" content="https://rkohnmn.github.io/datasense-studio/assets/screenshots/quartetlab.png" />
  <meta property="og:image:width" content="1800" />
  <meta property="og:image:height" content="1125" />
  <meta property="og:image:alt" content="DataSense Studio — Statistical Instrument Ecosystem Workspace" />

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{title}" />
  <meta name="twitter:description" content="{description}" />
  <meta name="twitter:image" content="https://rkohnmn.github.io/datasense-studio/assets/screenshots/quartetlab.png" />

  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230D1014'/%3E%3Cpath d='M7 22 L13 14 L18 18 L25 9' stroke='%2310B981' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='25' cy='9' r='2.5' fill='%23D9381E'/%3E%3C/svg%3E" />

  <script type="application/ld+json">
{schema_json_text}
  </script>

  <script>
    (function() {{
      if (window.navigator && window.navigator.webdriver) return;
      var l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap";
      document.head.appendChild(l);
    }})();
  </script>
{style_block}
</head>
"""


def build_404_html(base_path: str) -> str:
    return f"""<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 — Page Not Found · DataSense Studio</title>
  <meta name="description" content="Page not found in the DataSense Studio statistical instrument ecosystem. Explore our live laboratories and intelligent compass." />
  <meta name="robots" content="noindex, follow" />
  <meta name="theme-color" content="#F6F4EE" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230D1014'/%3E%3Cpath d='M7 22 L13 14 L18 18 L25 9' stroke='%2310B981' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='25' cy='9' r='2.5' fill='%23D9381E'/%3E%3C/svg%3E" />
  <style>
    :root {{
      --bg: #F6F4EE;
      --card-bg: #FFFFFF;
      --text-main: #1C1E21;
      --text-muted: #5A6069;
      --accent-copper: #D9381E;
      --accent-teal: #0D6954;
      --border-color: #E2DFD6;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      background: var(--bg);
      color: var(--text-main);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 32px 20px;
    }}
    .container {{
      max-width: 720px;
      width: 100%;
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
    }}
    .badge {{
      display: inline-block;
      font-family: monospace;
      font-size: 13px;
      font-weight: 600;
      color: var(--accent-copper);
      background: #FDF1ED;
      padding: 4px 10px;
      border-radius: 4px;
      margin-bottom: 16px;
    }}
    h1 {{
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
      color: #0D1014;
    }}
    p.lead {{
      font-size: 16px;
      line-height: 1.6;
      color: var(--text-muted);
      margin-bottom: 28px;
    }}
    .dir-heading {{
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      font-weight: 600;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border-color);
    }}
    ul.directory {{
      list-style: none;
      display: grid;
      grid-gap: 12px;
      margin-bottom: 32px;
    }}
    ul.directory li a {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background: #FAF8F4;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      color: #0D1014;
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
      transition: all 0.15s ease;
    }}
    ul.directory li a:hover {{
      background: #FFFFFF;
      border-color: var(--accent-copper);
      transform: translateY(-1px);
    }}
    ul.directory li a .badge-tag {{
      font-size: 12px;
      color: var(--text-muted);
      font-family: monospace;
    }}
    .cta-row {{
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }}
    .btn {{
      display: inline-flex;
      align-items: center;
      padding: 10px 20px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      transition: opacity 0.15s ease;
    }}
    .btn-primary {{
      background: #0D1014;
      color: #FFFFFF;
    }}
    .btn-secondary {{
      background: #FAF8F4;
      color: #0D1014;
      border: 1px solid var(--border-color);
    }}
    .btn:hover {{
      opacity: 0.9;
    }}
  </style>
</head>
<body>
  <div class="container">
    <span class="badge">HTTP 404 — ROUTE NOT FOUND</span>
    <h1>The requested page does not exist</h1>
    <p class="lead">The endpoint you attempted to reach is not part of DataSense Studio. Explore the authoritative live ecosystem of browser-native statistical laboratories below:</p>

    <div class="dir-heading">Authoritative Ecosystem Directory</div>
    <ul class="directory">
      <li>
        <a href="https://rkohnmn.github.io/">
          <span><strong>Portfolio Root</strong> — Robert Kohn Personal Portfolio</span>
          <span class="badge-tag">rkohnmn.github.io</span>
        </a>
      </li>
      <li>
        <a href="https://rkohnmn.github.io/datasense-studio/">
          <span><strong>DataSense Studio</strong> — Flagship Hub &amp; Instrument Ecosystem</span>
          <span class="badge-tag">datasense-studio</span>
        </a>
      </li>
      <li>
        <a href="https://rkohnmn.github.io/datasense-studio/compass/">
          <span><strong>DataSense Compass</strong> — Dataset Profiler, Quality Gate &amp; Router</span>
          <span class="badge-tag">datasense-studio/compass</span>
        </a>
      </li>
      <li>
        <a href="https://rkohnmn.github.io/datamend-lab/">
          <span><strong>01 · DataMend Lab</strong> — Hygiene, Schema Audit, Sentinel Repair</span>
          <span class="badge-tag">datamend-lab</span>
        </a>
      </li>
      <li>
        <a href="https://rkohnmn.github.io/visualgrammar/">
          <span><strong>02 · VisualGrammar</strong> — Interactive Grammar of Graphics Canvas</span>
          <span class="badge-tag">visualgrammar</span>
        </a>
      </li>
      <li>
        <a href="https://rkohnmn.github.io/quartetlab/">
          <span><strong>03 · QuartetLab</strong> — Anscombe Diagnostics &amp; Simpson's Paradox</span>
          <span class="badge-tag">quartetlab</span>
        </a>
      </li>
      <li>
        <a href="https://rkohnmn.github.io/resamplelab/">
          <span><strong>04 · ResampleLab</strong> — Bootstrap Intervals &amp; Permutation Tests</span>
          <span class="badge-tag">resamplelab</span>
        </a>
      </li>
      <li>
        <a href="https://rkohnmn.github.io/forecastlab/">
          <span><strong>05 · ForecastLab</strong> — STL Decomposition &amp; Horizon Projections</span>
          <span class="badge-tag">forecastlab</span>
        </a>
      </li>
    </ul>

    <div class="cta-row">
      <a href="https://rkohnmn.github.io/datasense-studio/" class="btn btn-primary">Open DataSense Studio</a>
      <a href="https://rkohnmn.github.io/datasense-studio/compass/" class="btn btn-secondary">Launch Compass Engine</a>
    </div>
  </div>
</body>
</html>
"""


def main():
    parser = argparse.ArgumentParser(description="Build DataSense Studio static distribution.")
    parser.add_argument("--base-path", default=None, help="Override public base path (default from src/config/deployment.json)")
    parser.add_argument("--single-file-out", default=None, help="Optional path to emit self-contained single-file HTML bundle")
    args = parser.parse_args()

    deploy_cfg = load_json(SRC_DIR / "config" / "deployment.json")
    base_path = args.base_path or os.environ.get("PUBLIC_BASE_PATH") or deploy_cfg.get("publicBasePath", "/datasense-studio/")
    if not base_path.startswith("/"):
        base_path = "/" + base_path
    if not base_path.endswith("/"):
        base_path = base_path + "/"

    canonical_origin = deploy_cfg.get("canonicalOrigin", "https://rkohnmn.github.io").rstrip("/")
    canonical_home = f"{canonical_origin}{base_path}"
    canonical_compass = f"{canonical_origin}{base_path}compass/"

    css_text = (SRC_DIR / "styles" / "main.css").read_text(encoding="utf-8")
    body_template = (SRC_DIR / "templates" / "body.html").read_text(encoding="utf-8")
    compass_engine_js = COMPASS_ENGINE_PATH.read_text(encoding="utf-8")
    app_js = (SRC_DIR / "scripts" / "app.js").read_text(encoding="utf-8")

    # Ensure PNG captures exist in public/screenshots from WebP originals
    PUBLIC_SCREENSHOTS.mkdir(parents=True, exist_ok=True)
    if HAS_PIL:
        for webp in PUBLIC_SCREENSHOTS.glob("*.webp"):
            png = webp.with_suffix(".png")
            if not png.exists() or png.stat().st_mtime < webp.stat().st_mtime:
                im = Image.open(webp)
                im.save(png, "PNG")

    # Prepare dist directory
    if DIST_DIR.exists():
        shutil.rmtree(DIST_DIR)
    (DIST_DIR / "assets" / "screenshots").mkdir(parents=True, exist_ok=True)
    (DIST_DIR / "compass").mkdir(parents=True, exist_ok=True)

    # Copy screenshots (*.webp and *.png) to dist/assets/screenshots
    for f in sorted(PUBLIC_SCREENSHOTS.glob("*")):
        if f.is_file():
            shutil.copy2(f, DIST_DIR / "assets" / "screenshots" / f.name)

    # Write external CSS & JS assets
    (DIST_DIR / "assets" / "styles.css").write_text(css_text, encoding="utf-8")
    (DIST_DIR / "assets" / "compass_engine.js").write_text(compass_engine_js, encoding="utf-8")

    # Build app.js with runtime SCREENSHOT_DATA_URIS resolver that uses relative asset prefix
    app_external_header = """// External asset path resolver for DataSense Studio static build
const ASSET_PREFIX = window.DATASENSE_ASSET_PREFIX || "assets/";
const SCREENSHOTS = {
  "datamend-lab": ASSET_PREFIX + "screenshots/datamend-lab.webp",
  "visualgrammar": ASSET_PREFIX + "screenshots/visualgrammar.webp",
  "quartetlab": ASSET_PREFIX + "screenshots/quartetlab.webp",
  "resamplelab": ASSET_PREFIX + "screenshots/resamplelab.webp",
  "forecastlab": ASSET_PREFIX + "screenshots/forecastlab.webp"
};
const SCREENSHOT_DATA_URIS = SCREENSHOTS;
"""
    (DIST_DIR / "assets" / "app.js").write_text(app_external_header + "\n" + app_js, encoding="utf-8")

    # 1. Generate dist/index.html
    head_home = build_head_html(
        title="DataSense Studio — A Clearer Way to Work with Data",
        canonical_url=canonical_home,
        description="DataSense Studio connects five browser-native statistical laboratories—DataMend Lab, VisualGrammar, QuartetLab, ResampleLab, and ForecastLab—with DataSense Compass for local, zero-upload data discovery and analysis.",
        css_href="assets/styles.css",
        manifest_href="site.webmanifest",
    )
    body_home = body_template.replace("{{ATELIER_PHOTO_SRC}}", "assets/screenshots/atelier-prism-caliper.webp")
    footer_scripts_home = """
  <script>
    window.DATASENSE_PUBLIC_BASE_PATH = __BASE_PATH__;
    window.DATASENSE_ASSET_PREFIX = "assets/";
    window.DATASENSE_INITIAL_VIEW = "home";
  </script>
  <script src="assets/compass_engine.js"></script>
  <script src="assets/app.js"></script>
</body>
</html>
""".replace("__BASE_PATH__", json.dumps(base_path))

    dist_index_html = head_home + "<body>\n" + body_home + footer_scripts_home
    (DIST_DIR / "index.html").write_text(dist_index_html, encoding="utf-8")

    # 2. Generate dist/compass/index.html
    head_compass = build_head_html(
        title="DataSense Compass — Intelligent Data Discovery, Quality Gating & Routing",
        canonical_url=canonical_compass,
        description="DataSense Compass profiles your dataset client-side, gates data readiness, surfaces family-separated relationships, and routes you to the exact statistical laboratory.",
        css_href="../assets/styles.css",
        manifest_href="../site.webmanifest",
    )
    body_compass = body_template.replace("{{ATELIER_PHOTO_SRC}}", "../assets/screenshots/atelier-prism-caliper.webp")
    footer_scripts_compass = """
  <script>
    window.DATASENSE_PUBLIC_BASE_PATH = __BASE_PATH__;
    window.DATASENSE_ASSET_PREFIX = "../assets/";
    window.DATASENSE_INITIAL_VIEW = "compass";
  </script>
  <script src="../assets/compass_engine.js"></script>
  <script src="../assets/app.js"></script>
</body>
</html>
""".replace("__BASE_PATH__", json.dumps(base_path))

    dist_compass_html = head_compass + "<body>\n" + body_compass + footer_scripts_compass
    (DIST_DIR / "compass" / "index.html").write_text(dist_compass_html, encoding="utf-8")

    # 3. Generate crawl & indexing artifacts (robots.txt, sitemap.xml, site.webmanifest, .nojekyll)
    (DIST_DIR / "robots.txt").write_text(ROBOTS_TXT_CONTENT, encoding="utf-8")
    (DIST_DIR / "sitemap.xml").write_text(SITEMAP_XML_CONTENT, encoding="utf-8")
    (DIST_DIR / "site.webmanifest").write_text(SITE_WEBMANIFEST_CONTENT, encoding="utf-8")
    (DIST_DIR / ".nojekyll").write_text("", encoding="utf-8")

    # Also keep public/ updated
    (REPO_ROOT / "public" / "robots.txt").write_text(ROBOTS_TXT_CONTENT, encoding="utf-8")
    (REPO_ROOT / "public" / "sitemap.xml").write_text(SITEMAP_XML_CONTENT, encoding="utf-8")
    (REPO_ROOT / "public" / "site.webmanifest").write_text(SITE_WEBMANIFEST_CONTENT, encoding="utf-8")

    # 4. Generate dist/404.html
    page_404_html = build_404_html(base_path)
    (DIST_DIR / "404.html").write_text(page_404_html, encoding="utf-8")

    # 5. Synchronize root index.html, compass/index.html, 404.html, robots.txt, sitemap.xml, site.webmanifest, and assets/
    root_assets = REPO_ROOT / "assets"
    if root_assets.exists():
        shutil.rmtree(root_assets)
    shutil.copytree(DIST_DIR / "assets", root_assets)
    (REPO_ROOT / "index.html").write_text(dist_index_html, encoding="utf-8")
    (REPO_ROOT / "compass" / "index.html").write_text(dist_compass_html, encoding="utf-8")
    (REPO_ROOT / "404.html").write_text(page_404_html, encoding="utf-8")
    (REPO_ROOT / "robots.txt").write_text(ROBOTS_TXT_CONTENT, encoding="utf-8")
    (REPO_ROOT / "sitemap.xml").write_text(SITEMAP_XML_CONTENT, encoding="utf-8")
    (REPO_ROOT / "site.webmanifest").write_text(SITE_WEBMANIFEST_CONTENT, encoding="utf-8")
    (REPO_ROOT / ".nojekyll").write_text("", encoding="utf-8")

    # 6. Optional self-contained single-file bundle for Canvas preview
    if args.single_file_out:
        out_path = Path(args.single_file_out)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        shot_map = {}
        for app_id in ["datamend-lab", "visualgrammar", "quartetlab", "resamplelab", "forecastlab"]:
            webp_bytes = (PUBLIC_SCREENSHOTS / f"{app_id}.webp").read_bytes()
            shot_map[app_id] = "data:image/webp;base64," + base64.b64encode(webp_bytes).decode("ascii")

        atelier_bytes = (PUBLIC_SCREENSHOTS / "atelier-prism-caliper.webp").read_bytes()
        atelier_uri = "data:image/webp;base64," + base64.b64encode(atelier_bytes).decode("ascii")

        head_single = build_head_html(
            title="DataSense Studio — A Clearer Way to Work with Data",
            canonical_url=canonical_home,
            description="DataSense Studio connects five browser-native statistical laboratories—DataMend Lab, VisualGrammar, QuartetLab, ResampleLab, and ForecastLab—with DataSense Compass for local, zero-upload data discovery and analysis.",
            inline_css=css_text,
            manifest_href="site.webmanifest",
        )
        body_single = body_template.replace("{{ATELIER_PHOTO_SRC}}", atelier_uri)
        shot_entries = ",\n".join(f'      "{k}": "{v}"' for k, v in shot_map.items())
        single_script = f"""
  <script>
    window.DATASENSE_PUBLIC_BASE_PATH = {json.dumps(base_path)};
    const SCREENSHOTS = {{
{shot_entries}
    }};
    const SCREENSHOT_DATA_URIS = SCREENSHOTS;
{compass_engine_js}
{app_js}
  </script>
</body>
</html>
"""
        full_single_html = head_single + "<body>\n" + body_single + single_script
        out_path.write_text(full_single_html, encoding="utf-8")
        print(f"[build_static] Wrote self-contained single-file bundle: {out_path.name} ({len(full_single_html):,} bytes)")

    print(
        f"[build_static] Built modular dist/index.html ({len(dist_index_html):,} bytes), "
        f"dist/compass/index.html ({len(dist_compass_html):,} bytes), dist/404.html ({len(page_404_html):,} bytes), "
        f"dist/robots.txt, dist/sitemap.xml, dist/site.webmanifest, and external assets in dist/assets/ "
        f"(basePath={base_path})"
    )


if __name__ == "__main__":
    main()
