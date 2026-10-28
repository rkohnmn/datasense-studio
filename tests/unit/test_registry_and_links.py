#!/usr/bin/env python3
"""
Unit, Registry, Link Integrity, Asset Separation & Build Portability Tests
Verifies:
- Exactly 5 products in centralized registry with all required fields
- Exact 10 authoritative URLs (5 live websites + 5 GitHub repositories)
- Configurable deployment base path protecting root portfolio by default
- Zero hardcoded machine/container paths (e.g., container mounts) in any script or source file
- Clean modular static build in dist/ (lightweight HTML < 180 KB, external CSS, JS, and WebP assets)
"""
import json
import os
import unittest
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
REGISTRY_PATH = REPO_ROOT / "src/config/products/registry.json"
WORKFLOWS_PATH = REPO_ROOT / "src/config/workflows/workflows.json"
TASKS_PATH = REPO_ROOT / "src/lib/recommendations/tasks.json"
DEPLOY_CFG_PATH = REPO_ROOT / "src/config/deployment.json"

EXPECTED_URLS = {
    "quartetlab": (
        "https://rkohnmn.github.io/quartetlab/",
        "https://github.com/rkohnmn/quartetlab",
    ),
    "resamplelab": (
        "https://rkohnmn.github.io/resamplelab/",
        "https://github.com/rkohnmn/resamplelab",
    ),
    "forecastlab": (
        "https://rkohnmn.github.io/forecastlab/",
        "https://github.com/rkohnmn/forecastlab",
    ),
    "datamend-lab": (
        "https://rkohnmn.github.io/datamend-lab/",
        "https://github.com/rkohnmn/datamend-lab",
    ),
    "visualgrammar": (
        "https://rkohnmn.github.io/visualgrammar/",
        "https://github.com/rkohnmn/visualgrammar",
    ),
}


class TestProductRegistryAndBuildArchitecture(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.products = json.loads(REGISTRY_PATH.read_text(encoding="utf-8"))
        cls.workflows = json.loads(WORKFLOWS_PATH.read_text(encoding="utf-8"))
        cls.tasks = json.loads(TASKS_PATH.read_text(encoding="utf-8"))
        cls.deploy_cfg = json.loads(DEPLOY_CFG_PATH.read_text(encoding="utf-8"))

    def test_exact_five_products_and_unique_ids(self):
        self.assertEqual(len(self.products), 5, "Registry must contain exactly 5 initial products.")
        ids = [p["id"] for p in self.products]
        self.assertEqual(len(ids), len(set(ids)), "Product IDs must be unique.")
        self.assertEqual(set(ids), set(EXPECTED_URLS.keys()))

    def test_exact_ten_authoritative_urls(self):
        for p in self.products:
            pid = p["id"]
            expected_live, expected_repo = EXPECTED_URLS[pid]
            self.assertEqual(p["liveWebsiteUrl"], expected_live, f"Mismatch on liveWebsiteUrl for {pid}")
            self.assertEqual(p["repositoryUrl"], expected_repo, f"Mismatch on repositoryUrl for {pid}")
            self.assertTrue(p["liveWebsiteUrl"].startswith("https://rkohnmn.github.io/"))
            self.assertTrue(p["repositoryUrl"].startswith("https://github.com/rkohnmn/"))

    def test_required_registry_properties(self):
        required_keys = {
            "id", "displayName", "shortDescription", "detailedDescription",
            "category", "primaryUseCases", "intendedAudience", "liveWebsiteUrl",
            "repositoryUrl", "screenshots", "logoMonogram", "relatedTools",
            "relevantWorkflows", "featureHighlights", "navigationKeywords"
        }
        for p in self.products:
            missing = required_keys - set(p.keys())
            self.assertFalse(missing, f"Product {p['id']} missing keys: {missing}")

    def test_workflows_and_tasks_reference_valid_products(self):
        valid_ids = {p["id"] for p in self.products}
        for w in self.workflows:
            for stage in w["stages"]:
                self.assertIn(stage["productId"], valid_ids)
        for t in self.tasks:
            self.assertIn(t["primaryProductId"], valid_ids)
            if "secondaryProductId" in t and t["secondaryProductId"]:
                self.assertIn(t["secondaryProductId"], valid_ids)

    def test_deployment_config_protects_root_portfolio(self):
        self.assertEqual(self.deploy_cfg["publicBasePath"], "/datasense-studio/")
        self.assertTrue(self.deploy_cfg["protectRootPortfolio"])

    def test_no_hardcoded_machine_paths_in_scripts_or_src(self):
        forbidden = "/" + "working_dir" + "/"
        for folder in ["scripts", "src", "compass", "tests"]:
            for p in (REPO_ROOT / folder).rglob("*"):
                if p.is_file() and p.suffix in {".py", ".js", ".json", ".html", ".css", ".yml"}:
                    text = p.read_text(encoding="utf-8", errors="ignore")
                    self.assertNotIn(forbidden, text, f"Forbidden hardcoded path found in {p.relative_to(REPO_ROOT)}")

    def test_modular_dist_build_and_external_assets(self):
        dist_index = REPO_ROOT / "dist" / "index.html"
        dist_compass = REPO_ROOT / "dist" / "compass" / "index.html"
        self.assertTrue(dist_index.exists(), "dist/index.html must exist after build")
        self.assertTrue(dist_compass.exists(), "dist/compass/index.html must exist after build")
        self.assertLess(dist_index.stat().st_size, 180_000, "dist/index.html should be lightweight (<180 KB) with external assets")
        self.assertLess(dist_compass.stat().st_size, 180_000, "dist/compass/index.html should be lightweight (<180 KB)")
        for asset in [
            "dist/assets/styles.css",
            "dist/assets/compass_engine.js",
            "dist/assets/app.js",
            "dist/assets/screenshots/datamend-lab.webp",
            "dist/assets/screenshots/visualgrammar.webp",
            "dist/assets/screenshots/quartetlab.webp",
            "dist/assets/screenshots/resamplelab.webp",
            "dist/assets/screenshots/forecastlab.webp",
            "dist/assets/screenshots/atelier-prism-caliper.webp",
            "dist/assets/screenshots/quartetlab.png",
        ]:
            self.assertTrue((REPO_ROOT / asset).exists(), f"Missing external build asset: {asset}")

    def test_seo_artifacts_and_meta_tags(self):
        robots_txt = REPO_ROOT / "dist" / "robots.txt"
        sitemap_xml = REPO_ROOT / "dist" / "sitemap.xml"
        manifest = REPO_ROOT / "dist" / "site.webmanifest"
        page_404 = REPO_ROOT / "dist" / "404.html"

        self.assertTrue(robots_txt.exists(), "dist/robots.txt must exist")
        self.assertTrue(sitemap_xml.exists(), "dist/sitemap.xml must exist")
        self.assertTrue(manifest.exists(), "dist/site.webmanifest must exist")
        self.assertTrue(page_404.exists(), "dist/404.html must exist")

        robots_content = robots_txt.read_text(encoding="utf-8")
        self.assertIn("User-agent: *", robots_content)
        self.assertIn("Allow: /", robots_content)
        self.assertIn("Sitemap: https://rkohnmn.github.io/datasense-studio/sitemap.xml", robots_content)

        sitemap_content = sitemap_xml.read_text(encoding="utf-8")
        self.assertIn("https://rkohnmn.github.io/datasense-studio/", sitemap_content)
        self.assertIn("https://rkohnmn.github.io/datasense-studio/compass/", sitemap_content)
        for pid in EXPECTED_URLS.keys():
            self.assertIn(f"https://rkohnmn.github.io/{pid}/", sitemap_content)

        dist_index = (REPO_ROOT / "dist" / "index.html").read_text(encoding="utf-8")
        dist_compass = (REPO_ROOT / "dist" / "compass" / "index.html").read_text(encoding="utf-8")

        for html_text, canonical_expected in [
            (dist_index, "https://rkohnmn.github.io/datasense-studio/"),
            (dist_compass, "https://rkohnmn.github.io/datasense-studio/compass/"),
        ]:
            self.assertIn('<meta name="robots" content="index, follow', html_text)
            self.assertIn('<meta name="googlebot" content="index, follow"', html_text)
            self.assertIn('<meta name="author" content="rkohnmn — DataSense Studio"', html_text)
            self.assertIn('<meta name="keywords" content="DataSense Studio, DataSense Compass', html_text)
            self.assertIn(f'<link rel="canonical" href="{canonical_expected}" />', html_text)
            self.assertIn('property="og:image"', html_text)
            self.assertIn('name="twitter:card"', html_text)
            self.assertIn('https://rkohnmn.github.io/datasense-studio/assets/screenshots/quartetlab.png', html_text)
            self.assertIn('@graph', html_text)
            self.assertIn('"WebSite"', html_text)
            self.assertIn('"SoftwareApplication"', html_text)
            self.assertIn('"ItemList"', html_text)


if __name__ == "__main__":
    unittest.main(verbosity=2)
