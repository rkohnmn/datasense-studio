# DataSense Compass — Statistical & Mathematical Methods

## 1. Semantic Variable Type Inference (13 Types)
`DataSenseCompassEngine.inferVariableProfile()` inspects every column and classifies it into one of 13 semantic types:
`continuous_numeric`, `discrete_numeric`, `count`, `binary_categorical`, `nominal_categorical`, `ordinal_categorical`, `date`, `datetime`, `duration`, `cyclic_temporal`, `identifier`, `text`, and `unknown_ambiguous`.
- **Leading-Zero Protection**: Strings matching `/^0\d+$/` (e.g., `"00104"`) are preserved as `identifier` and never coerced to integers.
- **User Overrides**: Users can override any variable's semantic type in the Variable Browser, which immediately recalculates all univariate summaries, readiness gates, pairwise metrics, and recommendations.

## 2. Numerical × Numerical Pairs
- **Pearson Product-Moment Correlation ($r$)**:
  $$r = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \sum (y_i - \bar{y})^2}}$$
  When $S_{xx} = 0$ or $S_{yy} = 0$ (constant column) or $n < 3$, Compass explicitly returns `Undefined` (`null`) with a diagnostic reason—never substituting `0`.
- **Tie-Corrected Spearman Rank Correlation ($\rho$)**:
  Assigns average ranks to tied observations and computes exact Pearson correlation on the rank vectors (equivalent to the tie-adjusted denominator with $\sum(t_i^3 - t_i)/12$).
- **Non-Linear Curvature Detection**:
  Partitions the predictor domain into quantile bins and compares non-parametric binned $\eta^2_{\text{bins}} = \text{SS}_{\text{between-bins}} / \text{SS}_{\text{total}}$ against linear $R^2 = r^2$. When $\eta^2_{\text{bins}} - R^2 \ge 0.22$ and $\eta^2_{\text{bins}} \ge 0.35$, Compass flags strong non-linear curvature and routes to **QuartetLab**.

## 3. Numerical × Categorical Pairs
- **Descriptive Eta-Squared ($\eta^2$)**:
  $$\eta^2 = \frac{\text{SS}_{\text{between}}}{\text{SS}_{\text{total}}} = \frac{\sum_{g} n_g (\bar{y}_g - \bar{y})^2}{\sum_{i} (y_i - \bar{y})^2}$$
- **Point-Biserial Correlation ($r_{pb}$)**:
  Computed when $k = 2$ groups with explicit binary coding labels (`Group A = 1 vs Group B = 0`).

## 4. Categorical × Categorical Pairs
- **Contingency Table & Cramér's $V$**:
  Computes full $R \times C$ counts, row totals, column totals, grand total $n$, joint %, within-row %, and within-column %, plus Pearson $\chi^2$, Cramér's $V = \sqrt{\chi^2 / (n \cdot \min(R-1, C-1))}$, and Bergsma (2013) bias-corrected $\tilde{V}$. Flags sparse cells where expected frequency $E_{ij} < 5$.

## 5. Family-Separated Relationship Ranking
Compass never combines Pearson $r$, $\eta^2$, and Cramér's $V$ into a single synthetic score. Relationships are ranked strictly within their compatible statistical family.
