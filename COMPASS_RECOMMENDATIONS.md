# DataSense Compass — Deterministic Application Recommendation Rules

## 1. Multi-Step Ordered Routing
Compass evaluates dataset readiness, primary variable role family, and pairwise relationship diagnostics to generate an ordered sequence of DataSense Studio tools:

1. **DataMend Lab (`01 Prepare`) — Prioritized as Step 1 whenever `status === 'CLEANING_REQUIRED'`**:
   - Triggered by `-999` sentinels, unit-contaminated numbers, malformed dates, duplicate keys, or category casing conflicts.
2. **QuartetLab (`03 Investigate`) — Structural & Non-Linear Diagnostic**:
   - Triggered when non-linear curvature is detected ($\eta^2_{\text{bins}} - R^2 \ge 0.22$) or when 1.5×IQR outliers occur alongside numerical associations.
3. **ForecastLab (`05 Forecast`) — Chronological & Time-Series Modeling**:
   - Triggered when the primary variable is `date`/`datetime` or when temporal series associations exist. Warns if timestamp cadence gaps require regularization first.
4. **ResampleLab (`04 Infer`) — Non-Parametric Bootstrap & Permutation Inference**:
   - Triggered for group differences ($\eta^2$) or skewed/outlier-present numerical associations.
5. **VisualGrammar (`02 Visualize`) — Multivariate Grammar-of-Graphics Encoding**:
   - Triggered to map top-ranked numerical and categorical variables across X, Y, color, and small-multiple facets.
