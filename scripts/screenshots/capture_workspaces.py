#!/usr/bin/env python3
"""
Portable workspace screenshot generator for DataSense Studio.
Uses relative repository paths (zero hardcoded container paths).
"""
from pathlib import Path
from PIL import Image

REPO_ROOT = Path(__file__).resolve().parents[2]
SCREENSHOTS_DIR = REPO_ROOT / "public" / "screenshots"


def main():
    SCREENSHOTS_DIR.mkdir(parents=True, exist_ok=True)
    for webp in SCREENSHOTS_DIR.glob("*.webp"):
        png = webp.with_suffix(".png")
        if not png.exists() or png.stat().st_mtime < webp.stat().st_mtime:
            im = Image.open(webp)
            im.save(png, "PNG")
    webp_files = sorted(SCREENSHOTS_DIR.glob("*.webp"))
    png_files = sorted(SCREENSHOTS_DIR.glob("*.png"))
    print(f"[capture_workspaces] Verified {len(webp_files)} WebP and {len(png_files)} PNG workspace captures in {SCREENSHOTS_DIR.relative_to(REPO_ROOT)}")


if __name__ == "__main__":
    main()
