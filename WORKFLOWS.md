# Cross-Application Workflows & Data Handoff

DataSense Studio laboratories are federated, standalone browser applications. They do not silently transmit private user datasets over a network or claim unverified automatic cross-tab injection. Instead, multi-tool workflows use explicit, verifiable file exports:

1. **Data Preparation to Perceptual Visualization (`WF · 01`)**: `DataMend Lab` (clean UTF-8 CSV + JSON recipe) → `VisualGrammar` (Cleveland–McGill chart studio).
2. **Data Preparation to Computational Inference (`WF · 02`)**: `DataMend Lab` (deduplicated unit-level CSV) → `ResampleLab` (bootstrap CI & permutation tests).
3. **Regression Diagnostics to Resampling Inference (`WF · 03`)**: `QuartetLab` (bivariate CSV export after Cook's D / Q-Q inspection) → `ResampleLab` (nonparametric bootstrap slope interval).
4. **Time-Series Preparation to Forecasting (`WF · 04`)**: `DataMend Lab` (ISO-8601 chronologically regularized CSV) → `ForecastLab` (STL decomposition, rolling-origin CV, ETS/SARIMA prediction fans).
5. **Forecasting Output to Publication Graphics (`WF · 05`)**: `ForecastLab` (forecast horizon CSV with 80%/95% bounds) → `VisualGrammar` (OKLCH publication styling & 15-point audit).
