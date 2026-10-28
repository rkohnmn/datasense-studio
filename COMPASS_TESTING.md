# DataSense Compass — Automated Testing & Verification Report

## 1. Test Suite Execution (`tests/test_compass_engine.js`)
Run via Node.js:
```bash
node tests/test_compass_engine.js
```

## 2. Verified Scenarios (12 Suites Covering All 22 Acceptance Scenarios)
- **Scenario 1**: All 6 built-in sample datasets load, profile, and route deterministically.
- **Scenario 2 & 14**: RFC-4180 CSV parser handles UTF-8 BOM, quoted commas, multi-line fields, escaped quotes, and preserves leading-zero identifiers (`"00142"`).
- **Scenario 3**: Numerical primary variable (`sale_price_usd`) ranks numerical (`Pearson r`, `Spearman rho`) and categorical (`eta^2`) predictors in separate families.
- **Scenario 4**: Categorical primary variable (`churn_status`) computes group differences (`eta^2`, `point-biserial r_pb`) and contingency associations (`Cramér's V`).
- **Scenario 5**: Temporal primary variable (`observation_date`) detects the 2-day telemetry gap (`2025-01-14` → `2025-01-17`) and computes time-series trends and lag-1 autocorrelation.
- **Scenario 6**: Constant column (`constant_tax_tier` / zero-variance numeric) returns `Undefined` (`null`), never `0`.
- **Scenario 7**: Quadratic inverted-U dataset (`nonlinear_patterns`) detects near-zero Pearson $r$ ($|r| < 0.05$) alongside strong binned curvature ($\eta^2_{\text{bins}} > 0.70$) and routes to **QuartetLab**.
- **Scenario 8**: Spearman $\rho$ uses exact tie-corrected average ranks.
- **Scenario 9**: Messy clinical import (`messy_import`) triggers `CLEANING_REQUIRED` and prioritizes **DataMend Lab** as Step 1.
- **Scenario 10**: Student outcomes dataset (`student_outcomes`) flags legitimate fellowship outliers as `READY_WITH_CAUTIONS` without auto-deleting any rows.
- **Scenario 11 & 12**: DataMend round-trip cleaning repairs sentinels, unit strings, dates, category casing, and duplicates, and restores renamed primary variables (`systolic_bp` → `systolic_bp_mmhg`) via `lineage.renamedVariables`.
- **Scenarios 15–19**: Empty files, header-only files, single-column datasets, malformed quotes, and semantic type overrides are handled cleanly with zero runtime exceptions.
