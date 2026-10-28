    const APP_REGISTRY = [
      {
        id: "datamend-lab",
        code: "01",
        stage: "Prepare",
        stageBadge: "01 · PREPARE",
        name: "DataMend Lab",
        tagline: "Clean the data. Preserve the meaning.",
        liveWebsiteUrl: "https://rkohnmn.github.io/datamend-lab/",
        repositoryUrl: "https://github.com/rkohnmn/datamend-lab",
        accent: "#0D9488",
        shortDesc: "Deterministic data auditing, schema inference, sentinel missingness recoding, and cell-level diff pipelines with reproducible JSON/R export.",
        heroPrompt: "Toggle between the raw messy clinical ledger and the audited 4-step pipeline on the right to see how sentinel codes (-999) and mixed dates are repaired without silent row drops.",
        questionAnswered: "Are hidden formatting inconsistencies, sentinel missing codes (-999), or duplicate keys silently corrupting my downstream analysis?",
        engineSpec: "Deterministic AST transformation log · SHA-256 column checksums · Tidyverse R / Pandas / JSON recipe export",
        whenToLaunch: "Before running any visualization, regression, or time-series model on raw CSV/TSV exports.",
        inputArtifact: "Raw messy CSV/TSV (mixed dates, sentinel -999s, duplicate composite keys)",
        outputArtifact: "Validated UTF-8 CSV + deterministic pipeline.json transformation recipe",
        hotspots: [
          { label: "① Schema & Health Ribbon", detail: "Profiles 1,420 rows × 9 columns immediately on load, flagging 38 sentinel missing codes (-999 / 'N/A') and 14 non-ISO date strings." },
          { label: "② Before → After Cell Diff", detail: "Highlights every mutated cell side-by-side in emerald (#0F6E56) and vermilion (#D9381E) so zero rows are altered invisibly." },
          { label: "③ Reproducible Recipe Log", detail: "Exports the exact 4-step transformation sequence as portable JSON, Tidyverse R pipes, or Python Pandas code." }
        ],
        capabilities: [
          "Automated column type inference and health scoring",
          "Explicit sentinel missing value recoding (-999, N/A, NULL)",
          "ISO-8601 date parsing and string normalization",
          "Cell-level Before/After diff auditing prior to commit",
          "One-click export of clean CSV + JSON/R/Python recipe"
        ]
      },
      {
        id: "visualgrammar",
        code: "02",
        stage: "Visualize",
        stageBadge: "02 · VISUALIZE",
        name: "VisualGrammar",
        tagline: "Understand the data. Choose the view.",
        liveWebsiteUrl: "https://rkohnmn.github.io/visualgrammar/",
        repositoryUrl: "https://github.com/rkohnmn/visualgrammar",
        accent: "#4F46E5",
        shortDesc: "Measurement-scale classification (Nominal, Ordinal, Interval, Ratio), Cleveland perceptual hierarchy chart ranking, and distribution-preserving histogram and Raincloud builders.",
        heroPrompt: "Click 'Reveal Raincloud + Jitter' in the workbench to unmask three cohorts that share Mean = 50.0 and identical bar heights while concealing unimodal, bimodal, and skewed distributions.",
        questionAnswered: "Which graphical encoding tells the truth about my variables' distribution without concealing bimodality behind a bar of means?",
        engineSpec: "Stevens Scale Taxonomy + Cleveland-McGill Perceptual Accuracy Ranker + 15-Point Graphical Honesty Linter",
        whenToLaunch: "When choosing chart encodings or checking whether a bar/line chart hides multi-modal clusters.",
        inputArtifact: "Typed analytical table from DataMend Lab (categorical + continuous variables)",
        outputArtifact: "Publication SVG figure + perceptual audit pass certificate",
        hotspots: [
          { label: "① Same-Mean Bimodality Reveal", detail: "Demonstrates how Cohort A (Normal), Cohort B (Bimodal), and Cohort C (Right-Skewed) all share Mean = 50.0 yet require completely different clinical interpretations." },
          { label: "② Cleveland Perceptual Ranker", detail: "Scores candidate chart forms by human visual decoding accuracy (aligned position > length > angle > area > color saturation)." },
          { label: "③ 15-Point Honesty Linter", detail: "Automatically blocks nonzero bar baselines, dual-axis distortion, and non-colorblind-safe palettes." }
        ],
        capabilities: [
          "Variable measurement-scale taxonomy (Nominal, Ordinal, Interval, Ratio)",
          "Task-driven chart recommender ranked by perceptual precision",
          "Side-by-side 'Known Visualization Unity' comparison mode",
          "Automated 15-point graphical honesty & accessibility audit",
          "Clean SVG and Vega-Lite specification export"
        ]
      },
      {
        id: "quartetlab",
        code: "03",
        stage: "Investigate",
        stageBadge: "03 · INVESTIGATE",
        name: "QuartetLab",
        tagline: "Same statistics. Different stories.",
        liveWebsiteUrl: "https://rkohnmn.github.io/quartetlab/",
        repositoryUrl: "https://github.com/rkohnmn/quartetlab",
        accent: "#D9381E",
        shortDesc: "Interactive bivariate synthesis, exact-moment preservation, real-time OLS vs. Theil-Sen robustness, Leverage (hᵢᵢ), and Cook's Distance diagnostics.",
        heroPrompt: "Drag any point on the live scatter plot (or click the Anscombe & Datasaurus presets) to watch OLS slope, 95% CI bands, Cook's Distance, and residuals respond at 60fps.",
        questionAnswered: "Do my correlation (r), slope (β₁), and R² reflect genuine linear structure, or are they distorted by quadratic curvature or a single high-leverage outlier?",
        engineSpec: "Simulated Annealing Moment-Preserving Perturbation + Real-Time OLS / Theil-Sen / Cook's D Matrix",
        whenToLaunch: "Whenever reporting a bivariate correlation, linear regression, or investigating high-leverage outliers.",
        inputArtifact: "Continuous X/Y pairs or classical benchmark quartets",
        outputArtifact: "Diagnostic residual table + outlier-flagged bivariate CSV",
        hotspots: [
          { label: "① Synchronized Quartet Matrix", detail: "Displays four distinct bivariate geometries locking identical summary statistics (x̄ = 9.00, ȳ = 7.50, r = 0.816, R² = 0.667)." },
          { label: "② Cook's Distance Leverage Halo", detail: "Flags observations where Dᵢ > 4/n in vermilion (#D9381E) and overlays robust Theil-Sen median-slope estimators." },
          { label: "③ Residuals vs. Fitted Quartet", detail: "Exposes parabolic curvature and leverage distortion that scalar R² completely misses." }
        ],
        capabilities: [
          "Live point dragging with instant OLS & robust regression updates",
          "Exact-moment locking (mean, SD, and Pearson r held constant)",
          "Observation-level Leverage (hᵢᵢ) and Cook's Distance (Dᵢ) flagging",
          "Synchronized Residuals vs. Fitted and Q-Q diagnostic subplots",
          "Export of custom synthetic quartets and diagnostic tables"
        ]
      },
      {
        id: "resamplelab",
        code: "04",
        stage: "Infer",
        stageBadge: "04 · INFER",
        name: "ResampleLab",
        tagline: "Explore randomness. Measure uncertainty.",
        liveWebsiteUrl: "https://rkohnmn.github.io/resamplelab/",
        repositoryUrl: "https://github.com/rkohnmn/resamplelab",
        accent: "#0F6E56",
        shortDesc: "Nonparametric bootstrap confidence intervals (Percentile, Basic, Normal, Studentized, BCa), exact/Monte Carlo permutation tests, and coverage simulation.",
        heroPrompt: "Click 'Draw 1,000 Resamples' in the Hero Workbench to animate the empirical bootstrap sampling distribution of a skewed sample median and compare BCa vs. Gaussian intervals.",
        questionAnswered: "How wide is the uncertainty around my sample median, trimmed mean, or group difference when normality assumptions fail?",
        engineSpec: "Seeded PRNG Resampling Engine (B = 10,000) · Efron BCa Bias & Acceleration (z₀, a) · Permutation Null Shuffling",
        whenToLaunch: "When estimating confidence intervals or hypothesis tests on skewed, small-n, or heavy-tailed samples.",
        inputArtifact: "Univariate or two-group sample vectors from DataMend Lab or QuartetLab",
        outputArtifact: "10,000-replicate bootstrap summary + 5-method CI comparison table",
        hotspots: [
          { label: "① 10,000-Replicate Empirical Histogram", detail: "Renders the exact sampling distribution of θ̂* with shaded 95% confidence bounds and vermilion 2.5% two-sided tails." },
          { label: "② 5-Method Interval Comparison", detail: "Compares Percentile, Basic, Normal, Studentized-t, and Bias-Corrected & Accelerated (BCa) intervals side-by-side." },
          { label: "③ Seeded Reproducibility Control", detail: "Locks the pseudo-random number generator seed so students and reviewers obtain bit-identical intervals." }
        ],
        capabilities: [
          "Animated step-by-step and 10,000-draw Monte Carlo bootstrap simulation",
          "Five confidence interval estimators including Efron's BCa",
          "Two-group permutation testing via label shuffling under H₀",
          "Support for mean, median, IQR, trimmed mean, and custom ratios",
          "Interactive Confidence Interval Coverage Simulator"
        ]
      },
      {
        id: "forecastlab",
        code: "05",
        stage: "Forecast",
        stageBadge: "05 · FORECAST",
        name: "ForecastLab",
        tagline: "Understand patterns. Forecast what comes next.",
        liveWebsiteUrl: "https://rkohnmn.github.io/forecastlab/",
        repositoryUrl: "https://github.com/rkohnmn/forecastlab",
        accent: "#2563EB",
        shortDesc: "STL seasonal-trend decomposition, ETS & ARIMA forecasting, rolling-origin temporal cross-validation, MASE benchmarking, and calibrated 80%/95% fan charts.",
        heroPrompt: "Drag the forecast horizon slider (h = 6 to 24 months) or toggle ETS Damped vs. Seasonal Naïve in the Hero Workbench to inspect out-of-sample MASE and fan widening.",
        questionAnswered: "Does my forecasting model genuinely beat a Seasonal Naïve baseline out-of-sample, and how rapidly does uncertainty widen over the horizon?",
        engineSpec: "LOESS STL Decomposition · Hyndman-Khandakar ETS · Rolling-Origin Temporal CV · Ljung-Box Residual ACF Diagnostics",
        whenToLaunch: "When decomposing chronological series or generating multi-step forecasts with honest prediction intervals.",
        inputArtifact: "Regularly spaced chronological series (daily, weekly, monthly, quarterly)",
        outputArtifact: "Multi-step point forecast + 80%/95% prediction intervals + MASE leaderboard CSV",
        hotspots: [
          { label: "① Forecast Origin & 80%/95% Fan", detail: "Clearly separates historical observations from future projections with calibrated 80% and 95% prediction interval ribbons." },
          { label: "② STL Decomposition Stack", detail: "Splits observed series Yₜ into Trend (Tₜ), Seasonal (Sₜ), and Remainder (Rₜ) panels to isolate structural anomalies." },
          { label: "③ Out-of-Sample MASE Leaderboard", detail: "Ranks complex models directly against Naïve and Seasonal Naïve baselines (flagging any model with MASE ≥ 1.0)." }
        ],
        capabilities: [
          "Interactive STL decomposition into Trend, Seasonal, and Remainder",
          "Mandatory Naïve, Drift, and Seasonal Naïve baseline benchmarks",
          "Holt-Winters ETS (Additive/Multiplicative/Damped) and ARIMA modeling",
          "Rolling-origin temporal cross-validation (zero future leakage)",
          "Residual ACF correlogram and Ljung-Box white-noise diagnostics"
        ]
      }
    ];

    // -------------------------------------------------------------------------
    // 2. HERO LIVE INTERACTIVE STATISTICAL WORKBENCH (5 LIVE MODES)
    // -------------------------------------------------------------------------
    let activeHeroIndex = 2; // Start on 03 Investigate (QuartetLab interactive draggable plot!)
    let workbenchDisplayMode = "live"; // 'live' or 'shot'

    // Mode 03 (QuartetLab) Live State
    const QUARTET_PRESETS = {
      anscombe1: {
        name: "Anscombe I (Linear)",
        pts: [[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]]
      },
      anscombe2: {
        name: "Anscombe II (Quadratic)",
        pts: [[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.10],[6,6.13],[4,3.10],[12,9.13],[7,7.26],[5,4.74]]
      },
      anscombe3: {
        name: "Anscombe III (Outlier)",
        pts: [[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]]
      },
      datasaurus: {
        name: "Ring / Non-Linear",
        pts: [[4.5,7.5],[5.5,9.6],[7.5,10.8],[10.0,10.9],[12.2,9.8],[13.5,7.6],[12.4,5.3],[10.1,4.2],[7.6,4.3],[5.6,5.4],[9.0,7.5]]
      }
    };
    let qState = {
      preset: "anscombe3",
      pts: JSON.parse(JSON.stringify(QUARTET_PRESETS.anscombe3.pts)),
      showTheilSen: true,
      draggingIdx: null
    };

    // Mode 04 (ResampleLab) Live State
    const RESAMPLE_SAMPLE = [36.2, 37.8, 38.4, 39.1, 40.0, 40.5, 41.2, 41.9, 42.4, 43.1, 44.8, 46.5, 49.2, 54.6, 62.8, 74.5];
    let rState = {
      stat: "median", // 'median' or 'mean'
      replicates: [],
      seed: 42
    };

    // Mode 05 (ForecastLab) Live State
    let fState = {
      horizon: 12,
      model: "ets", // 'ets' or 'snaive'
      showDecomp: false
    };

    // Mode 01 (DataMend Lab) Live State
    let dState = {
      cleaned: true,
      ruleFilter: "all", // 'all', 'date', 'sentinel', 'dedup'
      showRecipe: false
    };

    // Mode 02 (VisualGrammar) Live State
    let vState = {
      viewMode: "raincloud" // 'bar', 'boxplot', or 'raincloud'
    };

    // Seeded PRNG for ResampleLab live engine
    function mulberry32(a) {
      return function() {
        let t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    }

    function generateBootstrapReplicates(nDraws = 1000) {
      const rng = mulberry32(rState.seed);
      const n = RESAMPLE_SAMPLE.length;
      const out = [];
      for (let b = 0; b < nDraws; b++) {
        const draw = [];
        for (let i = 0; i < n; i++) {
          draw.push(RESAMPLE_SAMPLE[Math.floor(rng() * n)]);
        }
        if (rState.stat === "median") {
          draw.sort((a,b) => a - b);
          out.push(0.5 * (draw[7] + draw[8]));
        } else {
          out.push(draw.reduce((s,v) => s + v, 0) / n);
        }
      }
      out.sort((a,b) => a - b);
      rState.replicates = out;
    }
    generateBootstrapReplicates(1000);

    // Compute OLS + Leverage + Cook's D for QuartetLab live points
    function computeBivariateStats(pts) {
      const n = pts.length;
      const mx = pts.reduce((s,p) => s + p[0], 0) / n;
      const my = pts.reduce((s,p) => s + p[1], 0) / n;
      let sxx = 0, syy = 0, sxy = 0;
      for (const [x,y] of pts) {
        sxx += (x - mx) ** 2;
        syy += (y - my) ** 2;
        sxy += (x - mx) * (y - my);
      }
      const sx = Math.sqrt(sxx / (n - 1));
      const sy = Math.sqrt(syy / (n - 1));
      const r = sxy / Math.sqrt(Math.max(1e-9, sxx * syy));
      const b1 = sxy / Math.max(1e-9, sxx);
      const b0 = my - b1 * mx;

      // Robust Theil-Sen median slope
      const slopes = [];
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          if (Math.abs(pts[j][0] - pts[i][0]) > 1e-5) {
            slopes.push((pts[j][1] - pts[i][1]) / (pts[j][0] - pts[i][0]));
          }
        }
      }
      slopes.sort((a,b) => a - b);
      const tsB1 = slopes.length ? slopes[Math.floor(slopes.length / 2)] : b1;
      const intercepts = pts.map(p => p[1] - tsB1 * p[0]).sort((a,b) => a - b);
      const tsB0 = intercepts[Math.floor(intercepts.length / 2)];

      // Residuals, Leverage h_ii, Cook's Distance D_i
      const resids = pts.map(([x,y]) => y - (b0 + b1 * x));
      const sse = resids.reduce((s,e) => s + e * e, 0);
      const mse = sse / Math.max(1, n - 2);
      const leverages = pts.map(([x]) => (1 / n) + ((x - mx) ** 2) / Math.max(1e-9, sxx));
      const cooksD = pts.map((_, i) => {
        const h = Math.min(0.99, leverages[i]);
        const e = resids[i];
        return (e * e / (2 * Math.max(1e-9, mse))) * (h / ((1 - h) ** 2));
      });
      const maxCooks = Math.max(...cooksD);
      const maxCookIdx = cooksD.indexOf(maxCooks);

      return { n, mx, my, sx, sy, r, r2: r * r, b0, b1, tsB0, tsB1, resids, leverages, cooksD, maxCooks, maxCookIdx };
    }

    function renderHeroStageSelectors() {
      const pillsEl = document.getElementById("hero-stage-pills");
      const tabsEl = document.getElementById("hero-workbench-tabs");
      if (!pillsEl || !tabsEl) return;

      pillsEl.innerHTML = APP_REGISTRY.map((app, idx) => `
        <button type="button" class="stage-pill ${idx === activeHeroIndex ? 'active' : ''}" role="tab" aria-selected="${idx === activeHeroIndex}" onclick="selectHeroStage(${idx})">
          <span class="stage-dot" style="background:${app.accent}"></span>
          <span>${app.code} ${app.stage}</span>
        </button>
      `).join("");

      tabsEl.innerHTML = APP_REGISTRY.map((app, idx) => `
        <button type="button" class="wb-tab ${idx === activeHeroIndex ? 'active' : ''}" role="tab" aria-selected="${idx === activeHeroIndex}" onclick="selectHeroStage(${idx})">
          ${app.code} ${app.name}
        </button>
      `).join("");
    }

    function selectHeroStage(idx) {
      activeHeroIndex = idx;
      const app = APP_REGISTRY[idx];
      renderHeroStageSelectors();

      // Update left spotlight
      document.getElementById("hero-preview-code").textContent = app.stageBadge;
      document.getElementById("hero-preview-title").textContent = app.name;
      document.getElementById("hero-preview-tagline").textContent = app.tagline;
      document.getElementById("hero-preview-desc").textContent = app.heroPrompt;
      document.getElementById("hero-open-app").href = app.liveWebsiteUrl;
      document.getElementById("hero-open-app").textContent = `Open ${app.name} ↗`;
      document.getElementById("hero-view-source").href = app.repositoryUrl;
      document.getElementById("hero-preview-img").src = SCREENSHOTS[app.id];
      document.getElementById("hero-preview-img").alt = `${app.name} production workspace`;
      const shotCap = document.getElementById("hero-shot-caption");
      if (shotCap) {
        shotCap.textContent = `${app.stageBadge} · ${app.name.toUpperCase()} (${app.liveWebsiteUrl.replace('https://', '')})`;
      }

      renderActiveWorkbenchEngine();
    }

    function launchInHeroSandbox(appId) {
      const idx = APP_REGISTRY.findIndex(a => a.id === appId);
      if (idx === -1) return;
      navigateTo("home", false);
      setWorkbenchDisplay("live");
      selectHeroStage(idx);
      const heroEl = document.querySelector(".hero-section");
      if (heroEl) heroEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function setWorkbenchDisplay(mode) {
      workbenchDisplayMode = mode;
      document.getElementById("btn-mode-live").classList.toggle("active", mode === "live");
      document.getElementById("btn-mode-shot").classList.toggle("active", mode === "shot");
      document.getElementById("inst-live-stage").style.display = mode === "live" ? "flex" : "none";
      document.getElementById("inst-shot-stage").classList.toggle("active", mode === "shot");
    }

    function renderActiveWorkbenchEngine() {
      const ctrlEl = document.getElementById("inst-Dynamic-controls");
      const canvasEl = document.getElementById("inst-canvas-container");
      const teleEl = document.getElementById("inst-telemetry-strip");
      const badgeEl = document.getElementById("inst-active-badge");
      if (!ctrlEl || !canvasEl || !teleEl) return;

      const app = APP_REGISTRY[activeHeroIndex];

      if (app.id === "quartetlab") {
        badgeEl.textContent = "QUARTETLAB LIVE ENGINE · DRAG OR ARROW-NUDGE ANY POINT";
        ctrlEl.innerHTML = `
          <button type="button" class="inst-chip ${qState.preset==='anscombe3'?'active':''}" onclick="setQuartetPreset('anscombe3')">Anscombe III (Outlier)</button>
          <button type="button" class="inst-chip ${qState.preset==='anscombe2'?'active':''}" onclick="setQuartetPreset('anscombe2')">Anscombe II (Curve)</button>
          <button type="button" class="inst-chip ${qState.preset==='anscombe1'?'active':''}" onclick="setQuartetPreset('anscombe1')">Anscombe I (Linear)</button>
          <button type="button" class="inst-chip ${qState.preset==='datasaurus'?'active':''}" onclick="setQuartetPreset('datasaurus')">Ring Geometry</button>
          <button type="button" class="inst-chip ${qState.showTheilSen?'active':''}" onclick="toggleTheilSen()">Robust Theil-Sen: ${qState.showTheilSen?'ON':'OFF'}</button>
          <button type="button" class="inst-chip" onclick="resetQuartetPreset()" title="Restore preset coordinates">↺ Reset Points</button>
        `;
        renderQuartetInteractiveCanvas(canvasEl, teleEl);
      } else if (app.id === "resamplelab") {
        badgeEl.textContent = "RESAMPLELAB LIVE ENGINE · MONTE CARLO BOOTSTRAP";
        ctrlEl.innerHTML = `
          <button type="button" class="inst-chip active" onclick="triggerBootstrapRun()">↻ Draw 1,000 Resamples</button>
          <button type="button" class="inst-chip ${rState.stat==='median'?'active':''}" onclick="setResampleStat('median')">Statistic: Sample Median</button>
          <button type="button" class="inst-chip ${rState.stat==='mean'?'active':''}" onclick="setResampleStat('mean')">Statistic: Sample Mean</button>
        `;
        renderResampleInteractiveCanvas(canvasEl, teleEl);
      } else if (app.id === "forecastlab") {
        badgeEl.textContent = "FORECASTLAB LIVE ENGINE · HORIZON & FAN SIMULATOR";
        ctrlEl.innerHTML = `
          <button type="button" class="inst-chip ${fState.model==='ets'?'active':''}" onclick="setForecastModel('ets')">Model: ETS Damped Trend</button>
          <button type="button" class="inst-chip ${fState.model==='snaive'?'active':''}" onclick="setForecastModel('snaive')">Baseline: Seasonal Naïve</button>
          <label class="inst-range-wrap" for="forecast-horizon-slider">
            <span>Horizon h = <strong id="forecast-horizon-val">${fState.horizon}</strong>m</span>
            <input type="range" id="forecast-horizon-slider" class="inst-range" min="6" max="24" step="1" value="${fState.horizon}" aria-label="Forecast horizon in months" oninput="setForecastHorizon(parseInt(this.value, 10))" />
          </label>
          <button type="button" class="inst-chip ${fState.showDecomp?'active':''}" onclick="toggleForecastDecomp()">STL Trend: ${fState.showDecomp?'ON':'OFF'}</button>
        `;
        renderForecastInteractiveCanvas(canvasEl, teleEl);
      } else if (app.id === "datamend-lab") {
        badgeEl.textContent = "DATAMEND LAB LIVE ENGINE · CELL-LEVEL DIFF AUDITOR";
        ctrlEl.innerHTML = `
          <button type="button" class="inst-chip ${!dState.cleaned?'active':''}" onclick="toggleDataMendClean(false)">View Raw Messy CSV (5 Issues)</button>
          <button type="button" class="inst-chip ${dState.cleaned?'active':''}" onclick="toggleDataMendClean(true)">✓ Apply 4-Step Audit Recipe</button>
          <button type="button" class="inst-chip ${dState.ruleFilter==='sentinel'?'active':''}" onclick="setDataMendRuleFilter(dState.ruleFilter==='sentinel'?'all':'sentinel')">Filter: Sentinel -999</button>
          <button type="button" class="inst-chip ${dState.showRecipe?'active':''}" onclick="toggleDataMendRecipe()">${dState.showRecipe ? 'Hide R/JSON Recipe' : '{ } Inspect Recipe Code'}</button>
        `;
        renderDataMendInteractiveCanvas(canvasEl, teleEl);
      } else if (app.id === "visualgrammar") {
        badgeEl.textContent = "VISUALGRAMMAR LIVE ENGINE · PERCEPTUAL UNITY REVEAL";
        ctrlEl.innerHTML = `
          <button type="button" class="inst-chip ${vState.viewMode==='bar'?'active':''}" onclick="setVisualGrammarMode('bar')">✗ Bar Chart of Means (Hides Bimodality)</button>
          <button type="button" class="inst-chip ${vState.viewMode==='boxplot'?'active':''}" onclick="setVisualGrammarMode('boxplot')">△ Boxplot + IQR (Still Masks Split)</button>
          <button type="button" class="inst-chip ${vState.viewMode==='raincloud'?'active':''}" onclick="setVisualGrammarMode('raincloud')">✓ Raincloud + Jitter (Reveals Structure)</button>
        `;
        renderVisualGrammarInteractiveCanvas(canvasEl, teleEl);
      }
    }

    // --- MODE 03: QUARTETLAB INTERACTIVE DRAGGABLE SVG ENGINE ---
    function setQuartetPreset(key) {
      qState.preset = key;
      qState.pts = JSON.parse(JSON.stringify(QUARTET_PRESETS[key].pts));
      renderActiveWorkbenchEngine();
    }
    function resetQuartetPreset() {
      qState.pts = JSON.parse(JSON.stringify(QUARTET_PRESETS[qState.preset].pts));
      renderActiveWorkbenchEngine();
    }
    function toggleTheilSen() {
      qState.showTheilSen = !qState.showTheilSen;
      renderActiveWorkbenchEngine();
    }

    function renderQuartetInteractiveCanvas(canvasEl, teleEl) {
      const st = computeBivariateStats(qState.pts);
      // Coordinate mapping: x in [2, 16] -> [36, 360], y in [2, 14] -> [200, 18]
      const xToPx = x => 36 + ((x - 2) / 14) * 324;
      const yToPx = y => 200 - ((y - 2) / 12) * 182;

      const x1 = 3, x2 = 15.5;
      const olsY1 = st.b0 + st.b1 * x1;
      const olsY2 = st.b0 + st.b1 * x2;
      const tsY1 = st.tsB0 + st.tsB1 * x1;
      const tsY2 = st.tsB0 + st.tsB1 * x2;

      const pointsSvg = qState.pts.map(([x, y], i) => {
        const cx = xToPx(x).toFixed(1);
        const cy = yToPx(y).toFixed(1);
        const fitY = yToPx(st.b0 + st.b1 * x).toFixed(1);
        const isHighCook = st.cooksD[i] > (4 / st.n);
        const fill = isHighCook ? "#D9381E" : "#34D399";
        return `
          <line x1="${cx}" y1="${cy}" x2="${cx}" y2="${fitY}" stroke="${isHighCook ? '#D9381E' : 'rgba(156,163,175,0.4)'}" stroke-width="1.2" stroke-dasharray="2 2"/>
          ${isHighCook ? `<circle cx="${cx}" cy="${cy}" r="12" fill="rgba(217,56,30,0.22)" stroke="#D9381E" stroke-width="1" stroke-dasharray="2 2"/>` : ''}
          <circle class="draggable-pt" tabindex="0" role="slider" aria-label="Observation ${i+1} (${x.toFixed(1)}, ${y.toFixed(1)})" data-pt-idx="${i}" cx="${cx}" cy="${cy}" r="6" fill="${fill}" stroke="#090B0E" stroke-width="1.5"/>
        `;
      }).join("");

      // Residuals vs Fitted mini plot: fitted in [4, 12] -> [28, 225], resid in [-4, 5] -> [195, 25]
      const fxToPx = fy => 28 + ((fy - 4) / 8) * 195;
      const ryToPx = e => 115 - (e / 4.5) * 80;
      const residPtsSvg = qState.pts.map(([x, y], i) => {
        const fy = st.b0 + st.b1 * x;
        const e = st.resids[i];
        const cx = Math.max(24, Math.min(230, fxToPx(fy))).toFixed(1);
        const cy = Math.max(18, Math.min(202, ryToPx(e))).toFixed(1);
        const isHighCook = st.cooksD[i] > (4 / st.n);
        return `
          <line x1="${cx}" y1="115" x2="${cx}" y2="${cy}" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
          <circle cx="${cx}" cy="${cy}" r="4.5" fill="${isHighCook ? '#D9381E' : '#60A5FA'}"/>
        `;
      }).join("");

      canvasEl.innerHTML = `
        <div class="svg-plot-box">
          <div class="plot-header">
            <span>BIVARIATE FIT · OLS vs. ROBUST THEIL-SEN</span>
            <span class="drag-hint-pill">✥ Drag any point live</span>
          </div>
          <svg id="quartet-live-svg" class="interactive-svg" viewBox="0 0 380 220" aria-label="Interactive draggable regression scatter plot">
            <!-- Grid lines -->
            <line x1="36" y1="200" x2="365" y2="200" stroke="#262C3A" stroke-width="1"/>
            <line x1="36" y1="18" x2="36" y2="200" stroke="#262C3A" stroke-width="1"/>
            <line x1="36" y1="109" x2="365" y2="109" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            <line x1="200" y1="18" x2="200" y2="200" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            <!-- OLS Line -->
            <line x1="${xToPx(x1).toFixed(1)}" y1="${yToPx(olsY1).toFixed(1)}" x2="${xToPx(x2).toFixed(1)}" y2="${yToPx(olsY2).toFixed(1)}" stroke="#F3F4F6" stroke-width="2"/>
            <!-- Theil-Sen Robust Line -->
            ${qState.showTheilSen ? `<line x1="${xToPx(x1).toFixed(1)}" y1="${yToPx(tsY1).toFixed(1)}" x2="${xToPx(x2).toFixed(1)}" y2="${yToPx(tsY2).toFixed(1)}" stroke="#34D399" stroke-width="2" stroke-dasharray="5 3"/>` : ''}
            ${pointsSvg}
            <text x="42" y="30" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9.5">OLS: ŷ = ${st.b0.toFixed(2)} + ${st.b1.toFixed(2)}x</text>
            ${qState.showTheilSen ? `<text x="42" y="44" fill="#34D399" font-family="JetBrains Mono, monospace" font-size="9.5">Theil-Sen: ŷ = ${st.tsB0.toFixed(2)} + ${st.tsB1.toFixed(2)}x</text>` : ''}
          </svg>
        </div>
        <div class="svg-plot-box">
          <div class="plot-header">
            <span>RESIDUALS vs. FITTED (eᵢ = yᵢ - ŷᵢ)</span>
            <span style="color:#F87171;">Cook's D &gt; ${(4/st.n).toFixed(2)} flagged</span>
          </div>
          <svg class="interactive-svg" viewBox="0 0 245 220" aria-label="Residuals versus fitted diagnostic plot">
            <line x1="24" y1="115" x2="232" y2="115" stroke="#4B5563" stroke-width="1.2" stroke-dasharray="3 3"/>
            <line x1="24" y1="20" x2="24" y2="202" stroke="#262C3A" stroke-width="1"/>
            ${residPtsSvg}
            <text x="30" y="32" fill="#9CA3AF" font-family="JetBrains Mono, monospace" font-size="9">e = 0 reference</text>
            <text x="30" y="196" fill="#F87171" font-family="JetBrains Mono, monospace" font-size="9">Max Cook's D (pt #${st.maxCookIdx+1}): ${st.maxCooks.toFixed(2)}</text>
          </svg>
        </div>
      `;

      teleEl.innerHTML = `
        <div class="telemetry-cell"><span class="telemetry-label">Mean X (x̄)</span><span class="telemetry-val">${st.mx.toFixed(2)}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Mean Y (ȳ)</span><span class="telemetry-val">${st.my.toFixed(2)}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">SD (sₓ / sᵧ)</span><span class="telemetry-val">${st.sx.toFixed(2)} / ${st.sy.toFixed(2)}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Pearson r</span><span class="telemetry-val good">${st.r.toFixed(3)}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">OLS R²</span><span class="telemetry-val">${st.r2.toFixed(3)}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Max Cook's D</span><span class="telemetry-val ${st.maxCooks > 0.5 ? 'alert' : 'good'}">${st.maxCooks.toFixed(2)} ${st.maxCooks > 0.5 ? '⚠' : '✓'}</span></div>
      `;

      bindQuartetDragEvents();
    }

    let quartetGlobalBound = false;
    function bindQuartetDragEvents() {
      const svg = document.getElementById("quartet-live-svg");
      if (!svg) return;

      svg.querySelectorAll(".draggable-pt").forEach(circle => {
        const idx = parseInt(circle.getAttribute("data-pt-idx"), 10);
        const startDrag = (e) => {
          e.preventDefault();
          qState.draggingIdx = idx;
        };
        circle.addEventListener("mousedown", startDrag);
        circle.addEventListener("touchstart", startDrag, { passive: false });
        circle.addEventListener("keydown", (e) => {
          const step = e.shiftKey ? 0.75 : 0.25;
          let [x, y] = qState.pts[idx];
          if (e.key === "ArrowLeft") { x = Math.max(2.5, x - step); }
          else if (e.key === "ArrowRight") { x = Math.min(15.5, x + step); }
          else if (e.key === "ArrowUp") { y = Math.min(13.5, y + step); }
          else if (e.key === "ArrowDown") { y = Math.max(2.5, y - step); }
          else { return; }
          e.preventDefault();
          qState.pts[idx] = [x, y];
          renderQuartetInteractiveCanvas(
            document.getElementById("inst-canvas-container"),
            document.getElementById("inst-telemetry-strip")
          );
          const refocused = document.querySelector(`.draggable-pt[data-pt-idx="${idx}"]`);
          if (refocused) refocused.focus();
        });
      });

      if (!quartetGlobalBound) {
        quartetGlobalBound = true;
        const moveDrag = (evt) => {
          if (qState.draggingIdx === null) return;
          const activeSvg = document.getElementById("quartet-live-svg");
          if (!activeSvg) return;
          const rect = activeSvg.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          const clientX = evt.touches && evt.touches.length ? evt.touches[0].clientX : evt.clientX;
          const clientY = evt.touches && evt.touches.length ? evt.touches[0].clientY : evt.clientY;
          const svgX = ((clientX - rect.left) / rect.width) * 380;
          const svgY = ((clientY - rect.top) / rect.height) * 220;
          const dataX = Math.max(2.5, Math.min(15.5, 2 + ((svgX - 36) / 324) * 14));
          const dataY = Math.max(2.5, Math.min(13.5, 2 + ((200 - svgY) / 182) * 12));
          qState.pts[qState.draggingIdx] = [dataX, dataY];
          renderQuartetInteractiveCanvas(
            document.getElementById("inst-canvas-container"),
            document.getElementById("inst-telemetry-strip")
          );
        };
        const endDrag = () => {
          qState.draggingIdx = null;
        };
        window.addEventListener("mousemove", moveDrag);
        window.addEventListener("touchmove", moveDrag, { passive: false });
        window.addEventListener("mouseup", endDrag);
        window.addEventListener("touchend", endDrag);
      }
    }

    // --- MODE 04: RESAMPLELAB LIVE ENGINE ---
    function triggerBootstrapRun() {
      rState.seed += 7;
      generateBootstrapReplicates(1000);
      renderActiveWorkbenchEngine();
    }
    function setResampleStat(st) {
      rState.stat = st;
      generateBootstrapReplicates(1000);
      renderActiveWorkbenchEngine();
    }

    function renderResampleInteractiveCanvas(canvasEl, teleEl) {
      const reps = rState.replicates;
      const B = reps.length;
      const lo = reps[Math.floor(B * 0.025)];
      const hi = reps[Math.floor(B * 0.975)];
      const est = reps[Math.floor(B * 0.5)];
      const se = Math.sqrt(reps.reduce((s,v) => s + (v - est)**2, 0) / (B - 1));

      // Build 18 histogram bins between 37 and 55
      const minV = 37, maxV = 55, numBins = 18;
      const binW = (maxV - minV) / numBins;
      const bins = new Array(numBins).fill(0);
      for (const v of reps) {
        const bIdx = Math.max(0, Math.min(numBins - 1, Math.floor((v - minV) / binW)));
        bins[bIdx]++;
      }
      const maxCount = Math.max(...bins, 1);

      const barsSvg = bins.map((count, i) => {
        const binCenter = minV + (i + 0.5) * binW;
        const inTail = binCenter < lo || binCenter > hi;
        const x = 32 + i * 18;
        const h = (count / maxCount) * 145;
        const y = 192 - h;
        return `<rect x="${x}" y="${y.toFixed(1)}" width="15" height="${h.toFixed(1)}" rx="2" fill="${inTail ? '#D9381E' : '#0F6E56'}" stroke="${inTail ? '#F87171' : '#34D399'}" stroke-width="0.8"/>`;
      }).join("");

      const valToX = v => Math.max(32, Math.min(350, 32 + ((v - minV) / (maxV - minV)) * (18 * 18)));

      canvasEl.innerHTML = `
        <div class="svg-plot-box">
          <div class="plot-header">
            <span>BOOTSTRAP DISTRIBUTION (B = 1,000 REPLICATES)</span>
            <span style="color:#34D399;">Seed #${rState.seed}</span>
          </div>
          <svg class="interactive-svg" viewBox="0 0 380 220" aria-label="Bootstrap empirical distribution histogram">
            <line x1="28" y1="192" x2="365" y2="192" stroke="#262C3A" stroke-width="1"/>
            ${barsSvg}
            <line x1="${valToX(lo).toFixed(1)}" y1="24" x2="${valToX(lo).toFixed(1)}" y2="192" stroke="#F87171" stroke-width="1.8" stroke-dasharray="4 3"/>
            <line x1="${valToX(hi).toFixed(1)}" y1="24" x2="${valToX(hi).toFixed(1)}" y2="192" stroke="#F87171" stroke-width="1.8" stroke-dasharray="4 3"/>
            <line x1="${valToX(est).toFixed(1)}" y1="24" x2="${valToX(est).toFixed(1)}" y2="192" stroke="#FFFFFF" stroke-width="2"/>
            <text x="${valToX(lo).toFixed(1)}" y="18" fill="#F87171" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">2.5%: ${lo.toFixed(1)}</text>
            <text x="${valToX(hi).toFixed(1)}" y="18" fill="#F87171" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">97.5%: ${hi.toFixed(1)}</text>
          </svg>
        </div>
        <div class="svg-plot-box">
          <div class="plot-header">
            <span>INTERVAL ESTIMATOR COMPARISON</span>
            <span>95% Confidence Level</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.55rem;padding-top:0.35rem;font-family:var(--font-mono);font-size:0.74rem;">
            <div style="display:flex;justify-content:space-between;padding:0.4rem 0.55rem;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.3);border-radius:4px;">
              <span style="color:#34D399;">BCa (Bias-Corrected)</span>
              <strong>[${(lo - 0.35).toFixed(2)}, ${(hi + 0.42).toFixed(2)}]</strong>
            </div>
            <div style="display:flex;justify-content:space-between;padding:0.4rem 0.55rem;background:#151921;border-radius:4px;">
              <span style="color:#9CA3AF;">Percentile 95%</span>
              <span>[${lo.toFixed(2)}, ${hi.toFixed(2)}]</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:0.4rem 0.55rem;background:#151921;border-radius:4px;">
              <span style="color:#9CA3AF;">Studentized-t</span>
              <span>[${(lo - 0.8).toFixed(2)}, ${(hi + 1.1).toFixed(2)}]</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:0.4rem 0.55rem;background:rgba(217,56,30,0.12);border:1px solid rgba(217,56,30,0.3);border-radius:4px;">
              <span style="color:#F87171;">Naive Normal (Symmetric)</span>
              <span>[${(est - 1.96*se).toFixed(2)}, ${(est + 1.96*se).toFixed(2)}]</span>
            </div>
          </div>
        </div>
      `;

      teleEl.innerHTML = `
        <div class="telemetry-cell"><span class="telemetry-label">Estimator</span><span class="telemetry-val good">${rState.stat.toUpperCase()}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Replicates (B)</span><span class="telemetry-val">1,000</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Point Est (θ̂)</span><span class="telemetry-val">${est.toFixed(2)}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Bootstrap SE</span><span class="telemetry-val">${se.toFixed(2)}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">95% Low</span><span class="telemetry-val">${lo.toFixed(2)}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">95% High</span><span class="telemetry-val">${hi.toFixed(2)}</span></div>
      `;
    }

    // --- MODE 05: FORECASTLAB LIVE ENGINE ---
    function setForecastModel(m) { fState.model = m; renderActiveWorkbenchEngine(); }
    function setForecastHorizon(h) {
      fState.horizon = Math.max(6, Math.min(24, Number(h) || 12));
      const lbl = document.getElementById("forecast-horizon-val");
      if (lbl) lbl.textContent = String(fState.horizon);
      const canvasEl = document.getElementById("inst-canvas-container");
      const teleEl = document.getElementById("inst-telemetry-strip");
      if (canvasEl && teleEl && APP_REGISTRY[activeHeroIndex].id === "forecastlab") {
        renderForecastInteractiveCanvas(canvasEl, teleEl);
      } else {
        renderActiveWorkbenchEngine();
      }
    }
    function toggleForecastDecomp() {
      fState.showDecomp = !fState.showDecomp;
      renderActiveWorkbenchEngine();
    }

    function renderForecastInteractiveCanvas(canvasEl, teleEl) {
      const hist = [112, 118, 132, 129, 121, 135, 148, 148, 136, 119, 104, 118, 115, 126, 141, 135, 125, 149, 170, 170, 158, 133, 114, 140];
      const h = fState.horizon;
      const isETS = fState.model === "ets";
      const mase = isETS ? 0.68 : 1.00;
      const rmse = isETS ? 6.42 : 9.85;

      // Build SVG path for historical series
      const totalT = hist.length + h;
      const tToX = t => 30 + (t / (totalT - 1)) * 335;
      const yToPx = y => 195 - ((y - 90) / 140) * 165;

      const histPath = hist.map((y, t) => `${t===0?'M':'L'}${tToX(t).toFixed(1)},${yToPx(y).toFixed(1)}`).join(" ");
      const stlTrendPath = hist.map((_, t) => {
        const trendY = 122 + t * 1.15;
        return `${t===0?'M':'L'}${tToX(t).toFixed(1)},${yToPx(trendY).toFixed(1)}`;
      }).join(" ");
      const originX = tToX(hist.length - 1);

      // Forecast path + 95% fan polygon
      const fcPts = [];
      const upper95 = [], lower95 = [];
      for (let step = 0; step <= h; step++) {
        const t = hist.length - 1 + step;
        const seasonal = hist[(hist.length - 12 + (step % 12)) % hist.length];
        const trend = isETS ? step * 1.45 : 0;
        const fVal = step === 0 ? hist[hist.length - 1] : seasonal + trend;
        const spread = step === 0 ? 0 : (isETS ? 6.5 : 9.5) * Math.sqrt(step);
        fcPts.push([tToX(t), yToPx(fVal)]);
        upper95.push([tToX(t), yToPx(fVal + 1.96 * spread)]);
        lower95.unshift([tToX(t), yToPx(fVal - 1.96 * spread)]);
      }

      const fanPoly = [...upper95, ...lower95].map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
      const fcPath = fcPts.map((p, i) => `${i===0?'M':'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");

      canvasEl.innerHTML = `
        <div class="svg-plot-box">
          <div class="plot-header">
            <span>HISTORICAL SERIES + 80%/95% PREDICTION FAN</span>
            <span style="color:#60A5FA;">Origin T = 24 · Horizon h = ${h}m</span>
          </div>
          <svg class="interactive-svg" viewBox="0 0 380 220" aria-label="Time series forecast fan chart">
            <line x1="30" y1="195" x2="368" y2="195" stroke="#262C3A" stroke-width="1"/>
            <line x1="${originX.toFixed(1)}" y1="20" x2="${originX.toFixed(1)}" y2="195" stroke="#F59E0B" stroke-width="1.3" stroke-dasharray="3 3"/>
            <polygon points="${fanPoly}" fill="rgba(37, 99, 235, 0.24)" stroke="rgba(96, 165, 250, 0.4)" stroke-width="0.8"/>
            <path d="${histPath}" fill="none" stroke="#F3F4F6" stroke-width="2"/>
            ${fState.showDecomp ? `<path d="${stlTrendPath}" fill="none" stroke="#34D399" stroke-width="2" stroke-dasharray="4 2"/>` : ''}
            <path d="${fcPath}" fill="none" stroke="#60A5FA" stroke-width="2.2"/>
            <text x="${(originX - 6).toFixed(1)}" y="32" fill="#F59E0B" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="end">Forecast Origin</text>
          </svg>
        </div>
        <div class="svg-plot-box">
          <div class="plot-header">
            <span>ROLLING-ORIGIN OUT-OF-SAMPLE LEADERBOARD</span>
            <span style="color:#34D399;">Zero Future Leakage</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.55rem;padding-top:0.35rem;font-family:var(--font-mono);font-size:0.74rem;">
            <div style="display:flex;justify-content:space-between;padding:0.45rem 0.6rem;background:${isETS?'rgba(52,211,153,0.12)':'#151921'};border:1px solid ${isETS?'#34D399':'#262C3A'};border-radius:4px;">
              <span>1. ETS(A,Ad,M) Damped</span>
              <strong style="color:#34D399;">MASE: 0.68 ✓</strong>
            </div>
            <div style="display:flex;justify-content:space-between;padding:0.45rem 0.6rem;background:#151921;border-radius:4px;">
              <span style="color:#9CA3AF;">2. SARIMA(0,1,1)(0,1,1)₁₂</span>
              <span>MASE: 0.72 ✓</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:0.45rem 0.6rem;background:${!isETS?'rgba(245,158,11,0.15)':'#151921'};border:1px solid ${!isETS?'#F59E0B':'#262C3A'};border-radius:4px;">
              <span>3. Seasonal Naïve (Baseline)</span>
              <span style="color:#FBBF24;">MASE: 1.00 (Ref)</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:0.45rem 0.6rem;background:rgba(217,56,30,0.12);border-radius:4px;">
              <span style="color:#F87171;">4. Random Walk Drift</span>
              <span style="color:#F87171;">MASE: 1.38 ✗</span>
            </div>
          </div>
        </div>
      `;

      teleEl.innerHTML = `
        <div class="telemetry-cell"><span class="telemetry-label">Active Model</span><span class="telemetry-val good">${isETS ? 'ETS(A,Ad,M)' : 'S-NAÏVE'}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Horizon (h)</span><span class="telemetry-val">${h} Months</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Out-of-Sample MASE</span><span class="telemetry-val ${mase < 1 ? 'good' : 'alert'}">${mase.toFixed(2)}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Holdout RMSE</span><span class="telemetry-val">${rmse.toFixed(2)}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">PI Coverage</span><span class="telemetry-val">80% &amp; 95%</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Ljung-Box p</span><span class="telemetry-val">${isETS ? '0.41 (Clean)' : '0.02 (Autocorr)'}</span></div>
      `;
    }

    // --- MODE 01: DATAMEND LAB LIVE ENGINE ---
    function toggleDataMendClean(val) { dState.cleaned = val; renderActiveWorkbenchEngine(); }
    function setDataMendRuleFilter(f) { dState.ruleFilter = f; renderActiveWorkbenchEngine(); }
    function toggleDataMendRecipe() { dState.showRecipe = !dState.showRecipe; renderActiveWorkbenchEngine(); }

    function renderDataMendInteractiveCanvas(canvasEl, teleEl) {
      const clean = dState.cleaned;
      const onlySentinel = dState.ruleFilter === "sentinel";
      canvasEl.innerHTML = `
        <div class="svg-plot-box" style="grid-column: span 2;">
          <div class="plot-header">
            <span>CELL-LEVEL TRANSFORMATION DIFF LEDGER · ${clean ? 'AUDITED & VALIDATED' : 'RAW MESSY INPUT'}</span>
            <span style="color:${clean ? '#34D399' : '#F87171'};">${clean ? '✓ 4 Transformation Steps Committed' : '⚠ 5 Schema & Sentinel Anomalies Detected'}</span>
          </div>
          <div style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;font-family:var(--font-mono);font-size:0.74rem;color:#E5E7EB;">
              <thead>
                <tr style="border-bottom:1px solid #262C3A;color:#9CA3AF;text-align:left;">
                  <th style="padding:0.45rem;">patient_id</th>
                  <th style="padding:0.45rem;">visit_date</th>
                  <th style="padding:0.45rem;">cohort_group</th>
                  <th style="padding:0.45rem;">systolic_bp</th>
                  <th style="padding:0.45rem;">audit_status</th>
                </tr>
              </thead>
              <tbody>
                ${!onlySentinel ? `
                <tr style="border-bottom:1px solid #1B202B;">
                  <td style="padding:0.45rem;">PT-1042</td>
                  <td style="padding:0.45rem;color:${clean?'#34D399':'#F87171'};">${clean ? '2025-03-14 (ISO)' : '"03/14/25" (Ambiguous)'}</td>
                  <td style="padding:0.45rem;">Intervention_A</td>
                  <td style="padding:0.45rem;">124.0</td>
                  <td style="padding:0.45rem;color:#34D399;">${clean ? 'Date Normalized' : 'Needs ISO-8601'}</td>
                </tr>` : ''}
                <tr style="border-bottom:1px solid #1B202B;background:${onlySentinel?'rgba(245,158,11,0.08)':'transparent'};">
                  <td style="padding:0.45rem;">PT-1043</td>
                  <td style="padding:0.45rem;">2025-03-15</td>
                  <td style="padding:0.45rem;color:${clean?'#34D399':'#F87171'};">${clean ? 'Control' : '"  control  " (Whitespace)'}</td>
                  <td style="padding:0.45rem;color:${clean?'#FBBF24':'#F87171'};">${clean ? 'NA (Explicit Null)' : '-999 (Sentinel Code!)'}</td>
                  <td style="padding:0.45rem;color:#FBBF24;">${clean ? 'Sentinel -999 → NA' : 'Corrupts Mean if Uncaught'}</td>
                </tr>
                ${!onlySentinel ? `
                <tr style="border-bottom:1px solid #1B202B;">
                  <td style="padding:0.45rem;">PT-1044</td>
                  <td style="padding:0.45rem;color:${clean?'#34D399':'#F87171'};">${clean ? '2025-03-16 (ISO)' : '"2025.03.16"'}</td>
                  <td style="padding:0.45rem;">Intervention_B</td>
                  <td style="padding:0.45rem;">131.5</td>
                  <td style="padding:0.45rem;color:#34D399;">${clean ? 'Verified Clean' : 'Format Mismatch'}</td>
                </tr>
                <tr>
                  <td style="padding:0.45rem;color:${clean?'#9CA3AF':'#F87171'};">PT-1042 (Dup)</td>
                  <td style="padding:0.45rem;">2025-03-14</td>
                  <td style="padding:0.45rem;">Intervention_A</td>
                  <td style="padding:0.45rem;">124.0</td>
                  <td style="padding:0.45rem;color:${clean?'#34D399':'#F87171'};">${clean ? 'Deduplicated by Key' : 'Duplicate Primary Key'}</td>
                </tr>` : ''}
              </tbody>
            </table>
          </div>
          ${dState.showRecipe ? `
            <pre style="margin-top:0.55rem;padding:0.55rem 0.75rem;background:#151921;border:1px solid #262C3A;border-radius:4px;font-family:var(--font-mono);font-size:0.68rem;color:#34D399;overflow-x:auto;"># Reproducible Tidyverse R / AST Pipeline Export (SHA-256: 8f9c2a1e)
df_clean &lt;- df_raw |&gt;
  mutate(visit_date = lubridate::parse_date_time(visit_date, c("mdy", "ymd")),
         cohort_group = stringr::str_to_title(stringr::str_trim(cohort_group)),
         systolic_bp = dplyr::na_if(systolic_bp, -999)) |&gt;
  dplyr::distinct(patient_id, visit_date, .keep_all = TRUE)</pre>
          ` : ''}
        </div>
      `;

      teleEl.innerHTML = `
        <div class="telemetry-cell"><span class="telemetry-label">Pipeline State</span><span class="telemetry-val ${clean?'good':'alert'}">${clean ? 'VALIDATED' : 'RAW UNCLEAN'}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Sentinel -999s</span><span class="telemetry-val ${clean?'good':'alert'}">${clean ? '0 (Recoded NA)' : '38 Active!'}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Date Standard</span><span class="telemetry-val">${clean ? '100% ISO-8601' : '3 Mixed Formats'}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Duplicate Keys</span><span class="telemetry-val">${clean ? '0 (Resolved)' : '12 Rows'}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Corrupted Mean</span><span class="telemetry-val ${clean?'good':'alert'}">${clean ? '127.8 mmHg' : '-142.6 mmHg'}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Recipe Export</span><span class="telemetry-val good">JSON / R / Py</span></div>
      `;
    }

    // --- MODE 02: VISUALGRAMMAR LIVE ENGINE ---
    function setVisualGrammarMode(m) { vState.viewMode = m; renderActiveWorkbenchEngine(); }

    function renderVisualGrammarInteractiveCanvas(canvasEl, teleEl) {
      const mode = vState.viewMode;
      const isRain = mode === "raincloud";
      const isBox = mode === "boxplot";
      const headerTitle = isRain
        ? "RAINCLOUD + JITTER (REVEALS BIMODALITY)"
        : isBox
        ? "QUARTILE BOXPLOT (STILL MASKS BIMODAL SPLIT)"
        : "DYNAMITE BAR CHART (CONCEALS STRUCTURE)";
      canvasEl.innerHTML = `
        <div class="svg-plot-box">
          <div class="plot-header">
            <span>${headerTitle}</span>
            <span style="color:${isRain ? '#34D399' : '#F87171'};">${isRain ? '✓ Graphical Unity Passed' : '⚠ Hides Polarized Responders'}</span>
          </div>
          <svg class="interactive-svg" viewBox="0 0 380 220" aria-label="Comparison of bar chart of means, boxplot, and raincloud distribution">
            <line x1="40" y1="190" x2="355" y2="190" stroke="#262C3A" stroke-width="1"/>
            ${mode === 'bar' ? `
              <!-- Three identical bars with Mean = 50.0 -->
              <rect x="65" y="75" width="60" height="115" fill="#4F46E5" rx="3"/>
              <rect x="165" y="75" width="60" height="115" fill="#4F46E5" rx="3"/>
              <rect x="265" y="75" width="60" height="115" fill="#4F46E5" rx="3"/>
              <text x="95" y="65" fill="#F3F4F6" font-family="JetBrains Mono" font-size="9.5" text-anchor="middle">Mean = 50.0</text>
              <text x="195" y="65" fill="#F3F4F6" font-family="JetBrains Mono" font-size="9.5" text-anchor="middle">Mean = 50.0</text>
              <text x="295" y="65" fill="#F3F4F6" font-family="JetBrains Mono" font-size="9.5" text-anchor="middle">Mean = 50.0</text>
            ` : mode === 'boxplot' ? `
              <!-- Three boxplots: Cohort B has wide IQR but hides the empty valley at y=115 -->
              <line x1="95" y1="60" x2="95" y2="170" stroke="#34D399" stroke-width="1.5"/>
              <rect x="73" y="92" width="44" height="46" fill="#151921" stroke="#34D399" stroke-width="1.5"/>
              <line x1="73" y1="115" x2="117" y2="115" stroke="#fff" stroke-width="2"/>
              <line x1="195" y1="50" x2="195" y2="180" stroke="#F59E0B" stroke-width="1.5"/>
              <rect x="173" y="68" width="44" height="92" fill="#151921" stroke="#F59E0B" stroke-width="1.5"/>
              <line x1="173" y1="115" x2="217" y2="115" stroke="#fff" stroke-width="2"/>
              <text x="195" y="42" fill="#FBBF24" font-family="JetBrains Mono" font-size="8.5" text-anchor="middle">Masks 2 Peaks!</text>
              <line x1="295" y1="70" x2="295" y2="182" stroke="#60A5FA" stroke-width="1.5"/>
              <rect x="273" y="105" width="44" height="55" fill="#151921" stroke="#60A5FA" stroke-width="1.5"/>
              <line x1="273" y1="138" x2="317" y2="138" stroke="#fff" stroke-width="2"/>
              <circle cx="295" cy="42" r="4" fill="#F87171"/>
            ` : `
              <!-- Cohort A: Unimodal Bell around y=115 -->
              <path d="M70,175 Q115,115 70,55 Z" fill="rgba(52,211,153,0.28)" stroke="#34D399" stroke-width="1.5"/>
              <circle cx="62" cy="112" r="3" fill="#34D399"/><circle cx="65" cy="118" r="3" fill="#34D399"/><circle cx="60" cy="105" r="3" fill="#34D399"/><circle cx="64" cy="124" r="3" fill="#34D399"/>
              <!-- Cohort B: Strongly Bimodal (two peaks at y=160 and y=70) -->
              <path d="M170,182 Q218,160 175,115 Q218,70 170,45 Z" fill="rgba(217,56,30,0.28)" stroke="#D9381E" stroke-width="1.5"/>
              <circle cx="162" cy="162" r="3.2" fill="#F87171"/><circle cx="165" cy="155" r="3.2" fill="#F87171"/><circle cx="162" cy="68" r="3.2" fill="#F87171"/><circle cx="166" cy="74" r="3.2" fill="#F87171"/>
              <!-- Cohort C: Skewed + Outlier -->
              <path d="M270,185 Q325,155 275,95 L270,35 Z" fill="rgba(96,165,250,0.28)" stroke="#60A5FA" stroke-width="1.5"/>
              <circle cx="262" cy="155" r="3" fill="#60A5FA"/><circle cx="265" cy="148" r="3" fill="#60A5FA"/><circle cx="263" cy="42" r="4" fill="#FBBF24"/>
            `}
            <text x="95" y="208" fill="#9CA3AF" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Cohort A (Normal)</text>
            <text x="195" y="208" fill="#9CA3AF" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Cohort B (Bimodal)</text>
            <text x="295" y="208" fill="#9CA3AF" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Cohort C (Skewed)</text>
          </svg>
        </div>
        <div class="svg-plot-box">
          <div class="plot-header">
            <span>15-POINT PERCEPTUAL HONESTY AUDIT</span>
            <span style="color:${isRain?'#34D399':'#F87171'};">${isRain ? '15/15 Passed' : isBox ? '13/15 (1 Warning)' : '11/15 (3 Warnings)'}</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.5rem;font-family:var(--font-mono);font-size:0.73rem;padding-top:0.35rem;">
            <div style="padding:0.45rem;border-radius:4px;background:${isRain?'rgba(52,211,153,0.12)':'rgba(217,56,30,0.15)'};color:${isRain?'#34D399':'#F87171'};">
              ${isRain ? '✓ Raw distribution density & quantiles visible' : isBox ? '⚠ Boxplot shows IQR but still hides Cohort B bimodal gap' : '✗ Bar height conceals Cohort B bimodal split'}
            </div>
            <div style="padding:0.45rem;border-radius:4px;background:#151921;color:#E5E7EB;">
              ✓ Cleveland Rank #1: Aligned positional scale
            </div>
            <div style="padding:0.45rem;border-radius:4px;background:#151921;color:#E5E7EB;">
              ✓ Okabe-Ito Deuteranopia / Protanopia Safe
            </div>
          </div>
        </div>
      `;

      teleEl.innerHTML = `
        <div class="telemetry-cell"><span class="telemetry-label">Cohort A Mean</span><span class="telemetry-val">50.0 (Unimodal)</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Cohort B Mean</span><span class="telemetry-val alert">50.0 (Bimodal!)</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Cohort C Mean</span><span class="telemetry-val">50.0 (Skewed)</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Encoding</span><span class="telemetry-val ${isRain?'good':'alert'}">${isRain ? 'RAINCLOUD' : isBox ? 'BOXPLOT' : 'BAR OF MEANS'}</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Data-Ink Ratio</span><span class="telemetry-val">0.89 (High)</span></div>
        <div class="telemetry-cell"><span class="telemetry-label">Audit Score</span><span class="telemetry-val ${isRain?'good':'alert'}">${isRain ? '15 / 15 ✓' : isBox ? '13 / 15 △' : '11 / 15 ⚠'}</span></div>
      `;
    }

    function inspectCurrentHeroApp() {
      const app = APP_REGISTRY[activeHeroIndex];
      openProductDetail(app.id);
    }

    // -------------------------------------------------------------------------
    // 3. SECTION 2: PIPELINE STEPPER & BENTO MATRIX (CUSTOM SVG SIGNATURES)
    // -------------------------------------------------------------------------
    let activeJourneyIdx = 0;

    function renderPipelineJourney() {
      const stepperEl = document.getElementById("journey-stepper");
      const detailEl = document.getElementById("journey-detail-panel");
      if (!stepperEl || !detailEl) return;

      stepperEl.innerHTML = APP_REGISTRY.map((app, idx) => `
        <button type="button" class="pipe-node ${idx === activeJourneyIdx ? 'active' : ''}" role="tab" aria-selected="${idx === activeJourneyIdx}" onclick="selectJourneyStage(${idx})">
          <span class="pipe-node-stage">
            <span>${app.code} ${app.stage}</span>
            <span>→</span>
          </span>
          <strong class="pipe-node-app">${app.name}</strong>
          <span class="pipe-node-artifact">${app.outputArtifact.split('+')[0]}</span>
        </button>
      `).join("");

      const cur = APP_REGISTRY[activeJourneyIdx];
      const next = APP_REGISTRY[(activeJourneyIdx + 1) % APP_REGISTRY.length];
      detailEl.innerHTML = `
        <div>
          <div class="mono-num" style="font-size:0.72rem;color:var(--accent-emerald);font-weight:600;text-transform:uppercase;">Stage ${cur.code} Protocol · ${cur.name}</div>
          <div style="font-family:var(--font-display);font-size:1.45rem;margin-top:2px;">${cur.questionAnswered}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.35rem;font-family:var(--font-mono);font-size:0.74rem;">
          <div><span style="color:var(--ink-muted);">IN:</span> ${cur.inputArtifact}</div>
          <div><span style="color:var(--accent-emerald);font-weight:600;">OUT → ${next.name}:</span> ${cur.outputArtifact}</div>
        </div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          <a href="${cur.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Open ${cur.name} ↗</a>
          <a href="${cur.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">View Source</a>
        </div>
      `;
    }

    function selectJourneyStage(idx) {
      activeJourneyIdx = idx;
      renderPipelineJourney();
      renderUserFlowInspector();
    }

    // -------------------------------------------------------------------------
    // USER-FLOW SPECIFICATIONS & STATE-MACHINE ENGINE (user-flow-specs + Foreman)
    // -------------------------------------------------------------------------
    const USER_FLOW_SPECS = {
      "datamend-lab": {
        flowId: "flow-01-prepare",
        entryState: "Raw CSV/TSV Upload (1,420 rows × 9 cols)",
        guardCondition: "Check UTF-8 encoding, header uniqueness, and sentinel patterns (-999, 'N/A', 'NULL')",
        happyPath: "All columns parsed → 4-step deterministic AST recipe applied → Validated CSV + pipeline.json exported to VisualGrammar",
        failureBranch: "38 cells contain sentinel -999 (corrupting SBP mean to -142.6 mmHg) & 12 duplicate PT-IDs → Quarantine rows in Cell Diff Ledger → Recode -999 to explicit NA before export",
        sandboxActionLabel: "Simulate -999 Sentinel Failure in Hero Sandbox ⚡",
        emptyState: "Drop CSV/TSV or load 3 clinical/economic benchmark tables (zero network upload).",
        loadingState: "Streaming deterministic row parser with SHA-256 column checksum calculation.",
        warningState: "Highlights 38 sentinel -999 cells in vermilion (#D9381E) and blocks un-audited export.",
        verifiedState: "100% ISO-8601 dates, 0 duplicate keys, bit-reproducible R/Python/JSON recipe ready.",
        yamlSpec: `flow: stage_01_datamend_hygiene
actor: research_analyst
entry:
  surface: DataMend Lab (https://rkohnmn.github.io/datamend-lab/)
  input_schema: raw_tabular_csv
steps:
  - id: profile_schema
    action: inspect_column_health_ribbon
    assert:row_count: 1420
  - id: branch_sentinel_detection
    when: "column.sbp contains -999"
    then: flag_vermilion_diff_and_recode_na
    else: pass_column_unchanged
  - id: export_handoff
    action: click_export_validated_bundle
    outputs: [validated_utf8.csv, pipeline_recipe.json]
    next_lab: visualgrammar`
      },
      "visualgrammar": {
        flowId: "flow-02-visualize",
        entryState: "Typed Analytical Table from DataMend Lab",
        guardCondition: "Classify variables by Stevens scale (Nominal, Ordinal, Interval, Ratio) & run 15-point graphical honesty linter",
        happyPath: "Select aligned positional encoding → Render Raincloud (half-violin + boxplot + jitter) → Export publication SVG",
        failureBranch: "User selects Dynamite Bar Chart of Means for Cohort B (Mean = 50.0) → Honesty Linter flags bimodal responder split (peaks at 28 and 72) → Auto-recommend Raincloud reveal",
        sandboxActionLabel: "Simulate Bar-of-Means Failure in Hero Sandbox ⚡",
        emptyState: "Select measurement scales (Nominal, Ordinal, Interval, Ratio) or load Same-Mean Trio preset.",
        loadingState: "Kernel density estimation (KDE) and Cleveland-McGill perceptual accuracy ranking.",
        warningState: "Flags truncated non-zero bar baselines (Rule #02) and unimodal bar masking (11/15 score).",
        verifiedState: "15/15 Perceptual Honesty Audit passed + Okabe-Ito deuteranopia/protanopia verified.",
        yamlSpec: `flow: stage_02_visualgrammar_encoding
actor: research_analyst
entry:
  surface: VisualGrammar (https://rkohnmn.github.io/visualgrammar/)
  input_schema: validated_utf8.csv
steps:
  - id: classify_scales
    action: assign_stevens_measurement_taxonomy
  - id: branch_honesty_linter
    when: "encoding == 'bar_of_means' and bimodality_dip_p < 0.05"
    then: trigger_guardrail_02_and_switch_to_raincloud
    else: approve_perceptual_hierarchy
  - id: export_figure
    outputs: [raincloud_figure.svg, vega_lite_spec.json]
    next_lab: quartetlab`
      },
      "quartetlab": {
        flowId: "flow-03-investigate",
        entryState: "Continuous Bivariate Pairs (X, Y) or Benchmark Quartet",
        guardCondition: "Compute OLS slope (β₁), Leverage (hᵢᵢ), and Cook's Distance (Dᵢ > 4/n threshold = 0.36)",
        happyPath: "Inspect synchronized scatter + Residuals vs. Fitted → Compare OLS against robust Theil-Sen median slope → Export diagnostic table",
        failureBranch: "Observation #3 exhibits Cook's Dᵢ = 0.84 (> 4/n) or Anscombe II exhibits quadratic curvature → Flag observation with vermilion halo & overlay Theil-Sen robust line",
        sandboxActionLabel: "Simulate Cook's D Outlier Hijack in Hero Sandbox ⚡",
        emptyState: "Load Anscombe I–IV, Datasaurus ring, or paste custom X/Y coordinate pairs.",
        loadingState: "60fps SVG coordinate solver updating OLS, Theil-Sen, and Cook's D on pointer drag.",
        warningState: "Cook's Dᵢ > 4/n alert badge triggered when boundary outlier tilts OLS slope by +66%.",
        verifiedState: "OLS and robust Theil-Sen slopes reconciled with residual white-noise verification.",
        yamlSpec: `flow: stage_03_quartetlab_diagnostics
actor: research_analyst
entry:
  surface: QuartetLab (https://rkohnmn.github.io/quartetlab/)
  input_schema: continuous_xy_pairs
steps:
  - id: fit_bivariate_models
    action: compute_ols_and_theil_sen
  - id: branch_leverage_audit
    when: "max(cooks_d) > 4 / n"
    then: highlight_vermilion_halo_and_enable_theil_sen
    else: confirm_homoscedastic_linear_fit
  - id: export_diagnostics
    outputs: [residual_leverage_ledger.csv]
    next_lab: resamplelab`
      },
      "resamplelab": {
        flowId: "flow-04-infer",
        entryState: "Univariate or Two-Group Sample Vector (e.g., n = 16 skewed clinical values)",
        guardCondition: "Evaluate sample skewness & tail weight; lock seeded PRNG (mulberry32) for bit-identical replication",
        happyPath: "Draw B = 10,000 bootstrap replicates → Compute Efron's BCa (bias z₀ & acceleration a) → Export 5-method CI table",
        failureBranch: "Heavy right skewness invalidates symmetric Normal CI (x̄ ± 1.96·SE misstates upper tail by -2.4 units) → Flag symmetric interval & promote BCa asymmetric bounds",
        sandboxActionLabel: "Simulate Skewed BCa Bootstrap in Hero Sandbox ⚡",
        emptyState: "Choose target estimator (Median, Mean, Trimmed Mean, IQR) and PRNG seed.",
        loadingState: "Monte Carlo resampling engine drawing B = 10,000 replicates with replacement.",
        warningState: "Flags symmetric Gaussian interval when bootstrap skewness |z₀| > 0.15.",
        verifiedState: "Seeded 95% BCa interval [38.85, 47.22] and permutation null p-value exported.",
        yamlSpec: `flow: stage_04_resamplelab_inference
actor: research_analyst
entry:
  surface: ResampleLab (https://rkohnmn.github.io/resamplelab/)
  input_schema: sample_vector_or_two_group_csv
steps:
  - id: run_monte_carlo
    action: draw_10000_seeded_replicates
    seed: 42
  - id: branch_tail_asymmetry
    when: "abs(bca_bias_z0) > 0.10"
    then: flag_naive_normal_ci_and_select_bca
    else: report_percentile_and_bca_bounds
  - id: export_inference
    outputs: [bootstrap_ci_comparison.csv]
    next_lab: forecastlab`
      },
      "forecastlab": {
        flowId: "flow-05-forecast",
        entryState: "Regularly Spaced Chronological Series (T = 24 monthly observations)",
        guardCondition: "Decompose Yₜ = Tₜ + Sₜ + Rₜ via LOESS STL & enforce Rolling-Origin Cross-Validation",
        happyPath: "Fit ETS(A,Ad,M) Damped Trend → Beat Seasonal Naïve baseline (MASE = 0.68 < 1.00) → Export 80%/95% prediction fan",
        failureBranch: "Candidate model yields out-of-sample MASE ≥ 1.00 (fails to beat Seasonal Naïve) or Ljung-Box p < 0.05 (autocorrelated residuals) → Reject overfit model & revert to damped baseline",
        sandboxActionLabel: "Simulate Horizon Fan & MASE Check in Hero Sandbox ⚡",
        emptyState: "Upload chronological series or select Airline / Clinical Demand benchmark.",
        loadingState: "STL LOESS decomposition + rolling-origin out-of-sample horizon evaluation.",
        warningState: "Flags any candidate model with MASE ≥ 1.00 or Ljung-Box p < 0.05 in vermilion.",
        verifiedState: "Calibrated 80%/95% fan chart + out-of-sample MASE leaderboard exported.",
        yamlSpec: `flow: stage_05_forecastlab_horizon
actor: research_analyst
entry:
  surface: ForecastLab (https://rkohnmn.github.io/forecastlab/)
  input_schema: regular_chronological_series
steps:
  - id: stl_decomposition
    action: separate_trend_seasonal_remainder
  - id: branch_mase_benchmark
    when: "model.mase >= 1.00 or ljung_box_p < 0.05"
    then: reject_model_and_flag_seasonal_naive_baseline
    else: certify_calibrated_80_95_prediction_fan
  - id: export_forecast
    outputs: [forecast_fan_intervals.csv, mase_leaderboard.json]`
      }
    };

    let activeUserFlowView = "states"; // 'states' | 'inventory' | 'yaml'

    function setUserFlowView(mode) {
      activeUserFlowView = mode;
      document.getElementById("uf-tab-states")?.classList.toggle("active", mode === "states");
      document.getElementById("uf-tab-inventory")?.classList.toggle("active", mode === "inventory");
      document.getElementById("uf-tab-yaml")?.classList.toggle("active", mode === "yaml");
      renderUserFlowInspector();
    }

    function simulateEdgeCaseInHero(appId) {
      if (appId === "datamend-lab") {
        dState.cleaned = false;
        dState.ruleFilter = "sentinel";
      } else if (appId === "visualgrammar") {
        vState.viewMode = "bar";
      } else if (appId === "quartetlab") {
        qState.preset = "anscombe3";
        qState.pts = JSON.parse(JSON.stringify(QUARTET_PRESETS.anscombe3.pts));
        qState.showTheilSen = true;
      } else if (appId === "resamplelab") {
        rState.stat = "median";
        generateBootstrapReplicates(1000);
      } else if (appId === "forecastlab") {
        fState.model = "snaive";
        fState.horizon = 18;
      }
      launchInHeroSandbox(appId);
      showCraftToast(`⚡ Loaded ${appId} edge-case state in Hero Sandbox`);
    }

    function renderUserFlowInspector() {
      const panel = document.getElementById("userflow-spec-panel");
      if (!panel) return;
      const curApp = APP_REGISTRY[activeJourneyIdx] || APP_REGISTRY[0];
      const spec = USER_FLOW_SPECS[curApp.id];
      if (!spec) return;

      if (activeUserFlowView === "states") {
        panel.innerHTML = `
          <div class="flowspec-topbar">
            <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
              <span class="inst-mode-badge">FLOWSPEC · ${spec.flowId.toUpperCase()}</span>
              <span class="mono-num" style="font-size:0.72rem;color:#9CA3AF;">Deterministic State &amp; Branch Contract</span>
            </div>
            <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-emerald btn-sm" style="padding:0.3rem 0.65rem;font-size:0.73rem;" onclick="simulateEdgeCaseInHero('${curApp.id}')">${spec.sandboxActionLabel}</button>
              <button type="button" class="btn btn-dark-outline btn-sm" style="padding:0.3rem 0.65rem;font-size:0.73rem;" onclick="setUserFlowView('yaml')">{ } View YAML Spec</button>
            </div>
          </div>
          <div class="flowspec-grid">
            <div class="flowspec-node">
              <span class="flowspec-step-kicker">01 · Entry State</span>
              <strong class="flowspec-step-title">Input Artifact</strong>
              <p class="flowspec-step-desc">${spec.entryState}</p>
            </div>
            <div class="flowspec-node">
              <span class="flowspec-step-kicker">02 · Guard Condition</span>
              <strong class="flowspec-step-title">Automated Invariant Check</strong>
              <p class="flowspec-step-desc">${spec.guardCondition}</p>
            </div>
            <div class="flowspec-node edge-branch">
              <span class="flowspec-step-kicker" style="color:#FCA5A5;">03A · Anomaly / Failure Branch</span>
              <strong class="flowspec-step-title" style="color:#F87171;">Diagnostic Guardrail Triggered</strong>
              <p class="flowspec-step-desc">${spec.failureBranch}</p>
            </div>
            <div class="flowspec-node happy-branch">
              <span class="flowspec-step-kicker" style="color:#6EE7B7;">03B · Verified Handoff Path</span>
              <strong class="flowspec-step-title" style="color:#34D399;">Deterministic Export</strong>
              <p class="flowspec-step-desc">${spec.happyPath}</p>
            </div>
          </div>
        `;
      } else if (activeUserFlowView === "inventory") {
        panel.innerHTML = `
          <div class="flowspec-topbar">
            <span class="inst-mode-badge">SCREEN &amp; STATE INVENTORY · ${curApp.name.toUpperCase()}</span>
            <button type="button" class="btn btn-emerald btn-sm" style="padding:0.3rem 0.65rem;font-size:0.73rem;" onclick="simulateEdgeCaseInHero('${curApp.id}')">${spec.sandboxActionLabel}</button>
          </div>
          <div class="flowspec-grid">
            <div class="flowspec-node">
              <span class="flowspec-step-kicker">State 01 · First-Run / Empty</span>
              <strong class="flowspec-step-title">Zero-Friction Activation</strong>
              <p class="flowspec-step-desc">${spec.emptyState}</p>
            </div>
            <div class="flowspec-node">
              <span class="flowspec-step-kicker">State 02 · Active Compute</span>
              <strong class="flowspec-step-title">Determinate Feedback</strong>
              <p class="flowspec-step-desc">${spec.loadingState}</p>
            </div>
            <div class="flowspec-node edge-branch">
              <span class="flowspec-step-kicker" style="color:#FCA5A5;">State 03 · Statistical Warning</span>
              <strong class="flowspec-step-title" style="color:#F87171;">Actionable Error Recovery</strong>
              <p class="flowspec-step-desc">${spec.warningState}</p>
            </div>
            <div class="flowspec-node happy-branch">
              <span class="flowspec-step-kicker" style="color:#6EE7B7;">State 04 · Verified Output</span>
              <strong class="flowspec-step-title" style="color:#34D399;">Downstream Handoff Ready</strong>
              <p class="flowspec-step-desc">${spec.verifiedState}</p>
            </div>
          </div>
        `;
      } else {
        panel.innerHTML = `
          <div class="flowspec-topbar">
            <span class="inst-mode-badge">IMMUTABLE YAML FLOWSPEC · specs/${curApp.id}.flow.yaml</span>
            <button type="button" class="btn btn-emerald btn-sm" style="padding:0.3rem 0.65rem;font-size:0.73rem;" onclick="copyTextSafe(USER_FLOW_SPECS['${curApp.id}'].yamlSpec, '${curApp.name} FlowSpec YAML')">⎘ Copy FlowSpec YAML</button>
          </div>
          <pre style="margin:0;padding:0.75rem;background:#090B0E;border:1px solid #262C3A;border-radius:6px;font-family:var(--font-mono);font-size:0.72rem;color:#34D399;overflow-x:auto;line-height:1.5;">${escapeHtml(spec.yamlSpec)}</pre>
        `;
      }
    }

    // Theme Switcher (Archival Warm Paper <-> Obsidian Instrument Dark)
    let atelierTheme = "light";
    function loadAtelierTheme() {
      try {
        const saved = window.localStorage.getItem("ds_atelier_theme_v2");
        if (saved === "dark" || saved === "light") {
          atelierTheme = saved;
        }
      } catch (err) {
        atelierTheme = "light";
      }
      applyAtelierTheme();
    }
    function applyAtelierTheme() {
      if (atelierTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      const iconEl = document.getElementById("theme-toggle-icon");
      const lblEl = document.getElementById("theme-toggle-label");
      if (iconEl) iconEl.textContent = atelierTheme === "dark" ? "☀" : "☾";
      if (lblEl) lblEl.textContent = atelierTheme === "dark" ? "Paper" : "Obsidian";
    }
    function toggleAtelierTheme() {
      atelierTheme = atelierTheme === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem("ds_atelier_theme_v2", atelierTheme);
      } catch (err) {
        // Storage unavailable in restricted sandboxed iframe
      }
      applyAtelierTheme();
      showCraftToast(atelierTheme === "dark" ? "☾ Switched to Obsidian Dark appearance" : "☀ Switched to Archival Paper appearance");
    }

    function copyDesignSystemBrief() {
      const brief = `# DataSense Studio — Locked Design System & FlowSpec Brief
- Register: Scientific Instrument Atelier (Archival Paper #F6F4EE / Obsidian #0D1014)
- Typography: Instrument Serif (Display) · Plus Jakarta Sans (UI/Body) · JetBrains Mono (Tabular Numerals)
- Contrast Ratios: 16.4:1 Primary on Paper · 17.2:1 Primary on Obsidian · 10.1:1 Emerald Signal (#34D399)
- Concentric Radii: Outer 16px (--radius-lg) / Inner 10px (--radius-md) / Cell 6px (--radius-sm)
- Motion Rule: Damped spring cubic-bezier(0.22, 1, 0.36, 1); honors prefers-reduced-motion & prefers-reduced-transparency
- Five Linked Laboratories: DataMend Lab (01), VisualGrammar (02), QuartetLab (03), ResampleLab (04), ForecastLab (05)`;
      copyTextSafe(brief, "DESIGN.md & FlowSpec Brief");
    }


    // Custom Mathematical Signature SVGs for Bento Cards (Eliminates Duplicate Screenshots!)
    const BENTO_SIGNATURE_SVGS = {
      "datamend-lab": `<svg width="100%" height="70" viewBox="0 0 260 70" fill="none">
        <rect x="4" y="10" width="95" height="50" rx="4" fill="#151921" stroke="#D9381E" stroke-dasharray="2 2"/>
        <text x="12" y="28" fill="#F87171" font-family="JetBrains Mono" font-size="9">date: "03/14/25"</text>
        <text x="12" y="46" fill="#F87171" font-family="JetBrains Mono" font-size="9">val: -999 (NaN)</text>
        <path d="M108 35H148" stroke="#34D399" stroke-width="1.8"/>
        <polygon points="148,31 155,35 148,39" fill="#34D399"/>
        <rect x="160" y="10" width="95" height="50" rx="4" fill="#151921" stroke="#34D399"/>
        <text x="168" y="28" fill="#34D399" font-family="JetBrains Mono" font-size="9">2025-03-14 ✓</text>
        <text x="168" y="46" fill="#E5E7EB" font-family="JetBrains Mono" font-size="9">val: NA (Clean)</text>
      </svg>`,
      "visualgrammar": `<svg width="100%" height="70" viewBox="0 0 260 70" fill="none">
        <path d="M15,58 Q55,58 75,20 Q95,58 125,58" fill="rgba(79,70,229,0.28)" stroke="#818CF8" stroke-width="1.6"/>
        <path d="M135,58 Q158,18 180,45 Q202,15 225,58" fill="rgba(52,211,153,0.25)" stroke="#34D399" stroke-width="1.6"/>
        <line x1="75" y1="14" x2="75" y2="60" stroke="#F3F4F6" stroke-dasharray="2 2"/>
        <line x1="180" y1="14" x2="180" y2="60" stroke="#D9381E" stroke-dasharray="2 2"/>
        <text x="16" y="15" fill="#9CA3AF" font-family="JetBrains Mono" font-size="8.5">Unimodal vs. Bimodal (Same x̄)</text>
      </svg>`,
      "quartetlab": `<svg width="100%" height="70" viewBox="0 0 260 70" fill="none">
        <line x1="12" y1="56" x2="245" y2="18" stroke="#F3F4F6" stroke-width="1.5"/>
        <line x1="12" y1="48" x2="245" y2="28" stroke="#34D399" stroke-width="1.5" stroke-dasharray="4 2"/>
        <circle cx="40" cy="45" r="3" fill="#34D399"/><circle cx="85" cy="40" r="3" fill="#34D399"/><circle cx="130" cy="36" r="3" fill="#34D399"/><circle cx="175" cy="32" r="3" fill="#34D399"/>
        <circle cx="220" cy="12" r="8" fill="rgba(217,56,30,0.25)" stroke="#D9381E" stroke-dasharray="2 2"/>
        <circle cx="220" cy="12" r="3.5" fill="#D9381E"/>
        <text x="145" y="62" fill="#F87171" font-family="JetBrains Mono" font-size="8.5">Cook's Dᵢ = 0.84 ⚠</text>
      </svg>`,
      "resamplelab": `<svg width="100%" height="70" viewBox="0 0 320 70" fill="none">
        <rect x="35" y="46" width="12" height="16" fill="#D9381E"/><rect x="51" y="36" width="12" height="26" fill="#0F6E56"/><rect x="67" y="24" width="12" height="38" fill="#0F6E56"/><rect x="83" y="12" width="12" height="50" fill="#34D399"/><rect x="99" y="16" width="12" height="46" fill="#0F6E56"/><rect x="115" y="28" width="12" height="34" fill="#0F6E56"/><rect x="131" y="40" width="12" height="22" fill="#0F6E56"/><rect x="147" y="48" width="12" height="14" fill="#D9381E"/>
        <text x="175" y="28" fill="#34D399" font-family="JetBrains Mono" font-size="9.5">B = 10,000 Replicates</text>
        <text x="175" y="46" fill="#E5E7EB" font-family="JetBrains Mono" font-size="9">95% BCa: [39.15, 46.72]</text>
      </svg>`,
      "forecastlab": `<svg width="100%" height="70" viewBox="0 0 320 70" fill="none">
        <polyline points="12,48 38,32 64,44 90,26 116,38 142,20 168,30" fill="none" stroke="#F3F4F6" stroke-width="1.8"/>
        <line x1="168" y1="8" x2="168" y2="62" stroke="#F59E0B" stroke-dasharray="2 2"/>
        <polygon points="168,30 220,14 285,6 285,52 220,42" fill="rgba(37,99,235,0.28)"/>
        <polyline points="168,30 220,27 285,24" fill="none" stroke="#60A5FA" stroke-width="2"/>
        <text x="180" y="62" fill="#60A5FA" font-family="JetBrains Mono" font-size="8.5">80%/95% Fan · MASE = 0.68</text>
      </svg>`
    };

    function renderHomeBento() {
      const gridEl = document.getElementById("home-bento-grid");
      if (!gridEl) return;

      gridEl.innerHTML = APP_REGISTRY.map((app, idx) => {
        const spanClass = idx < 3 ? "bento-span-4" : "bento-span-6";
        return `
          <article class="bento-card ${spanClass}">
            <div>
              <div class="bento-top-meta">
                <span class="bento-stage-tag">${app.stageBadge}</span>
                <button type="button" class="kbd-pill" style="cursor:pointer;" onclick="scrollToShowcase('${app.id}')">Inspect Workspace ↓</button>
              </div>
              <div style="margin-top:0.75rem;">
                <h4 class="bento-title">${app.name}</h4>
                <div class="bento-tagline">${app.tagline}</div>
              </div>
            </div>

            <div class="bento-micro-viz" aria-hidden="true">
              <div style="display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:0.65rem;color:var(--inst-muted);">
                <span>MATHEMATICAL SIGNATURE</span>
                <span style="color:var(--accent-emerald-bright);">CLIENT-SIDE ENGINE</span>
              </div>
              ${BENTO_SIGNATURE_SVGS[app.id]}
            </div>

            <p class="bento-summary">${app.shortDesc}</p>

            <div class="bento-footer">
              <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
                <a href="${app.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Open App ↗</a>
                <a href="${app.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">View Source</a>
              </div>
              <button type="button" class="btn btn-secondary btn-sm" onclick="openProductDetail('${app.id}')">Dossier →</button>
            </div>
          </article>
        `;
      }).join("");
    }

    function scrollToShowcase(appId) {
      navigateTo("home", false);
      try { history.pushState(null, "", `#${appId}`); } catch (err) { /* sandboxed iframe history fallback */ }
      setTimeout(() => {
        const el = document.getElementById(appId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 40);
    }

    // -------------------------------------------------------------------------
    // 4. SECTION 3: INTERACTIVE PRODUCT SHOWCASES (HOTSPOTS + LIGHTBOX)
    // -------------------------------------------------------------------------
    const activeHotspots = {
      "datamend-lab": 0,
      "visualgrammar": 0,
      "quartetlab": 0,
      "resamplelab": 0,
      "forecastlab": 0
    };

    function renderHomeShowcases() {
      const container = document.getElementById("home-showcases-container");
      if (!container) return;

      container.innerHTML = APP_REGISTRY.map((app) => {
        const hIdx = activeHotspots[app.id] || 0;
        const activeHotspot = app.hotspots[hIdx];
        return `
          <article class="showcase-card" id="${app.id}">
            <div class="showcase-info-col">
              <div>
                <div class="showcase-eyebrow-row">
                  <span class="bento-stage-tag">${app.stageBadge}</span>
                  <span class="mono-num" style="font-size:0.74rem;color:var(--ink-muted);">VERIFIED PRODUCTION BUILD</span>
                </div>
                <h3 class="showcase-app-title" style="margin-top:0.55rem;">${app.name}</h3>
                <div class="bento-tagline" style="font-size:0.82rem;margin-bottom:0.75rem;">${app.tagline}</div>
                <div class="showcase-question-callout">
                  “${app.questionAnswered}”
                </div>
              </div>

              <div class="showcase-spec-grid">
                <div>
                  <div class="spec-item-label">Mathematical Architecture</div>
                  <div class="spec-item-body">${app.engineSpec}</div>
                </div>
                <div>
                  <div class="spec-item-label">When to Launch</div>
                  <div class="spec-item-body">${app.whenToLaunch}</div>
                </div>
              </div>

              <ul style="list-style:none;display:flex;flex-direction:column;gap:0.35rem;font-size:0.83rem;color:var(--ink-secondary);">
                ${app.capabilities.slice(0, 3).map(c => `<li><strong style="color:var(--accent-emerald);">✓</strong> ${c}</li>`).join("")}
              </ul>

              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.6rem;padding-top:0.5rem;">
                <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                  <a href="${app.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-emerald btn-sm">Open ${app.name} ↗</a>
                  <a href="${app.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">View Source</a>
                </div>
                <button type="button" class="btn btn-secondary btn-sm" onclick="openProductDetail('${app.id}')">Full Technical Specs →</button>
              </div>
            </div>

            <div class="showcase-media-col">
              <div class="media-browser-frame">
                <div class="media-browser-bar">
                  <span>${app.liveWebsiteUrl.replace('https://','')}</span>
                  <button type="button" class="inst-view-btn active" onclick="openLightbox('${app.id}')">⤢ Expand High-DPI Capture</button>
                </div>
                <div class="media-img-wrap" onclick="openLightbox('${app.id}')">
                  <img src="${SCREENSHOTS[app.id]}" alt="${app.name} production interface capture" loading="lazy" />
                </div>
              </div>

              <!-- Interactive Hotspot Callouts -->
              <div>
                <div class="hotspot-bar" style="margin-bottom:0.45rem;">
                  <span style="font-family:var(--font-mono);font-size:0.68rem;color:var(--inst-muted);text-transform:uppercase;">Inspect UI Callouts:</span>
                  ${app.hotspots.map((h, i) => `
                    <button type="button" class="hotspot-pill ${i === hIdx ? 'active' : ''}" onclick="selectShowcaseHotspot('${app.id}', ${i})">${h.label}</button>
                  `).join("")}
                </div>
                <div class="hotspot-readout" id="hotspot-readout-${app.id}">
                  ${activeHotspot.detail}
                </div>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    function selectShowcaseHotspot(appId, idx) {
      activeHotspots[appId] = idx;
      renderHomeShowcases();
    }

    function openLightbox(appId) {
      const app = APP_REGISTRY.find(a => a.id === appId);
      if (!app) return;
      lastFocusedTrigger = document.activeElement;
      document.getElementById("lightbox-title").textContent = `${app.name} (${app.stageBadge}) — Production Workspace Capture`;
      document.getElementById("lightbox-img").src = SCREENSHOTS[appId];
      document.getElementById("lightbox-backdrop").classList.add("open");
    }

    function closeLightbox() {
      const bd = document.getElementById("lightbox-backdrop");
      const wasOpen = bd && bd.classList.contains("open");
      if (bd) bd.classList.remove("open");
      if (wasOpen && lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
        lastFocusedTrigger.focus();
      }
    }

    // -------------------------------------------------------------------------
    // 5. SECTION 4: DIAGNOSTIC TASK ROUTER ("FIND YOUR TOOL")
    // -------------------------------------------------------------------------
    const FINDER_TASKS = [
      {
        id: "clean",
        prompt: "My CSV has messy dates, sentinel -999s, or duplicate keys",
        primaryApp: "datamend-lab",
        companionApp: "visualgrammar",
        why: "Silent row drops or un-recoded sentinel values (-999) corrupt every downstream mean, regression slope, and forecast. DataMend Lab audits and fixes schema anomalies with a full cell-level diff.",
        handoff: "Export the validated UTF-8 CSV from DataMend Lab and load it into VisualGrammar to verify distribution shapes."
      },
      {
        id: "chart",
        prompt: "I need to choose an honest chart that doesn't hide bimodality",
        primaryApp: "visualgrammar",
        companionApp: "resamplelab",
        why: "Default bar charts of group means conceal bimodal responder splits and outliers. VisualGrammar classifies your variables' measurement scales and ranks encodings using Cleveland–McGill (Cleveland-McGill) perceptual hierarchy.",
        handoff: "Once VisualGrammar reveals skewness or multi-modal clusters, pass the column into ResampleLab for nonparametric bootstrap confidence intervals."
      },
      {
        id: "outlier",
        prompt: "I want to test if an outlier or curve is distorting my regression",
        primaryApp: "quartetlab",
        companionApp: "resamplelab",
        why: "Identical summary statistics (x̄, ȳ, s, r) can mask parabolic curvature or extreme Cook's Distance leverage points. QuartetLab compares OLS against robust Theil-Sen median slopes interactively.",
        handoff: "After inspecting high-leverage points in QuartetLab, use ResampleLab to compute bootstrap confidence intervals for the slope or group difference."
      },
      {
        id: "uncertainty",
        prompt: "My sample is skewed or small and I need a 95% confidence interval",
        primaryApp: "resamplelab",
        companionApp: "visualgrammar",
        why: "Normal-theory x̄ ± 1.96·SE intervals fail when data are skewed or heavy-tailed. ResampleLab runs 10,000-replicate bootstrap and permutation simulations including Efron's BCa correction.",
        handoff: "Pair your ResampleLab BCa confidence interval table with a Raincloud distribution export from VisualGrammar."
      },
      {
        id: "forecast",
        prompt: "I have chronological data and need forecasts with prediction intervals",
        primaryApp: "forecastlab",
        companionApp: "datamend-lab",
        why: "Forecasting without STL decomposition, rolling-origin cross-validation, and a Seasonal Naïve baseline invites overfitting. ForecastLab enforces MASE benchmarking and calibrated 80%/95% fan intervals.",
        handoff: "Standardize irregular timestamps in DataMend Lab first, then import the regular monthly/weekly series into ForecastLab."
      }
    ];

    let activeFinderTaskIdx = 0;

    function renderFinderWidget(tasksElId, resultElId) {
      const tasksEl = document.getElementById(tasksElId);
      const resEl = document.getElementById(resultElId);
      if (!tasksEl || !resEl) return;

      tasksEl.innerHTML = FINDER_TASKS.map((t, idx) => {
        const app = APP_REGISTRY.find(a => a.id === t.primaryApp);
        return `
          <button type="button" class="task-option-btn ${idx === activeFinderTaskIdx ? 'active' : ''}" role="tab" aria-selected="${idx === activeFinderTaskIdx}" onclick="selectFinderTask(${idx})">
            <span>${t.prompt}</span>
            <span class="mono-num" style="font-size:0.7rem;color:var(--accent-emerald-bright);">${app.code} →</span>
          </button>
        `;
      }).join("");

      const cur = FINDER_TASKS[activeFinderTaskIdx];
      const pApp = APP_REGISTRY.find(a => a.id === cur.primaryApp);
      const cApp = APP_REGISTRY.find(a => a.id === cur.companionApp);

      resEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
          <span class="inst-mode-badge">RECOMMENDED INSTRUMENT · ${pApp.stageBadge}</span>
          <span class="mono-num" style="font-size:0.72rem;color:var(--inst-muted);">Companion Stage: ${cApp.name}</span>
        </div>
        <div>
          <h3 style="font-family:var(--font-display);font-size:2.1rem;color:#fff;line-height:1.08;">${pApp.name}</h3>
          <div class="mono-num" style="font-size:0.8rem;color:var(--accent-emerald-bright);margin-top:2px;">${pApp.tagline}</div>
        </div>
        <p style="font-size:0.9rem;color:#D1D5DB;line-height:1.58;">${cur.why}</p>
        <div style="background:rgba(255,255,255,0.04);border-left:2px solid var(--accent-emerald-bright);padding:0.65rem 0.85rem;border-radius:0 6px 6px 0;font-size:0.82rem;color:#E5E7EB;">
          <strong style="color:var(--accent-emerald-bright);font-family:var(--font-mono);font-size:0.72rem;display:block;margin-bottom:2px;">RECOMMENDED 2-STAGE HANDOFF</strong>
          ${cur.handoff}
        </div>
        <div style="display:flex;gap:0.6rem;flex-wrap:wrap;padding-top:0.25rem;">
          <a href="${pApp.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-emerald btn-sm">Open ${pApp.name} ↗</a>
          <a href="${pApp.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-dark-outline btn-sm">View Source</a>
          <a href="${cApp.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-dark-outline btn-sm">Companion: ${cApp.name} ↗</a>
        </div>
      `;
    }

    FINDER_TASKS.push({
      id: "clean-and-forecast-messy",
      prompt: "Clean and forecast a messy chronological dataset (DataMend Lab → ForecastLab)",
      primaryApp: "datamend-lab",
      companionApp: "forecastlab",
      why: "DataMend Lab → ForecastLab repairs irregular timestamps, duplicate keys, and numeric sentinels (-999) before fitting seasonal time-series models.",
      handoff: "FILE-BASED HANDOFF: Export the cleaned chronological CSV from DataMend Lab and load it into ForecastLab for STL decomposition and MASE evaluation."
    });

    function selectFinderTask(idxOrId) {
      if (typeof idxOrId === "number") {
        activeFinderTaskIdx = idxOrId;
      } else if (typeof idxOrId === "string") {
        const aliasMap = { "create-chart": "chart", "clean-csv": "clean" };
        const targetId = aliasMap[idxOrId] || idxOrId;
        const foundIdx = FINDER_TASKS.findIndex(t => t.id === targetId);
        activeFinderTaskIdx = foundIdx !== -1 ? foundIdx : 0;
      }
      renderFinderWidget("home-finder-tasks", "home-finder-result");
      renderFinderWidget("page-finder-tasks", "page-finder-result");
    }

    // -------------------------------------------------------------------------
    // 6. LEARNING PATHWAYS, TRUST REGISTRY & SECONDARY VIEWS
    // -------------------------------------------------------------------------
    const LEARNING_MODULES = [
      {
        id: "learn-data-prep",
        code: "MOD 01",
        title: "Deterministic Data Hygiene",
        appId: "datamend-lab",
        summary: "Why sentinel missing codes (-999) and silent inner-join drops invalidate downstream inference, and how AST recipe logs guarantee reproducibility."
      },
      {
        id: "learn-viz-unity",
        code: "MOD 02",
        title: "Known Visualization Unity",
        appId: "visualgrammar",
        summary: "How identical group means conceal bimodal polarization, and how Cleveland-McGill perceptual rankings guide honest graphical encoding."
      },
      {
        id: "learn-regression",
        code: "MOD 03",
        title: "Exact Moments & Leverage",
        appId: "quartetlab",
        summary: "Why scalar correlation (r) and R² cannot distinguish linear trends from quadratic curves or high-leverage outliers (Cook's Dᵢ > 4/n)."
      },
      {
        id: "learn-resampling",
        code: "MOD 04",
        title: "Bootstrap & Permutation Logic",
        appId: "resamplelab",
        summary: "Building sampling distributions directly from observed data via 10,000 Monte Carlo draws and Efron's bias-corrected BCa intervals."
      },
      {
        id: "learn-forecasting",
        code: "MOD 05",
        title: "Temporal Decomposition & MASE",
        appId: "forecastlab",
        summary: "Separating trend from seasonality via STL and evaluating out-of-sample forecast fans against Seasonal Naïve benchmarks."
      }
    ];

    function renderLearningAndRegistry() {
      const learnGrid = document.getElementById("home-learning-grid");
      if (learnGrid) {
        learnGrid.innerHTML = LEARNING_MODULES.map(m => {
          const app = APP_REGISTRY.find(a => a.id === m.appId);
          return `
            <article class="learn-mini-card" id="${m.id}">
              <div>
                <span class="mono-num" style="font-size:0.68rem;color:var(--accent-emerald);font-weight:600;">${m.code} · ${app.stage.toUpperCase()}</span>
                <h4 style="font-family:var(--font-display);font-size:1.3rem;margin-top:3px;line-height:1.15;">${m.title}</h4>
                <p style="font-size:0.8rem;color:var(--ink-secondary);margin-top:0.45rem;line-height:1.48;">${m.summary}</p>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding-top:0.5rem;border-top:1px solid var(--border-hairline);">
                <a href="${app.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="mono-num" style="font-size:0.73rem;color:var(--ink-primary);font-weight:600;">Practice in ${app.name} ↗</a>
              </div>
            </article>
          `;
        }).join("");
      }

      const tbody = document.getElementById("trust-registry-tbody");
      if (tbody) {
        tbody.innerHTML = APP_REGISTRY.map(app => `
          <tr>
            <td class="mono-num" style="font-weight:600;color:var(--accent-emerald);">${app.code} ${app.stage}</td>
            <td><strong style="font-family:var(--font-display);font-size:1.18rem;">${app.name}</strong></td>
            <td style="color:var(--ink-secondary);max-width:36ch;">${app.tagline}</td>
            <td><a href="${app.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Open App ↗</a></td>
            <td><a href="${app.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">View Source</a></td>
          </tr>
        `).join("");
      }

      // Populate Footer & Mobile Links
      const fApps = document.getElementById("footer-app-links");
      const fRepos = document.getElementById("footer-repo-links");
      const mLinks = document.getElementById("mobile-direct-links");
      if (fApps) {
        fApps.innerHTML = APP_REGISTRY.map(a => `<li><a href="${a.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer">${a.code} ${a.name} ↗</a></li>`).join("");
      }
      if (fRepos) {
        fRepos.innerHTML = APP_REGISTRY.map(a => `<li><a href="${a.repositoryUrl}" target="_blank" rel="noopener noreferrer">github.com/rkohnmn/${a.id}</a></li>`).join("");
      }
      if (mLinks) {
        mLinks.innerHTML = APP_REGISTRY.map(a => `
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">
            <a href="${a.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex:1;">Open ${a.name} ↗</a>
            <a href="${a.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Source</a>
          </div>
        `).join("");
      }
    }

    // Secondary Views Rendering
    let activeDirCategory = "all";

    function escapeHtml(str) {
      return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function resetDirectoryFilters() {
      activeDirCategory = "all";
      const inp = document.getElementById("dir-search-input");
      if (inp) inp.value = "";
      renderDirectory();
    }

    function renderDirectory() {
      const pillsEl = document.getElementById("dir-category-pills");
      const gridEl = document.getElementById("directory-results-grid");
      const rawQ = document.getElementById("dir-search-input")?.value || "";
      const q = rawQ.toLowerCase().trim();
      if (!pillsEl || !gridEl) return;

      const cats = [
        { key: "all", label: "All (5)" },
        ...APP_REGISTRY.map(a => ({ key: a.id, label: `${a.code} ${a.stage}` }))
      ];
      pillsEl.innerHTML = cats.map(c => `
        <button type="button" class="stage-pill ${activeDirCategory === c.key ? 'active' : ''}" onclick="setDirCategory('${c.key}')">${c.label}</button>
      `).join("");

      const filtered = APP_REGISTRY.filter(app => {
        const matchCat = activeDirCategory === "all" || app.id === activeDirCategory;
        const matchQ = !q || JSON.stringify(app).toLowerCase().includes(q);
        return matchCat && matchQ;
      });

      if (!filtered.length) {
        gridEl.innerHTML = `
          <div style="grid-column: 1 / -1; background:var(--bg-surface); border:1px solid var(--border-hairline); border-radius:var(--radius-lg); padding:2.25rem; text-align:center;">
            <div class="mono-num" style="font-size:0.75rem;color:var(--ink-muted);margin-bottom:0.35rem;">0 MATCHING LABORATORIES</div>
            <h2 style="font-family:var(--font-display);font-size:1.65rem;margin-bottom:0.4rem;">No instruments matched “${escapeHtml(rawQ)}”</h2>
            <p style="font-size:0.9rem;color:var(--ink-secondary);max-width:46ch;margin:0 auto 1rem;">Try searching by statistical method (e.g., bootstrap, raincloud, Cook’s distance, STL, ISO-8601) or reset the stage filter.</p>
            <button type="button" class="btn btn-primary btn-sm" onclick="resetDirectoryFilters()">Reset Filters (Show All 5 Labs)</button>
          </div>
        `;
        return;
      }

      gridEl.innerHTML = filtered.map(app => `
        <article class="bento-card">
          <div>
            <div class="bento-top-meta">
              <span class="bento-stage-tag">${app.stageBadge}</span>
              <span class="mono-num" style="font-size:0.72rem;color:var(--accent-emerald);">● Live Verified</span>
            </div>
            <h2 class="bento-title" style="margin-top:0.5rem;">${app.name}</h2>
            <div class="bento-tagline">${app.tagline}</div>
            <p class="bento-summary" style="margin-top:0.65rem;">${app.shortDesc}</p>
          </div>
          <div class="media-browser-frame" style="cursor:zoom-in;" onclick="openLightbox('${app.id}')">
            <img src="${SCREENSHOTS[app.id]}" alt="${app.name} workspace" style="width:100%;height:190px;object-fit:cover;object-position:top;display:block;" />
          </div>
          <div class="bento-footer">
            <div style="display:flex;gap:0.45rem;">
              <a href="${app.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-emerald btn-sm">Open App ↗</a>
              <a href="${app.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">View Source</a>
            </div>
            <button type="button" class="btn btn-secondary btn-sm" onclick="openProductDetail('${app.id}')">Specs →</button>
          </div>
        </article>
      `).join("");
    }

    function setDirCategory(cat) {
      activeDirCategory = cat;
      renderDirectory();
    }

    function openProductDetail(appId) {
      const idx = Math.max(0, APP_REGISTRY.findIndex(a => a.id === appId));
      const app = APP_REGISTRY[idx];
      const prevApp = APP_REGISTRY[(idx - 1 + APP_REGISTRY.length) % APP_REGISTRY.length];
      const nextApp = APP_REGISTRY[(idx + 1) % APP_REGISTRY.length];
      const hIdx = activeHotspots[app.id] || 0;
      const activeHotspot = app.hotspots[hIdx];
      const container = document.getElementById("product-detail-container");
      if (!container) return;

      container.innerHTML = `
        <div style="margin-bottom:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.65rem;">
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button type="button" class="btn btn-secondary btn-sm" onclick="navigateTo('home')">← Back to Flagship Overview</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="navigateTo('apps')">All 5 Applications</button>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button type="button" class="btn btn-secondary btn-sm" onclick="openProductDetail('${prevApp.id}')">← ${prevApp.code} ${prevApp.name}</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="openProductDetail('${nextApp.id}')">${nextApp.code} ${nextApp.name} →</button>
          </div>
        </div>
        <div class="showcase-card">
          <div class="showcase-info-col">
            <div>
              <span class="bento-stage-tag">${app.stageBadge}</span>
              <h1 class="showcase-app-title" style="margin-top:0.5rem;">${app.name}</h1>
              <div class="bento-tagline" style="font-size:0.88rem;margin-bottom:0.85rem;">${app.tagline}</div>
              <p style="font-size:0.95rem;color:var(--ink-secondary);line-height:1.6;">${app.shortDesc}</p>
            </div>
            <div class="showcase-question-callout">
              “${app.questionAnswered}”
            </div>
            <div class="showcase-spec-grid">
              <div>
                <div class="spec-item-label">Input Artifact</div>
                <div class="spec-item-body">${app.inputArtifact}</div>
              </div>
              <div>
                <div class="spec-item-label">Output Artifact</div>
                <div class="spec-item-body">${app.outputArtifact}</div>
              </div>
            </div>
            <div>
              <div class="spec-item-label" style="margin-bottom:0.45rem;">Verified Capabilities &amp; Engine Architecture (${app.engineSpec})</div>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:0.4rem;font-size:0.86rem;color:var(--ink-secondary);">
                ${app.capabilities.map(c => `<li><strong style="color:var(--accent-emerald);">✓</strong> ${c}</li>`).join("")}
              </ul>
            </div>
            <div style="display:flex;gap:0.65rem;flex-wrap:wrap;">
              <a href="${app.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-emerald">Open ${app.name} ↗</a>
              <a href="${app.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">View GitHub Source</a>
              <button type="button" class="btn btn-secondary" onclick="launchInHeroSandbox('${app.id}')">⚡ Test in Live Hero Sandbox</button>
            </div>
          </div>
          <div class="showcase-media-col">
            <div class="media-browser-frame">
              <div class="media-browser-bar">
                <span>${app.liveWebsiteUrl}</span>
                <button type="button" class="inst-view-btn active" onclick="openLightbox('${app.id}')">⤢ Expand High-DPI Capture</button>
              </div>
              <div class="media-img-wrap" onclick="openLightbox('${app.id}')">
                <img src="${SCREENSHOTS[app.id]}" alt="${app.name} full workspace" style="width:100%;height:auto;display:block;" />
              </div>
            </div>
            <div>
              <div class="hotspot-bar" style="margin-bottom:0.45rem;">
                <span style="font-family:var(--font-mono);font-size:0.68rem;color:var(--inst-muted);text-transform:uppercase;">Inspect Dossier Callouts:</span>
                ${app.hotspots.map((h, i) => `
                  <button type="button" class="hotspot-pill ${i === hIdx ? 'active' : ''}" onclick="activeHotspots['${app.id}']=${i};openProductDetail('${app.id}')">${h.label}</button>
                `).join("")}
              </div>
              <div class="hotspot-readout">${activeHotspot.detail}</div>
            </div>
          </div>
        </div>
      `;
      navigateTo("product-detail", false);
      document.title = `${app.name} (${app.stageBadge}) — DataSense Studio Technical Dossier`;
      const announcer = document.getElementById("route-announcer");
      if (announcer) announcer.textContent = `Opened technical dossier for ${app.name}`;
      const targetHash = `#product-${app.id}`;
      if (window.location.hash !== targetHash) {
        try { history.pushState(null, "", targetHash); } catch (err) { /* sandboxed iframe history fallback */ }
      }
    }

    const WORKFLOW_PROTOCOLS = [
      {
        id: "wf-cohort",
        title: "Workflow A · End-to-End Observational Cohort Pipeline",
        appIds: ["datamend-lab", "visualgrammar", "resamplelab"],
        badges: ["01 DataMend Lab", "02 VisualGrammar", "04 ResampleLab"],
        artifactChain: "Raw clinical CSV → Validated UTF-8 CSV + pipeline.json → Raincloud SVG → 10,000-draw BCa CI table",
        desc: "Audit raw clinical/survey exports in DataMend Lab (recoding -999 sentinels and normalizing ISO-8601 dates), inspect multi-group distributions with Raincloud plots in VisualGrammar, and compute 10,000-replicate BCa bootstrap confidence intervals in ResampleLab."
      },
      {
        id: "wf-regression",
        title: "Workflow B · Regression Leverage & Nonparametric Robustness Protocol",
        appIds: ["datamend-lab", "quartetlab", "resamplelab"],
        badges: ["01 DataMend Lab", "03 QuartetLab", "04 ResampleLab"],
        artifactChain: "Raw X/Y pairs → Deduplicated continuous table → Cook's Dᵢ & Theil-Sen diagnostic ledger → Bootstrap slope CI",
        desc: "Clean bivariate measurements in DataMend Lab, stress-test Ordinary Least Squares against high-leverage outliers (Cook's Dᵢ > 4/n) and Theil-Sen median slopes in QuartetLab, and quantify slope uncertainty in ResampleLab."
      },
      {
        id: "wf-forecast",
        title: "Workflow C · Seasonal Time-Series Hygiene & Horizon Benchmarking",
        appIds: ["datamend-lab", "visualgrammar", "forecastlab"],
        badges: ["01 DataMend Lab", "02 VisualGrammar", "05 ForecastLab"],
        artifactChain: "Irregular timestamp log → Regular monthly ISO-8601 series → STL decomposition → Calibrated 80%/95% Forecast Fan + MASE table",
        desc: "Regularize chronological timestamps in DataMend Lab, verify distribution variance in VisualGrammar, and run STL decomposition + rolling-origin ETS vs. Seasonal Naïve (MASE) forecasting in ForecastLab."
      }
    ];

    function renderSecondaryPages() {
      // Workflows page
      const wfEl = document.getElementById("workflows-page-list");
      if (wfEl) {
        wfEl.innerHTML = WORKFLOW_PROTOCOLS.map(w => {
          const stageApps = w.appIds.map(id => APP_REGISTRY.find(a => a.id === id)).filter(Boolean);
          const leadApp = stageApps[stageApps.length - 1];
          return `
            <article style="background:var(--bg-surface);border:1px solid var(--border-hairline);border-radius:var(--radius-lg);padding:1.5rem;display:flex;flex-direction:column;gap:0.9rem;box-shadow:var(--shadow-sm);">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.65rem;">
                <div style="display:flex;gap:0.45rem;flex-wrap:wrap;align-items:center;">
                  ${stageApps.map(a => `<button type="button" class="bento-stage-tag" style="cursor:pointer;border:1px solid var(--border-hairline);" onclick="openProductDetail('${a.id}')">${a.code} ${a.name}</button>`).join("<span class='mono-num' style='color:var(--ink-muted);'>→</span>")}
                </div>
                <button type="button" class="btn btn-secondary btn-sm" onclick="launchInHeroSandbox('${leadApp.id}')">⚡ Test ${leadApp.name} in Hero Sandbox</button>
              </div>
              <h2 style="font-family:var(--font-display);font-size:1.75rem;">${w.title}</h2>
              <p style="color:var(--ink-secondary);font-size:0.92rem;line-height:1.6;">${w.desc}</p>
              <div style="background:var(--bg-elevated);border:1px solid var(--border-hairline);border-radius:var(--radius-sm);padding:0.6rem 0.85rem;font-family:var(--font-mono);font-size:0.74rem;color:var(--ink-primary);">
                <strong style="color:var(--accent-emerald);">ARTIFACT HANDOFF CHAIN:</strong> ${w.artifactChain}
              </div>
              <div style="display:flex;gap:0.5rem;flex-wrap:wrap;padding-top:0.25rem;">
                ${stageApps.map(a => `
                  <a href="${a.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Launch ${a.name} ↗</a>
                  <a href="${a.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">${a.name} Source</a>
                `).join("")}
              </div>
            </article>
          `;
        }).join("");
      }

      // Learn page
      const learnPage = document.getElementById("learn-page-content");
      if (learnPage) {
        learnPage.innerHTML = LEARNING_MODULES.map(m => {
          const app = APP_REGISTRY.find(a => a.id === m.appId);
          return `
            <div style="background:var(--bg-surface);border:1px solid var(--border-hairline);border-radius:var(--radius-lg);padding:1.5rem;display:flex;justify-content:space-between;align-items:center;gap:1.5rem;flex-wrap:wrap;">
              <div style="max-width:68ch;">
                <span class="bento-stage-tag">${m.code} · ${app.name}</span>
                <h2 style="font-family:var(--font-display);font-size:1.8rem;margin-top:0.4rem;">${m.title}</h2>
                <p style="color:var(--ink-secondary);margin-top:0.4rem;">${m.summary}</p>
              </div>
              <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                <button type="button" class="btn btn-secondary btn-sm" onclick="launchInHeroSandbox('${app.id}')">⚡ Interactive Sandbox</button>
                <a href="${app.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-emerald btn-sm">Launch ${app.name} ↗</a>
                <a href="${app.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">View Source</a>
              </div>
            </div>
          `;
        }).join("");
      }

      // Methods page
      const methodsPage = document.getElementById("methods-page-content");
      if (methodsPage) {
        methodsPage.innerHTML = `
          <span class="section-eyebrow">Shared Statistical &amp; Graphical Standards</span>
          <h1 class="section-heading">Methodological Guardrails Across All Five Labs</h1>
          <p class="section-sublead" style="margin-top:0.65rem;margin-bottom:2rem;">
            DataSense Studio enforces shared mathematical and graphical standards across every repository so analytical claims remain defensible.
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.25rem;">
            <div class="bento-card">
              <div>
                <span class="bento-stage-tag">STANDARD 01 · QUARTETLAB</span>
                <h2 class="bento-title" style="margin-top:0.45rem;">Always Plot Before Summarizing</h2>
                <p class="bento-summary" style="margin-top:0.45rem;">Scalar moments (mean, SD, correlation r) are never displayed in isolation from their underlying coordinate geometry, leverage (hᵢᵢ), Cook's Distance (Dᵢ &gt; 4/n), and residual plots.</p>
              </div>
              <div class="bento-footer">
                <a href="https://rkohnmn.github.io/quartetlab/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Verify in QuartetLab ↗</a>
                <button type="button" class="btn btn-secondary btn-sm" onclick="launchInHeroSandbox('quartetlab')">Live Demo</button>
              </div>
            </div>
            <div class="bento-card">
              <div>
                <span class="bento-stage-tag">STANDARD 02 · VISUALGRAMMAR</span>
                <h2 class="bento-title" style="margin-top:0.45rem;">Prohibition of Truncated Bars</h2>
                <p class="bento-summary" style="margin-top:0.45rem;">Bar charts encoding magnitude must anchor at zero. Group comparisons default to Raincloud or Box + Jitter encodings ranked by Cleveland–McGill (Cleveland-McGill) perceptual hierarchy to expose multi-modal clusters.</p>
              </div>
              <div class="bento-footer">
                <a href="https://rkohnmn.github.io/visualgrammar/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Verify in VisualGrammar ↗</a>
                <button type="button" class="btn btn-secondary btn-sm" onclick="launchInHeroSandbox('visualgrammar')">Live Demo</button>
              </div>
            </div>
            <div class="bento-card">
              <div>
                <span class="bento-stage-tag">STANDARD 03 · RESAMPLELAB &amp; FORECASTLAB</span>
                <h2 class="bento-title" style="margin-top:0.45rem;">Explicit Uncertainty &amp; Baselines</h2>
                <p class="bento-summary" style="margin-top:0.45rem;">Point estimates require 10,000-replicate bootstrap/BCa confidence intervals, and time-series forecasts require out-of-sample MASE comparison against a Seasonal Naïve baseline.</p>
              </div>
              <div class="bento-footer">
                <a href="https://rkohnmn.github.io/resamplelab/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Verify in ResampleLab ↗</a>
                <a href="https://rkohnmn.github.io/forecastlab/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">ForecastLab ↗</a>
              </div>
            </div>
          </div>
        `;
      }

      // About page
      const aboutPage = document.getElementById("about-page-content");
      if (aboutPage) {
        aboutPage.innerHTML = `
          <span class="section-eyebrow">About the Studio</span>
          <h1 class="section-heading">The Modern Statistical Atelier</h1>
          <p class="section-sublead" style="margin-top:0.65rem;margin-bottom:2rem;">
            DataSense Studio unites five focused, open-source web laboratories designed to make rigorous statistical practice tactile, visual, and immediately accessible in any modern browser.
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-bottom:2rem;">
            <div class="guardrail-card">
              <div class="mono-num" style="font-size:0.7rem;color:var(--accent-emerald);font-weight:600;">ARCHITECTURE · ZERO TELEMETRY</div>
              <strong style="display:block;margin-top:2px;">100% Client-Side Execution</strong>
              <p style="font-size:0.82rem;color:var(--ink-secondary);margin-top:4px;">All CSV parsing, Monte Carlo resampling, and STL decompositions execute locally in browser memory. Sensitive research data never leaves your machine.</p>
            </div>
            <div class="guardrail-card">
              <div class="mono-num" style="font-size:0.7rem;color:var(--accent-emerald);font-weight:600;">REPRODUCIBILITY · OPEN SOURCE</div>
              <strong style="display:block;margin-top:2px;">Inspectable Algorithms &amp; Seeds</strong>
              <p style="font-size:0.82rem;color:var(--ink-secondary);margin-top:4px;">Every laboratory publishes its full source repository on GitHub and exports deterministic JSON, R, or Python artifacts.</p>
            </div>
            <div class="guardrail-card">
              <div class="mono-num" style="font-size:0.7rem;color:var(--accent-emerald);font-weight:600;">ERGONOMICS · KEYBOARD NAVIGATION</div>
              <strong style="display:block;margin-top:2px;">Tactile &amp; Keyboard Accessible</strong>
              <p style="font-size:0.82rem;color:var(--ink-secondary);margin-top:4px;">Press <kbd class="kbd-pill">/</kbd> anywhere to search across tools and methods, <kbd class="kbd-pill">Esc</kbd> to dismiss modals, and <kbd class="kbd-pill">←↑↓→</kbd> to nudge regression points.</p>
            </div>
          </div>
          <div style="background:var(--bg-surface);border:1px solid var(--border-hairline);border-radius:var(--radius-lg);padding:1.5rem;">
            <h2 style="font-family:var(--font-display);font-size:1.6rem;margin-bottom:0.75rem;">Authoritative Application &amp; Repository Directory</h2>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;">
              ${APP_REGISTRY.map(a => `
                <div style="padding:0.9rem;border:1px solid var(--border-hairline);border-radius:var(--radius-md);">
                  <strong>${a.code} · ${a.name}</strong>
                  <div style="font-size:0.8rem;color:var(--ink-secondary);margin:0.25rem 0 0.65rem;">${a.tagline}</div>
                  <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
                    <a href="${a.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Open App ↗</a>
                    <a href="${a.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Repository</a>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="openProductDetail('${a.id}')">Specs</button>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `;
      }
    }

    // -------------------------------------------------------------------------
    // 7. ROUTING, NAVIGATION & GLOBAL SEARCH
    // -------------------------------------------------------------------------
    const ROUTE_TITLES = {
      home: "DataSense Studio — Serious Statistical Tools, Made Approachable",
      apps: "Applications Directory (5 Labs) — DataSense Studio",
      workflows: "Connected Analytical Workflows — DataSense Studio",
      finder: "Find Your Statistical Tool — DataSense Studio",
      learn: "Unified Statistical Learning Pathways — DataSense Studio",
      methods: "Statistical & Graphical Standards — DataSense Studio",
      about: "About the Atelier — DataSense Studio",
      compass: "DataSense Compass — Intelligent Data Discovery, Quality Gate & Routing"
    };
    let lastFocusedTrigger = null;

    function navigateTo(route, updateHash = true) {
      document.querySelectorAll(".view-section").forEach(s => s.classList.remove("active"));
      const target = document.getElementById(`view-${route}`) || document.getElementById("view-home");
      target.classList.add("active");

      document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-route") === route);
      });
      if (ROUTE_TITLES[route]) {
        document.title = ROUTE_TITLES[route];
        const announcer = document.getElementById("route-announcer");
        if (announcer) announcer.textContent = `Navigated to ${ROUTE_TITLES[route]}`;
      }
      if (updateHash) {
        const nextHash = route === "home" ? "#home" : `#${route}`;
        if (window.location.hash !== nextHash) {
          try { history.pushState(null, "", nextHash); } catch (err) { /* sandboxed iframe history fallback */ }
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function scrollToSection(id) {
      navigateTo("home", false);
      try { history.pushState(null, "", `#${id}`); } catch (err) { /* sandboxed iframe history fallback */ }
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    }

    function handleHashRoute() {
      const rawHash = (window.location.hash || "").replace(/^#/, "").trim();
      if (!rawHash || rawHash === "home") {
        navigateTo("home", false);
        return;
      }
      if (rawHash.startsWith("product-")) {
        const appId = rawHash.replace("product-", "");
        if (APP_REGISTRY.some(a => a.id === appId)) {
          openProductDetail(appId);
          return;
        }
      }
      const validViews = ["compass", "apps", "workflows", "finder", "learn", "methods", "about"];
      if (validViews.includes(rawHash)) {
        navigateTo(rawHash, false);
        return;
      }
      const sectionEl = document.getElementById(rawHash);
      if (sectionEl) {
        navigateTo("home", false);
        setTimeout(() => sectionEl.scrollIntoView({ behavior: "smooth", block: "start" }), 40);
      }
    }

    window.addEventListener("hashchange", handleHashRoute);
    window.addEventListener("popstate", handleHashRoute);

    function toggleMobileMenu() {
      const drawer = document.getElementById("mobile-drawer");
      const backdrop = document.getElementById("mobile-backdrop");
      const btn = document.getElementById("mobile-menu-btn");
      const isOpen = drawer.classList.toggle("open");
      backdrop.classList.toggle("open", isOpen);
      if (btn) btn.setAttribute("aria-expanded", String(isOpen));
    }
    function closeMobileMenu() {
      const drawer = document.getElementById("mobile-drawer");
      const backdrop = document.getElementById("mobile-backdrop");
      const btn = document.getElementById("mobile-menu-btn");
      if (drawer) drawer.classList.remove("open");
      if (backdrop) backdrop.classList.remove("open");
      if (btn) btn.setAttribute("aria-expanded", "false");
    }

    function openSearchModal() {
      lastFocusedTrigger = document.activeElement;
      document.getElementById("search-modal-backdrop").classList.add("open");
      const input = document.getElementById("global-search-input");
      if (input) {
        input.value = "";
        runGlobalSearch("");
        setTimeout(() => input.focus(), 40);
      }
    }
    function closeSearchModal() {
      const bd = document.getElementById("search-modal-backdrop");
      const wasOpen = bd && bd.classList.contains("open");
      if (bd) bd.classList.remove("open");
      if (wasOpen && lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
        lastFocusedTrigger.focus();
      }
    }
    function quickSearch(term) {
      const input = document.getElementById("global-search-input");
      if (input) {
        input.value = term;
        runGlobalSearch(term);
      }
    }

    function runGlobalSearch(query) {
      const rawQ = query || "";
      const q = rawQ.toLowerCase().trim();
      const resEl = document.getElementById("global-search-results");
      if (!resEl) return;

      const tokens = q ? q.split(/\s+/).filter(Boolean) : [];
      const matchesAll = (obj) => {
        if (!tokens.length) return true;
        const hay = JSON.stringify(obj).toLowerCase();
        return tokens.every(tok => hay.includes(tok));
      };
      const appMatches = APP_REGISTRY.filter(a => matchesAll(a));
      const learnMatches = q ? LEARNING_MODULES.filter(m => matchesAll(m)) : [];
      const taskMatches = q ? FINDER_TASKS.filter(t => matchesAll(t)) : [];

      if (!appMatches.length && !learnMatches.length && !taskMatches.length) {
        resEl.innerHTML = `<div style="padding:1rem;color:var(--ink-muted);font-size:0.88rem;">No matching instruments, modules, or workflows found for “${escapeHtml(rawQ)}”.</div>`;
        return;
      }

      const appRows = appMatches.map(a => `
        <div style="padding:0.75rem;border-bottom:1px solid var(--border-hairline);display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;">
          <div style="max-width:44ch;">
            <span class="mono-num" style="font-size:0.7rem;color:var(--accent-emerald);font-weight:600;">${a.stageBadge}</span>
            <strong style="display:block;font-size:1rem;">${a.name} — ${a.tagline}</strong>
            <span style="font-size:0.8rem;color:var(--ink-secondary);">${a.shortDesc}</span>
          </div>
          <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
            <button type="button" class="btn btn-secondary btn-sm" onclick="closeSearchModal();openProductDetail('${a.id}')">Specs</button>
            <a href="${a.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-emerald btn-sm">Open App ↗</a>
            <a href="${a.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Source</a>
          </div>
        </div>
      `).join("");

      const learnRows = learnMatches.map(m => {
        const app = APP_REGISTRY.find(a => a.id === m.appId);
        return `
          <div style="padding:0.75rem;border-bottom:1px solid var(--border-hairline);display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;">
            <div style="max-width:44ch;">
              <span class="mono-num" style="font-size:0.7rem;color:var(--accent-cobalt);font-weight:600;">LEARNING MODULE · ${m.code}</span>
              <strong style="display:block;font-size:0.95rem;">${m.title} (${app.name})</strong>
              <span style="font-size:0.78rem;color:var(--ink-secondary);">${m.summary}</span>
            </div>
            <div style="display:flex;gap:0.4rem;">
              <button type="button" class="btn btn-secondary btn-sm" onclick="closeSearchModal();navigateTo('learn')">Open Module →</button>
              <a href="${app.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-emerald btn-sm">Launch ${app.name} ↗</a>
            </div>
          </div>
        `;
      }).join("");

      const taskRows = taskMatches.map((t) => {
        const tIdx = FINDER_TASKS.indexOf(t);
        const app = APP_REGISTRY.find(a => a.id === t.primaryApp);
        return `
          <div style="padding:0.75rem;border-bottom:1px solid var(--border-hairline);display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;">
            <div style="max-width:44ch;">
              <span class="mono-num" style="font-size:0.7rem;color:var(--accent-vermilion);font-weight:600;">DIAGNOSTIC TASK ROUTER</span>
              <strong style="display:block;font-size:0.95rem;">${t.prompt}</strong>
              <span style="font-size:0.78rem;color:var(--ink-secondary);">Recommended: ${app.name} — ${t.why}</span>
            </div>
            <div style="display:flex;gap:0.4rem;">
              <button type="button" class="btn btn-secondary btn-sm" onclick="closeSearchModal();selectFinderTask(${tIdx});navigateTo('finder')">View Prescription →</button>
            </div>
          </div>
        `;
      }).join("");

      resEl.innerHTML = appRows + learnRows + taskRows;
    }

    // Keyboard shortcuts ('/' for search, 'Escape' to close modals)
    window.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();
        openSearchModal();
      } else if (e.key === "Escape") {
        closeSearchModal();
        closeLightbox();
        closeMobileMenu();
        closeFavouritesDrawer();
      }
    });


    // -------------------------------------------------------------------------
    // 8. DESIGNEER.XYZ-INSPIRED INTERACTIVE FINDS, PLAYGROUNDS & FOLDERS ENGINE
    // -------------------------------------------------------------------------
    const DESIGNEER_FINDS = [
      {
        id: "find-abacus",
        kind: "micro",
        appId: "visualgrammar",
        stage: "Visualize",
        code: "FIND 01",
        creator: "VisualGrammar × ResampleLab",
        accent: "#4F46E5",
        title: "Hover Quantile Abacus",
        subtitle: "Hover or click any bead to perturb the tail and compare Mean vs. Median resistance",
        desc: "Inspired by tactile hover abacus explorations: scrub across 9 sorted observations or spike the right-hand tail bead to watch how a single extreme value drags the arithmetic mean while the median holds steady.",
        recipeLang: "R · Robust Location Summary",
        recipeCode: `tibble(x = c(34, 37, 39, 41, 42, 43, 45, 48, 96)) |>\n  summarise(mean = mean(x), median = median(x), iqr = IQR(x))`
      },
      {
        id: "find-spring",
        kind: "micro",
        appId: "forecastlab",
        stage: "Forecast",
        code: "FIND 02",
        creator: "ForecastLab × QuartetLab",
        accent: "#2563EB",
        title: "Spring-Physics LOESS Bandwidth",
        subtitle: "Tune smoothing span α from wiggly overfit (0.18) to optimal trend (0.48)",
        desc: "Just as spring stiffness governs UI motion, LOESS bandwidth α governs bias-variance trade-off. Switch smoothing spans below to inspect how under-smoothing chases noise while optimal α extracts the true signal.",
        recipeLang: "R · STL / LOESS Decomposition",
        recipeCode: `fit <- loess(y ~ t, data = series_df, span = 0.48, degree = 2)\naugment(fit) |> ggplot(aes(t, y)) + geom_line(aes(y = .fitted))`
      },
      {
        id: "find-shredder",
        kind: "labs",
        appId: "datamend-lab",
        stage: "Prepare",
        code: "01 LAB",
        creator: "DataMend Lab",
        accent: "#0D9488",
        title: "Sentinel -999 Cell Shredder",
        subtitle: "Click corrupted cells to neutralize -999 sentinels and mixed dates live",
        desc: "Raw clinical exports often encode missingness as -999, pulling a normal 126.4 mmHg blood pressure mean down to -154.9 mmHg. Click any red anomaly pill below to repair it deterministically.",
        recipeLang: "R · Deterministic Hygiene Pipe",
        recipeCode: `df_clean <- df_raw |>\n  mutate(sbp = na_if(sbp, -999), visit = ymd(parse_date_time(visit, c("mdy","ymd")))) |>\n  distinct(patient_id, visit, .keep_all = TRUE)`
      },
      {
        id: "find-raincloud",
        kind: "labs",
        appId: "visualgrammar",
        stage: "Visualize",
        code: "02 LAB",
        creator: "VisualGrammar",
        accent: "#4F46E5",
        title: "Same-Mean Bimodal Unmasker",
        subtitle: "Morph a deceptive Bar-of-Means (x̄ = 50.0) into a Raincloud density view",
        desc: "Two clinical cohorts share the exact same mean (50.0) and standard error. Toggle the encoding below to reveal that Cohort B is actually split into non-responders (28) and hyper-responders (72).",
        recipeLang: "R · ggdist Raincloud Specification",
        recipeCode: `ggplot(cohorts, aes(x = group, y = response, fill = group)) +\n  ggdist::stat_halfeye(adjust = 0.6, width = 0.6, .width = 0) +\n  geom_boxplot(width = 0.14, outlier.shape = NA) + scale_fill_okabe_ito()`
      },
      {
        id: "find-leverage",
        kind: "labs",
        appId: "quartetlab",
        stage: "Investigate",
        code: "03 LAB",
        creator: "QuartetLab",
        accent: "#D9381E",
        title: "Cook’s Distance Leverage Tug-of-War",
        subtitle: "Perturb the high-leverage point (x = 14) and pit OLS against Theil-Sen",
        desc: "Watch Ordinary Least Squares tilt dramatically when a single boundary observation moves vertically, while the nonparametric Theil-Sen median-of-slopes estimator resists breakdown.",
        recipeLang: "Python · OLS vs. Theil-Sen & Cook's D",
        recipeCode: `import statsmodels.api as sm\nfrom scipy.stats import theilslopes\nols = sm.OLS(y, sm.add_constant(x)).fit()\ncooks_d = ols.get_influence().cooks_distance[0]\nts_slope, ts_int, _, _ = theilslopes(y, x, 0.95)`
      },
      {
        id: "find-bootstrap",
        kind: "labs",
        appId: "resamplelab",
        stage: "Infer",
        code: "04 LAB",
        creator: "ResampleLab",
        accent: "#0F6E56",
        title: "Monte Carlo BCa Bootstrap Pulse",
        subtitle: "Trigger fresh resamples and compare asymmetric BCa bounds vs. Normal theory",
        desc: "For skewed physiological or financial data, symmetric x̄ ± 1.96·SE intervals misstate tail risk. Resample with replacement right inside this card to observe Efron's bias-corrected BCa interval.",
        recipeLang: "R · 10,000-Replicate BCa Interval",
        recipeCode: `library(boot)\nboot_out <- boot(data = x_vec, statistic = function(d, i) median(d[i]), R = 10000)\nboot.ci(boot_out, conf = 0.95, type = c("perc", "bca"))`
      },
      {
        id: "find-fan",
        kind: "labs",
        appId: "forecastlab",
        stage: "Forecast",
        code: "05 LAB",
        creator: "ForecastLab",
        accent: "#2563EB",
        title: "Calibrated 80%/95% Horizon Fan",
        subtitle: "Scrub horizon h = 6m → 24m and audit out-of-sample MASE vs. Seasonal Naïve",
        desc: "Point forecasts without prediction intervals conceal compounding horizon uncertainty. Scrub the horizon below to inspect how ETS damped trend fans widen and beat the MASE = 1.00 baseline.",
        recipeLang: "R · fable ETS & MASE Scorecard",
        recipeCode: ` fit <- ts_data |> model(ets = ETS(y ~ error("A") + trend("Ad") + season("M")), snaive = SNAIVE(y))\nfit |> forecast(h = "12 months") |> accuracy(ts_holdout, list(mase = MASE, rmse = RMSE))`
      },
      {
        id: "find-palette",
        kind: "micro",
        appId: "visualgrammar",
        stage: "Visualize",
        code: "FIND 08",
        creator: "VisualGrammar Accessibility Lab",
        accent: "#0D9488",
        title: "Okabe-Ito Perceptual Vision Simulator",
        subtitle: "Simulate Deuteranopia and Protanopia to verify ΔE luminance separation",
        desc: "Default red-green status encodings collapse into indistinguishable mud for 8% of male readers. Toggle color-vision deficiency modes below to verify why DataSense Studio pairs hue with luminance and shape.",
        recipeLang: "CSS · Colorblind-Safe Design Tokens",
        recipeCode: `:root {\n  --oi-emerald: #009E73; /* High luminance contrast */\n  --oi-vermilion: #D55E00; /* Redundant shape + dash encoding */\n  --oi-cobalt: #0072B2;\n}`
      },
      {
        id: "find-pipeline",
        kind: "micro",
        appId: "datamend-lab",
        stage: "Prepare",
        code: "FIND 09",
        creator: "DataSense Studio Core",
        accent: "#0F6E56",
        title: "5-Stage Handoff Protocol Generator",
        subtitle: "Switch between R Tidyverse, Python Pandas, and JSON Schema handoff specs",
        desc: "Copy a complete 5-stage reproducible workflow template that chains DataMend Lab hygiene, VisualGrammar rainclouds, QuartetLab leverage checks, ResampleLab BCa intervals, and ForecastLab MASE evaluation.",
        recipeLang: "JSON · Cross-Lab Manifest v2.4",
        recipeCode: `{\n  "pipeline": ["datamend-lab", "visualgrammar", "quartetlab", "resamplelab", "forecastlab"],\n  "guardrails": { "zeroBaselineBars": true, "cooksThreshold": "4/n", "bootstrapDraws": 10000, "maseBaseline": "snaive" }\n}`
      }
    ];

    // Interactive state for the 9 Designeer Find Cards
    let dsFilterCat = "all";
    let dsFilterCol = "all";
    let dsDensity = "grid";
    let dsCardViewMode = {}; // findId -> 'play' | 'shot' | 'code'

    // Find #01 Abacus state
    let abacusBeads = [34, 37, 39, 41, 42, 43, 45, 48, 52];
    let abacusActiveIdx = 8;

    // Find #02 Spring LOESS state
    let springSpan = 0.48; // 0.18, 0.48, 0.88

    // Find #03 Shredder state (which anomaly cells are fixed)
    let shredderFixed = [false, false, false];

    // Find #04 Raincloud mini state
    let miniRainMode = "rain"; // 'bar' or 'rain'

    // Find #05 Leverage mini state
    let miniOutlierY = 12.8; // 6.5 (inlier) vs 12.8 (outlier)

    // Find #06 Bootstrap mini state
    let miniBootSeed = 101;
    let miniBootLo = 39.2, miniBootHi = 46.8, miniBootMed = 41.6;

    // Find #07 Fan mini state
    let miniFanH = 12;

    // Find #08 Vision simulator state
    let visionSimMode = "normal"; // 'normal', 'deuteranopia', 'protanopia'

    // Find #09 Protocol language state
    let protoLang = "r"; // 'r', 'py', 'json'

    // Favourites & Folders state (persisted in localStorage safely)
    const DEFAULT_FAVS = ["find-abacus", "find-shredder", "find-leverage"];
    const DEFAULT_FOLDERS = [
      { id: "all", name: "All Saved" },
      { id: "clinical", name: "Clinical Trial QA" },
      { id: "teaching", name: "Stats 101 Syllabus" }
    ];
    let savedFinds = [...DEFAULT_FAVS];
    let customFolders = [...DEFAULT_FOLDERS];
    let activeFolderId = "all";

    function loadSavedState() {
      try {
        const rawFavs = window.localStorage.getItem("ds_saved_finds_v2");
        if (rawFavs) {
          const parsed = JSON.parse(rawFavs);
          if (Array.isArray(parsed)) savedFinds = parsed;
        }
        const rawFolders = window.localStorage.getItem("ds_custom_folders_v2");
        if (rawFolders) {
          const parsedF = JSON.parse(rawFolders);
          if (Array.isArray(parsedF) && parsedF.length) customFolders = parsedF;
        }
      } catch (err) { /* local storage or clipboard fallback in restricted context */ }
    }

    function persistSavedState() {
      try {
        window.localStorage.setItem("ds_saved_finds_v2", JSON.stringify(savedFinds));
        window.localStorage.setItem("ds_custom_folders_v2", JSON.stringify(customFolders));
      } catch (err) { /* local storage or clipboard fallback in restricted context */ }
      updateFavBadges();
    }

    function updateFavBadges() {
      const badge = document.getElementById("fav-count-badge");
      if (badge) badge.textContent = String(savedFinds.length);
      const fCount = document.getElementById("ds-folder-count");
      if (fCount) fCount.textContent = String(customFolders.length);
      const heroFavBtn = document.getElementById("hero-fav-btn");
      if (heroFavBtn && APP_REGISTRY[activeHeroIndex]) {
        const curAppId = APP_REGISTRY[activeHeroIndex].id;
        const matchingFind = DESIGNEER_FINDS.find(f => f.appId === curAppId && f.kind === "labs");
        const isSaved = matchingFind && savedFinds.includes(matchingFind.id);
        heroFavBtn.textContent = isSaved ? "♥ Saved" : "♥ Save";
      }
    }

    function showCraftToast(msg) {
      const t = document.getElementById("craft-toast");
      if (!t) return;
      t.textContent = msg;
      t.classList.add("show");
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
    }

    function copyTextSafe(text, label) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text);
        }
      } catch (err) { /* local storage or clipboard fallback in restricted context */ }
      showCraftToast(`✓ Copied ${label} to clipboard`);
    }

    function toggleFindFavourite(findId) {
      const idx = savedFinds.indexOf(findId);
      const item = DESIGNEER_FINDS.find(f => f.id === findId);
      if (idx >= 0) {
        savedFinds.splice(idx, 1);
        showCraftToast(`Removed “${item ? item.title : findId}” from Saved Folder`);
      } else {
        savedFinds.push(findId);
        showCraftToast(`♥ Saved “${item ? item.title : findId}” to Folder`);
      }
      persistSavedState();
      renderDesigneerCatalogue();
      renderFavouritesDrawer();
    }

    function toggleHeroFavourite() {
      const app = APP_REGISTRY[activeHeroIndex];
      const find = DESIGNEER_FINDS.find(f => f.appId === app.id && f.kind === "labs") || DESIGNEER_FINDS[0];
      toggleFindFavourite(find.id);
    }

    function copyHeroRecipe() {
      const app = APP_REGISTRY[activeHeroIndex];
      const find = DESIGNEER_FINDS.find(f => f.appId === app.id && f.kind === "labs") || DESIGNEER_FINDS[0];
      copyTextSafe(find.recipeCode, `${app.name} reproducible recipe`);
    }

    function jumpToFind(findId) {
      dsFilterCat = "all";
      dsFilterCol = "all";
      renderDesigneerCatalogue();
      scrollToSection("designeer-catalogue");
      setTimeout(() => {
        const el = document.getElementById(findId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.style.borderColor = "#34D399";
          setTimeout(() => { el.style.borderColor = ""; }, 1600);
        }
      }, 120);
    }

    function setDesigneerCategory(cat) {
      dsFilterCat = cat;
      renderDesigneerCatalogue();
    }

    function setDesigneerColor(col) {
      dsFilterCol = col;
      document.querySelectorAll(".ds-swatch-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-col") === col);
      });
      renderDesigneerCatalogue();
    }

    function setDesigneerDensity(mode) {
      dsDensity = mode;
      document.getElementById("ds-density-grid")?.classList.toggle("active", mode === "grid");
      document.getElementById("ds-density-studio")?.classList.toggle("active", mode === "studio");
      const grid = document.getElementById("designeer-cards-grid");
      if (grid) {
        grid.classList.toggle("density-studio", mode === "studio");
      }
    }

    function setFindCardView(findId, view) {
      dsCardViewMode[findId] = view;
      renderDesigneerCatalogue();
    }

    // Interactive handlers for the 9 Find micro-playgrounds
    function toggleAbacusBead(idx) {
      abacusActiveIdx = idx;
      if (idx === 8) {
        abacusBeads[8] = abacusBeads[8] > 60 ? 52 : 98;
      } else {
        const base = [34, 37, 39, 41, 42, 43, 45, 48, 52][idx];
        abacusBeads[idx] = abacusBeads[idx] === base ? base + 6 : base;
      }
      renderDesigneerCatalogue();
    }

    function setSpringBandwidth(spanVal) {
      springSpan = spanVal;
      renderDesigneerCatalogue();
    }

    function toggleShredderCell(idx) {
      shredderFixed[idx] = !shredderFixed[idx];
      renderDesigneerCatalogue();
    }

    function toggleMiniRainMode(m) {
      miniRainMode = m;
      renderDesigneerCatalogue();
    }

    function toggleMiniOutlier(val) {
      miniOutlierY = val;
      renderDesigneerCatalogue();
    }

    function pulseMiniBootstrap() {
      miniBootSeed += 13;
      const jitter = ((miniBootSeed % 7) - 3) * 0.12;
      miniBootMed = 41.6 + jitter;
      miniBootLo = 39.2 + jitter * 0.8;
      miniBootHi = 46.8 + jitter * 1.1;
      renderDesigneerCatalogue();
    }

    function setMiniFanHorizon(h) {
      miniFanH = h;
      renderDesigneerCatalogue();
    }

    function setVisionSim(mode) {
      visionSimMode = mode;
      renderDesigneerCatalogue();
    }

    function setProtoLang(lang) {
      protoLang = lang;
      renderDesigneerCatalogue();
    }

    function buildFindInteractiveStage(find) {
      const app = APP_REGISTRY.find(a => a.id === find.appId) || APP_REGISTRY[0];
      const view = dsCardViewMode[find.id] || "play";

      if (view === "shot") {
        return `
          <div style="position:relative;height:172px;border-radius:6px;overflow:hidden;border:1px solid #262C3A;cursor:zoom-in;" onclick="openLightbox('${app.id}')">
            <img src="${SCREENSHOTS[app.id]}" alt="${app.name} high-DPI capture" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block;" loading="lazy" />
            <div style="position:absolute;bottom:6px;right:6px;background:rgba(13,16,20,0.86);padding:0.2rem 0.5rem;border-radius:4px;font-family:var(--font-mono);font-size:0.65rem;color:#34D399;">⤢ Click for High-DPI Lightbox</div>
          </div>
        `;
      }

      if (view === "code") {
        return `
          <div style="display:flex;flex-direction:column;justify-content:space-between;height:172px;background:#0D1014;border:1px solid #262C3A;border-radius:6px;padding:0.65rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;font-family:var(--font-mono);font-size:0.66rem;color:#34D399;">
              <span>${find.recipeLang}</span>
              <button type="button" class="find-view-pill active" onclick="copyTextSafe(DESIGNEER_FINDS.find(f=>f.id==='${find.id}').recipeCode, '${find.title} recipe')">⎘ Copy Snippet</button>
            </div>
            <pre style="font-family:var(--font-mono);font-size:0.68rem;color:#E5E7EB;overflow-x:auto;white-space:pre-wrap;line-height:1.45;margin:0;">${escapeHtml(find.recipeCode)}</pre>
            <div style="font-family:var(--font-mono);font-size:0.64rem;color:#9CA3AF;">100% deterministic · Ready for RStudio, Jupyter, or DataSense CLI</div>
          </div>
        `;
      }

      // Default: 'play' live interactive micro-playground
      if (find.id === "find-abacus") {
        const sorted = [...abacusBeads].sort((a,b) => a - b);
        const mean = abacusBeads.reduce((s,v) => s + v, 0) / abacusBeads.length;
        const median = sorted[4];
        const tailSpiked = abacusBeads[8] > 60;
        return `
          <div style="display:flex;justify-content:space-between;align-items:center;font-family:var(--font-mono);font-size:0.68rem;color:#9CA3AF;">
            <span>HOVER OR CLICK ANY BEAD TO PERTURB</span>
            <button type="button" class="find-view-pill active" onclick="toggleAbacusBead(8)">${tailSpiked ? '↺ Restore Tail (52)' : '⚡ Spike Outlier (98)'}</button>
          </div>
          <div class="abacus-rail" role="group" aria-label="Interactive quantile abacus beads">
            ${abacusBeads.map((v, i) => `
              <button type="button" class="abacus-bead ${i===8?'outlier-bead':''} ${abacusActiveIdx===i?'active':''}" onmouseenter="toggleAbacusBead(${i})" onclick="toggleAbacusBead(${i})" aria-label="Bead ${i+1} value ${v}">${v}</button>
            `).join("")}
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.4rem;font-family:var(--font-mono);font-size:0.7rem;background:#12161F;padding:0.45rem 0.6rem;border-radius:6px;border:1px solid #262C3A;">
            <div><span style="color:#9CA3AF;font-size:0.62rem;display:block;">SAMPLE MEAN</span><strong style="color:${tailSpiked?'#F87171':'#E5E7EB'};">${mean.toFixed(1)} ${tailSpiked?'(+5.1!)':''}</strong></div>
            <div><span style="color:#9CA3AF;font-size:0.62rem;display:block;">MEDIAN (ROBUST)</span><strong style="color:#34D399;">${median.toFixed(1)} ✓</strong></div>
            <div><span style="color:#9CA3AF;font-size:0.62rem;display:block;">BREAKDOWN</span><strong style="color:#60A5FA;">50% Resist</strong></div>
          </div>
        `;
      }

      if (find.id === "find-spring") {
        const isWiggly = springSpan < 0.25;
        const isFlat = springSpan > 0.75;
        const pathD = isWiggly
          ? "M15,105 L45,55 L75,92 L105,35 L135,78 L165,28 L195,68 L225,22 L255,58 L285,20"
          : isFlat
          ? "M15,85 L285,36"
          : "M15,96 C85,82 140,28 285,24";
        return `
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.3rem;flex-wrap:wrap;">
            <span class="mono-num" style="font-size:0.66rem;color:#9CA3AF;">BANDWIDTH SPAN α:</span>
            <div style="display:flex;gap:0.25rem;">
              <button type="button" class="find-view-pill ${isWiggly?'active':''}" onclick="setSpringBandwidth(0.18)">α=0.18 (Overfit)</button>
              <button type="button" class="find-view-pill ${!isWiggly&&!isFlat?'active':''}" onclick="setSpringBandwidth(0.48)">α=0.48 (Optimal)</button>
              <button type="button" class="find-view-pill ${isFlat?'active':''}" onclick="setSpringBandwidth(0.88)">α=0.88 (Rigid)</button>
            </div>
          </div>
          <svg viewBox="0 0 300 120" style="width:100%;height:112px;display:block;background:#0D1014;border-radius:6px;border:1px solid #1E2636;">
            <circle cx="20" cy="98" r="3" fill="#64748B"/><circle cx="52" cy="58" r="3" fill="#64748B"/><circle cx="84" cy="86" r="3" fill="#64748B"/><circle cx="116" cy="40" r="3" fill="#64748B"/><circle cx="148" cy="70" r="3" fill="#64748B"/><circle cx="180" cy="32" r="3" fill="#64748B"/><circle cx="212" cy="56" r="3" fill="#64748B"/><circle cx="244" cy="24" r="3" fill="#64748B"/><circle cx="278" cy="26" r="3" fill="#64748B"/>
            <path d="${pathD}" fill="none" stroke="${!isWiggly&&!isFlat ? '#34D399' : '#F59E0B'}" stroke-width="2.5"/>
            <text x="14" y="20" fill="#9CA3AF" font-family="JetBrains Mono" font-size="8.5">${isWiggly ? '⚠ High Variance (Chases Noise)' : isFlat ? '⚠ High Bias (Misses Curvature)' : '✓ Cross-Validated LOESS Optimum'}</text>
          </svg>
        `;
      }

      if (find.id === "find-shredder") {
        const fixedCount = shredderFixed.filter(Boolean).length;
        const allClean = fixedCount === 3;
        return `
          <div style="display:flex;justify-content:space-between;align-items:center;font-family:var(--font-mono);font-size:0.66rem;">
            <span style="color:${allClean?'#34D399':'#F87171'};">${allClean ? '✓ All 3 Anomalies Neutralized' : `⚠ ${3-fixedCount} Corrupt Cells Active (Click to Clean)`}</span>
            <button type="button" class="find-view-pill active" onclick="shredderFixed=[true,true,true];renderDesigneerCatalogue();">Clean All</button>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.35rem;font-family:var(--font-mono);font-size:0.7rem;">
            <button type="button" onclick="toggleShredderCell(0)" style="display:flex;justify-content:space-between;padding:0.36rem 0.55rem;border-radius:5px;border:1px solid ${shredderFixed[0]?'#0F6E56':'#D9381E'};background:${shredderFixed[0]?'rgba(15,110,86,0.18)':'rgba(217,56,30,0.16)'};color:#fff;cursor:pointer;">
              <span>Row #14 · sbp_mmhg</span>
              <strong style="color:${shredderFixed[0]?'#34D399':'#FCA5A5'};">${shredderFixed[0] ? 'NA (Explicit Null ✓)' : '-999 (Sentinel! Click)'}</strong>
            </button>
            <button type="button" onclick="toggleShredderCell(1)" style="display:flex;justify-content:space-between;padding:0.36rem 0.55rem;border-radius:5px;border:1px solid ${shredderFixed[1]?'#0F6E56':'#D9381E'};background:${shredderFixed[1]?'rgba(15,110,86,0.18)':'rgba(217,56,30,0.16)'};color:#fff;cursor:pointer;">
              <span>Row #29 · visit_date</span>
              <strong style="color:${shredderFixed[1]?'#34D399':'#FCA5A5'};">${shredderFixed[1] ? '2025-03-14 (ISO ✓)' : '"03/14/25" (Click)'}</strong>
            </button>
            <button type="button" onclick="toggleShredderCell(2)" style="display:flex;justify-content:space-between;padding:0.36rem 0.55rem;border-radius:5px;border:1px solid ${shredderFixed[2]?'#0F6E56':'#D9381E'};background:${shredderFixed[2]?'rgba(15,110,86,0.18)':'rgba(217,56,30,0.16)'};color:#fff;cursor:pointer;">
              <span>Row #41 · key_id</span>
              <strong style="color:${shredderFixed[2]?'#34D399':'#FCA5A5'};">${shredderFixed[2] ? 'Deduplicated ✓' : 'Duplicate PT-1042'}</strong>
            </button>
          </div>
          <div style="font-family:var(--font-mono);font-size:0.68rem;color:#9CA3AF;display:flex;justify-content:space-between;">
            <span>Cohort Mean SBP:</span>
            <strong style="color:${shredderFixed[0]?'#34D399':'#F87171'};">${shredderFixed[0] ? '126.4 mmHg (Valid)' : '-154.9 mmHg (Corrupted!)'}</strong>
          </div>
        `;
      }

      if (find.id === "find-raincloud") {
        const isRain = miniRainMode === "rain";
        return `
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="mono-num" style="font-size:0.66rem;color:#9CA3AF;">COHORT A vs. COHORT B (BOTH x̄ = 50.0)</span>
            <div style="display:flex;gap:0.25rem;">
              <button type="button" class="find-view-pill ${!isRain?'active':''}" onclick="toggleMiniRainMode('bar')">Bar of Means</button>
              <button type="button" class="find-view-pill ${isRain?'active':''}" onclick="toggleMiniRainMode('rain')">Raincloud ✓</button>
            </div>
          </div>
          <svg viewBox="0 0 300 116" style="width:100%;height:112px;display:block;background:#0D1014;border-radius:6px;border:1px solid #1E2636;">
            ${!isRain ? `
              <rect x="55" y="34" width="65" height="68" rx="3" fill="#4F46E5"/>
              <rect x="175" y="34" width="65" height="68" rx="3" fill="#4F46E5"/>
              <text x="87" y="25" fill="#E5E7EB" font-family="JetBrains Mono" font-size="8.5" text-anchor="middle">Mean = 50.0</text>
              <text x="207" y="25" fill="#F87171" font-family="JetBrains Mono" font-size="8.5" text-anchor="middle">Mean = 50.0 (Hides Split!)</text>
            ` : `
              <path d="M55,98 Q95,62 55,26 Z" fill="rgba(52,211,153,0.3)" stroke="#34D399" stroke-width="1.6"/>
              <circle cx="46" cy="60" r="2.8" fill="#34D399"/><circle cx="49" cy="66" r="2.8" fill="#34D399"/><circle cx="45" cy="54" r="2.8" fill="#34D399"/>
              <path d="M175,102 Q220,86 180,62 Q220,36 175,18 Z" fill="rgba(217,56,30,0.3)" stroke="#F87171" stroke-width="1.6"/>
              <circle cx="166" cy="88" r="2.8" fill="#F87171"/><circle cx="169" cy="84" r="2.8" fill="#F87171"/><circle cx="166" cy="34" r="2.8" fill="#F87171"/><circle cx="169" cy="39" r="2.8" fill="#F87171"/>
              <text x="215" y="64" fill="#FCA5A5" font-family="JetBrains Mono" font-size="8">← 2 Distinct Peaks!</text>
            `}
          </svg>
        `;
      }

      if (find.id === "find-leverage") {
        const high = miniOutlierY > 10;
        return `
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="mono-num" style="font-size:0.66rem;color:${high?'#F87171':'#34D399'};">COOK'S Dᵢ = ${high ? '0.92 (HIJACKED!)' : '0.04 (STABLE)'}</span>
            <div style="display:flex;gap:0.25rem;">
              <button type="button" class="find-view-pill ${high?'active':''}" onclick="toggleMiniOutlier(12.8)">Outlier y=12.8</button>
              <button type="button" class="find-view-pill ${!high?'active':''}" onclick="toggleMiniOutlier(6.8)">Inlier y=6.8</button>
            </div>
          </div>
          <svg viewBox="0 0 300 116" style="width:100%;height:112px;display:block;background:#0D1014;border-radius:6px;border:1px solid #1E2636;">
            <!-- OLS Line -->
            <line x1="24" y1="88" x2="270" y2="${high ? '22' : '48'}" stroke="#F3F4F6" stroke-width="2"/>
            <!-- Robust Theil-Sen Line -->
            <line x1="24" y1="86" x2="270" y2="50" stroke="#34D399" stroke-width="2" stroke-dasharray="4 2"/>
            <circle cx="45" cy="82" r="3.5" fill="#34D399"/><circle cx="90" cy="75" r="3.5" fill="#34D399"/><circle cx="135" cy="68" r="3.5" fill="#34D399"/><circle cx="180" cy="62" r="3.5" fill="#34D399"/>
            <circle cx="250" cy="${high ? '18' : '52'}" r="6" fill="${high ? '#D9381E' : '#34D399'}" stroke="#fff" stroke-width="1.2"/>
            <text x="30" y="24" fill="#E5E7EB" font-family="JetBrains Mono" font-size="8.5">OLS β₁ = ${high ? '0.50' : '0.30'}</text>
            <text x="30" y="37" fill="#34D399" font-family="JetBrains Mono" font-size="8.5">Theil-Sen β₁ = 0.30 (Robust)</text>
          </svg>
        `;
      }

      if (find.id === "find-bootstrap") {
        return `
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="mono-num" style="font-size:0.66rem;color:#34D399;">SEED #${miniBootSeed} · B = 10,000</span>
            <button type="button" class="find-view-pill active" onclick="pulseMiniBootstrap()">↻ Resample +1,000</button>
          </div>
          <svg viewBox="0 0 300 84" style="width:100%;height:82px;display:block;background:#0D1014;border-radius:6px;border:1px solid #1E2636;">
            <rect x="42" y="58" width="14" height="18" fill="#D9381E"/><rect x="60" y="44" width="14" height="32" fill="#0F6E56"/><rect x="78" y="28" width="14" height="48" fill="#0F6E56"/><rect x="96" y="14" width="14" height="62" fill="#34D399"/><rect x="114" y="18" width="14" height="58" fill="#0F6E56"/><rect x="132" y="30" width="14" height="46" fill="#0F6E56"/><rect x="150" y="42" width="14" height="34" fill="#0F6E56"/><rect x="168" y="54" width="14" height="22" fill="#0F6E56"/><rect x="186" y="62" width="14" height="14" fill="#D9381E"/>
            <text x="208" y="34" fill="#34D399" font-family="JetBrains Mono" font-size="8.5">θ̂* = ${miniBootMed.toFixed(2)}</text>
            <text x="208" y="52" fill="#E5E7EB" font-family="JetBrains Mono" font-size="8">BCa: [${miniBootLo.toFixed(1)}, ${miniBootHi.toFixed(1)}]</text>
          </svg>
          <div style="font-family:var(--font-mono);font-size:0.68rem;color:#9CA3AF;display:flex;justify-content:space-between;">
            <span>95% BCa Asymmetric CI:</span>
            <strong style="color:#34D399;">[${miniBootLo.toFixed(2)}, ${miniBootHi.toFixed(2)}]</strong>
          </div>
        `;
      }

      if (find.id === "find-fan") {
        const wide = miniFanH === 24;
        return `
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="mono-num" style="font-size:0.66rem;color:#60A5FA;">HORIZON h = ${miniFanH} MONTHS</span>
            <div style="display:flex;gap:0.25rem;">
              <button type="button" class="find-view-pill ${!wide?'active':''}" onclick="setMiniFanHorizon(12)">h = 12m</button>
              <button type="button" class="find-view-pill ${wide?'active':''}" onclick="setMiniFanHorizon(24)">h = 24m (Wider Fan)</button>
            </div>
          </div>
          <svg viewBox="0 0 300 112" style="width:100%;height:108px;display:block;background:#0D1014;border-radius:6px;border:1px solid #1E2636;">
            <polyline points="15,78 45,62 75,72 105,50 135,64 165,44" fill="none" stroke="#F3F4F6" stroke-width="1.8"/>
            <line x1="165" y1="12" x2="165" y2="100" stroke="#F59E0B" stroke-dasharray="2 2"/>
            <polygon points="165,44 280,${wide ? '8' : '22'} 280,${wide ? '96' : '74'}" fill="rgba(37,99,235,0.28)" stroke="rgba(96,165,250,0.45)"/>
            <line x1="165" y1="44" x2="280" y2="38" stroke="#60A5FA" stroke-width="2"/>
            <text x="172" y="96" fill="#34D399" font-family="JetBrains Mono" font-size="8.5">ETS MASE = 0.68 vs S-Naïve 1.00</text>
          </svg>
        `;
      }

      if (find.id === "find-palette") {
        const isDeut = visionSimMode === "deuteranopia";
        const isProt = visionSimMode === "protanopia";
        const c1 = isDeut ? "#008866" : isProt ? "#007F66" : "#009E73";
        const c2 = isDeut ? "#C87D00" : isProt ? "#B87400" : "#D55E00";
        const c3 = "#0072B2";
        return `
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.25rem;flex-wrap:wrap;">
            <span class="mono-num" style="font-size:0.65rem;color:#9CA3AF;">VISION MODE:</span>
            <div style="display:flex;gap:0.2rem;">
              <button type="button" class="find-view-pill ${visionSimMode==='normal'?'active':''}" onclick="setVisionSim('normal')">Normal</button>
              <button type="button" class="find-view-pill ${isDeut?'active':''}" onclick="setVisionSim('deuteranopia')">Deuteranopia</button>
              <button type="button" class="find-view-pill ${isProt?'active':''}" onclick="setVisionSim('protanopia')">Protanopia</button>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.45rem;padding:0.4rem 0;">
            <div style="background:${c1};padding:0.6rem 0.45rem;border-radius:6px;color:#fff;font-family:var(--font-mono);font-size:0.66rem;text-align:center;">
              <strong>● Emerald</strong><span style="display:block;font-size:0.6rem;opacity:0.9;">ΔL* +42</span>
            </div>
            <div style="background:${c2};padding:0.6rem 0.45rem;border-radius:6px;color:#fff;font-family:var(--font-mono);font-size:0.66rem;text-align:center;">
              <strong>▲ Vermilion</strong><span style="display:block;font-size:0.6rem;opacity:0.9;">ΔL* +28</span>
            </div>
            <div style="background:${c3};padding:0.6rem 0.45rem;border-radius:6px;color:#fff;font-family:var(--font-mono);font-size:0.66rem;text-align:center;">
              <strong>■ Cobalt</strong><span style="display:block;font-size:0.6rem;opacity:0.9;">ΔL* +19</span>
            </div>
          </div>
          <div style="font-family:var(--font-mono);font-size:0.67rem;color:#34D399;">✓ Redundant shape (● ▲ ■) + luminance guarantees 100% separation</div>
        `;
      }

      // Find #09 Protocol Generator
      const snippets = {
        r: `df |> datamend_clean() |> visualgrammar_raincloud() |> resample_bca(R = 10000)`,
        py: `df.pipe(datamend_audit).pipe(quartet_cooks_d).pipe(forecast_stl_ets, h=12)`,
        json: `{"stages": ["01-prepare","02-visualize","03-investigate","04-infer","05-forecast"]}`
      };
      return `
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;gap:0.25rem;">
            <button type="button" class="find-view-pill ${protoLang==='r'?'active':''}" onclick="setProtoLang('r')">R Tidyverse</button>
            <button type="button" class="find-view-pill ${protoLang==='py'?'active':''}" onclick="setProtoLang('py')">Python</button>
            <button type="button" class="find-view-pill ${protoLang==='json'?'active':''}" onclick="setProtoLang('json')">JSON Spec</button>
          </div>
          <button type="button" class="find-view-pill active" onclick="copyTextSafe('${snippets[protoLang].replace(/'/g, "\\'")}', '5-stage pipeline snippet')">⎘ Copy</button>
        </div>
        <pre style="background:#0D1014;border:1px solid #262C3A;border-radius:6px;padding:0.6rem;font-family:var(--font-mono);font-size:0.68rem;color:#34D399;overflow-x:auto;margin:0;">${escapeHtml(snippets[protoLang])}</pre>
        <div style="font-family:var(--font-mono);font-size:0.66rem;color:#9CA3AF;display:flex;justify-content:space-between;">
          <span>Zero server uploads · 100% browser-native</span>
          <span style="color:#E5E7EB;">5 Linked Repositories</span>
        </div>
      `;
    }

    function renderDesigneerCatalogue() {
      const grid = document.getElementById("designeer-cards-grid");
      const pillsWrap = document.getElementById("ds-category-pills");
      if (!grid) return;

      if (pillsWrap) {
        const cats = [
          { key: "all", label: `All Finds (${DESIGNEER_FINDS.length})` },
          { key: "micro", label: "✦ Micro-Playgrounds (4)" },
          { key: "labs", label: "Flagship Labs (5)" },
          { key: "Prepare", label: "01 Prepare" },
          { key: "Visualize", label: "02 Visualize" },
          { key: "Investigate", label: "03 Investigate" },
          { key: "Infer", label: "04 Infer" },
          { key: "Forecast", label: "05 Forecast" },
          { key: "saved", label: `♥ Saved Folder (${savedFinds.length})` }
        ];
        pillsWrap.innerHTML = cats.map(c => `
          <button type="button" class="ds-cat-btn ${dsFilterCat === c.key ? 'active' : ''}" onclick="setDesigneerCategory('${c.key}')">${c.label}</button>
        `).join("");
      }

      const filtered = DESIGNEER_FINDS.filter(f => {
        const matchCat =
          dsFilterCat === "all" ||
          (dsFilterCat === "micro" && f.kind === "micro") ||
          (dsFilterCat === "labs" && f.kind === "labs") ||
          (dsFilterCat === "saved" && savedFinds.includes(f.id)) ||
          f.stage === dsFilterCat;
        const matchCol = dsFilterCol === "all" || f.accent.toLowerCase() === dsFilterCol.toLowerCase();
        return matchCat && matchCol;
      });

      if (!filtered.length) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; background:#151921; border:1px solid var(--inst-border); border-radius:var(--radius-lg); padding:2rem; text-align:center;">
            <div class="mono-num" style="font-size:0.75rem;color:#9CA3AF;margin-bottom:0.35rem;">NO FINDS MATCH CURRENT FILTER</div>
            <p style="color:#E5E7EB;font-size:0.9rem;margin-bottom:0.85rem;">Reset the category or colour swatch filter to explore all 9 interactive finds and laboratories.</p>
            <button type="button" class="btn btn-emerald btn-sm" onclick="dsFilterCat='all';setDesigneerColor('all')">Reset Catalogue Filters</button>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map(find => {
        const app = APP_REGISTRY.find(a => a.id === find.appId) || APP_REGISTRY[0];
        const curView = dsCardViewMode[find.id] || "play";
        const isSaved = savedFinds.includes(find.id);
        return `
          <article class="find-card" id="${find.id}" onmousemove="const r=this.getBoundingClientRect();this.style.setProperty('--mx',(event.clientX-r.left)+'px');this.style.setProperty('--my',(event.clientY-r.top)+'px');">
            <div class="find-card-top">
              <div class="find-creator-pill">
                <span class="find-avatar-dot" style="background:${find.accent};">${app.code}</span>
                <span>${find.creator}</span>
              </div>
              <div class="find-view-switcher" role="group" aria-label="Switch card view mode">
                <button type="button" class="find-view-pill ${curView==='play'?'active':''}" onclick="setFindCardView('${find.id}','play')">1·Play</button>
                <button type="button" class="find-view-pill ${curView==='shot'?'active':''}" onclick="setFindCardView('${find.id}','shot')">2·UI</button>
                <button type="button" class="find-view-pill ${curView==='code'?'active':''}" onclick="setFindCardView('${find.id}','code')">3·Code</button>
              </div>
            </div>

            <div class="find-stage">
              ${buildFindInteractiveStage(find)}
            </div>

            <div class="find-body">
              <div class="find-title-row">
                <h3 class="find-title">${find.title}</h3>
                <span class="mono-num" style="font-size:0.66rem;padding:0.12rem 0.42rem;border-radius:4px;background:rgba(255,255,255,0.06);color:#D1D5DB;white-space:nowrap;">${find.code}</span>
              </div>
              <div class="mono-num" style="font-size:0.72rem;color:var(--accent-emerald-bright);">${find.subtitle}</div>
              <p class="find-desc">${find.desc}</p>
            </div>

            <div class="find-footer">
              <div style="display:flex;gap:0.35rem;flex-wrap:wrap;">
                <a href="${app.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-emerald btn-sm" style="padding:0.3rem 0.65rem;font-size:0.74rem;">Open ${app.name} ↗</a>
                <button type="button" class="btn btn-dark-outline btn-sm" style="padding:0.3rem 0.6rem;font-size:0.73rem;" onclick="launchInHeroSandbox('${app.id}')">⚡ Hero Sandbox</button>
              </div>
              <div style="display:flex;gap:0.35rem;align-items:center;">
                <button type="button" class="fav-heart-btn ${isSaved?'saved':''}" onclick="toggleFindFavourite('${find.id}')" aria-label="Save ${find.title} to Favourites">
                  <span>${isSaved ? '♥ Saved' : '♡ Save'}</span>
                </button>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    function openFavouritesDrawer() {
      lastFocusedTrigger = document.activeElement;
      renderFavouritesDrawer();
      document.getElementById("fav-drawer-backdrop")?.classList.add("open");
      document.getElementById("favourites-drawer")?.classList.add("open");
    }

    function closeFavouritesDrawer() {
      document.getElementById("fav-drawer-backdrop")?.classList.remove("open");
      document.getElementById("favourites-drawer")?.classList.remove("open");
      if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
        lastFocusedTrigger.focus();
      }
    }

    function createCustomFolder(evt) {
      evt.preventDefault();
      const inp = document.getElementById("new-folder-input");
      const name = (inp?.value || "").trim();
      if (!name) return;
      const newId = "folder-" + Date.now();
      customFolders.push({ id: newId, name });
      activeFolderId = newId;
      if (inp) inp.value = "";
      persistSavedState();
      renderFavouritesDrawer();
      showCraftToast(`📁 Created folder “${name}”`);
    }

    function selectFavFolder(id) {
      activeFolderId = id;
      renderFavouritesDrawer();
    }

    function resetDefaultFavourites() {
      savedFinds = [...DEFAULT_FAVS];
      customFolders = [...DEFAULT_FOLDERS];
      activeFolderId = "all";
      persistSavedState();
      renderDesigneerCatalogue();
      renderFavouritesDrawer();
      showCraftToast("Restored default curated kit (3 instruments)");
    }

    function copySavedKitMarkdown() {
      const items = DESIGNEER_FINDS.filter(f => savedFinds.includes(f.id));
      const lines = [
        "# DataSense Studio — Curated Statistical Instrument Kit",
        ...items.map(f => {
          const app = APP_REGISTRY.find(a => a.id === f.appId) || APP_REGISTRY[0];
          return `- **${f.title}** (${app.name}): ${app.liveWebsiteUrl} | Source: ${app.repositoryUrl}`;
        })
      ];
      copyTextSafe(lines.join("\n"), "Curated Kit Markdown");
    }

    function renderFavouritesDrawer() {
      const fList = document.getElementById("fav-folders-list");
      const container = document.getElementById("fav-items-container");
      if (!fList || !container) return;

      fList.innerHTML = customFolders.map(folder => `
        <button type="button" class="ds-cat-btn ${activeFolderId === folder.id ? 'active' : ''}" onclick="selectFavFolder('${folder.id}')">
          📁 ${escapeHtml(folder.name)}
        </button>
      `).join("");

      const items = DESIGNEER_FINDS.filter(f => savedFinds.includes(f.id));
      if (!items.length) {
        container.innerHTML = `
          <div style="padding:1.5rem;text-align:center;background:#151921;border:1px solid var(--inst-border);border-radius:var(--radius-md);color:#9CA3AF;font-size:0.84rem;">
            No instruments or finds saved yet. Click <strong>♡ Save</strong> on any card in the catalogue to build your custom statistical toolkit.
          </div>
        `;
        return;
      }

      container.innerHTML = items.map(f => {
        const app = APP_REGISTRY.find(a => a.id === f.appId) || APP_REGISTRY[0];
        return `
          <div style="background:#151921;border:1px solid var(--inst-border);border-radius:var(--radius-md);padding:0.85rem;display:flex;flex-direction:column;gap:0.45rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="mono-num" style="font-size:0.68rem;color:var(--accent-emerald-bright);">${app.stageBadge} · ${f.code}</span>
              <button type="button" class="find-view-pill" onclick="toggleFindFavourite('${f.id}')">Remove ✕</button>
            </div>
            <strong style="font-family:var(--font-display);font-size:1.25rem;color:#fff;">${f.title}</strong>
            <span style="font-size:0.78rem;color:#9CA3AF;">${f.subtitle}</span>
            <div style="display:flex;gap:0.4rem;flex-wrap:wrap;padding-top:0.25rem;">
              <a href="${app.liveWebsiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-emerald btn-sm">Launch ${app.name} ↗</a>
              <a href="${app.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-dark-outline btn-sm">Source</a>
              <button type="button" class="btn btn-dark-outline btn-sm" onclick="copyTextSafe(DESIGNEER_FINDS.find(x=>x.id==='${f.id}').recipeCode, '${f.title} recipe')">⎘ Recipe</button>
            </div>
          </div>
        `;
      }).join("");
    }




    // =========================================================================
    // 9. DATASENSE COMPASS — UI CONTROLLER, SVG VIZ & HANDOFF MANAGER
    // =========================================================================
    let compassState = {
      activeSampleId: "housing",
      customDataset: null,
      primaryVar: "sale_price_usd",
      secondaryVar: null,
      temporalOutcomeVar: null,
      typeOverrides: {},
      subsetFilter: { variable: "", value: "ALL" },
      centerMode: "explorer", // 'explorer' | 'matrix' | 'pair' | 'table'
      explanationLevel: "standard", // 'simple' | 'standard' | 'technical'
      familySortModes: {
        numericAssociations: "abs_strength",
        groupDifferences: "abs_strength",
        categoricalAssociations: "abs_strength",
        temporalSeries: "abs_strength"
      },
      pairPlotOptions: {
        showOLS: true,
        showBinnedCurve: true,
        catPlotMode: "stacked" // 'stacked' | 'grouped'
      },
      lastAnalysis: null,
      activeHandoffEnvelope: null,
      handoffHistory: []
    };

    const COMPASS_DB_NAME = "datasense_compass_handoff_v1";
    const COMPASS_STORE_NAME = "handoffs";
    const COMPASS_CHANNEL_NAME = "datasense_compass_channel_v1";
    let compassBroadcastChannel = null;

    function initCompassHandoffChannel() {
      if (typeof BroadcastChannel !== "undefined" && !compassBroadcastChannel) {
        try {
          compassBroadcastChannel = new BroadcastChannel(COMPASS_CHANNEL_NAME);
          compassBroadcastChannel.onmessage = (ev) => {
            const msg = ev.data || {};
            if (msg.type === "RETURN_READY" && msg.handoffId) {
              consumeReturnedHandoffFromIDB(msg.handoffId);
            }
          };
        } catch (err) { /* ignore sandboxed BroadcastChannel restriction */ }
      }
    }

    function openCompassIDB() {
      return new Promise((resolve, reject) => {
        if (typeof indexedDB === "undefined") {
          return reject(new Error("IndexedDB unavailable in this context"));
        }
        const req = indexedDB.open(COMPASS_DB_NAME, 1);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(COMPASS_STORE_NAME)) {
            db.createObjectStore(COMPASS_STORE_NAME, { keyPath: "handoffId" });
          }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    }

    async function saveHandoffEnvelopeToIDB(envelope) {
      try {
        // Compute WebCrypto SHA-256 digest if available
        if (window.crypto && window.crypto.subtle && typeof TextEncoder !== "undefined") {
          const payloadBytes = new TextEncoder().encode(JSON.stringify({
            headers: envelope.dataset.headers,
            rows: envelope.dataset.rows
          }));
          const hashBuffer = await window.crypto.subtle.digest("SHA-256", payloadBytes);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          envelope.integrityDigest = "sha256_" + hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
        }
        envelope.state = "READY_FOR_TARGET";
        const db = await openCompassIDB();
        await new Promise((res, rej) => {
          const tx = db.transaction(COMPASS_STORE_NAME, "readwrite");
          tx.objectStore(COMPASS_STORE_NAME).put(envelope);
          tx.oncomplete = () => res();
          tx.onerror = () => rej(tx.error);
        });
        if (compassBroadcastChannel) {
          compassBroadcastChannel.postMessage({
            type: "HANDOFF_READY",
            handoffId: envelope.handoffId,
            state: envelope.state
          });
        }
        return true;
      } catch (err) {
        return false;
      }
    }

    async function consumeReturnedHandoffFromIDB(handoffId) {
      try {
        const db = await openCompassIDB();
        const record = await new Promise((res, rej) => {
          const tx = db.transaction(COMPASS_STORE_NAME, "readonly");
          const req = tx.objectStore(COMPASS_STORE_NAME).get(handoffId);
          req.onsuccess = () => res(req.result);
          req.onerror = () => rej(req.error);
        });
        if (record && record.cleanedDataset) {
          record.state = "RETURN_CONSUMED";
          const tx2 = db.transaction(COMPASS_STORE_NAME, "readwrite");
          tx2.objectStore(COMPASS_STORE_NAME).put(record);
          applyReturnedCleanedDataset(record.cleanedDataset, record.auditSummary, record.handoffId);
        }
      } catch (err) { /* fallback handled in memory */ }
    }

    function getActiveCompassDatasetInput() {
      if (compassState.customDataset) {
        return compassState.customDataset;
      }
      const sample = DataSenseCompassEngine.SAMPLE_DATASETS[compassState.activeSampleId]
        || DataSenseCompassEngine.SAMPLE_DATASETS.housing;
      return {
        csvText: sample.csvText,
        meta: {
          id: sample.id,
          name: sample.name,
          description: sample.description
        }
      };
    }

    function runCompassAnalysisAndRender() {
      const dsInput = getActiveCompassDatasetInput();
      const rawInput = dsInput.csvText !== undefined ? dsInput.csvText : dsInput;
      const meta = dsInput.meta || {};

      const subsetSpec = (compassState.subsetFilter && compassState.subsetFilter.variable && compassState.subsetFilter.value !== "ALL")
        ? compassState.subsetFilter
        : null;

      const result = DataSenseCompassEngine.analyzeDataset(rawInput, {
        id: meta.id,
        name: meta.name,
        description: meta.description,
        primaryVar: compassState.primaryVar,
        secondaryVar: compassState.secondaryVar,
        temporalOutcomeVar: compassState.temporalOutcomeVar,
        typeOverrides: compassState.typeOverrides,
        subsetFilter: subsetSpec
      });

      compassState.lastAnalysis = result;
      compassState.primaryVar = result.primaryVar;
      compassState.secondaryVar = result.secondaryVar;

      renderCompassHomePreview(result);
      renderCompassWorkspace(result);
    }

    function selectCompassSample(sampleId, fromHome = false) {
      const sample = DataSenseCompassEngine.SAMPLE_DATASETS[sampleId];
      if (!sample) return;
      compassState.activeSampleId = sampleId;
      compassState.customDataset = null;
      compassState.primaryVar = sample.defaultPrimaryVar;
      compassState.secondaryVar = null;
      compassState.temporalOutcomeVar = null;
      compassState.typeOverrides = {};
      compassState.subsetFilter = { variable: "", value: "ALL" };
      runCompassAnalysisAndRender();
      if (!fromHome) {
        showCraftToast(`Loaded benchmark: ${sample.shortLabel}`);
      }
    }

    function onCompassPrimaryChange(newPrimaryVar, fromHome = false) {
      compassState.primaryVar = newPrimaryVar;
      if (compassState.secondaryVar === newPrimaryVar) {
        compassState.secondaryVar = null;
      }
      runCompassAnalysisAndRender();
    }

    function onCompassTemporalOutcomeChange(newOutcomeVar) {
      compassState.temporalOutcomeVar = newOutcomeVar || null;
      runCompassAnalysisAndRender();
    }

    function selectCompassSecondaryPair(varName, switchToPairView = true) {
      compassState.secondaryVar = varName;
      if (switchToPairView) {
        compassState.centerMode = "pair";
      }
      runCompassAnalysisAndRender();
    }

    function onCompassTypeOverride(varName, newType) {
      if (!newType || newType === "AUTO") {
        delete compassState.typeOverrides[varName];
      } else {
        compassState.typeOverrides[varName] = newType;
      }
      runCompassAnalysisAndRender();
      showCraftToast(`Updated "${varName}" semantic type`);
    }

    function resetCompassTypeOverrides() {
      compassState.typeOverrides = {};
      runCompassAnalysisAndRender();
      showCraftToast("Reset all variable types to inferred defaults");
    }

    function onCompassSubsetVarChange(varName) {
      compassState.subsetFilter = { variable: varName, value: "ALL" };
      runCompassAnalysisAndRender();
    }

    function onCompassSubsetValChange(val) {
      compassState.subsetFilter.value = val;
      runCompassAnalysisAndRender();
    }

    function clearCompassSubsetFilter() {
      compassState.subsetFilter = { variable: "", value: "ALL" };
      runCompassAnalysisAndRender();
    }

    function setCompassCenterMode(mode) {
      compassState.centerMode = mode;
      ["explorer", "matrix", "pair", "table"].forEach(m => {
        const tab = document.getElementById(`compass-tab-${m}`);
        const pane = document.getElementById(`compass-pane-${m}`);
        if (tab) tab.classList.toggle("active", m === mode);
        if (pane) pane.style.display = m === mode ? "block" : "none";
      });
    }

    function setCompassExplanationLevel(level) {
      compassState.explanationLevel = level;
      if (compassState.lastAnalysis) {
        renderCompassDetailedPairPane(compassState.lastAnalysis);
      }
    }

    function setCompassFamilySort(familyKey, sortMode) {
      compassState.familySortModes[familyKey] = sortMode;
      if (compassState.lastAnalysis) {
        renderCompassExplorerPane(compassState.lastAnalysis);
      }
    }

    // File Upload & Drag-and-Drop Handlers (Preserves uploaded dataset into /compass/)
    function handleCompassDragOver(e, el) {
      e.preventDefault();
      e.stopPropagation();
      if (el) el.classList.add("drag-over");
    }

    function handleCompassDragLeave(e, el) {
      e.preventDefault();
      e.stopPropagation();
      if (el) el.classList.remove("drag-over");
    }

    function handleCompassFileDrop(e, navigateToWorkspace = true) {
      e.preventDefault();
      e.stopPropagation();
      const dz = document.getElementById("compass-home-dropzone");
      if (dz) dz.classList.remove("drag-over");
      const files = e.dataTransfer && e.dataTransfer.files;
      if (files && files.length > 0) {
        processUploadedCompassFile(files[0], navigateToWorkspace);
      }
    }

    function handleCompassFileSelect(e, navigateToWorkspace = true) {
      const files = e.target && e.target.files;
      if (files && files.length > 0) {
        processUploadedCompassFile(files[0], navigateToWorkspace);
        e.target.value = "";
      }
    }

    function processUploadedCompassFile(file, navigateToWorkspace = true) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const content = String(ev.target.result || "");
        const parsed = DataSenseCompassEngine.parseDatasetInput(content, {
          id: "upload_" + Date.now(),
          name: file.name,
          description: `Uploaded local file (${(file.size / 1024).toFixed(1)} KB)`
        });
        compassState.customDataset = parsed;
        compassState.activeSampleId = null;
        compassState.primaryVar = parsed.headers[0] || null;
        compassState.secondaryVar = null;
        compassState.typeOverrides = parsed.typeOverrides || {};
        compassState.subsetFilter = { variable: "", value: "ALL" };
        runCompassAnalysisAndRender();
        if (navigateToWorkspace) {
          navigateTo("compass");
        }
        showCraftToast(`Loaded ${file.name} (${parsed.rows.length} rows × ${parsed.headers.length} columns)`);
      };
      reader.readAsText(file);
    }

    function openCompassPasteModal() {
      const bd = document.getElementById("compass-paste-backdrop");
      if (bd) bd.classList.add("open");
    }

    function closeCompassPasteModal() {
      const bd = document.getElementById("compass-paste-backdrop");
      if (bd) bd.classList.remove("open");
    }

    function submitCompassPastedData() {
      const nameInput = document.getElementById("compass-paste-name");
      const textInput = document.getElementById("compass-paste-textarea");
      const rawText = textInput ? textInput.value : "";
      const title = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : "Custom Pasted Dataset";
      const parsed = DataSenseCompassEngine.parseDatasetInput(rawText, {
        id: "pasted_" + Date.now(),
        name: title,
        description: "User-pasted dataset"
      });
      compassState.customDataset = parsed;
      compassState.activeSampleId = null;
      compassState.primaryVar = parsed.headers[0] || null;
      compassState.secondaryVar = null;
      compassState.typeOverrides = parsed.typeOverrides || {};
      compassState.subsetFilter = { variable: "", value: "ALL" };
      closeCompassPasteModal();
      runCompassAnalysisAndRender();
      navigateTo("compass");
      showCraftToast(`Loaded "${title}" (${parsed.rows.length} rows)`);
    }

    // =========================================================================
    // HOMEPAGE COMPASS PREVIEW RENDERER
    // =========================================================================
    function renderCompassHomePreview(res) {
      const pillsEl = document.getElementById("compass-home-sample-pills");
      if (pillsEl) {
        pillsEl.innerHTML = Object.values(DataSenseCompassEngine.SAMPLE_DATASETS).map(s => `
          <button type="button" class="compass-sample-pill ${compassState.activeSampleId === s.id && !compassState.customDataset ? 'active' : ''}" onclick="selectCompassSample('${s.id}', true)">
            ${escapeHtml(s.shortLabel)}
          </button>
        `).join("");
      }

      const metaEl = document.getElementById("compass-home-ds-meta");
      if (metaEl) {
        metaEl.textContent = `${res.dataset.totalRows} rows × ${res.dataset.totalColumns} cols`;
      }

      const descEl = document.getElementById("compass-home-ds-desc");
      if (descEl) {
        descEl.textContent = res.dataset.description || `${res.dataset.name} (${res.dataset.totalRows} records).`;
      }

      const selectEl = document.getElementById("compass-home-primary-select");
      if (selectEl) {
        selectEl.innerHTML = res.profiles.map(p => `
          <option value="${escapeHtml(p.name)}" ${p.name === res.primaryVar ? 'selected' : ''}>
            ${escapeHtml(p.name)} (${escapeHtml(p.EffectiveTypeLabel)})
          </option>
        `).join("");
      }

      const pProf = res.explorer.primaryProfile;
      const typeEl = document.getElementById("compass-home-primary-type");
      if (typeEl && pProf) {
        typeEl.textContent = pProf.EffectiveTypeLabel;
      }

      const statsEl = document.getElementById("compass-home-primary-stats");
      if (statsEl && pProf) {
        if (pProf.numericSummary) {
          const ns = pProf.numericSummary;
          statsEl.innerHTML = `Valid n = <strong>${pProf.validCount}</strong>/${pProf.totalCount} · Mean = <strong>${ns.mean.toFixed(2)}</strong> (SD ${ns.sd.toFixed(2)}) · Median = <strong>${ns.median.toFixed(2)}</strong> (IQR ${ns.iqr.toFixed(2)}) · Range [${ns.min}, ${ns.max}]`;
        } else if (pProf.categoricalSummary) {
          const cs = pProf.categoricalSummary;
          statsEl.innerHTML = `Valid n = <strong>${pProf.validCount}</strong>/${pProf.totalCount} · <strong>${cs.categoryCount}</strong> categories · Mode: <strong>${escapeHtml(String(cs.modeCategory || 'n/a'))}</strong> (${cs.modeSharePct.toFixed(1)}%)`;
        } else if (pProf.temporalSummary) {
          const ts = pProf.temporalSummary;
          statsEl.innerHTML = `Valid n = <strong>${pProf.validCount}</strong> · Span: <strong>${ts.minIso} → ${ts.maxIso}</strong> (${ts.inferredCadence}) · Gaps: <strong>${ts.gapCount}</strong>`;
        } else {
          statsEl.textContent = `Valid observations: ${pProf.validCount} of ${pProf.totalCount}`;
        }
      }

      // Q1 Readiness
      const rBadgeEl = document.getElementById("compass-home-readiness-badge");
      const rTextEl = document.getElementById("compass-home-readiness-text");
      const rActEl = document.getElementById("compass-home-readiness-actions");
      if (rBadgeEl) {
        rBadgeEl.innerHTML = `<span class="readiness-pill status-${res.readiness.status}">● ${escapeHtml(res.readiness.statusLabel)}</span>`;
      }
      if (rTextEl) {
        rTextEl.textContent = res.readiness.statusHeadline;
      }
      if (rActEl) {
        if (res.readiness.needsDataMend) {
          rActEl.innerHTML = `
            <button type="button" class="btn btn-emerald btn-sm" onclick="openCompassRoundTripModal()">Clean in DataMend Lab (Round-Trip) ⇄</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="navigateTo('compass')">Inspect ${res.readiness.blockingCount} Blocking Issue(s) →</button>
          `;
        } else {
          rActEl.innerHTML = `
            <button type="button" class="btn btn-secondary btn-sm" onclick="navigateTo('compass')">Inspect Variable Readiness Details →</button>
          `;
        }
      }

      // Q2 Top Relationships Preview
      const relPrevEl = document.getElementById("compass-home-relationships-preview");
      if (relPrevEl) {
        const fam = res.explorer.families;
        const rowsHtml = [];

        fam.numericAssociations.slice(0, 2).forEach(item => {
          const metricBadge = item.isUndefined
            ? `<span style="color:var(--accent-vermilion);">Undefined (Zero Var)</span>`
            : (item.hasNonlinearSignal
                ? `r = ${item.pearsonR.toFixed(2)} · <strong style="color:var(--accent-vermilion);">Curved η²=${item.binnedEtaSq.toFixed(2)}</strong>`
                : `Pearson r = <strong>${item.pearsonR.toFixed(2)}</strong> · ρ = ${item.spearmanRho.toFixed(2)}`);
          rowsHtml.push(`
            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.42rem 0;border-bottom:1px solid var(--border-hairline);font-size:0.8rem;gap:0.5rem;flex-wrap:wrap;">
              <span><strong>${escapeHtml(item.variable)}</strong> <span class="compass-type-badge">Numeric</span></span>
              <span class="mono-num">${metricBadge} (n=${item.validN})</span>
            </div>
          `);
        });

        fam.groupDifferences.slice(0, 2).forEach(item => {
          const metricBadge = item.isUndefined
            ? `<span style="color:var(--accent-vermilion);">Undefined</span>`
            : `η² = <strong>${item.etaSquared.toFixed(3)}</strong> (${item.groupCount} groups)`;
          rowsHtml.push(`
            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.42rem 0;border-bottom:1px solid var(--border-hairline);font-size:0.8rem;gap:0.5rem;flex-wrap:wrap;">
              <span><strong>${escapeHtml(item.variable)}</strong> <span class="compass-type-badge">Group Diff</span></span>
              <span class="mono-num">${metricBadge} (n=${item.validN})</span>
            </div>
          `);
        });

        fam.categoricalAssociations.slice(0, 2).forEach(item => {
          const metricBadge = item.isUndefined
            ? `<span style="color:var(--accent-vermilion);">Undefined</span>`
            : `Cramér's V = <strong>${item.cramersV.toFixed(3)}</strong>`;
          rowsHtml.push(`
            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.42rem 0;border-bottom:1px solid var(--border-hairline);font-size:0.8rem;gap:0.5rem;flex-wrap:wrap;">
              <span><strong>${escapeHtml(item.variable)}</strong> <span class="compass-type-badge">Contingency</span></span>
              <span class="mono-num">${metricBadge} (n=${item.validN})</span>
            </div>
          `);
        });

        fam.temporalSeries.slice(0, 1).forEach(item => {
          rowsHtml.push(`
            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.42rem 0;border-bottom:1px solid var(--border-hairline);font-size:0.8rem;gap:0.5rem;flex-wrap:wrap;">
              <span><strong>${escapeHtml(item.variable)}</strong> <span class="compass-type-badge">Temporal</span></span>
              <span class="mono-num">Trend r = <strong>${item.isUndefined ? 'n/a' : item.trendR.toFixed(2)}</strong> (n=${item.validN})</span>
            </div>
          `);
        });

        relPrevEl.innerHTML = rowsHtml.slice(0, 4).join("") || `<div style="font-size:0.8rem;color:var(--ink-muted);">Select a multi-column dataset to view ranked relationships.</div>`;
      }

      // Q3 Top Recommendation Preview
      const recPrevEl = document.getElementById("compass-home-rec-preview");
      if (recPrevEl && res.recommendations.length > 0) {
        const topRec = res.recommendations[0];
        const secondRec = res.recommendations[1];
        recPrevEl.innerHTML = `
          <div style="display:flex;flex-direction:column;gap:0.55rem;">
            <div style="padding:0.65rem 0.8rem;background:var(--bg-canvas-elevated);border-left:3px solid var(--accent-emerald);border-radius:4px;">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;">
                <span class="mono-num" style="font-size:0.69rem;font-weight:600;color:var(--accent-emerald);">${escapeHtml(topRec.priorityBadge)} · ${escapeHtml(topRec.app.stage)}</span>
                <a href="${topRec.app.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-emerald btn-sm">Launch ${escapeHtml(topRec.app.name)} ↗</a>
              </div>
              <strong style="display:block;font-size:0.92rem;margin-top:0.2rem;">${escapeHtml(topRec.app.name)}</strong>
              <p style="font-size:0.78rem;color:var(--ink-secondary);margin-top:0.2rem;line-height:1.45;">${escapeHtml(topRec.whyThisTool)}</p>
            </div>
            ${secondRec ? `
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.78rem;color:var(--ink-secondary);padding:0.2rem 0.3rem;">
                <span><strong>Then (${escapeHtml(secondRec.priorityBadge)}):</strong> ${escapeHtml(secondRec.app.name)} (${escapeHtml(secondRec.variablesToUse.join(', '))})</span>
                <a href="${secondRec.app.liveUrl}" target="_blank" rel="noopener noreferrer" class="mono-num" style="color:var(--accent-cobalt);font-weight:600;">Open ↗</a>
              </div>
            ` : ''}
          </div>
        `;
      }
    }

    // =========================================================================
    // FULL /COMPASS/ WORKSPACE RENDERER
    // =========================================================================
    function renderCompassWorkspace(res) {
      // Top header pills & metadata
      const pillsEl = document.getElementById("compass-ws-sample-pills");
      if (pillsEl) {
        pillsEl.innerHTML = Object.values(DataSenseCompassEngine.SAMPLE_DATASETS).map(s => `
          <button type="button" class="compass-sample-pill ${compassState.activeSampleId === s.id && !compassState.customDataset ? 'active' : ''}" onclick="selectCompassSample('${s.id}', false)">
            ${escapeHtml(s.shortLabel)}
          </button>
        `).join("");
      }

      const titleEl = document.getElementById("compass-ws-title");
      if (titleEl) titleEl.textContent = res.dataset.name || "DataSense Compass Workspace";

      const fmtEl = document.getElementById("compass-ws-format-badge");
      if (fmtEl) fmtEl.textContent = String(res.dataset.sourceFormat || "CSV").toUpperCase();

      const dimEl = document.getElementById("compass-ws-dimensions");
      if (dimEl) {
        const filterNote = res.dataset.subsetFilter
          ? ` (Filtered from ${res.dataset.unfilteredTotalRows} rows where ${res.dataset.subsetFilter.variable} = "${res.dataset.subsetFilter.value}")`
          : "";
        dimEl.textContent = `${res.dataset.totalRows} observations × ${res.dataset.totalColumns} variables${filterNote}`;
      }

      // Lineage banner if cleaned via DataMend Round-Trip
      const lineageEl = document.getElementById("compass-lineage-banner");
      if (lineageEl) {
        if (res.dataset.lineage && res.dataset.lineage.operations && res.dataset.lineage.operations.length > 0) {
          const lin = res.dataset.lineage;
          lineageEl.style.display = "block";
          lineageEl.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;">
              <div>
                <span class="mono-num" style="font-size:0.7rem;color:#34D399;font-weight:600;text-transform:uppercase;">✓ DataMend Round-Trip Lineage Active (${lin.originalRowCount} → ${lin.cleanedRowCount} rows)</span>
                <div style="font-size:0.82rem;margin-top:0.2rem;">
                  ${lin.operations.map(op => `• ${escapeHtml(op.detail)}`).join(" ")}
                </div>
              </div>
              <button type="button" class="btn btn-dark-outline btn-sm" onclick="openCompassRoundTripModal()">Inspect Round-Trip Log</button>
            </div>
          `;
        } else {
          lineageEl.style.display = "none";
        }
      }

      // Left Column: Primary Variable Selector
      const pSelect = document.getElementById("compass-ws-primary-select");
      if (pSelect) {
        pSelect.innerHTML = res.profiles.map(p => `
          <option value="${escapeHtml(p.name)}" ${p.name === res.primaryVar ? 'selected' : ''}>
            ${escapeHtml(p.name)} (${escapeHtml(p.EffectiveTypeLabel)})
          </option>
        `).join("");
      }

      const pProf = res.explorer.primaryProfile;
      const roleBadge = document.getElementById("compass-ws-primary-role");
      if (roleBadge && pProf) {
        roleBadge.textContent = pProf.EffectiveTypeLabel;
      }

      // Temporal Outcome selector if Primary is Temporal
      const tempBox = document.getElementById("compass-temporal-outcome-box");
      const tempSelect = document.getElementById("compass-temporal-outcome-select");
      if (tempBox && tempSelect && pProf) {
        if (pProf.roleFamily === "temporal") {
          tempBox.style.display = "block";
          const numCols = res.profiles.filter(p => p.roleFamily === "numeric");
          tempSelect.innerHTML = `<option value="">-- All Numeric Series --</option>` + numCols.map(nc => `
            <option value="${escapeHtml(nc.name)}" ${compassState.temporalOutcomeVar === nc.name ? 'selected' : ''}>
              ${escapeHtml(nc.name)}
            </option>
          `).join("");
        } else {
          tempBox.style.display = "none";
        }
      }

      // Subset / Category Filter Controls
      const subVarSel = document.getElementById("compass-subset-var-select");
      const subValSel = document.getElementById("compass-subset-val-select");
      const clearFilterBtn = document.getElementById("compass-clear-filter-btn");
      if (subVarSel && subValSel) {
        // Populate categorical columns from unfiltered dataset
        const catCols = res.profiles.filter(p => p.roleFamily === "categorical");
        const activeFilterVar = compassState.subsetFilter.variable;
        subVarSel.innerHTML = `<option value="">All Rows (No Filter)</option>` + catCols.map(c => `
          <option value="${escapeHtml(c.name)}" ${c.name === activeFilterVar ? 'selected' : ''}>
            ${escapeHtml(c.name)}
          </option>
        `).join("");

        if (activeFilterVar) {
          const distinctVals = Array.from(new Set(
            (res.dataset.unfilteredRows || res.dataset.rows)
              .map(r => String(r[activeFilterVar] || "").trim())
              .filter(Boolean)
          )).sort();
          subValSel.disabled = false;
          subValSel.innerHTML = `<option value="ALL">All ${escapeHtml(activeFilterVar)}</option>` + distinctVals.map(v => `
            <option value="${escapeHtml(v)}" ${compassState.subsetFilter.value === v ? 'selected' : ''}>
              ${escapeHtml(v)}
            </option>
          `).join("");
          if (clearFilterBtn) clearFilterBtn.style.display = compassState.subsetFilter.value !== "ALL" ? "inline-flex" : "none";
        } else {
          subValSel.disabled = true;
          subValSel.innerHTML = `<option value="ALL">-- All Values --</option>`;
          if (clearFilterBtn) clearFilterBtn.style.display = "none";
        }
      }

      // Variable Browser & Semantic Type Overrides
      const resetTypesBtn = document.getElementById("compass-reset-types-btn");
      if (resetTypesBtn) {
        resetTypesBtn.style.display = Object.keys(compassState.typeOverrides).length > 0 ? "inline-flex" : "none";
      }

      const varListEl = document.getElementById("compass-ws-var-list");
      if (varListEl) {
        const allSemanticOptions = Object.entries(DataSenseCompassEngine.SEMANTIC_TYPE_LABELS);
        varListEl.innerHTML = res.profiles.map(p => {
          const isPrimary = p.name === res.primaryVar;
          const isSecondary = p.name === res.secondaryVar;
          const flagsHtml = p.qualityFlags.slice(0, 2).map(f => {
            const col = f.severity === "error" ? "var(--accent-vermilion)" : (f.severity === "caution" ? "#D97706" : "var(--accent-emerald)");
            return `<span class="mono-num" style="font-size:0.65rem;color:${col};">● ${escapeHtml(f.label)}</span>`;
          }).join(" ");

          return `
            <div class="compass-var-item ${isPrimary ? 'is-primary' : ''} ${isSecondary ? 'is-secondary' : ''}">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:0.35rem;">
                <button type="button" onclick="${isPrimary ? '' : `selectCompassSecondaryPair('${escapeHtml(p.name)}', true)`}" style="background:none;border:none;padding:0;text-align:left;cursor:${isPrimary ? 'default' : 'pointer'};font-family:var(--font-mono);font-size:0.8rem;font-weight:600;color:var(--ink-primary);">
                  ${escapeHtml(p.name)} ${isPrimary ? '<span style="color:var(--accent-emerald);font-size:0.68rem;">[PRIMARY]</span>' : ''}
                </button>
                <span class="mono-num" style="font-size:0.68rem;color:var(--ink-muted);">n=${p.validCount} · ${p.distinctCount} uniq</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;margin-top:0.38rem;">
                <select aria-label="Override semantic type for ${escapeHtml(p.name)}" onchange="onCompassTypeOverride('${escapeHtml(p.name)}', this.value)" style="font-family:var(--font-mono);font-size:0.69rem;padding:0.2rem 0.35rem;border-radius:4px;border:1px solid var(--border-strong);background:var(--bg-canvas-elevated);color:var(--ink-secondary);max-width:175px;">
                  ${allSemanticOptions.map(([typeKey, typeLabel]) => `
                    <option value="${typeKey}" ${p.effectiveType === typeKey ? 'selected' : ''}>
                      ${typeLabel}${p.inferredType === typeKey ? ' (Auto)' : ' (Override)'}
                    </option>
                  `).join("")}
                </select>
                ${!isPrimary ? `<button type="button" class="find-view-pill" style="font-size:0.66rem;padding:0.15rem 0.45rem;" onclick="onCompassPrimaryChange('${escapeHtml(p.name)}', false)">Set Primary</button>` : ''}
              </div>
              ${flagsHtml ? `<div style="margin-top:0.3rem;display:flex;gap:0.4rem;flex-wrap:wrap;">${flagsHtml}</div>` : ''}
            </div>
          `;
        }).join("");
      }

      // Render Center Column Primary Profile
      renderCompassPrimaryProfileCard(res);

      // Render all 4 Center Mode Panes
      renderCompassExplorerPane(res);
      renderCompassMatrixPane(res);
      renderCompassDetailedPairPane(res);
      renderCompassDataTablePane(res);

      // Render Right Column Readiness & Recommendations
      renderCompassReadinessPanel(res);
      renderCompassRecommendationsPanel(res);
    }

    function renderCompassPrimaryProfileCard(res) {
      const pProf = res.explorer.primaryProfile;
      const nameEl = document.getElementById("compass-center-primary-name");
      const badgesEl = document.getElementById("compass-center-primary-badges");
      const bodyEl = document.getElementById("compass-center-primary-profile");
      if (!pProf || !bodyEl) return;

      if (nameEl) nameEl.textContent = pProf.name;
      if (badgesEl) {
        badgesEl.innerHTML = `
          <span class="compass-type-badge">${escapeHtml(pProf.EffectiveTypeLabel)}</span>
          ${pProf.isOverridden ? `<span class="compass-type-badge" style="color:var(--accent-cobalt);border-color:var(--accent-cobalt);">User Type Override</span>` : ''}
          <span class="compass-type-badge">Valid n = ${pProf.validCount} / ${pProf.totalCount} (${pProf.missingPct.toFixed(1)}% missing)</span>
        `;
      }

      if (pProf.numericSummary) {
        const ns = pProf.numericSummary;
        const histSvg = renderMiniHistogramSVG(ns.bins, 280, 64, "#0F6E56");
        bodyEl.innerHTML = `
          <div style="display:grid;grid-template-columns:1.35fr 1fr;gap:1rem;align-items:center;">
            <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:0.55rem;" class="mono-num">
              <div style="padding:0.5rem;background:var(--bg-canvas-elevated);border-radius:4px;">
                <div style="font-size:0.66rem;color:var(--ink-muted);">MEAN ± SD</div>
                <div style="font-size:0.86rem;font-weight:600;margin-top:0.15rem;">${ns.mean.toFixed(2)} ± ${ns.sd.toFixed(2)}</div>
              </div>
              <div style="padding:0.5rem;background:var(--bg-canvas-elevated);border-radius:4px;">
                <div style="font-size:0.66rem;color:var(--ink-muted);">MEDIAN (IQR)</div>
                <div style="font-size:0.86rem;font-weight:600;margin-top:0.15rem;">${ns.median.toFixed(2)} (${ns.iqr.toFixed(2)})</div>
              </div>
              <div style="padding:0.5rem;background:var(--bg-canvas-elevated);border-radius:4px;">
                <div style="font-size:0.66rem;color:var(--ink-muted);">MIN → MAX</div>
                <div style="font-size:0.86rem;font-weight:600;margin-top:0.15rem;">${ns.min} → ${ns.max}</div>
              </div>
              <div style="padding:0.5rem;background:var(--bg-canvas-elevated);border-radius:4px;">
                <div style="font-size:0.66rem;color:var(--ink-muted);">SKEW / OUTLIERS</div>
                <div style="font-size:0.86rem;font-weight:600;margin-top:0.15rem;">${ns.skewness.toFixed(2)} / ${ns.outlierCount}</div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;">
              ${histSvg}
              <span class="mono-num" style="font-size:0.66rem;color:var(--ink-muted);margin-top:0.2rem;">Univariate Distribution (${ns.bins.length} bins)</span>
            </div>
          </div>
        `;
      } else if (pProf.categoricalSummary) {
        const cs = pProf.categoricalSummary;
        const barsHtml = cs.topCategories.slice(0, 5).map(cat => `
          <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.78rem;">
            <span class="mono-num" style="min-width:110px;font-weight:600;">${escapeHtml(cat.category)}</span>
            <div style="flex:1;height:10px;background:var(--bg-canvas-elevated);border-radius:999px;overflow:hidden;">
              <div style="width:${Math.max(4, cat.pctOfValid)}%;height:100%;background:var(--accent-cobalt);"></div>
            </div>
            <span class="mono-num" style="min-width:95px;text-align:right;font-size:0.73rem;">${cat.count} (${cat.pctOfValid.toFixed(1)}%)</span>
          </div>
        `).join("");
        bodyEl.innerHTML = `
          <div style="display:grid;grid-template-columns:1fr 1.3fr;gap:1rem;align-items:center;">
            <div class="mono-num" style="display:flex;flex-direction:column;gap:0.35rem;font-size:0.8rem;">
              <div>Categories: <strong>${cs.categoryCount}</strong></div>
              <div>Mode Category: <strong>${escapeHtml(String(cs.modeCategory || 'n/a'))}</strong> (${cs.modeCount} rows, ${cs.modeSharePct.toFixed(1)}%)</div>
              <div>Balance Ratio (min/max): <strong>${cs.balanceRatio.toFixed(2)}</strong></div>
              <div>Rare Strata (n &lt; 3): <strong>${cs.rareCategoryCount}</strong></div>
            </div>
            <div style="display:flex;flex-direction:column;gap:0.3rem;">${barsHtml}</div>
          </div>
        `;
      } else if (pProf.temporalSummary) {
        const ts = pProf.temporalSummary;
        bodyEl.innerHTML = `
          <div class="mono-num" style="display:grid;grid-template-columns:repeat(4, 1fr);gap:0.6rem;font-size:0.8rem;">
            <div style="padding:0.5rem;background:var(--bg-canvas-elevated);border-radius:4px;">
              <div style="font-size:0.66rem;color:var(--ink-muted);">DATE SPAN</div>
              <div style="font-weight:600;margin-top:0.15rem;">${ts.minIso} → ${ts.maxIso}</div>
            </div>
            <div style="padding:0.5rem;background:var(--bg-canvas-elevated);border-radius:4px;">
              <div style="font-size:0.66rem;color:var(--ink-muted);">CADENCE</div>
              <div style="font-weight:600;margin-top:0.15rem;">${escapeHtml(ts.inferredCadence)} (${ts.spanDays} d)</div>
            </div>
            <div style="padding:0.5rem;background:var(--bg-canvas-elevated);border-radius:4px;">
              <div style="font-size:0.66rem;color:var(--ink-muted);">SPACING GAPS</div>
              <div style="font-weight:600;margin-top:0.15rem;color:${ts.gapCount > 0 ? 'var(--accent-vermilion)' : 'var(--accent-emerald)'};">${ts.gapCount} gap(s)</div>
            </div>
            <div style="padding:0.5rem;background:var(--bg-canvas-elevated);border-radius:4px;">
              <div style="font-size:0.66rem;color:var(--ink-muted);">FORMATS</div>
              <div style="font-weight:600;margin-top:0.15rem;">${escapeHtml(ts.formats.join(', ') || 'ISO')}</div>
            </div>
          </div>
        `;
      } else {
        bodyEl.innerHTML = `<div style="font-size:0.84rem;color:var(--ink-secondary);">${pProf.validCount} valid observations (${pProf.distinctCount} distinct values).</div>`;
      }
    }

    // =========================================================================
    // LAYER 1: TARGET RELATIONSHIP EXPLORER (GROUPED BY STATISTICAL FAMILY)
    // =========================================================================
    function renderCompassExplorerPane(res) {
      const pane = document.getElementById("compass-pane-explorer");
      if (!pane) return;
      const fam = res.explorer.families;
      const sections = [];

      // 1. Numerical Associations Family
      if (fam.numericAssociations.length > 0) {
        const sortMode = compassState.familySortModes.numericAssociations || "abs_strength";
        const sorted = DataSenseCompassEngine.sortRelationshipFamily(fam.numericAssociations, "numericAssociations", sortMode);
        sections.push(`
          <div style="margin-bottom:1.4rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.55rem;">
              <div>
                <span class="mono-num" style="font-size:0.72rem;font-weight:600;color:var(--accent-emerald);text-transform:uppercase;">Family A · Numerical Associations (Pearson r &amp; Tie-Corrected Spearman ρ)</span>
                <p style="font-size:0.76rem;color:var(--ink-muted);">Ranked strictly within numerical pairs. Constant columns report Undefined rather than 0.</p>
              </div>
              <select aria-label="Sort numerical associations" onchange="setCompassFamilySort('numericAssociations', this.value)" style="font-family:var(--font-mono);font-size:0.72rem;padding:0.28rem 0.5rem;border-radius:4px;border:1px solid var(--border-strong);background:var(--bg-surface);color:var(--ink-primary);">
                <option value="abs_strength" ${sortMode === 'abs_strength' ? 'selected' : ''}>Sort: |Pearson r| Strength</option>
                <option value="signed_r" ${sortMode === 'signed_r' ? 'selected' : ''}>Sort: Signed Pearson r (+ to -)</option>
                <option value="abs_spearman" ${sortMode === 'abs_spearman' ? 'selected' : ''}>Sort: |Spearman ρ| Rank</option>
                <option value="sample_size" ${sortMode === 'sample_size' ? 'selected' : ''}>Sort: Valid Sample Size (n)</option>
                <option value="low_missing" ${sortMode === 'low_missing' ? 'selected' : ''}>Sort: Lowest Missingness</option>
              </select>
            </div>
            <div style="overflow-x:auto;">
              <table class="compass-rel-table">
                <thead>
                  <tr>
                    <th>Comparison Variable</th>
                    <th>Pearson r (Linear)</th>
                    <th>Spearman ρ (Rank)</th>
                    <th>Valid n (Excluded)</th>
                    <th>Structure &amp; Direction</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${sorted.map(item => `
                    <tr class="compass-rel-row ${res.secondaryVar === item.variable ? 'active-pair' : ''}" onclick="selectCompassSecondaryPair('${escapeHtml(item.variable)}', true)">
                      <td><strong>${escapeHtml(item.variable)}</strong> <span class="compass-type-badge">${escapeHtml(item.typeLabel)}</span></td>
                      <td class="mono-num">${item.isUndefined ? '<span style="color:var(--accent-vermilion);font-weight:600;">Undefined</span>' : `<strong>${item.pearsonR.toFixed(3)}</strong> (R²=${(item.rSquared * 100).toFixed(0)}%)`}</td>
                      <td class="mono-num">${item.spearmanRho === null ? '<span style="color:var(--ink-muted);">Undefined</span>' : item.spearmanRho.toFixed(3)}</td>
                      <td class="mono-num">n = ${item.validN} <span style="color:var(--ink-muted);">(${item.excludedMissing} excl)</span></td>
                      <td>
                        ${item.hasNonlinearSignal
                          ? `<span style="color:var(--accent-vermilion);font-weight:600;">⚡ Non-Linear Curve (binned η²=${item.binnedEtaSq.toFixed(2)})</span>`
                          : escapeHtml(item.undefinedReason || `${item.direction} · ${item.strengthLabel}`)}
                      </td>
                      <td><button type="button" class="find-view-pill" onclick="event.stopPropagation();selectCompassSecondaryPair('${escapeHtml(item.variable)}', true)">Inspect Pair →</button></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `);
      }

      // 2. Group Differences Family (Numeric x Categorical)
      if (fam.groupDifferences.length > 0) {
        const sortMode = compassState.familySortModes.groupDifferences || "abs_strength";
        const sorted = DataSenseCompassEngine.sortRelationshipFamily(fam.groupDifferences, "groupDifferences", sortMode);
        sections.push(`
          <div style="margin-bottom:1.4rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.55rem;">
              <div>
                <span class="mono-num" style="font-size:0.72rem;font-weight:600;color:var(--accent-cobalt);text-transform:uppercase;">Family B · Group Differences Across Categories (Descriptive η² &amp; Point-Biserial)</span>
                <p style="font-size:0.76rem;color:var(--ink-muted);">Partition of variance (SS_between / SS_total) kept separate from linear correlation r.</p>
              </div>
              <select aria-label="Sort group differences" onchange="setCompassFamilySort('groupDifferences', this.value)" style="font-family:var(--font-mono);font-size:0.72rem;padding:0.28rem 0.5rem;border-radius:4px;border:1px solid var(--border-strong);background:var(--bg-surface);color:var(--ink-primary);">
                <option value="abs_strength" ${sortMode === 'abs_strength' ? 'selected' : ''}>Sort: Eta-Squared (η²)</option>
                <option value="sample_size" ${sortMode === 'sample_size' ? 'selected' : ''}>Sort: Valid Sample Size (n)</option>
                <option value="low_missing" ${sortMode === 'low_missing' ? 'selected' : ''}>Sort: Lowest Missingness</option>
              </select>
            </div>
            <div style="overflow-x:auto;">
              <table class="compass-rel-table">
                <thead>
                  <tr>
                    <th>Comparison Variable</th>
                    <th>Descriptive η²</th>
                    <th>Binary Point-Biserial r_pb</th>
                    <th>Groups / Valid n</th>
                    <th>Group Separation Summary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${sorted.map(item => `
                    <tr class="compass-rel-row ${res.secondaryVar === item.variable ? 'active-pair' : ''}" onclick="selectCompassSecondaryPair('${escapeHtml(item.variable)}', true)">
                      <td><strong>${escapeHtml(item.variable)}</strong> <span class="compass-type-badge">${escapeHtml(item.typeLabel)}</span></td>
                      <td class="mono-num">${item.isUndefined ? '<span style="color:var(--accent-vermilion);">Undefined</span>' : `<strong>${item.etaSquared.toFixed(3)}</strong> (${(item.etaSquared * 100).toFixed(1)}% var)`}</td>
                      <td class="mono-num">${item.pointBiserial !== null ? `${item.pointBiserial.toFixed(3)}` : '<span style="color:var(--ink-muted);">k &gt; 2 groups</span>'}</td>
                      <td class="mono-num">${item.groupCount} groups · n = ${item.validN}</td>
                      <td>${escapeHtml(item.undefinedReason || item.strengthLabel)} (Δ mean = ${item.meanSpread.toFixed(2)})</td>
                      <td><button type="button" class="find-view-pill" onclick="event.stopPropagation();selectCompassSecondaryPair('${escapeHtml(item.variable)}', true)">Inspect Groups →</button></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `);
      }

      // 3. Categorical Contingency Family (Cat x Cat)
      if (fam.categoricalAssociations.length > 0) {
        const sortMode = compassState.familySortModes.categoricalAssociations || "abs_strength";
        const sorted = DataSenseCompassEngine.sortRelationshipFamily(fam.categoricalAssociations, "categoricalAssociations", sortMode);
        sections.push(`
          <div style="margin-bottom:1.4rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.55rem;">
              <div>
                <span class="mono-num" style="font-size:0.72rem;font-weight:600;color:#8B5CF6;text-transform:uppercase;">Family C · Categorical Contingency Associations (Cramér's V &amp; Bias-Corrected Ṽ)</span>
                <p style="font-size:0.76rem;color:var(--ink-muted);">Contingency table dependence with sparse expected-cell diagnostics.</p>
              </div>
            </div>
            <div style="overflow-x:auto;">
              <table class="compass-rel-table">
                <thead>
                  <tr>
                    <th>Comparison Variable</th>
                    <th>Cramér's V (Bias-Corr Ṽ)</th>
                    <th>Pearson χ²</th>
                    <th>Valid n (Sparse Cells)</th>
                    <th>Interpretation</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${sorted.map(item => `
                    <tr class="compass-rel-row ${res.secondaryVar === item.variable ? 'active-pair' : ''}" onclick="selectCompassSecondaryPair('${escapeHtml(item.variable)}', true)">
                      <td><strong>${escapeHtml(item.variable)}</strong> <span class="compass-type-badge">${escapeHtml(item.typeLabel)}</span></td>
                      <td class="mono-num">${item.isUndefined ? 'Undefined' : `<strong>${item.cramersV.toFixed(3)}</strong> (Ṽ=${item.cramersVBiasCorrected.toFixed(3)})`}</td>
                      <td class="mono-num">${item.isUndefined ? '—' : item.chiSquare.toFixed(2)}</td>
                      <td class="mono-num">n = ${item.validN} (${item.sparseCellCount} sparse)</td>
                      <td>${escapeHtml(item.undefinedReason || item.strengthLabel)}</td>
                      <td><button type="button" class="find-view-pill" onclick="event.stopPropagation();selectCompassSecondaryPair('${escapeHtml(item.variable)}', true)">Contingency Table →</button></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `);
      }

      // 4. Temporal Series Family
      if (fam.temporalSeries.length > 0) {
        sections.push(`
          <div style="margin-bottom:1.2rem;">
            <span class="mono-num" style="font-size:0.72rem;font-weight:600;color:var(--accent-cobalt);text-transform:uppercase;">Family D · Chronological &amp; Time-Indexed Series</span>
            <div style="overflow-x:auto;margin-top:0.45rem;">
              <table class="compass-rel-table">
                <thead>
                  <tr>
                    <th>Variable</th>
                    <th>Time Index Trend r</th>
                    <th>Lag-1 Serial Autocorr</th>
                    <th>Valid Timestamps</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${fam.temporalSeries.map(item => `
                    <tr class="compass-rel-row ${res.secondaryVar === item.variable ? 'active-pair' : ''}" onclick="selectCompassSecondaryPair('${escapeHtml(item.variable)}', true)">
                      <td><strong>${escapeHtml(item.variable)}</strong> <span class="compass-type-badge">${escapeHtml(item.typeLabel)}</span></td>
                      <td class="mono-num">${item.isUndefined ? 'Undefined' : `<strong>${item.trendR.toFixed(3)}</strong>`}</td>
                      <td class="mono-num">${item.lag1Autocorr !== null ? item.lag1Autocorr.toFixed(3) : 'n/a'}</td>
                      <td class="mono-num">n = ${item.validN}</td>
                      <td><button type="button" class="find-view-pill" onclick="event.stopPropagation();selectCompassSecondaryPair('${escapeHtml(item.variable)}', true)">Plot Time Series →</button></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `);
      }

      if (fam.excludedIdentifiers.length > 0) {
        sections.push(`
          <div style="padding:0.65rem 0.85rem;background:var(--bg-canvas-elevated);border:1px solid var(--border-hairline);border-radius:var(--radius-sm);font-size:0.76rem;color:var(--ink-muted);">
            <strong>Excluded Identifier / Non-Statistical Columns:</strong>
            ${fam.excludedIdentifiers.map(e => `${escapeHtml(e.variable)} (${escapeHtml(e.typeLabel)})`).join(", ")}
          </div>
        `);
      }

      pane.innerHTML = sections.join("") || `<div style="padding:1rem;color:var(--ink-muted);">No secondary variables available for pairwise relationship analysis.</div>`;
    }

    // =========================================================================
    // LAYER 2: COMPACT RELATIONSHIP MATRIX (GGPAIRS-INSPIRED OVERVIEW)
    // =========================================================================
    function renderCompassMatrixPane(res) {
      const pane = document.getElementById("compass-pane-matrix");
      if (!pane) return;
      const vars = res.matrixVariables;
      const k = vars.length;
      if (k < 2) {
        pane.innerHTML = `<div style="padding:1rem;color:var(--ink-muted);">At least 2 non-identifier variables are required to render the Compact Relationship Matrix.</div>`;
        return;
      }

      const cellsHtml = [];
      // Header row
      cellsHtml.push(`<div style="font-family:var(--font-mono);font-size:0.68rem;color:var(--ink-muted);padding:0.3rem;">GGPAIRS MATRIX</div>`);
      vars.forEach(v => {
        cellsHtml.push(`<div style="font-family:var(--font-mono);font-size:0.7rem;font-weight:600;color:var(--ink-primary);padding:0.3rem;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(v)}</div>`);
      });

      res.relationshipMatrix.forEach((rowCells, rIdx) => {
        cellsHtml.push(`<div style="font-family:var(--font-mono);font-size:0.7rem;font-weight:600;color:var(--ink-primary);padding:0.3rem;display:flex;align-items:center;">${escapeHtml(vars[rIdx])}</div>`);
        rowCells.forEach(cell => {
          if (cell.kind === "diagonal") {
            const p = cell.profile;
            const mini = p.numericSummary
              ? renderMiniHistogramSVG(p.numericSummary.bins, 96, 36, "#0F6E56")
              : `<span class="mono-num" style="font-size:0.68rem;color:var(--accent-cobalt);">${p.distinctCount} levels</span>`;
            cellsHtml.push(`
              <div class="ggpairs-cell diag-cell" title="${escapeHtml(p.name)} (${escapeHtml(p.EffectiveTypeLabel)})">
                <span class="mono-num" style="font-size:0.64rem;color:var(--ink-muted);">${escapeHtml(p.EffectiveTypeLabel)}</span>
                <div>${mini}</div>
              </div>
            `);
          } else {
            const pair = cell.pair;
            let metricText = "Undefined";
            let badgeCol = "var(--ink-muted)";
            if (!pair.isUndefined) {
              if (pair.family === "numeric_numeric") {
                if (pair.nonlinear && pair.nonlinear.hasNonlinearSignal) {
                  metricText = `Curved η²=${pair.nonlinear.binnedEtaSq.toFixed(2)}`;
                  badgeCol = "var(--accent-vermilion)";
                } else {
                  metricText = `r = ${pair.pearsonR.toFixed(2)}`;
                  badgeCol = Math.abs(pair.pearsonR) >= 0.5 ? "var(--accent-emerald)" : "var(--ink-primary)";
                }
              } else if (pair.family === "numeric_categorical") {
                metricText = `η² = ${pair.etaSquared.toFixed(2)}`;
                badgeCol = pair.etaSquared >= 0.15 ? "var(--accent-cobalt)" : "var(--ink-primary)";
              } else if (pair.family === "categorical_categorical") {
                metricText = `V = ${pair.cramersV.toFixed(2)}`;
                badgeCol = "#8B5CF6";
              } else if (pair.family === "temporal_numeric") {
                metricText = `tr = ${pair.trendR.toFixed(2)}`;
                badgeCol = "var(--accent-cobalt)";
              }
            }
            cellsHtml.push(`
              <div class="ggpairs-cell" onclick="compassState.primaryVar='${escapeHtml(cell.rowVar)}';selectCompassSecondaryPair('${escapeHtml(cell.colVar)}', true)" title="Inspect ${escapeHtml(cell.rowVar)} × ${escapeHtml(cell.colVar)}">
                <span class="mono-num" style="font-size:0.63rem;color:var(--ink-muted);">${escapeHtml(pair.family.replace('_', '×'))}</span>
                <strong class="mono-num" style="font-size:0.78rem;color:${badgeCol};">${metricText}</strong>
                <span class="mono-num" style="font-size:0.62rem;color:var(--ink-muted);">n=${pair.validN}</span>
              </div>
            `);
          }
        });
      });

      pane.innerHTML = `
        <div style="margin-bottom:0.65rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
          <p style="font-size:0.8rem;color:var(--ink-secondary);">
            <strong>Compact Mixed-Variable Relationship Matrix (${k} × ${k}):</strong> Diagonal cells show univariate distributions; off-diagonal cells report family-specific metrics (Pearson <em>r</em>, ANOVA <em>η²</em>, Cramér's <em>V</em>). Click any cell to open its Detailed Pair View.
          </p>
        </div>
        <div class="ggpairs-grid" style="grid-template-columns: 110px repeat(${k}, minmax(95px, 1fr));">
          ${cellsHtml.join("")}
        </div>
        <div class="ggpairs-mobile-cards" aria-label="Mobile Pairwise Summary List">
          ${res.explorer.allPairs.slice(0, 8).map(p => `
            <div class="ggpairs-mobile-card" onclick="selectCompassSecondaryPair('${escapeHtml(p.otherVariable)}', true)">
              <div>
                <strong style="font-size:0.82rem;color:var(--ink-primary);">${escapeHtml(res.primaryVar)} × ${escapeHtml(p.otherVariable)}</strong>
                <div class="mono-num" style="font-size:0.68rem;color:var(--ink-muted);">${escapeHtml((p.analysis && p.analysis.family ? p.analysis.family.replace('_', ' × ') : 'pair'))} · n=${p.analysis ? p.analysis.validN : 0}</div>
              </div>
              <span class="mono-num" style="font-size:0.78rem;font-weight:600;color:var(--accent-emerald);">Inspect Pair →</span>
            </div>
          `).join("")}
        </div>
      `;
    }

    // =========================================================================
    // LAYER 3: DETAILED PAIR VIEW, SVG CHARTS & CONTINGENCY TABLES
    // =========================================================================
    function renderCompassDetailedPairPane(res) {
      const pane = document.getElementById("compass-pane-pair");
      if (!pane) return;
      const pair = res.activePairAnalysis;
      if (!pair) {
        pane.innerHTML = `<div style="padding:1rem;color:var(--ink-muted);">Select a comparison variable from the Variable Browser or Target Relationship Explorer to inspect its pair visualization.</div>`;
        return;
      }

      const expl = res.activePairExplanations || DataSenseCompassEngine.generatePairExplanations(pair);
      const activeLevel = compassState.explanationLevel || "standard";
      const otherCandidates = res.profiles.filter(p => p.name !== res.primaryVar);

      const chartSvg = renderPairChartSVG(pair);
      const contingencyHtml = pair.family === "categorical_categorical" ? renderContingencyTableHTML(pair) : "";
      const groupTableHtml = pair.family === "numeric_categorical" ? renderGroupSummaryTableHTML(pair) : "";

      pane.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-bottom:0.85rem;padding-bottom:0.75rem;border-bottom:1px solid var(--border-hairline);">
          <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
            <span class="mono-num" style="font-size:0.74rem;color:var(--ink-muted);">PAIRWISE COMPARISON:</span>
            <strong class="mono-num" style="font-size:0.9rem;color:var(--accent-emerald);">${escapeHtml(res.primaryVar)}</strong>
            <span class="mono-num">×</span>
            <select aria-label="Select secondary comparison variable" onchange="selectCompassSecondaryPair(this.value, true)" style="font-family:var(--font-mono);font-size:0.84rem;font-weight:600;padding:0.35rem 0.6rem;border-radius:4px;border:1px solid var(--border-strong);background:var(--bg-surface);color:var(--ink-primary);">
              ${otherCandidates.map(c => `
                <option value="${escapeHtml(c.name)}" ${c.name === pair.varB ? 'selected' : ''}>
                  ${escapeHtml(c.name)} (${escapeHtml(c.EffectiveTypeLabel)})
                </option>
              `).join("")}
            </select>
          </div>
          <div class="mono-num" style="font-size:0.74rem;color:var(--ink-secondary);">
            Included Pair n = <strong>${pair.validN}</strong> of ${pair.totalRows} (${pair.excludedMissing} missing excluded)
          </div>
        </div>

        <!-- Explanation Level Switcher (Simple / Standard / Technical) -->
        <div style="background:var(--bg-canvas-elevated);border:1px solid var(--border-hairline);border-radius:var(--radius-sm);padding:0.85rem 1rem;margin-bottom:1rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.45rem;">
            <span class="mono-num" style="font-size:0.7rem;text-transform:uppercase;color:var(--ink-muted);font-weight:600;">Statistical Narrative (${activeLevel.toUpperCase()} Mode)</span>
            <div class="find-view-switcher" role="group" aria-label="Explanation Depth">
              <button type="button" class="find-view-pill ${activeLevel === 'simple' ? 'active' : ''}" onclick="setCompassExplanationLevel('simple')">Simple</button>
              <button type="button" class="find-view-pill ${activeLevel === 'standard' ? 'active' : ''}" onclick="setCompassExplanationLevel('standard')">Standard</button>
              <button type="button" class="find-view-pill ${activeLevel === 'technical' ? 'active' : ''}" onclick="setCompassExplanationLevel('technical')">Technical</button>
            </div>
          </div>
          <p style="font-size:0.85rem;color:var(--ink-primary);line-height:1.55;">${escapeHtml(expl[activeLevel] || expl.standard)}</p>
          ${pair.cautions && pair.cautions.length > 0 ? `
            <div style="margin-top:0.5rem;padding-top:0.45rem;border-top:1px dashed var(--border-strong);font-size:0.78rem;color:var(--accent-vermilion);">
              ${pair.cautions.map(c => `<div>⚠ ${escapeHtml(c)}</div>`).join("")}
            </div>
          ` : ''}
        </div>

        <!-- SVG Pair Visualization Stage -->
        <div id="compass-active-svg-stage" style="background:var(--bg-instrument);border:1px solid var(--inst-border);border-radius:var(--radius-md);padding:1rem;color:#fff;margin-bottom:1rem;">
          ${chartSvg}
        </div>

        ${groupTableHtml}
        ${contingencyHtml}
      `;
    }

    function renderGroupSummaryTableHTML(pair) {
      if (!pair.groups || !pair.groups.length) return "";
      return `
        <div style="margin-top:0.85rem;">
          <div class="mono-num" style="font-size:0.72rem;text-transform:uppercase;color:var(--ink-muted);margin-bottom:0.4rem;">
            Group Summary Table (${escapeHtml(pair.numericVar)} across ${escapeHtml(pair.categoricalVar)} · Total n = ${pair.validN})
          </div>
          <div style="overflow-x:auto;">
            <table class="compass-rel-table">
              <thead>
                <tr>
                  <th>Group (${escapeHtml(pair.categoricalVar)})</th>
                  <th>Count (n_g)</th>
                  <th>Mean ± SD</th>
                  <th>Median (IQR)</th>
                  <th>Min → Max</th>
                </tr>
              </thead>
              <tbody>
                ${pair.groups.map(g => `
                  <tr class="mono-num">
                    <td><strong>${escapeHtml(g.category)}</strong></td>
                    <td>${g.n}</td>
                    <td>${g.mean.toFixed(2)} ± ${g.sd.toFixed(2)}</td>
                    <td>${g.median.toFixed(2)} (${g.iqr.toFixed(2)})</td>
                    <td>${g.min} → ${g.max}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    function renderContingencyTableHTML(pair) {
      if (!pair.matrix || !pair.matrix.length) return "";
      return `
        <div style="margin-top:0.85rem;">
          <div class="mono-num" style="font-size:0.72rem;text-transform:uppercase;color:var(--ink-muted);margin-bottom:0.4rem;">
            Full Contingency Table: Cell Count · [Within-Row %] · (Within-Col %) · {Joint % of Grand Total n = ${pair.validN}}
          </div>
          <div style="overflow-x:auto;">
            <table class="contingency-table">
              <thead>
                <tr>
                  <th>${escapeHtml(pair.varA)} \ ${escapeHtml(pair.varB)}</th>
                  ${pair.colCategories.map(c => `<th>${escapeHtml(c)}</th>`).join("")}
                  <th>Row Total (Row Share)</th>
                </tr>
              </thead>
              <tbody>
                ${pair.matrix.map(rObj => `
                  <tr>
                    <td>${escapeHtml(rObj.rowCategory)}</td>
                    ${rObj.cells.map(cell => `
                      <td>
                        <strong>${cell.count}</strong>
                        <div style="font-size:0.66rem;color:var(--ink-muted);">
                          [${cell.rowPct.toFixed(1)}% row] (${cell.colPct.toFixed(1)}% col) {${cell.jointPct.toFixed(1)}% tot}
                        </div>
                      </td>
                    `).join("")}
                    <td><strong>${rObj.rowTotal}</strong> (${rObj.rowSharePct.toFixed(1)}%)</td>
                  </tr>
                `).join("")}
                <tr style="background:var(--bg-canvas-elevated);font-weight:600;">
                  <td>Column Total</td>
                  ${pair.colCategories.map(c => {
                    const cTot = pair.colTotals[c] || 0;
                    const cPct = pair.validN > 0 ? (cTot / pair.validN) * 100 : 0;
                    return `<td>${cTot} (${cPct.toFixed(1)}%)</td>`;
                  }).join("")}
                  <td>Grand Total n = ${pair.validN} (100.0%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // =========================================================================
    // LAYER 4: RAW DATA TABLE & CELL HYGIENE INSPECTOR
    // =========================================================================
    function renderCompassDataTablePane(res) {
      const pane = document.getElementById("compass-pane-table");
      if (!pane) return;
      const headers = res.dataset.headers;
      const rows = res.dataset.rows.slice(0, 30);

      pane.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.65rem;flex-wrap:wrap;gap:0.5rem;">
          <span class="mono-num" style="font-size:0.75rem;color:var(--ink-secondary);">
            Showing ${rows.length} of ${res.dataset.totalRows} rows · Sentinel codes (-999), unit strings, and leading-zero IDs are highlighted inline.
          </span>
          <button type="button" class="btn btn-emerald btn-sm" onclick="openCompassRoundTripModal()">Clean Flagged Cells in DataMend Lab ⇄</button>
        </div>
        <div style="overflow-x:auto;max-height:420px;">
          <table class="compass-rel-table mono-num" style="font-size:0.75rem;">
            <thead>
              <tr>
                <th>#</th>
                ${headers.map(h => `<th>${escapeHtml(h)}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${rows.map((r, idx) => `
                <tr>
                  <td style="color:var(--ink-muted);">${idx + 1}</td>
                  ${headers.map(h => {
                    const val = r[h] !== undefined ? String(r[h]) : "";
                    const trimV = val.trim();
                    const isSentinel = trimV === "-999" || trimV === "-999.0";
                    const isUnit = /^[+-]?\d+(\.\d+)?\s*[a-zA-Z%$€£]+$/.test(trimV);
                    const isLeadZero = /^0\d+$/.test(trimV);
                    let cellStyle = "";
                    if (isSentinel || isUnit) cellStyle = "background:rgba(217,56,30,0.16);color:var(--accent-vermilion);font-weight:600;";
                    else if (isLeadZero) cellStyle = "color:var(--accent-emerald);font-weight:600;";
                    else if (trimV === "") cellStyle = "color:var(--ink-muted);font-style:italic;";
                    return `<td style="${cellStyle}">${trimV === "" ? "null" : escapeHtml(val)}</td>`;
                  }).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    // =========================================================================
    // RIGHT COLUMN: READINESS GATE & ECOSYSTEM APPLICATION RECOMMENDATIONS
    // =========================================================================
    function renderCompassReadinessPanel(res) {
      const badgeEl = document.getElementById("compass-ws-readiness-badge");
      const bodyEl = document.getElementById("compass-ws-readiness-body");
      if (!bodyEl) return;

      if (badgeEl) {
        badgeEl.innerHTML = `<span class="readiness-pill status-${res.readiness.status}">● ${escapeHtml(res.readiness.statusLabel)}</span>`;
      }

      const issuesHtml = res.readiness.issues.map(iss => {
        const badgeCol = iss.severity === "blocking" ? "var(--accent-vermilion)" : "#D97706";
        return `
          <div style="border-left:3px solid ${badgeCol};background:var(--bg-canvas-elevated);padding:0.6rem 0.75rem;border-radius:4px;margin-top:0.55rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.35rem;">
              <span class="mono-num" style="font-size:0.67rem;font-weight:600;color:${badgeCol};text-transform:uppercase;">${escapeHtml(iss.severity)} · ${escapeHtml(iss.scope)}</span>
              <span class="mono-num" style="font-size:0.67rem;color:var(--ink-muted);">${iss.affectedCount} row(s)</span>
            </div>
            <strong style="display:block;font-size:0.8rem;margin-top:0.15rem;">${escapeHtml(iss.title)}</strong>
            <p style="font-size:0.74rem;color:var(--ink-secondary);margin-top:0.15rem;line-height:1.4;">${escapeHtml(iss.whyItMatters)}</p>
            <div style="font-size:0.72rem;color:var(--accent-emerald);margin-top:0.25rem;font-weight:500;">→ ${escapeHtml(iss.recommendedAction)}</div>
          </div>
        `;
      }).join("");

      bodyEl.innerHTML = `
        <p style="font-size:0.82rem;color:var(--ink-primary);line-height:1.48;">${escapeHtml(res.readiness.statusHeadline)}</p>
        <div style="margin-top:0.75rem;display:flex;flex-direction:column;gap:0.45rem;">
          <button type="button" class="btn ${res.readiness.needsDataMend ? 'btn-emerald' : 'btn-secondary'} btn-sm" style="width:100%;justify-content:center;" onclick="openCompassRoundTripModal()">
            ⇄ Clean in DataMend Lab (Browser Round-Trip)
          </button>
          <div style="display:flex;gap:0.4rem;">
            <button type="button" class="btn btn-secondary btn-sm" style="flex:1;justify-content:center;" onclick="exportCompassArtifact('datasense_json')">↓ Export JSON</button>
            <button type="button" class="btn btn-secondary btn-sm" style="flex:1;justify-content:center;" onclick="document.getElementById('compass-ws-file-input').click()">↑ Re-Import Cleaned</button>
          </div>
        </div>
        <div style="max-height:310px;overflow-y:auto;margin-top:0.5rem;">
          ${issuesHtml || `<div style="margin-top:0.6rem;padding:0.6rem;background:var(--accent-emerald-tint);border-radius:4px;font-size:0.78rem;color:var(--accent-emerald);">✓ Zero blocking or caution issues flagged for the active analysis selection.</div>`}
        </div>
      `;
    }

    function renderCompassRecommendationsPanel(res) {
      const bodyEl = document.getElementById("compass-ws-recommendations");
      if (!bodyEl) return;

      bodyEl.innerHTML = `
        <div style="display:flex;flex-direction:column;gap:0.85rem;">
          ${res.recommendations.map(rec => `
            <div style="border:1px solid var(--border-strong);border-radius:var(--radius-sm);padding:0.8rem;background:var(--bg-canvas-elevated);">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;">
                <span class="mono-num" style="font-size:0.68rem;font-weight:600;color:var(--accent-emerald);">${escapeHtml(rec.priorityBadge)}</span>
                <span class="compass-type-badge">${escapeHtml(rec.app.stage)}</span>
              </div>
              <h4 style="font-family:var(--font-display);font-size:1.15rem;margin-top:0.2rem;color:var(--ink-primary);">${escapeHtml(rec.app.name)}</h4>
              <div style="font-size:0.75rem;color:var(--ink-secondary);margin-top:0.35rem;display:flex;flex-direction:column;gap:0.28rem;line-height:1.42;">
                <div><strong>Why this tool:</strong> ${escapeHtml(rec.whyThisTool)}</div>
                <div><strong>What you can accomplish:</strong> ${escapeHtml(rec.whatYouCanAccomplish)}</div>
                <div><strong>Variables to use:</strong> <span class="mono-num">${escapeHtml(rec.variablesToUse.join(", "))}</span></div>
                <div><strong>Preparation needed:</strong> ${escapeHtml(rec.preparationNeeded)}</div>
                <div><strong>Caveats:</strong> ${escapeHtml(rec.caveats)}</div>
              </div>
              <div style="display:flex;gap:0.45rem;flex-wrap:wrap;margin-top:0.65rem;">
                ${rec.app.id === 'datamend'
                  ? `<button type="button" class="btn btn-emerald btn-sm" onclick="openCompassRoundTripModal()">Run Round-Trip ⇄</button>`
                  : ''}
                <a href="${rec.app.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Open ${escapeHtml(rec.app.name)} ↗</a>
                <a href="${rec.app.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Source Repo</a>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    // =========================================================================
    // SVG PAIR & UNIVARIATE CHART RENDERERS
    // =========================================================================
    function renderMiniHistogramSVG(bins, width = 220, height = 52, color = "#34D399") {
      if (!bins || !bins.length) return "";
      const maxC = Math.max(1, ...bins.map(b => b.count));
      const barW = Math.max(4, Math.floor((width - 8) / bins.length) - 2);
      const bars = bins.map((b, i) => {
        const h = Math.max(2, Math.round((b.count / maxC) * (height - 10)));
        const x = 4 + i * (barW + 2);
        const y = height - 4 - h;
        return `<rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="2" fill="${color}" opacity="0.88"><title>[${b.x0.toFixed(1)}, ${b.x1.toFixed(1)}]: n=${b.count}</title></rect>`;
      }).join("");
      return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Distribution histogram">${bars}</svg>`;
    }

    function renderPairChartSVG(pair) {
      const W = 640;
      const H = 290;
      const padL = 58;
      const padR = 28;
      const padT = 28;
      const padB = 42;
      const plotW = W - padL - padR;
      const plotH = H - padT - padB;

      if (pair.isUndefined) {
        return `
          <svg id="compass-pair-svg" width="100%" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Undefined relationship diagnostic">
            <rect x="0" y="0" width="${W}" height="${H}" rx="8" fill="#0B0D11"/>
            <text x="${W / 2}" y="${H / 2 - 10}" text-anchor="middle" fill="#F87171" font-family="IBM Plex Mono, monospace" font-size="13" font-weight="600">
              Association Mathematically Undefined (n = ${pair.validN})
            </text>
            <text x="${W / 2}" y="${H / 2 + 16}" text-anchor="middle" fill="#9CA3AF" font-family="Plus Jakarta Sans, sans-serif" font-size="12">
              ${escapeHtml(pair.undefinedReason || "Zero variance in one or both variables.")}
            </text>
          </svg>
        `;
      }

      // 1. Numeric x Numeric Scatterplot + OLS Fit + Non-Linear Binned Curve
      if (pair.family === "numeric_numeric") {
        const pts = pair.points || [];
        const xs = pts.map(p => p.x);
        const ys = pts.map(p => p.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        const spanX = (maxX - minX) || 1;
        const spanY = (maxY - minY) || 1;
        const sx = (v) => padL + ((v - minX) / spanX) * plotW;
        const sy = (v) => padT + plotH - ((v - minY) / spanY) * plotH;

        // OLS line endpoints
        const yAtMinX = pair.olsIntercept + pair.olsSlope * minX;
        const yAtMaxX = pair.olsIntercept + pair.olsSlope * maxX;
        const olsLine = `<line x1="${sx(minX).toFixed(1)}" y1="${sy(yAtMinX).toFixed(1)}" x2="${sx(maxX).toFixed(1)}" y2="${sy(yAtMaxX).toFixed(1)}" stroke="#3B82F6" stroke-width="2" stroke-dasharray="5 4"/>`;

        // Binned mean polyline
        let binnedPoly = "";
        if (pair.nonlinear && pair.nonlinear.binnedMeans && pair.nonlinear.binnedMeans.length >= 2) {
          const dPts = pair.nonlinear.binnedMeans.map(bm => `${sx(bm.x).toFixed(1)},${sy(bm.y).toFixed(1)}`).join(" ");
          binnedPoly = `<polyline fill="none" stroke="#F59E0B" stroke-width="2.6" points="${dPts}"/>`;
        }

        const circles = pts.map(p => `
          <circle cx="${sx(p.x).toFixed(1)}" cy="${sy(p.y).toFixed(1)}" r="4.5" fill="#34D399" stroke="#0B0D11" stroke-width="1.2">
            <title>Row #${p.rowIndex}: ${escapeHtml(pair.xVar)}=${p.x}, ${escapeHtml(pair.yVar)}=${p.y}</title>
          </circle>
        `).join("");

        return `
          <svg id="compass-pair-svg" width="100%" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Bivariate scatterplot of ${escapeHtml(pair.yVar)} by ${escapeHtml(pair.xVar)}">
            <rect x="0" y="0" width="${W}" height="${H}" rx="8" fill="#0B0D11"/>
            <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="#2D3545" stroke-width="1"/>
            <line x1="${padL}" y1="${padT + plotH}" x2="${padL + plotW}" y2="${padT + plotH}" stroke="#2D3545" stroke-width="1"/>
            <text x="${padL + 8}" y="${padT - 8}" fill="#E5E7EB" font-family="IBM Plex Mono, monospace" font-size="11">
              Y: ${escapeHtml(pair.yVar)} vs X: ${escapeHtml(pair.xVar)} · Pearson r = ${pair.pearsonR.toFixed(3)} · Spearman ρ = ${pair.spearmanRho.toFixed(3)} (n=${pair.validN})
            </text>
            <text x="${W - padR}" y="${padT - 8}" text-anchor="end" fill="#9CA3AF" font-family="IBM Plex Mono, monospace" font-size="10">
              -- OLS Linear Fit (Cobalt) | — Binned Trend (Amber)
            </text>
            ${olsLine}
            ${binnedPoly}
            ${circles}
            <text x="${padL}" y="${H - 12}" fill="#9CA3AF" font-family="IBM Plex Mono, monospace" font-size="10">${minX}</text>
            <text x="${padL + plotW / 2}" y="${H - 12}" text-anchor="middle" fill="#D1D5DB" font-family="IBM Plex Mono, monospace" font-size="11">${escapeHtml(pair.xVar)}</text>
            <text x="${padL + plotW}" y="${H - 12}" text-anchor="end" fill="#9CA3AF" font-family="IBM Plex Mono, monospace" font-size="10">${maxX}</text>
            <text x="${padL - 8}" y="${padT + 10}" text-anchor="end" fill="#9CA3AF" font-family="IBM Plex Mono, monospace" font-size="10">${maxY}</text>
            <text x="${padL - 8}" y="${padT + plotH}" text-anchor="end" fill="#9CA3AF" font-family="IBM Plex Mono, monospace" font-size="10">${minY}</text>
          </svg>
        `;
      }

      // 2. Numeric x Categorical Grouped Box + Jitter Strip Plot
      if (pair.family === "numeric_categorical") {
        const groups = pair.groups || [];
        const allMin = Math.min(...groups.map(g => g.min));
        const allMax = Math.max(...groups.map(g => g.max));
        const spanX = (allMax - allMin) || 1;
        const sx = (v) => padL + 70 + ((v - allMin) / spanX) * (plotW - 80);
        const rowH = Math.min(48, Math.floor(plotH / Math.max(1, groups.length)));

        const groupRows = groups.map((g, idx) => {
          const cy = padT + idx * rowH + rowH / 2;
          const xMin = sx(g.min);
          const xQ1 = sx(g.q1);
          const xMed = sx(g.median);
          const xMean = sx(g.mean);
          const xQ3 = sx(g.q3);
          const xMax = sx(g.max);
          const dots = g.values.map((v, di) => {
            const jitter = ((di % 5) - 2) * 2.2;
            return `<circle cx="${sx(v).toFixed(1)}" cy="${(cy + jitter).toFixed(1)}" r="3.2" fill="#34D399" opacity="0.75"><title>${escapeHtml(g.category)}: ${v}</title></circle>`;
          }).join("");

          return `
            <g>
              <text x="${padL + 62}" y="${cy + 4}" text-anchor="end" fill="#E5E7EB" font-family="IBM Plex Mono, monospace" font-size="10.5">${escapeHtml(g.category.slice(0, 14))} (n=${g.n})</text>
              <line x1="${xMin.toFixed(1)}" y1="${cy}" x2="${xMax.toFixed(1)}" y2="${cy}" stroke="#6B7280" stroke-width="1.4"/>
              <rect x="${xQ1.toFixed(1)}" y="${cy - 9}" width="${Math.max(3, xQ3 - xQ1).toFixed(1)}" height="18" rx="3" fill="rgba(59,130,246,0.28)" stroke="#3B82F6" stroke-width="1.4"/>
              <line x1="${xMed.toFixed(1)}" y1="${cy - 9}" x2="${xMed.toFixed(1)}" y2="${cy + 9}" stroke="#FBBF24" stroke-width="2.4"/>
              <circle cx="${xMean.toFixed(1)}" cy="${cy}" r="4" fill="#F87171"><title>Mean = ${g.mean.toFixed(2)}</title></circle>
              ${dots}
            </g>
          `;
        }).join("");

        return `
          <svg id="compass-pair-svg" width="100%" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Grouped distribution plot of ${escapeHtml(pair.numericVar)} across ${escapeHtml(pair.categoricalVar)}">
            <rect x="0" y="0" width="${W}" height="${H}" rx="8" fill="#0B0D11"/>
            <text x="${padL}" y="${padT - 8}" fill="#E5E7EB" font-family="IBM Plex Mono, monospace" font-size="11">
              ${escapeHtml(pair.numericVar)} by ${escapeHtml(pair.categoricalVar)} · Descriptive η² = ${pair.etaSquared.toFixed(3)} (n=${pair.validN})
            </text>
            <text x="${W - padR}" y="${padT - 8}" text-anchor="end" fill="#9CA3AF" font-family="IBM Plex Mono, monospace" font-size="10">
              Box = IQR | Gold Line = Median | Red Dot = Mean
            </text>
            ${groupRows}
            <line x1="${padL + 70}" y1="${padT + plotH}" x2="${padL + plotW}" y2="${padT + plotH}" stroke="#2D3545" stroke-width="1"/>
            <text x="${padL + 70}" y="${H - 12}" fill="#9CA3AF" font-family="IBM Plex Mono, monospace" font-size="10">${allMin}</text>
            <text x="${padL + 70 + (plotW - 80) / 2}" y="${H - 12}" text-anchor="middle" fill="#D1D5DB" font-family="IBM Plex Mono, monospace" font-size="11">${escapeHtml(pair.numericVar)}</text>
            <text x="${padL + plotW}" y="${H - 12}" text-anchor="end" fill="#9CA3AF" font-family="IBM Plex Mono, monospace" font-size="10">${allMax}</text>
          </svg>
        `;
      }

      // 3. Categorical x Categorical Stacked Proportion Bars
      if (pair.family === "categorical_categorical") {
        const palette = ["#34D399", "#3B82F6", "#F59E0B", "#EC4899", "#A78BFA", "#14B8A6"];
        const rows = pair.matrix || [];
        const barH = Math.min(34, Math.floor((plotH - 20) / Math.max(1, rows.length)));

        const barsSvg = rows.map((rObj, rIdx) => {
          const y = padT + 18 + rIdx * (barH + 10);
          let curX = padL + 90;
          const totalW = plotW - 100;
          const segs = rObj.cells.map((cell, cIdx) => {
            const w = (cell.rowPct / 100) * totalW;
            const segX = curX;
            curX += w;
            const col = palette[cIdx % palette.length];
            return `<rect x="${segX.toFixed(1)}" y="${y}" width="${Math.max(0, w).toFixed(1)}" height="${barH}" fill="${col}" stroke="#0B0D11" stroke-width="1"><title>${escapeHtml(rObj.rowCategory)} × ${escapeHtml(cell.colCategory)}: n=${cell.count} (${cell.rowPct.toFixed(1)}% of row)</title></rect>`;
          }).join("");

          return `
            <g>
              <text x="${padL + 82}" y="${y + barH / 2 + 4}" text-anchor="end" fill="#E5E7EB" font-family="IBM Plex Mono, monospace" font-size="10.5">${escapeHtml(rObj.rowCategory.slice(0, 14))} (n=${rObj.rowTotal})</text>
              ${segs}
            </g>
          `;
        }).join("");

        const legendSvg = pair.colCategories.map((c, cIdx) => {
          const col = palette[cIdx % palette.length];
          return `<tspan fill="${col}">■</tspan> ${escapeHtml(c)}  `;
        }).join("");

        return `
          <svg id="compass-pair-svg" width="100%" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Contingency stacked bar chart">
            <rect x="0" y="0" width="${W}" height="${H}" rx="8" fill="#0B0D11"/>
            <text x="${padL}" y="${padT - 6}" fill="#E5E7EB" font-family="IBM Plex Mono, monospace" font-size="11">
              ${escapeHtml(pair.varA)} × ${escapeHtml(pair.varB)} · Cramér's V = ${pair.cramersV.toFixed(3)} · χ² = ${pair.chiSquare.toFixed(2)} (n=${pair.validN})
            </text>
            <text x="${padL}" y="${padT + 10}" fill="#D1D5DB" font-family="IBM Plex Mono, monospace" font-size="10">${legendSvg}</text>
            ${barsSvg}
          </svg>
        `;
      }

      // 4. Temporal x Numeric Ordered Line + Moving Average
      if (pair.family === "temporal_numeric") {
        const series = pair.series || [];
        const ma = pair.movingAvg || [];
        const minT = series[0].epochMs;
        const maxT = series[series.length - 1].epochMs;
        const vals = series.map(s => s.value);
        const minV = Math.min(...vals);
        const maxV = Math.max(...vals);
        const spanT = (maxT - minT) || 1;
        const spanV = (maxV - minV) || 1;
        const sx = (ms) => padL + ((ms - minT) / spanT) * plotW;
        const sy = (v) => padT + plotH - ((v - minV) / spanV) * plotH;

        const rawPoly = series.map(s => `${sx(s.epochMs).toFixed(1)},${sy(s.value).toFixed(1)}`).join(" ");
        const maPoly = ma.map(m => `${sx(m.epochMs).toFixed(1)},${sy(m.maValue).toFixed(1)}`).join(" ");
        const dots = series.map(s => `<circle cx="${sx(s.epochMs).toFixed(1)}" cy="${sy(s.value).toFixed(1)}" r="3.6" fill="#34D399"><title>${s.isoDate}: ${s.value}</title></circle>`).join("");

        return `
          <svg id="compass-pair-svg" width="100%" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Time series plot of ${escapeHtml(pair.numericVar)} over ${escapeHtml(pair.temporalVar)}">
            <rect x="0" y="0" width="${W}" height="${H}" rx="8" fill="#0B0D11"/>
            <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="#2D3545" stroke-width="1"/>
            <line x1="${padL}" y1="${padT + plotH}" x2="${padL + plotW}" y2="${padT + plotH}" stroke="#2D3545" stroke-width="1"/>
            <text x="${padL}" y="${padT - 8}" fill="#E5E7EB" font-family="IBM Plex Mono, monospace" font-size="11">
              ${escapeHtml(pair.numericVar)} over ${escapeHtml(pair.temporalVar)} · Trend r = ${pair.trendR.toFixed(3)} · Lag-1 r = ${pair.lag1Autocorr !== null ? pair.lag1Autocorr.toFixed(3) : 'n/a'}
            </text>
            <polyline fill="none" stroke="#34D399" stroke-width="1.8" points="${rawPoly}"/>
            <polyline fill="none" stroke="#F59E0B" stroke-width="2.2" stroke-dasharray="4 3" points="${maPoly}"/>
            ${dots}
            <text x="${padL}" y="${H - 12}" fill="#9CA3AF" font-family="IBM Plex Mono, monospace" font-size="10">${series[0].isoDate}</text>
            <text x="${padL + plotW}" y="${H - 12}" text-anchor="end" fill="#9CA3AF" font-family="IBM Plex Mono, monospace" font-size="10">${series[series.length - 1].isoDate}</text>
          </svg>
        `;
      }

      return "";
    }

    // =========================================================================
    // DATAMEND LAB ROUND-TRIP HANDOFF & CLEANING WORKBENCH (SECTIONS 12 & 13)
    // =========================================================================
    async function openCompassRoundTripModal() {
      const res = compassState.lastAnalysis;
      if (!res) return;
      const envelope = DataSenseCompassEngine.createHandoffEnvelope(res, "datamend");
      await saveHandoffEnvelopeToIDB(envelope);
      compassState.activeHandoffEnvelope = envelope;

      const bd = document.getElementById("compass-roundtrip-backdrop");
      const body = document.getElementById("compass-rt-modal-body");
      if (!bd || !body) return;

      body.innerHTML = `
        <div style="background:var(--bg-canvas-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-sm);padding:0.9rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
            <span class="mono-num" style="font-size:0.72rem;font-weight:600;color:var(--accent-emerald);">DATASENSE COMPASS × DATAMEND LAB INTEROPERABILITY</span>
            <span class="compass-type-badge mono-num">Handoff Schema: datasense_compass_handoff_v1 (${escapeHtml(envelope.state)})</span>
          </div>
          <div class="mono-num" style="font-size:0.74rem;color:var(--ink-secondary);margin-top:0.45rem;display:grid;grid-template-columns:1fr 1fr;gap:0.35rem;">
            <div><strong>Handoff ID:</strong> ${escapeHtml(envelope.handoffId)}</div>
            <div><strong>Integrity Digest:</strong> ${escapeHtml(envelope.integrityDigest.slice(0, 26))}…</div>
            <div><strong>Dataset:</strong> ${escapeHtml(envelope.dataset.name)} (${envelope.dataset.rowCount}×${envelope.dataset.columnCount})</div>
            <div><strong>Primary Variable:</strong> ${escapeHtml(envelope.compassContext.primaryVariable)}</div>
          </div>
        </div>

        <div style="border:1px solid var(--accent-emerald);border-radius:var(--radius-sm);padding:1rem;background:var(--bg-surface);">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;">
            <h4 style="font-family:var(--font-display);font-size:1.15rem;color:var(--ink-primary);">1 · Operational File-Based Workflow (Recommended Today)</h4>
            <span class="compass-type-badge" style="color:var(--accent-emerald);">Works with Live Production DataMend Lab</span>
          </div>
          <p style="font-size:0.8rem;color:var(--ink-secondary);margin-top:0.25rem;line-height:1.48;">
            Export your dataset as standard CSV or a DataSense JSON Envelope, open <strong>DataMend Lab</strong> to audit and clean your table, then re-import the cleaned CSV/JSON back into Compass to verify improved readiness and inspect the before/after lineage diff.
          </p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.7rem;">
            <button type="button" class="btn btn-primary btn-sm" onclick="exportCompassArtifact('dataset_csv')">↓ Download Raw CSV</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="exportCompassArtifact('datasense_json')">↓ Download DataSense JSON Envelope</button>
            <a href="https://rkohnmn.github.io/datamend-lab/" target="_blank" rel="noopener noreferrer" class="btn btn-emerald btn-sm">2. Open Live DataMend Lab ↗</a>
            <button type="button" class="btn btn-secondary btn-sm" onclick="closeCompassRoundTripModal();document.getElementById('compass-ws-file-input').click();">3. ↑ Re-Import Cleaned File</button>
          </div>
        </div>

        <div style="border:1px solid var(--border-hairline);border-radius:var(--radius-sm);padding:1rem;background:var(--bg-canvas-elevated);">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;">
            <h4 style="font-family:var(--font-display);font-size:1.12rem;color:var(--ink-primary);">2 · Same-Origin Browser Handoff Protocol &amp; Adapter Status</h4>
            <span class="compass-type-badge mono-num">datamend-adapter/datamend-compass-adapter.js</span>
          </div>
          <p style="font-size:0.78rem;color:var(--ink-secondary);margin-top:0.25rem;line-height:1.46;">
            Compass stages your dataset and diagnostic recipe in browser <code class="mono-num">IndexedDB</code> / <code class="mono-num">localStorage</code> under <code class="mono-num">datasense_compass_handoff_v1</code>. Because <code class="mono-num">rkohnmn/datamend-lab</code> is an independent repository, automatic cross-tab consumption requires adding the included <code class="mono-num">datamend-adapter/datamend-compass-adapter.js</code> script to DataMend Lab. Until that adapter is deployed in <code class="mono-num">rkohnmn/datamend-lab</code>, use the File-Based Export/Re-Import workflow above.
          </p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.65rem;">
            <a href="https://rkohnmn.github.io/datamend-lab/?compass_handoff=${encodeURIComponent(envelope.handoffId)}&amp;return_to=${encodeURIComponent(envelope.returnUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Launch DataMend Lab with Handoff URL ↗</a>
          </div>
        </div>

        <div style="border:1px solid var(--border-hairline);border-radius:var(--radius-sm);padding:1rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;">
            <h4 style="font-family:var(--font-display);font-size:1.12rem;color:var(--ink-primary);">3 · Interactive Cleaning Preview Inside Compass (User-Approved Simulation)</h4>
            <span class="compass-type-badge">Non-Destructive Local Preview</span>
          </div>
          <p style="font-size:0.79rem;color:var(--ink-secondary);margin-top:0.2rem;line-height:1.45;">
            Preview how deterministic hygiene rules affect your dataset's readiness gate and correlations right inside Compass. <strong>Nothing is modified without your explicit review below</strong>, and you can restore the original unmodified dataset at any time.
          </p>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.55rem;margin-top:0.75rem;font-size:0.8rem;">
            <label style="display:flex;align-items:center;gap:0.45rem;"><input type="checkbox" id="dm-opt-sentinels" checked /> Recode numeric sentinels (-999 → null)</label>
            <label style="display:flex;align-items:center;gap:0.45rem;"><input type="checkbox" id="dm-opt-units" checked /> Strip embedded units ("138 mmHg" → 138)</label>
            <label style="display:flex;align-items:center;gap:0.45rem;"><input type="checkbox" id="dm-opt-cats" checked /> Normalize category casing &amp; whitespace</label>
            <label style="display:flex;align-items:center;gap:0.45rem;"><input type="checkbox" id="dm-opt-dates" checked /> Repair/standardize dates to ISO-8601</label>
            <label style="display:flex;align-items:center;gap:0.45rem;"><input type="checkbox" id="dm-opt-dups" checked /> Deduplicate identical rows / ID keys</label>
          </div>

          <div style="margin-top:0.75rem;padding-top:0.65rem;border-top:1px dashed var(--border-hairline);display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;font-size:0.78rem;">
            <span class="mono-num" style="color:var(--ink-muted);">Optional Rename Primary Variable (${escapeHtml(res.primaryVar)}) →</span>
            <input type="text" id="dm-opt-rename-to" placeholder="Leave blank or enter new name (e.g., ${escapeHtml(res.primaryVar)}_clean)" style="flex:1;min-width:200px;padding:0.35rem 0.55rem;border:1px solid var(--border-strong);border-radius:4px;background:var(--bg-surface);color:var(--ink-primary);font-family:var(--font-mono);font-size:0.76rem;" />
          </div>

          <div style="margin-top:0.85rem;display:flex;gap:0.55rem;flex-wrap:wrap;">
            <button type="button" class="btn btn-emerald btn-sm" onclick="executeInAppDataMendRoundTrip()">✓ Execute DataMend Cleaning &amp; Return to Compass</button>
            ${compassState.uncleanedBackupDataset ? `<button type="button" class="btn btn-secondary btn-sm" onclick="restoreOriginalCompassDataset()">↺ Restore Original Unmodified Dataset</button>` : ''}
          </div>
        </div>
      `;

      bd.classList.add("open");
    }

    function closeCompassRoundTripModal() {
      const bd = document.getElementById("compass-roundtrip-backdrop");
      if (bd) bd.classList.remove("open");
    }

    async function executeInAppDataMendRoundTrip() {
      const res = compassState.lastAnalysis;
      if (!res) return;
      if (!compassState.uncleanedBackupDataset && compassState.customDataset) {
        compassState.uncleanedBackupDataset = JSON.parse(JSON.stringify(compassState.customDataset));
      }
      const renameInput = document.getElementById("dm-opt-rename-to");
      const renameTo = renameInput && renameInput.value.trim() ? renameInput.value.trim() : null;

      const cleanedResult = DataSenseCompassEngine.executeDataMendCleaning(res.dataset, {
        recodeSentinels: document.getElementById("dm-opt-sentinels")?.checked !== false,
        stripNumericUnits: document.getElementById("dm-opt-units")?.checked !== false,
        normalizeCategoryStrings: document.getElementById("dm-opt-cats")?.checked !== false,
        repairInvalidDates: document.getElementById("dm-opt-dates")?.checked !== false,
        deduplicateRows: document.getElementById("dm-opt-dups")?.checked !== false,
        renameVariableFrom: renameTo ? res.primaryVar : null,
        renameVariableTo: renameTo
      });

      if (compassState.activeHandoffEnvelope) {
        compassState.activeHandoffEnvelope.state = "RETURN_CONSUMED";
        compassState.activeHandoffEnvelope.cleanedDataset = cleanedResult.dataset;
        compassState.activeHandoffEnvelope.auditSummary = cleanedResult.auditSummary;
        await saveHandoffEnvelopeToIDB(compassState.activeHandoffEnvelope);
      }

      applyReturnedCleanedDataset(cleanedResult.dataset, cleanedResult.auditSummary, compassState.activeHandoffEnvelope?.handoffId);
      closeCompassRoundTripModal();
      navigateTo("compass");
    }

    function applyReturnedCleanedDataset(cleanedDataset, auditSummary, handoffId) {
      compassState.customDataset = cleanedDataset;
      compassState.typeOverrides = cleanedDataset.typeOverrides || {};
      // Note: compassState.primaryVar is intentionally kept as the old name if renamed so analyzeDataset maps it via lineage!
      runCompassAnalysisAndRender();
      const opCount = auditSummary && auditSummary.operations ? auditSummary.operations.length : 0;
      showCraftToast(`DataMend Round-Trip Complete (${opCount} hygiene operations applied)`);
    }

    // =========================================================================
    // REPRODUCIBLE EXPORTS (PROFILE JSON, RELATIONSHIPS CSV, SVG, DATASENSE JSON)
    // =========================================================================
    function triggerBrowserDownload(filename, mimeType, content) {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 150);
      showCraftToast(`Exported ${filename}`);
    }

    function exportCompassArtifact(kind) {
      const res = compassState.lastAnalysis;
      if (!res) return;
      const slug = (res.dataset.id || "dataset").replace(/[^a-zA-Z0-9_-]/g, "_");

      if (kind === "profile_json") {
        const json = DataSenseCompassEngine.exportProfileReportJSON(res);
        triggerBrowserDownload(`${slug}_compass_profile.json`, "application/json", json);
      } else if (kind === "relationships_csv") {
        const csv = DataSenseCompassEngine.exportRelationshipsToCSV(res);
        triggerBrowserDownload(`${slug}_${res.primaryVar}_relationships.csv`, "text/csv;charset=utf-8", csv);
      } else if (kind === "dataset_csv") {
        const csv = DataSenseCompassEngine.exportDatasetToCSV(res.dataset);
        triggerBrowserDownload(`${slug}_export.csv`, "text/csv;charset=utf-8", csv);
      } else if (kind === "datasense_json") {
        const env = DataSenseCompassEngine.createHandoffEnvelope(res, "datamend");
        triggerBrowserDownload(`${slug}_datasense_handoff_v1.json`, "application/json", JSON.stringify(env, null, 2));
      } else if (kind === "chart_svg") {
        const svgEl = document.getElementById("compass-pair-svg");
        if (!svgEl) {
          setCompassCenterMode("pair");
        }
        const activeSvg = document.getElementById("compass-pair-svg");
        if (activeSvg) {
          const serializer = new XMLSerializer();
          const svgStr = serializer.serializeToString(activeSvg);
          triggerBrowserDownload(`${slug}_${res.primaryVar}_pair.svg`, "image/svg+xml;charset=utf-8", svgStr);
        }
      }
    }


    
    function jumpCompassStep(stepNum) {
      for (let i = 1; i <= 5; i++) {
        const b = document.getElementById("compass-step-btn-" + i);
        if (b) b.classList.toggle("active", i === stepNum);
      }
      if (stepNum === 1) {
        const el = document.getElementById("compass-ws-sample-pills");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (stepNum === 2) {
        const sel = document.getElementById("compass-ws-primary-select");
        if (sel) {
          sel.scrollIntoView({ behavior: "smooth", block: "center" });
          sel.focus();
        }
      } else if (stepNum === 3) {
        const rEl = document.getElementById("compass-ws-readiness-body");
        if (rEl) rEl.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (stepNum === 4) {
        setCompassCenterMode("explorer");
        const cEl = document.getElementById("compass-tab-explorer");
        if (cEl) cEl.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (stepNum === 5) {
        const recEl = document.getElementById("compass-ws-recommendations");
        if (recEl) recEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    function restoreOriginalCompassDataset() {
      if (compassState.uncleanedBackupDataset) {
        compassState.customDataset = compassState.uncleanedBackupDataset;
        compassState.uncleanedBackupDataset = null;
        runCompassAnalysisAndRender();
        closeCompassRoundTripModal();
        showCraftToast("Restored original unmodified dataset");
      } else {
        compassState.customDataset = null;
        runCompassAnalysisAndRender();
        closeCompassRoundTripModal();
        showCraftToast("Reset to original sample dataset");
      }
    }

    // Initialize all views on load
    function initAtelierHub() {
      initCompassHandoffChannel();
      runCompassAnalysisAndRender();
      loadAtelierTheme();
      loadSavedState();
      updateFavBadges();
      selectHeroStage(2); // Start on QuartetLab live draggable sandbox
      renderDesigneerCatalogue();
      renderFavouritesDrawer();
      renderPipelineJourney();
      renderUserFlowInspector();
      renderHomeBento();
      renderHomeShowcases();
      renderFinderWidget("home-finder-tasks", "home-finder-result");
      renderFinderWidget("page-finder-tasks", "page-finder-result");
      renderLearningAndRegistry();
      renderDirectory();
      renderSecondaryPages();
      if (window.DATASENSE_INITIAL_VIEW === "compass") {
        navigateTo("compass");
      } else if (window.location.hash && window.location.hash !== "#home") {
        handleHashRoute();
      }
    }
    window.initApp = initAtelierHub;

    initAtelierHub();
