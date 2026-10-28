# DESIGN.md — DataSense Studio Locked Visual System

## Color Tokens & Measured Contrast (Apple HIG & Impeccable Verified)
- `--bg-canvas`: `#F6F4EE` (Archival Warm Paper) / `#0B0E13` (Obsidian Dark Mode)
- `--bg-surface`: `#FFFFFF` / `#121720`
- `--ink-primary`: `#141619` (16.4:1 WCAG AAA contrast on `#F6F4EE`)
- `--ink-secondary`: `#454B57` (7.8:1 WCAG AAA contrast on `#F6F4EE`)
- `--inst-bg`: `#0D1014` (`#F3F4F6` ink yields 17.2:1 contrast)
- `--accent-emerald`: `#0F6E56` (Primary action & validated state)
- `--accent-emerald-bright`: `#34D399` (10.1:1 contrast on `#0D1014`)
- `--accent-vermilion`: `#D9381E` (Cook's Distance outlier & sentinel warning)

## Typography
- Display: `Instrument Serif` (400 upright; no italic cliché in hero headlines)
- UI & Editorial Body: `Plus Jakarta Sans`, `Albert Sans`, system-ui
- Quantitative & Code Telemetry: `JetBrains Mono` with `font-variant-numeric: tabular-nums`

## Shape & Motion
- Concentric Corner Radii: `--radius-lg: 16px` outer containers, `--radius-md: 10px` inner panels, `--radius-sm: 6px` controls
- Motion: Damped spring `cubic-bezier(0.22, 1, 0.36, 1)`; honors `prefers-reduced-motion: reduce` and `prefers-reduced-transparency: reduce`
- Liquid Glass Restraint: `backdrop-filter: blur(14px)` restricted strictly to floating navigation header and modal backdrops
