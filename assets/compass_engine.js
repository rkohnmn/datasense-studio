/**
 * DataSense Compass — Core Statistical, Profiling, Readiness, Relationship & Routing Engine
 * Version: 1.0.0
 * Works identically in Browser (window.DataSenseCompassEngine) and Node.js (module.exports)
 * Zero external runtime dependencies. Deterministic, privacy-first, client-side computation.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.DataSenseCompassEngine = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // =========================================================================
  // 1. CONSTANTS, SEMANTIC TYPES & ECOSYSTEM REGISTRY
  // =========================================================================
  const SEMANTIC_TYPES = {
    CONTINUOUS_NUMERIC: 'continuous_numeric',
    DISCRETE_NUMERIC: 'discrete_numeric',
    COUNT: 'count',
    BINARY_CATEGORICAL: 'binary_categorical',
    NOMINAL_CATEGORICAL: 'nominal_categorical',
    ORDINAL_CATEGORICAL: 'ordinal_categorical',
    DATE: 'date',
    DATETIME: 'datetime',
    DURATION: 'duration',
    CYCLIC_TEMPORAL: 'cyclic_temporal',
    IDENTIFIER: 'identifier',
    TEXT: 'text',
    UNKNOWN_AMBIGUOUS: 'unknown_ambiguous'
  };

  const SEMANTIC_TYPE_LABELS = {
    continuous_numeric: 'Continuous Numeric',
    discrete_numeric: 'Discrete Numeric',
    count: 'Count Numeric',
    binary_categorical: 'Binary Categorical',
    nominal_categorical: 'Nominal Categorical',
    ordinal_categorical: 'Ordinal Categorical',
    date: 'Date',
    datetime: 'Date-Time',
    duration: 'Duration',
    cyclic_temporal: 'Cyclic Temporal',
    identifier: 'Identifier / Key',
    text: 'Free Text',
    unknown_ambiguous: 'Mixed / Ambiguous'
  };

  const SENTINEL_MISSING_TOKENS = new Set([
    '', 'na', 'n/a', 'null', 'none', 'nan', 'nil', 'missing', 'undefined',
    '-', '--', '?', '.', '-999', '-999.0', '-99', '9999', '99999'
  ]);

  const NUMERIC_SENTINELS = new Set(['-999', '-999.0', '-99', '9999', '99999']);

  const KNOWN_ORDINAL_SETS = [
    ['low', 'medium', 'high'],
    ['low', 'moderate', 'high'],
    ['very low', 'low', 'medium', 'high', 'very high'],
    ['poor', 'fair', 'good', 'very good', 'excellent'],
    ['small', 'medium', 'large'],
    ['junior', 'mid', 'senior', 'principal'],
    ['starter', 'standard', 'plus', 'pro', 'enterprise'],
    ['basic', 'standard', 'premium'],
    ['tier 1', 'tier 2', 'tier 3', 'tier 4'],
    ['q1', 'q2', 'q3', 'q4'],
    ['g', 'f', 'e', 'd', 'c', 'b', 'a'],
    ['a', 'b', 'c', 'd', 'e', 'f']
  ];

  const CYCLIC_MONTHS = new Set([
    'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',
    'january', 'february', 'march', 'april', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
  ]);
  const CYCLIC_DAYS = new Set([
    'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun',
    'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
  ]);

  const ECOSYSTEM_APPS = {
    datamend: {
      id: 'datamend',
      stage: '01 Prepare',
      name: 'DataMend Lab',
      liveUrl: 'https://rkohnmn.github.io/datamend-lab/',
      repoUrl: 'https://github.com/rkohnmn/datamend-lab',
      tagline: 'Deterministic Data Hygiene, Sentinel Recoding & Schema Repair'
    },
    visualgrammar: {
      id: 'visualgrammar',
      stage: '02 Visualize',
      name: 'VisualGrammar',
      liveUrl: 'https://rkohnmn.github.io/visualgrammar/',
      repoUrl: 'https://github.com/rkohnmn/visualgrammar',
      tagline: 'Layered Grammar-of-Graphics Encoding & Multi-Variable Faceting'
    },
    quartetlab: {
      id: 'quartetlab',
      stage: '03 Investigate',
      name: 'QuartetLab',
      liveUrl: 'https://rkohnmn.github.io/quartetlab/',
      repoUrl: 'https://github.com/rkohnmn/quartetlab',
      tagline: 'Summary-Statistic Deception Diagnostics, Anscombe & Non-Linear Structural Checks'
    },
    resamplelab: {
      id: 'resamplelab',
      stage: '04 Infer',
      name: 'ResampleLab',
      liveUrl: 'https://rkohnmn.github.io/resamplelab/',
      repoUrl: 'https://github.com/rkohnmn/resamplelab',
      tagline: 'Non-Parametric Bootstrap Confidence Intervals & Permutation Hypothesis Tests'
    },
    forecastlab: {
      id: 'forecastlab',
      stage: '05 Forecast',
      name: 'ForecastLab',
      liveUrl: 'https://rkohnmn.github.io/forecastlab/',
      repoUrl: 'https://github.com/rkohnmn/forecastlab',
      tagline: 'STL Decomposition, Autocorrelation Diagnostics & Rolling-Origin Time-Series Horizons'
    }
  };

  // =========================================================================
  // 2. SIX BUILT-IN DETERMINISTIC SAMPLE DATASETS (SECTION 26)
  // =========================================================================
  const SAMPLE_DATASETS = {
    housing: {
      id: 'housing',
      name: 'Pacific Northwest Residential Housing Cohort',
      shortLabel: '1. Housing Prices',
      category: 'Real Estate & Hedonic Valuation',
      description: '30 residential property sales with living area, neighborhood, ordinal energy rating, sale date, leading-zero parcel IDs, and a constant tax-tier column.',
      defaultPrimaryVar: 'sale_price_usd',
      csvText: [
        'parcel_id,sale_date,neighborhood,energy_rating,bedrooms,sqft_living,lot_sqft,walk_score,sale_price_usd,constant_tax_tier',
        '00104,2024-01-15,Ballard,B,3,1920,4200,84,785000,Tier-1',
        '00108,2024-01-22,Capitol Hill,A,2,1480,2800,92,810000,Tier-1',
        '00112,2024-02-04,Beacon Hill,C,3,1650,5100,68,615000,Tier-1',
        '00119,2024-02-14,Fremont,A,4,2450,4800,88,995000,Tier-1',
        '00125,2024-02-27,West Seattle,B,3,1810,5600,71,720000,Tier-1',
        '00131,2024-03-08,Ballard,A,4,2620,5000,85,1050000,Tier-1',
        '00137,2024-03-19,Beacon Hill,D,2,1190,4600,64,495000,Tier-1',
        '00142,2024-03-29,Capitol Hill,B,3,2050,3400,91,925000,Tier-1',
        '00149,2024-04-10,Fremont,B,3,1980,4100,86,845000,Tier-1',
        '00155,2024-04-21,West Seattle,C,2,1340,5200,66,570000,Tier-1',
        '00161,2024-05-03,Ballard,B,3,2100,4400,83,860000,Tier-1',
        '00168,2024-05-16,Beacon Hill,C,4,2180,6100,69,710000,Tier-1',
        '00174,2024-05-28,Capitol Hill,A,4,2790,3900,94,1190000,Tier-1',
        '00180,2024-06-09,Fremont,A,3,2210,4300,89,935000,Tier-1',
        '00186,2024-06-20,West Seattle,B,4,2340,6300,73,835000,Tier-1',
        '00192,2024-07-02,Ballard,C,2,1290,3800,80,605000,Tier-1',
        '00199,2024-07-15,Beacon Hill,D,2,1080,4400,62,465000,Tier-1',
        '00205,2024-07-26,Capitol Hill,B,2,1560,3100,90,775000,Tier-1',
        '00211,2024-08-07,Fremont,B,4,2510,4700,87,980000,Tier-1',
        '00218,2024-08-19,West Seattle,C,3,1720,5400,70,665000,Tier-1',
        '00224,2024-09-01,Ballard,A,5,3050,5500,86,1240000,Tier-1',
        '00230,2024-09-14,Beacon Hill,B,3,1790,5300,67,650000,Tier-1',
        '00237,2024-09-25,Capitol Hill,A,3,2150,3500,93,965000,Tier-1',
        '00243,2024-10-08,Fremont,C,2,1410,3900,84,670000,Tier-1',
        '00249,2024-10-20,West Seattle,B,3,1890,5800,72,740000,Tier-1',
        '00255,2024-11-02,Ballard,B,3,2010,4300,82,825000,Tier-1',
        '00262,2024-11-15,Beacon Hill,C,3,1600,4900,65,590000,Tier-1',
        '00268,2024-11-28,Capitol Hill,A,4,2680,3700,92,1140000,Tier-1',
        '00274,2024-12-09,Fremont,A,4,2580,4600,88,1025000,Tier-1',
        '00280,2024-12-21,West Seattle,A,4,2490,6200,74,895000,Tier-1'
      ].join('\n')
    },

    customer_behavior: {
      id: 'customer_behavior',
      name: 'SaaS Telemetry & Customer Retention Cohort',
      shortLabel: '2. Customer Churn',
      category: 'Product Analytics & Categorical Outcomes',
      description: '32 enterprise and mid-market accounts tracking binary churn status, contract tier, support ticket load, seat utilization, and monthly recurring spend.',
      defaultPrimaryVar: 'churn_status',
      csvText: [
        'account_id,signup_date,contract_tier,region,billing_cycle,support_tickets_qtr,seat_utilization_pct,monthly_spend_usd,churn_status',
        'ACC-1001,2024-01-10,Enterprise,North America,Annual,1,88.5,2450,Retained',
        'ACC-1002,2024-01-18,Starter,Europe,Monthly,7,31.0,290,Churned',
        'ACC-1003,2024-01-25,Pro,North America,Annual,2,79.2,1180,Retained',
        'ACC-1004,2024-02-02,Starter,APAC,Monthly,9,24.5,310,Churned',
        'ACC-1005,2024-02-11,Enterprise,Europe,Annual,0,92.1,3100,Retained',
        'ACC-1006,2024-02-19,Pro,North America,Monthly,6,42.0,890,Churned',
        'ACC-1007,2024-02-28,Pro,Europe,Annual,2,74.8,1050,Retained',
        'ACC-1008,2024-03-05,Starter,North America,Monthly,8,28.0,275,Churned',
        'ACC-1009,2024-03-14,Enterprise,APAC,Annual,1,85.4,2750,Retained',
        'ACC-1010,2024-03-22,Starter,Europe,Annual,3,68.0,420,Retained',
        'ACC-1011,2024-04-01,Pro,APAC,Monthly,7,35.6,840,Churned',
        'ACC-1012,2024-04-09,Enterprise,North America,Annual,1,90.2,2900,Retained',
        'ACC-1013,2024-04-17,Starter,North America,Monthly,10,19.5,250,Churned',
        'ACC-1014,2024-04-26,Pro,Europe,Annual,1,81.0,1250,Retained',
        'ACC-1015,2024-05-04,Pro,North America,Annual,3,71.5,1120,Retained',
        'ACC-1016,2024-05-12,Starter,APAC,Monthly,6,37.2,330,Churned',
        'ACC-1017,2024-05-20,Enterprise,Europe,Annual,2,84.0,2600,Retained',
        'ACC-1018,2024-05-29,Starter,Europe,Monthly,8,29.4,295,Churned',
        'ACC-1019,2024-06-07,Pro,APAC,Annual,2,77.0,1190,Retained',
        'ACC-1020,2024-06-15,Enterprise,North America,Annual,0,94.5,3400,Retained',
        'ACC-1021,2024-06-24,Starter,North America,Monthly,9,22.0,260,Churned',
        'ACC-1022,2024-07-03,Pro,Europe,Monthly,5,48.5,920,Churned',
        'ACC-1023,2024-07-11,Enterprise,APAC,Annual,1,89.0,2850,Retained',
        'ACC-1024,2024-07-19,Starter,North America,Annual,2,72.0,450,Retained',
        'ACC-1025,2024-07-28,Pro,North America,Annual,2,80.4,1290,Retained',
        'ACC-1026,2024-08-06,Starter,Europe,Monthly,7,33.1,305,Churned',
        'ACC-1027,2024-08-14,Enterprise,North America,Annual,1,91.0,3050,Retained',
        'ACC-1028,2024-08-23,Pro,APAC,Monthly,6,40.2,870,Churned',
        'ACC-1029,2024-09-01,Pro,Europe,Annual,2,76.5,1150,Retained',
        'ACC-1030,2024-09-10,Starter,APAC,Monthly,8,26.8,280,Churned',
        'ACC-1031,2024-09-18,Enterprise,Europe,Annual,1,87.3,2700,Retained',
        'ACC-1032,2024-09-27,Pro,North America,Annual,1,83.2,1340,Retained'
      ].join('\n')
    },

    student_outcomes: {
      id: 'student_outcomes',
      name: 'STEM Pedagogy & Assessment Outcomes Study',
      shortLabel: '3. Student Outcomes',
      category: 'Educational Research & Legitimate Outliers',
      description: '28 student records across instruction modes and socioeconomic bands, including two legitimate high-leverage fellowship prodigy observations.',
      defaultPrimaryVar: 'final_exam_score',
      csvText: [
        'student_id,instruction_mode,socioeconomic_band,weekly_study_hours,practice_labs_completed,attendance_pct,prior_gpa,final_exam_score',
        'STU-01,Active Studio,Medium,6.5,8,92.0,3.25,78.4',
        'STU-02,Lecture Only,Low,4.0,4,81.5,2.70,61.2',
        'STU-03,Hybrid Seminar,High,8.0,10,95.0,3.60,85.0',
        'STU-04,Active Studio,Low,7.0,9,90.5,3.10,79.8',
        'STU-05,Lecture Only,Medium,5.0,5,84.0,2.95,66.5',
        'STU-06,Hybrid Seminar,Medium,6.0,7,88.0,3.15,74.2',
        'STU-07,Active Studio,High,9.0,11,96.5,3.75,89.6',
        'STU-08,Lecture Only,Low,3.5,3,76.0,2.50,56.8',
        'STU-09,Hybrid Seminar,Low,5.5,6,86.0,2.90,70.1',
        'STU-10,Active Studio,Medium,7.5,9,93.0,3.40,82.3',
        'STU-11,Lecture Only,High,6.0,6,89.0,3.30,71.0',
        'STU-12,Hybrid Seminar,Medium,6.5,8,91.0,3.20,76.5',
        'STU-13,Active Studio,Low,8.0,10,94.0,3.35,84.1',
        'STU-14,Lecture Only,Medium,4.5,4,82.0,2.80,63.4',
        'STU-15,Hybrid Seminar,High,7.5,9,93.5,3.55,81.7',
        'STU-16,Active Studio,High,8.5,10,95.5,3.70,87.2',
        'STU-17,Lecture Only,Low,3.0,2,72.5,2.40,53.5',
        'STU-18,Hybrid Seminar,Medium,6.0,7,89.5,3.10,73.8',
        'STU-19,Active Studio,Medium,7.0,8,91.5,3.30,80.0',
        'STU-20,Lecture Only,High,5.5,6,87.0,3.20,68.9',
        'STU-21,Hybrid Seminar,Low,5.0,6,85.0,2.85,68.2',
        'STU-22,Active Studio,High,19.5,18,100.0,3.98,99.4',
        'STU-23,Lecture Only,Medium,4.0,4,80.0,2.75,60.5',
        'STU-24,Hybrid Seminar,High,7.0,8,92.0,3.45,79.0',
        'STU-25,Active Studio,Low,6.5,8,90.0,3.05,77.6',
        'STU-26,Lecture Only,Low,2.5,2,70.0,2.30,51.0',
        'STU-27,Hybrid Seminar,Medium,6.5,7,90.0,3.25,75.4',
        'STU-28,Active Studio,High,18.0,17,99.5,3.95,98.8'
      ].join('\n')
    },

    time_activity: {
      id: 'time_activity',
      name: 'Regional Microgrid Load & Weather Telemetry',
      shortLabel: '4. Time-Series Activity',
      category: 'Chronological Forecasting & Irregularity Detection',
      description: '28 daily microgrid observations with temperature, solar generation, operating regime, and a 2-day telemetry outage gap between Jan 14 and Jan 17.',
      defaultPrimaryVar: 'grid_demand_mw',
      csvText: [
        'observation_date,day_of_week,peak_regime,temperature_c,solar_output_mw,wind_output_mw,grid_demand_mw',
        '2025-01-01,Wed,Winter Peak,-4.2,18.5,42.0,312.4',
        '2025-01-02,Thu,Winter Peak,-3.8,20.1,39.5,308.1',
        '2025-01-03,Fri,Winter Peak,-2.1,22.4,36.2,296.8',
        '2025-01-04,Sat,Standard,-0.5,25.0,31.0,274.2',
        '2025-01-05,Sun,Standard,0.4,26.8,29.4,268.5',
        '2025-01-06,Mon,Standard,1.2,24.2,33.1,282.0',
        '2025-01-07,Tue,Standard,2.0,27.5,30.8,279.4',
        '2025-01-08,Wed,Winter Peak,-1.8,19.8,40.2,301.6',
        '2025-01-09,Thu,Winter Peak,-5.1,16.4,45.6,324.0',
        '2025-01-10,Fri,Winter Peak,-6.0,15.2,47.1,331.5',
        '2025-01-11,Sat,Winter Peak,-4.5,18.9,41.8,309.2',
        '2025-01-12,Sun,Standard,-1.2,23.1,35.0,285.0',
        '2025-01-13,Mon,Standard,0.8,25.6,32.4,278.6',
        '2025-01-14,Tue,Standard,1.9,28.0,28.9,275.1',
        '2025-01-17,Fri,Winter Peak,-3.4,19.0,41.0,306.4',
        '2025-01-18,Sat,Winter Peak,-4.8,17.5,43.5,316.8',
        '2025-01-19,Sun,Winter Peak,-3.9,18.2,42.1,310.5',
        '2025-01-20,Mon,Standard,-0.6,23.8,34.6,288.2',
        '2025-01-21,Tue,Standard,1.5,26.4,31.2,280.9',
        '2025-01-22,Wed,Standard,2.8,29.1,27.5,271.4',
        '2025-01-23,Thu,Low Load,4.5,32.0,25.0,258.0',
        '2025-01-24,Fri,Low Load,5.2,33.4,24.1,254.6',
        '2025-01-25,Sat,Low Load,4.9,31.8,26.2,251.2',
        '2025-01-26,Sun,Low Load,3.8,30.2,28.0,259.8',
        '2025-01-27,Mon,Standard,1.4,26.0,32.5,281.5',
        '2025-01-28,Tue,Standard,0.2,24.5,34.8,287.9',
        '2025-01-29,Wed,Winter Peak,-2.6,20.4,38.9,302.1',
        '2025-01-30,Thu,Winter Peak,-4.0,18.1,42.7,314.0'
      ].join('\n')
    },

    messy_import: {
      id: 'messy_import',
      name: 'Raw Clinical Intake & Sensor Export (Unvalidated Import)',
      shortLabel: '5. Messy Import (Needs DataMend)',
      category: 'Data Hygiene & Quality Gate Demonstration',
      description: '24 raw intake records containing -999 sentinel codes, unparsed unit strings ("138 mmHg"), duplicate patient keys, malformed/ambiguous dates, and inconsistent cohort labels.',
      defaultPrimaryVar: 'systolic_bp',
      csvText: [
        'patient_key,visit_date,cohort,age_years,bmi_index,systolic_bp,inflammation_score',
        'PT-401,2025-01-05,Treatment,54,26.4,128,4.2',
        'PT-402,2025-01-06,Control,61,29.1,142,6.8',
        'PT-403,01/07/2025,treatment,47,24.0,118,3.1',
        'PT-404,2025-01-08,Control,58,-999,136,5.9',
        'PT-405,2025-01-09,Treatment,52,25.8,-999,4.5',
        'PT-405,2025-01-09,Treatment,52,25.8,-999,4.5',
        'PT-406,2025-19-40,Control ,66,31.2,148,7.9',
        'PT-407,2025-01-11,Treatment,44,23.5,116,2.8',
        'PT-408,2025-01-12,Control,63,28.7,138 mmHg,6.4',
        'PT-409,2025-01-13,Treatment,49,25.1,122,3.7',
        'PT-410,2025-01-14,control,59,27.9,139,6.1',
        'PT-411,2025-01-15,Treatment,55,26.0,126,4.0',
        'PT-412,2025-01-16,Control,68,32.0,152,8.4',
        'PT-413,2025-01-17,Treatment,42,22.8,114,2.5',
        'PT-414,2025-01-18,Control,60,28.4,-999,6.2',
        'PT-415,2025-01-19,Treatment,51,25.4,124,3.9',
        'PT-416,02/15/2025,Control,64,30.1,145,7.2',
        'PT-417,2025-01-21,Treatment,46,24.2,119,3.3',
        'PT-418,2025-01-22,Control,57,27.5,135,5.7',
        'PT-419,2025-01-23,Treatment,53,26.2,127,4.1',
        'PT-420,2025-01-24,Control,62,29.5,144,7.0',
        'PT-421,2025-01-25,Treatment,48,24.8,121,3.5',
        'PT-422,2025-01-26,Control,65,30.8,147 GBP,7.5',
        'PT-423,2025-01-27,Treatment,50,25.0,123,3.8'
      ].join('\n')
    },

    nonlinear_patterns: {
      id: 'nonlinear_patterns',
      name: 'Yerkes-Dodson Inverted-U Arousal & Performance Benchmark',
      shortLabel: '6. Nonlinear Patterns',
      category: 'Structural Non-Linearity & Anscombe Diagnostics',
      description: '29 experimental trials where stimulus arousal and cognitive throughput follow a sharp quadratic inverted-U curve (Pearson r near 0, strong binned curvature).',
      defaultPrimaryVar: 'cognitive_throughput',
      csvText: [
        'trial_id,protocol_regime,stimulus_arousal,monotonic_dose,cognitive_throughput,reaction_latency_ms',
        'TR-01,Low Arousal,-7.0,1.0,41.2,495',
        'TR-02,Low Arousal,-6.5,1.3,48.5,468',
        'TR-03,Low Arousal,-6.0,1.7,55.1,442',
        'TR-04,Low Arousal,-5.5,2.1,61.4,418',
        'TR-05,Low Arousal,-5.0,2.6,67.0,395',
        'TR-06,Low Arousal,-4.5,3.1,72.1,374',
        'TR-07,Low Arousal,-4.0,3.7,76.8,355',
        'TR-08,Optimal Zone,-3.5,4.4,80.9,338',
        'TR-09,Optimal Zone,-3.0,5.2,84.5,323',
        'TR-10,Optimal Zone,-2.5,6.1,87.6,310',
        'TR-11,Optimal Zone,-2.0,7.1,90.1,299',
        'TR-12,Optimal Zone,-1.5,8.2,92.0,290',
        'TR-13,Optimal Zone,-1.0,9.5,93.4,283',
        'TR-14,Optimal Zone,-0.5,10.9,94.2,279',
        'TR-15,Optimal Zone,0.0,12.5,94.5,277',
        'TR-16,Optimal Zone,0.5,14.3,94.2,279',
        'TR-17,Optimal Zone,1.0,16.3,93.3,284',
        'TR-18,Optimal Zone,1.5,18.5,91.9,291',
        'TR-19,Optimal Zone,2.0,21.0,89.9,300',
        'TR-20,Optimal Zone,2.5,23.8,87.4,311',
        'TR-21,Optimal Zone,3.0,27.0,84.3,324',
        'TR-22,Optimal Zone,3.5,30.6,80.7,339',
        'TR-23,Overload Zone,4.0,34.7,76.5,356',
        'TR-24,Overload Zone,4.5,39.3,71.8,375',
        'TR-25,Overload Zone,5.0,44.5,66.6,396',
        'TR-26,Overload Zone,5.5,50.4,60.9,419',
        'TR-27,Overload Zone,6.0,57.1,54.7,443',
        'TR-28,Overload Zone,6.5,64.7,48.0,469',
        'TR-29,Overload Zone,7.0,73.3,40.8,496'
      ].join('\n')
    }
  };

  // =========================================================================
  // 3. RFC-4180 CSV/TSV & DATASENSE JSON PARSER (SECTION 31)
  // =========================================================================
  function detectDelimiter(text) {
    const firstLines = text.split(/\r?\n/).slice(0, 5).filter(Boolean);
    if (!firstLines.length) return ',';
    const candidates = [',', '\t', ';', '|'];
    let bestDelim = ',';
    let bestScore = -1;
    for (const delim of candidates) {
      let counts = firstLines.map(line => {
        let inQuotes = false;
        let c = 0;
        for (let i = 0; i < line.length; i++) {
          const ch = line[i];
          if (ch === '"') inQuotes = !inQuotes;
          else if (!inQuotes && ch === delim) c++;
        }
        return c;
      });
      const minC = Math.min(...counts);
      const maxC = Math.max(...counts);
      if (minC > 0 && minC === maxC && minC > bestScore) {
        bestScore = minC;
        bestDelim = delim;
      } else if (minC > bestScore && bestScore <= 0) {
        bestScore = minC;
        bestDelim = delim;
      }
    }
    return bestDelim;
  }

  function parseDelimitedText(rawText, options = {}) {
    const parseIssues = [];
    if (typeof rawText !== 'string') {
      return {
        headers: [],
        rows: [],
        rawMatrix: [],
        parseIssues: [{ severity: 'error', code: 'EMPTY_INPUT', message: 'Input file is not valid text.' }]
      };
    }

    let text = rawText;
    if (text.charCodeAt(0) === 0xFEFF) {
      text = text.slice(1);
      parseIssues.push({ severity: 'info', code: 'UTF8_BOM_STRIPPED', message: 'UTF-8 Byte Order Mark (BOM) was detected and normalized.' });
    }

    const trimmed = text.trim();
    if (!trimmed) {
      return {
        headers: [],
        rows: [],
        rawMatrix: [],
        parseIssues: [{ severity: 'error', code: 'EMPTY_FILE', message: 'The uploaded file is empty (0 bytes or whitespace only).' }]
      };
    }

    const delimiter = options.delimiter || detectDelimiter(trimmed);
    const matrix = [];
    let currentRow = [];
    let currentField = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      const nextCh = text[i + 1];

      if (inQuotes) {
        if (ch === '"') {
          if (nextCh === '"') {
            currentField += '"';
            i++;
          } else {
            inQuotes = false;
          }
        } else {
          currentField += ch;
        }
      } else {
        if (ch === '"') {
          inQuotes = true;
        } else if (ch === delimiter) {
          currentRow.push(currentField);
          currentField = '';
        } else if (ch === '\r' || ch === '\n') {
          if (ch === '\r' && nextCh === '\n') {
            i++;
          }
          currentRow.push(currentField);
          if (currentRow.length > 1 || (currentRow.length === 1 && currentRow[0].trim() !== '')) {
            matrix.push(currentRow);
          }
          currentRow = [];
          currentField = '';
        } else {
          currentField += ch;
        }
      }
    }

    if (inQuotes) {
      parseIssues.push({
        severity: 'error',
        code: 'UNTERMINATED_QUOTE',
        message: 'Malformed CSV syntax: an opening quotation mark was never closed.'
      });
    }

    if (currentRow.length > 0 || currentField !== '') {
      currentRow.push(currentField);
      if (currentRow.length > 1 || (currentRow.length === 1 && currentRow[0].trim() !== '')) {
        matrix.push(currentRow);
      }
    }

    if (matrix.length === 0) {
      return {
        headers: [],
        rows: [],
        rawMatrix: [],
        parseIssues: [{ severity: 'error', code: 'NO_ROWS', message: 'No parseable rows were found in the file.' }]
      };
    }

    const rawHeaders = matrix[0];
    const headers = [];
    const seenHeaders = new Map();
    const emptyHeaderIndices = [];
    const duplicateHeaderNames = [];

    rawHeaders.forEach((h, idx) => {
      let cleanH = String(h || '').trim();
      if (!cleanH) {
        cleanH = `column_${idx + 1}`;
        emptyHeaderIndices.push(idx + 1);
      }
      const lower = cleanH.toLowerCase();
      if (seenHeaders.has(lower)) {
        const count = seenHeaders.get(lower) + 1;
        seenHeaders.set(lower, count);
        duplicateHeaderNames.push(cleanH);
        cleanH = `${cleanH}_${count}`;
      } else {
        seenHeaders.set(lower, 1);
      }
      headers.push(cleanH);
    });

    if (emptyHeaderIndices.length > 0) {
      parseIssues.push({
        severity: 'warning',
        code: 'EMPTY_COLUMN_HEADERS',
        message: `Empty column header(s) at position(s) ${emptyHeaderIndices.join(', ')} were assigned placeholder names.`
      });
    }
    if (duplicateHeaderNames.length > 0) {
      parseIssues.push({
        severity: 'warning',
        code: 'DUPLICATE_COLUMN_HEADERS',
        message: `Duplicate column header(s) (${duplicateHeaderNames.join(', ')}) were disambiguated with suffixes.`
      });
    }

    const expectedWidth = headers.length;
    const inconsistentRows = [];
    const rows = [];

    for (let r = 1; r < matrix.length; r++) {
      const rowArr = matrix[r];
      if (rowArr.length !== expectedWidth) {
        inconsistentRows.push({ rowNumber: r + 1, found: rowArr.length, expected: expectedWidth });
      }
      const rowObj = {};
      for (let c = 0; c < expectedWidth; c++) {
        rowObj[headers[c]] = rowArr[c] !== undefined ? rowArr[c] : '';
      }
      rows.push(rowObj);
    }

    if (inconsistentRows.length > 0) {
      parseIssues.push({
        severity: 'error',
        code: 'INCONSISTENT_ROW_WIDTHS',
        affectedCount: inconsistentRows.length,
        message: `${inconsistentRows.length} row(s) have inconsistent column counts (expected ${expectedWidth} columns; e.g., row ${inconsistentRows[0].rowNumber} has ${inconsistentRows[0].found}).`
      });
    }

    if (rows.length === 0) {
      parseIssues.push({
        severity: 'warning',
        code: 'HEADER_ONLY_DATASET',
        message: `The dataset contains column headers (${expectedWidth} columns) but 0 data rows.`
      });
    }

    return {
      headers,
      rows,
      rawMatrix: matrix,
      delimiter,
      parseIssues
    };
  }

  function parseDatasetInput(input, metadata = {}) {
    if (input === null || input === undefined) {
      return {
        id: metadata.id || 'dataset_empty',
        name: metadata.name || 'Empty Dataset',
        description: '',
        headers: [],
        rows: [],
        parseIssues: [{ severity: 'error', code: 'EMPTY_FILE', message: 'No dataset content was provided.' }],
        sourceFormat: 'csv',
        typeOverrides: {},
        lineage: null
      };
    }

    if (typeof input === 'object') {
      return parseJSONDatasetObject(input, metadata);
    }

    const trimmed = String(input).trim();
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
      try {
        const parsed = JSON.parse(trimmed);
        return parseJSONDatasetObject(parsed, metadata);
      } catch (err) {
        return {
          id: metadata.id || 'dataset_malformed_json',
          name: metadata.name || 'Malformed JSON Import',
          description: '',
          headers: [],
          rows: [],
          parseIssues: [{
            severity: 'error',
            code: 'INVALID_JSON',
            message: `JSON syntax error: ${err.message}`
          }],
          sourceFormat: 'json',
          typeOverrides: {},
          lineage: null
        };
      }
    }

    const parsedCSV = parseDelimitedText(String(input), metadata);
    return {
      id: metadata.id || 'dataset_' + Date.now(),
      name: metadata.name || 'Uploaded Dataset',
      description: metadata.description || '',
      headers: parsedCSV.headers,
      rows: parsedCSV.rows,
      parseIssues: parsedCSV.parseIssues,
      sourceFormat: parsedCSV.delimiter === '\t' ? 'tsv' : 'csv',
      typeOverrides: metadata.typeOverrides || {},
      lineage: metadata.lineage || null
    };
  }

  function parseJSONDatasetObject(parsed, metadata = {}) {
    const parseIssues = [];
    let rows = [];
    let headers = [];
    let typeOverrides = Object.assign({}, metadata.typeOverrides || {});
    let lineage = metadata.lineage || null;
    let name = metadata.name || 'JSON Dataset';
    let description = metadata.description || '';

    if (Array.isArray(parsed)) {
      rows = parsed;
    } else if (parsed && typeof parsed === 'object') {
      if (Array.isArray(parsed.rows)) {
        rows = parsed.rows;
        if (Array.isArray(parsed.headers)) headers = parsed.headers;
        if (parsed.name) name = parsed.name;
        if (parsed.description) description = parsed.description;
        if (parsed.typeOverrides) Object.assign(typeOverrides, parsed.typeOverrides);
        if (parsed.lineage) lineage = parsed.lineage;
      } else if (parsed.payload && Array.isArray(parsed.payload.rows)) {
        rows = parsed.payload.rows;
        if (Array.isArray(parsed.payload.headers)) headers = parsed.payload.headers;
        if (parsed.dataset && parsed.dataset.name) name = parsed.dataset.name;
        if (parsed.VariableOverrides) Object.assign(typeOverrides, parsed.VariableOverrides);
        if (parsed.lineage) lineage = parsed.lineage;
      } else if (parsed.dataset && Array.isArray(parsed.dataset.rows)) {
        rows = parsed.dataset.rows;
        if (Array.isArray(parsed.dataset.headers)) headers = parsed.dataset.headers;
        if (parsed.dataset.name) name = parsed.dataset.name;
        if (parsed.compassContext && parsed.compassContext.typeOverrides) {
          Object.assign(typeOverrides, parsed.compassContext.typeOverrides);
        }
        if (parsed.lineage) lineage = parsed.lineage;
      } else {
        parseIssues.push({
          severity: 'error',
          code: 'UNSUPPORTED_JSON_SCHEMA',
          message: 'JSON input must be an array of record objects or a DataSense dataset envelope containing a "rows" array.'
        });
      }
    }

    if (headers.length === 0 && rows.length > 0 && typeof rows[0] === 'object' && rows[0] !== null) {
      const keySet = new Set();
      rows.forEach(r => {
        if (r && typeof r === 'object') {
          Object.keys(r).forEach(k => keySet.add(k));
        }
      });
      headers = Array.from(keySet);
    }

    const normalizedRows = rows.map(r => {
      const obj = {};
      headers.forEach(h => {
        const val = r && r[h] !== undefined && r[h] !== null ? String(r[h]) : '';
        obj[h] = val;
      });
      return obj;
    });

    return {
      id: metadata.id || (parsed && parsed.id) || 'dataset_' + Date.now(),
      name,
      description,
      headers,
      rows: normalizedRows,
      parseIssues,
      sourceFormat: 'json',
      typeOverrides,
      lineage
    };
  }

  // =========================================================================
  // 4. VALUE INSPECTION, DATE PARSING & SEMANTIC TYPE INFERENCE (SECTION 8)
  // =========================================================================
  function isLeadingZeroString(str) {
    return /^0\d+$/.test(str);
  }

  function parseNumericToken(rawStr) {
    const str = String(rawStr).trim();
    if (!str) return { isNumeric: false, isNonFinite: false, isUnitContaminated: false };
    const lower = str.toLowerCase();
    if (lower === 'nan' || lower === 'inf' || lower === '-inf' || lower === 'infinity' || lower === '-infinity') {
      return { isNumeric: false, isNonFinite: true, isUnitContaminated: false, raw: str };
    }
    if (isLeadingZeroString(str)) {
      return { isNumeric: false, isLeadingZeroId: true, isNonFinite: false, isUnitContaminated: false, raw: str };
    }
    const normalized = str.replace(/,/g, '');
    if (/^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(normalized)) {
      const num = Number(normalized);
      if (Number.isFinite(num)) {
        return {
          isNumeric: true,
          value: num,
          isInteger: Number.isInteger(num) && !str.includes('.'),
          isSentinel: NUMERIC_SENTINELS.has(str),
          isNonFinite: false,
          isUnitContaminated: false
        };
      }
    }
    if (/^[+-]?\d+(\.\d+)?\s*[a-zA-Z%$€£]+$/.test(str) || /^[$€£]\s*[+-]?\d+(\.\d+)?$/.test(str)) {
      return { isNumeric: false, isNonFinite: false, isUnitContaminated: true, raw: str };
    }
    return { isNumeric: false, isNonFinite: false, isUnitContaminated: false, raw: str };
  }

  function parseTemporalToken(rawStr) {
    const str = String(rawStr).trim();
    if (!str) return { isTemporal: false };

    const isoDateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(str);
    if (isoDateMatch) {
      const y = Number(isoDateMatch[1]);
      const m = Number(isoDateMatch[2]);
      const d = Number(isoDateMatch[3]);
      if (m < 1 || m > 12 || d < 1 || d > 31) {
        return { isTemporal: false, isInvalidDate: true, raw: str };
      }
      const dt = Date.UTC(y, m - 1, d);
      const check = new Date(dt);
      if (check.getUTCFullYear() === y && check.getUTCMonth() === m - 1 && check.getUTCDate() === d) {
        return { isTemporal: true, kind: 'date', format: 'ISO', epochMs: dt, raw: str };
      }
      return { isTemporal: false, isInvalidDate: true, raw: str };
    }

    const isoDtMatch = /^(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2})(?::(\d{2}))?/.exec(str);
    if (isoDtMatch) {
      const y = Number(isoDtMatch[1]);
      const m = Number(isoDtMatch[2]);
      const d = Number(isoDtMatch[3]);
      const hh = Number(isoDtMatch[4]);
      const mm = Number(isoDtMatch[5]);
      const ss = Number(isoDtMatch[6] || 0);
      if (m < 1 || m > 12 || d < 1 || d > 31 || hh > 23 || mm > 59 || ss > 59) {
        return { isTemporal: false, isInvalidDate: true, raw: str };
      }
      const dt = Date.UTC(y, m - 1, d, hh, mm, ss);
      return { isTemporal: true, kind: 'datetime', format: 'ISO_DATETIME', epochMs: dt, raw: str };
    }

    const slashMatch = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(str);
    if (slashMatch) {
      const p1 = Number(slashMatch[1]);
      const p2 = Number(slashMatch[2]);
      const y = Number(slashMatch[3]);
      if ((p1 > 12 && p2 > 12) || p1 < 1 || p2 < 1 || p1 > 31 || p2 > 31) {
        return { isTemporal: false, isInvalidDate: true, raw: str };
      }
      const isAmbiguous = p1 <= 12 && p2 <= 12 && p1 !== p2;
      const m = p1 <= 12 ? p1 : p2;
      const d = p1 <= 12 ? p2 : p1;
      const dt = Date.UTC(y, m - 1, d);
      return {
        isTemporal: true,
        kind: 'date',
        format: p1 > 12 ? 'DD/MM/YYYY' : 'MM/DD/YYYY',
        isAmbiguousSlash: isAmbiguous,
        epochMs: dt,
        raw: str
      };
    }

    return { isTemporal: false };
  }

  function isDurationToken(rawStr) {
    const str = String(rawStr).trim();
    return /^(\d+:\d{2}(:\d{2})?|\d+(\.\d+)?\s*(ms|s|sec|secs|m|min|mins|h|hr|hrs|d|days))$/i.test(str);
  }

  function inferVariableProfile(columnName, rawValues, userOverrideType = null) {
    const totalCount = rawValues.length;
    let missingCount = 0;
    let emptyStringCount = 0;
    let sentinelCount = 0;
    let nonFiniteCount = 0;
    let unitContaminatedCount = 0;
    let invalidDateCount = 0;
    let ambiguousDateCount = 0;
    let leadingZeroCount = 0;
    let whitespacePaddingCount = 0;

    const validRawValues = [];
    const numericValues = [];
    const integerFlags = [];
    const temporalValues = [];
    const temporalKinds = new Set();
    const temporalFormats = new Set();
    const durationValues = [];

    const exactFreq = new Map();
    const normalizedLowerFreq = new Map();

    for (let i = 0; i < totalCount; i++) {
      const raw = rawValues[i] !== undefined && rawValues[i] !== null ? String(rawValues[i]) : '';
      const trimmed = raw.trim();
      const lower = trimmed.toLowerCase();

      if (raw !== trimmed && trimmed.length > 0) {
        whitespacePaddingCount++;
      }

      if (trimmed === '') {
        missingCount++;
        emptyStringCount++;
        continue;
      }

      if (lower === 'nan' || lower === 'inf' || lower === '-inf' || lower === 'infinity' || lower === '-infinity') {
        nonFiniteCount++;
        missingCount++;
        continue;
      }

      if (SENTINEL_MISSING_TOKENS.has(lower)) {
        missingCount++;
        if (NUMERIC_SENTINELS.has(lower)) {
          sentinelCount++;
        }
        continue;
      }

      validRawValues.push(trimmed);
      exactFreq.set(trimmed, (exactFreq.get(trimmed) || 0) + 1);
      if (!normalizedLowerFreq.has(lower)) {
        normalizedLowerFreq.set(lower, new Set());
      }
      normalizedLowerFreq.get(lower).add(raw);

      if (isLeadingZeroString(trimmed)) {
        leadingZeroCount++;
      }

      const numCheck = parseNumericToken(trimmed);
      if (numCheck.isNumeric) {
        numericValues.push(numCheck.value);
        integerFlags.push(numCheck.isInteger);
      } else if (numCheck.isUnitContaminated) {
        unitContaminatedCount++;
      }

      const tempCheck = parseTemporalToken(trimmed);
      if (tempCheck.isTemporal) {
        temporalValues.push(tempCheck.epochMs);
        temporalKinds.add(tempCheck.kind);
        temporalFormats.add(tempCheck.format);
        if (tempCheck.isAmbiguousSlash) ambiguousDateCount++;
      } else if (tempCheck.isInvalidDate) {
        invalidDateCount++;
      }

      if (isDurationToken(trimmed)) {
        durationValues.push(trimmed);
      }
    }

    const validCount = validRawValues.length;
    const distinctCount = exactFreq.size;
    const uniquenessRatio = validCount > 0 ? distinctCount / validCount : 0;
    const missingPct = totalCount > 0 ? (missingCount / totalCount) * 100 : 0;

    const caseWhitespaceConflicts = [];
    normalizedLowerFreq.forEach((variantSet) => {
      if (variantSet.size > 1) {
        caseWhitespaceConflicts.push(Array.from(variantSet));
      }
    });

    let inferredType = SEMANTIC_TYPES.UNKNOWN_AMBIGUOUS;
    const colLower = columnName.toLowerCase();
    const hasIdNameSignal = /(^|_)(id|key|uuid|code|parcel|account|patient|student|trial)(_|$)/i.test(colLower);

    if (validCount === 0) {
      inferredType = SEMANTIC_TYPES.UNKNOWN_AMBIGUOUS;
    } else if (leadingZeroCount > 0 && leadingZeroCount >= validCount * 0.5) {
      inferredType = SEMANTIC_TYPES.IDENTIFIER;
    } else if (temporalValues.length > 0 && (temporalValues.length + invalidDateCount) >= validCount * 0.7) {
      inferredType = temporalKinds.has('datetime') ? SEMANTIC_TYPES.DATETIME : SEMANTIC_TYPES.DATE;
    } else if (durationValues.length >= validCount * 0.8) {
      inferredType = SEMANTIC_TYPES.DURATION;
    } else if (numericValues.length > 0 && (numericValues.length + unitContaminatedCount) >= validCount * 0.7) {
      if (unitContaminatedCount > 0 && numericValues.length < validCount) {
        inferredType = SEMANTIC_TYPES.CONTINUOUS_NUMERIC;
      } else if (hasIdNameSignal && uniquenessRatio >= 0.9) {
        inferredType = SEMANTIC_TYPES.IDENTIFIER;
      } else if (distinctCount === 2 && numericValues.every(v => v === 0 || v === 1)) {
        inferredType = SEMANTIC_TYPES.BINARY_CATEGORICAL;
      } else {
        const allIntegers = integerFlags.every(Boolean);
        const allNonNegative = numericValues.every(v => v >= 0);
        if (allIntegers && allNonNegative && /(count|tickets|labs|bedrooms|visits|events|number|qty)/i.test(colLower)) {
          inferredType = SEMANTIC_TYPES.COUNT;
        } else if (allIntegers && distinctCount <= 12) {
          inferredType = SEMANTIC_TYPES.DISCRETE_NUMERIC;
        } else {
          inferredType = SEMANTIC_TYPES.CONTINUOUS_NUMERIC;
        }
      }
    } else {
      const lowerKeys = Array.from(exactFreq.keys()).map(k => k.toLowerCase());
      const isCyclicMonth = lowerKeys.length >= 2 && lowerKeys.every(k => CYCLIC_MONTHS.has(k));
      const isCyclicDay = lowerKeys.length >= 2 && lowerKeys.every(k => CYCLIC_DAYS.has(k));

      const matchedOrdinal = KNOWN_ORDINAL_SETS.find(ordSet => {
        const setLookup = new Set(ordSet);
        return lowerKeys.length >= 2 && lowerKeys.every(k => setLookup.has(k));
      });

      const avgLength = validRawValues.reduce((acc, s) => acc + s.length, 0) / validCount;

      if (hasIdNameSignal && uniquenessRatio >= 0.85) {
        inferredType = SEMANTIC_TYPES.IDENTIFIER;
      } else if (isCyclicMonth || isCyclicDay || /(day_of_week|month_name|quarter)/i.test(colLower)) {
        inferredType = SEMANTIC_TYPES.CYCLIC_TEMPORAL;
      } else if (matchedOrdinal || (/(rating|tier|band|grade|level|stage)/i.test(colLower) && distinctCount >= 2 && distinctCount <= 8)) {
        inferredType = SEMANTIC_TYPES.ORDINAL_CATEGORICAL;
      } else if (distinctCount === 2) {
        inferredType = SEMANTIC_TYPES.BINARY_CATEGORICAL;
      } else if (avgLength > 48 && uniquenessRatio > 0.7) {
        inferredType = SEMANTIC_TYPES.TEXT;
      } else if (uniquenessRatio === 1 && validCount >= 15 && /^[A-Z0-9_-]+$/i.test(validRawValues[0])) {
        inferredType = SEMANTIC_TYPES.IDENTIFIER;
      } else {
        inferredType = SEMANTIC_TYPES.NOMINAL_CATEGORICAL;
      }
    }

    const effectiveType = userOverrideType || inferredType;
    const isConstant = validCount > 0 && distinctCount === 1;
    const isNearConstant = validCount >= 10 && distinctCount > 1 && (Math.max(...exactFreq.values()) / validCount) >= 0.95;

    const roleFamily = getRoleFamily(effectiveType);

    let numericSummary = null;
    let categoricalSummary = null;
    let temporalSummary = null;

    if (roleFamily === 'numeric' && numericValues.length > 0) {
      numericSummary = computeNumericSummary(numericValues);
    }

    if (roleFamily === 'categorical' || roleFamily === 'identifier' || effectiveType === SEMANTIC_TYPES.CYCLIC_TEMPORAL || isConstant) {
      categoricalSummary = computeCategoricalSummary(exactFreq, validCount, totalCount);
    }

    if (roleFamily === 'temporal' && temporalValues.length > 0) {
      temporalSummary = computeTemporalSummary(temporalValues, temporalFormats, invalidDateCount, ambiguousDateCount);
    }

    const qualityFlags = [];
    if (missingCount > 0) {
      qualityFlags.push({
        code: 'MISSING_VALUES',
        severity: missingPct >= 20 ? 'error' : 'caution',
        label: `${missingCount} missing (${missingPct.toFixed(1)}%)`,
        detail: `${missingCount} of ${totalCount} rows lack a valid observation.`
      });
    }
    if (sentinelCount > 0) {
      qualityFlags.push({
        code: 'SENTINEL_CODES',
        severity: 'error',
        label: `${sentinelCount} sentinel code(s) (-999)`,
        detail: `${sentinelCount} observation(s) use numeric sentinel codes (such as -999) that would severely distort parametric statistics if untreated.`
      });
    }
    if (unitContaminatedCount > 0) {
      qualityFlags.push({
        code: 'MIXED_UNIT_STRINGS',
        severity: 'error',
        label: `${unitContaminatedCount} unparsed unit string(s)`,
        detail: `${unitContaminatedCount} value(s) contain embedded text or units (e.g., "138 mmHg") in a numeric variable.`
      });
    }
    if (nonFiniteCount > 0) {
      qualityFlags.push({
        code: 'NONFINITE_VALUES',
        severity: 'error',
        label: `${nonFiniteCount} NaN/Inf token(s)`,
        detail: `${nonFiniteCount} non-finite numeric token(s) detected.`
      });
    }
    if (invalidDateCount > 0) {
      qualityFlags.push({
        code: 'INVALID_DATES',
        severity: 'error',
        label: `${invalidDateCount} invalid date(s)`,
        detail: `${invalidDateCount} date string(s) could not be parsed as valid calendar dates.`
      });
    }
    if (ambiguousDateCount > 0 || temporalFormats.size > 1) {
      qualityFlags.push({
        code: 'MIXED_DATE_FORMATS',
        severity: 'caution',
        label: 'Mixed / ambiguous date formats',
        detail: `Contains multiple date formats (${Array.from(temporalFormats).join(', ')}) or slash-delimited dates.`
      });
    }
    if (caseWhitespaceConflicts.length > 0) {
      qualityFlags.push({
        code: 'CATEGORY_CASE_WHITESPACE',
        severity: 'error',
        label: `${caseWhitespaceConflicts.length} inconsistent category label group(s)`,
        detail: `Inconsistent capitalization or trailing spaces split identical categories (e.g., ${caseWhitespaceConflicts[0].map(s => `"${s}"`).join(' vs ')}).`
      });
    }
    if (leadingZeroCount > 0) {
      qualityFlags.push({
        code: 'LEADING_ZERO_PRESERVED',
        severity: 'info',
        label: 'Leading-zero ID preserved',
        detail: `${leadingZeroCount} value(s) start with leading zeros and are protected from integer coercion.`
      });
    }
    if (isConstant) {
      qualityFlags.push({
        code: 'ZERO_VARIANCE_CONSTANT',
        severity: 'caution',
        label: 'Constant column (zero variance)',
        detail: `All ${validCount} valid observations share the exact same value ("${Array.from(exactFreq.keys())[0]}"). Correlation is mathematically undefined.`
      });
    } else if (isNearConstant) {
      qualityFlags.push({
        code: 'NEAR_CONSTANT',
        severity: 'caution',
        label: 'Near-constant distribution',
        detail: 'Over 95% of observations share a single value.'
      });
    }
    if (numericSummary && numericSummary.outlierCount > 0) {
      qualityFlags.push({
        code: 'EXTREME_OUTLIERS',
        severity: 'caution',
        label: `${numericSummary.outlierCount} Tukey 1.5×IQR outlier(s)`,
        detail: `${numericSummary.outlierCount} observation(s) fall outside [${numericSummary.lowerFence.toFixed(2)}, ${numericSummary.upperFence.toFixed(2)}]. Inspect whether these are legitimate extremes or data-entry errors.`
      });
    }
    if (temporalSummary && temporalSummary.gapCount > 0) {
      qualityFlags.push({
        code: 'TEMPORAL_GAPS',
        severity: 'caution',
        label: `${temporalSummary.gapCount} time-series spacing gap(s)`,
        detail: `Irregular timestamp spacing detected (${temporalSummary.gapCount} gap(s) exceeding expected cadence).`
      });
    }
    if (effectiveType === SEMANTIC_TYPES.IDENTIFIER && validCount > distinctCount) {
      const dupKeyCount = validCount - distinctCount;
      qualityFlags.push({
        code: 'DUPLICATE_IDENTIFIER_KEYS',
        severity: 'error',
        label: `${dupKeyCount} duplicate ID key(s)`,
        detail: `Identifier column "${columnName}" has ${dupKeyCount} repeated key(s) (${distinctCount} unique of ${validCount} valid).`
      });
    }

    return {
      name: columnName,
      inferredType,
      effectiveType,
      EffectiveTypeLabel: SEMANTIC_TYPE_LABELS[effectiveType] || effectiveType,
      isOverridden: Boolean(userOverrideType && userOverrideType !== inferredType),
      roleFamily,
      totalCount,
      validCount,
      missingCount,
      missingPct,
      distinctCount,
      uniquenessRatio,
      isConstant,
      isNearConstant,
      diagnostics: {
        emptyStringCount,
        sentinelCount,
        nonFiniteCount,
        unitContaminatedCount,
        invalidDateCount,
        ambiguousDateCount,
        leadingZeroCount,
        whitespacePaddingCount,
        caseWhitespaceConflicts
      },
      numericSummary,
      categoricalSummary,
      temporalSummary,
      qualityFlags
    };
  }

  function getRoleFamily(semanticType) {
    switch (semanticType) {
      case SEMANTIC_TYPES.CONTINUOUS_NUMERIC:
      case SEMANTIC_TYPES.DISCRETE_NUMERIC:
      case SEMANTIC_TYPES.COUNT:
        return 'numeric';
      case SEMANTIC_TYPES.BINARY_CATEGORICAL:
      case SEMANTIC_TYPES.NOMINAL_CATEGORICAL:
      case SEMANTIC_TYPES.ORDINAL_CATEGORICAL:
      case SEMANTIC_TYPES.CYCLIC_TEMPORAL:
        return 'categorical';
      case SEMANTIC_TYPES.DATE:
      case SEMANTIC_TYPES.DATETIME:
        return 'temporal';
      case SEMANTIC_TYPES.IDENTIFIER:
        return 'identifier';
      default:
        return 'other';
    }
  }

  // =========================================================================
  // 5. UNIVARIATE STATISTICAL SUMMARIES (SECTION 9)
  // =========================================================================
  function quantileSorted(sorted, p) {
    if (sorted.length === 0) return NaN;
    if (sorted.length === 1) return sorted[0];
    const pos = (sorted.length - 1) * p;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    }
    return sorted[base];
  }

  function computeNumericSummary(values) {
    const n = values.length;
    const sorted = values.slice().sort((a, b) => a - b);
    const min = sorted[0];
    const max = sorted[n - 1];
    const range = max - min;
    const sum = values.reduce((a, b) => a + b, 0);
    const mean = sum / n;

    let ss = 0;
    let cubed = 0;
    for (let i = 0; i < n; i++) {
      const d = values[i] - mean;
      ss += d * d;
      cubed += d * d * d;
    }
    const variance = n > 1 ? ss / (n - 1) : 0;
    const sd = Math.sqrt(variance);
    const q1 = quantileSorted(sorted, 0.25);
    const median = quantileSorted(sorted, 0.50);
    const q3 = quantileSorted(sorted, 0.75);
    const iqr = q3 - q1;

    let skewness = 0;
    if (n >= 3 && sd > 1e-12) {
      skewness = (cubed / n) / Math.pow(ss / n, 1.5);
    }

    const lowerFence = q1 - 1.5 * iqr;
    const upperFence = q3 + 1.5 * iqr;
    const outliers = values.filter(v => iqr > 0 && (v < lowerFence || v > upperFence));
    const zeroCount = values.filter(v => v === 0).length;
    const negativeCount = values.filter(v => v < 0).length;

    const binCount = Math.min(10, Math.max(5, Math.ceil(Math.sqrt(n))));
    const bins = [];
    if (range === 0) {
      bins.push({ x0: min - 0.5, x1: max + 0.5, count: n });
    } else {
      const step = range / binCount;
      for (let b = 0; b < binCount; b++) {
        bins.push({
          x0: min + b * step,
          x1: b === binCount - 1 ? max : min + (b + 1) * step,
          count: 0
        });
      }
      for (let i = 0; i < n; i++) {
        const v = values[i];
        let idx = Math.floor((v - min) / step);
        if (idx >= binCount) idx = binCount - 1;
        if (idx < 0) idx = 0;
        bins[idx].count++;
      }
    }

    return {
      n,
      mean,
      sd,
      variance,
      min,
      q1,
      median,
      q3,
      max,
      iqr,
      range,
      skewness,
      lowerFence,
      upperFence,
      outlierCount: outliers.length,
      outlierValues: outliers.slice(0, 8),
      zeroCount,
      negativeCount,
      bins
    };
  }

  function computeCategoricalSummary(exactFreq, validCount, totalCount) {
    const entries = Array.from(exactFreq.entries())
      .map(([category, count]) => ({
        category,
        count,
        pctOfValid: validCount > 0 ? (count / validCount) * 100 : 0,
        pctOfTotal: totalCount > 0 ? (count / totalCount) * 100 : 0
      }))
      .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));

    const rareCategories = entries.filter(e => e.count < 3 || e.pctOfValid < 5);
    const mode = entries[0] || null;
    const balanceRatio = entries.length > 1 && entries[0].count > 0
      ? entries[entries.length - 1].count / entries[0].count
      : 1;

    return {
      categoryCount: entries.length,
      categories: entries,
      topCategories: entries.slice(0, 8),
      modeCategory: mode ? mode.category : null,
      modeCount: mode ? mode.count : 0,
      modeSharePct: mode ? mode.pctOfValid : 0,
      rareCategoryCount: rareCategories.length,
      rareCategories: rareCategories.map(r => r.category),
      balanceRatio
    };
  }

  function computeTemporalSummary(epochMsList, formatsSet, invalidDateCount, ambiguousDateCount) {
    const n = epochMsList.length;
    const sorted = epochMsList.slice().sort((a, b) => a - b);
    const minMs = sorted[0];
    const maxMs = sorted[n - 1];
    const spanDays = (maxMs - minMs) / (1000 * 60 * 60 * 24);

    let duplicateTimestamps = 0;
    const diffs = [];
    for (let i = 1; i < sorted.length; i++) {
      const dt = sorted[i] - sorted[i - 1];
      if (dt === 0) duplicateTimestamps++;
      else diffs.push(dt);
    }

    let medianStepMs = 0;
    let gapCount = 0;
    const gaps = [];
    if (diffs.length > 0) {
      const sortedDiffs = diffs.slice().sort((a, b) => a - b);
      medianStepMs = quantileSorted(sortedDiffs, 0.5);
      for (let i = 1; i < sorted.length; i++) {
        const dt = sorted[i] - sorted[i - 1];
        if (medianStepMs > 0 && dt > medianStepMs * 1.75) {
          gapCount++;
          gaps.push({
            fromIso: new Date(sorted[i - 1]).toISOString().slice(0, 10),
            toIso: new Date(sorted[i]).toISOString().slice(0, 10),
            gapDays: Number((dt / (1000 * 60 * 60 * 24)).toFixed(1))
          });
        }
      }
    }

    const stepDays = medianStepMs / (1000 * 60 * 60 * 24);
    let inferredCadence = 'Irregular';
    if (diffs.length > 0) {
      if (Math.abs(stepDays - 1) <= 0.2) inferredCadence = 'Daily';
      else if (Math.abs(stepDays - 7) <= 1.0) inferredCadence = 'Weekly';
      else if (stepDays >= 27 && stepDays <= 32) inferredCadence = 'Monthly';
      else if (stepDays > 0 && gapCount === 0) inferredCadence = `Every ~${stepDays.toFixed(1)} days`;
    }

    return {
      n,
      minIso: new Date(minMs).toISOString().slice(0, 10),
      maxIso: new Date(maxMs).toISOString().slice(0, 10),
      spanDays: Number(spanDays.toFixed(1)),
      inferredCadence,
      duplicateTimestamps,
      gapCount,
      gaps,
      formats: Array.from(formatsSet),
      invalidDateCount,
      ambiguousDateCount,
      isRegular: gapCount === 0 && invalidDateCount === 0 && duplicateTimestamps === 0
    };
  }

  // =========================================================================
  // 6. PAIRWISE STATISTICAL ENGINE (SECTIONS 16, 17, 18, 19, 20)
  // =========================================================================
  function computeAverageRanks(values) {
    const n = values.length;
    const indexed = values.map((v, idx) => ({ v, idx })).sort((a, b) => a.v - b.v);
    const ranks = new Array(n);
    let tieCorrectionSum = 0;

    let i = 0;
    while (i < n) {
      let j = i;
      while (j + 1 < n && indexed[j + 1].v === indexed[i].v) {
        j++;
      }
      const tieCount = j - i + 1;
      const avgRank = (i + 1 + j + 1) / 2;
      for (let k = i; k <= j; k++) {
        ranks[indexed[k].idx] = avgRank;
      }
      if (tieCount > 1) {
        tieCorrectionSum += (Math.pow(tieCount, 3) - tieCount);
      }
      i = j + 1;
    }
    return { ranks, tieCorrectionSum };
  }

  function computePearsonCorrelation(x, y) {
    const n = x.length;
    if (n < 3) {
      return { r: null, isUndefined: true, reason: `Insufficient paired observations (n = ${n}; minimum 3 required).` };
    }
    const meanX = x.reduce((a, b) => a + b, 0) / n;
    const meanY = y.reduce((a, b) => a + b, 0) / n;
    let sxx = 0;
    let syy = 0;
    let sxy = 0;
    for (let i = 0; i < n; i++) {
      const dx = x[i] - meanX;
      const dy = y[i] - meanY;
      sxx += dx * dx;
      syy += dy * dy;
      sxy += dx * dy;
    }
    if (sxx <= 1e-14 || syy <= 1e-14) {
      const zeroVarAxis = sxx <= 1e-14 && syy <= 1e-14 ? 'both variables' : (sxx <= 1e-14 ? 'comparison variable' : 'primary variable');
      return {
        r: null,
        isUndefined: true,
        reason: `Undefined correlation: ${zeroVarAxis} has zero variance (constant value across paired observations).`
      };
    }
    const r = Math.max(-1, Math.min(1, sxy / Math.sqrt(sxx * syy)));
    const slope = sxy / sxx;
    const intercept = meanY - slope * meanX;
    return {
      r,
      rSquared: r * r,
      slope,
      intercept,
      meanX,
      meanY,
      isUndefined: false,
      reason: null
    };
  }

  function computeSpearmanCorrelation(x, y) {
    const n = x.length;
    if (n < 3) {
      return { rho: null, isUndefined: true, reason: `Insufficient paired observations (n = ${n}).` };
    }
    const rx = computeAverageRanks(x);
    const ry = computeAverageRanks(y);
    const pearsonOnRanks = computePearsonCorrelation(rx.ranks, ry.ranks);
    if (pearsonOnRanks.isUndefined) {
      return {
        rho: null,
        isUndefined: true,
        reason: pearsonOnRanks.reason
      };
    }
    return {
      rho: pearsonOnRanks.r,
      tiesX: rx.tieCorrectionSum > 0,
      tiesY: ry.tieCorrectionSum > 0,
      isUndefined: false,
      reason: null
    };
  }

  function computeDirectionalBinnedEta(axisX, targetY) {
    const n = axisX.length;
    const pairs = axisX.map((xv, i) => ({ x: xv, y: targetY[i] })).sort((a, b) => a.x - b.x);
    const binCount = Math.min(6, Math.max(4, Math.floor(n / 4)));
    const binnedMeans = [];
    const meanY = targetY.reduce((a, b) => a + b, 0) / n;
    let ssTotal = 0;
    for (let i = 0; i < n; i++) {
      const d = targetY[i] - meanY;
      ssTotal += d * d;
    }
    let ssBetweenBins = 0;
    for (let b = 0; b < binCount; b++) {
      const start = Math.floor((b * n) / binCount);
      const end = b === binCount - 1 ? n : Math.floor(((b + 1) * n) / binCount);
      const slice = pairs.slice(start, end);
      if (slice.length === 0) continue;
      const bx = slice.reduce((acc, p) => acc + p.x, 0) / slice.length;
      const by = slice.reduce((acc, p) => acc + p.y, 0) / slice.length;
      ssBetweenBins += slice.length * Math.pow(by - meanY, 2);
      binnedMeans.push({ x: bx, y: by, n: slice.length });
    }
    const etaSq = ssTotal > 1e-12 ? ssBetweenBins / ssTotal : 0;
    return { binnedMeans, binnedEtaSq: etaSq };
  }

  function detectNonlinearityAndBinnedTrend(xPredictor, yTarget, pearsonResult) {
    const n = xPredictor.length;
    if (n < 8 || pearsonResult.isUndefined) {
      return { hasNonlinearSignal: false, binnedMeans: [], binnedEtaSq: 0, curvatureGain: 0 };
    }

    // Evaluate conditional means E[Y_target | X_predictor bins] (and symmetric check E[X | Y bins])
    const forward = computeDirectionalBinnedEta(xPredictor, yTarget);
    const reverse = computeDirectionalBinnedEta(yTarget, xPredictor);
    const bestEtaSq = Math.max(forward.binnedEtaSq, reverse.binnedEtaSq);
    const linearR2 = pearsonResult.rSquared || 0;
    const curvatureGain = Math.max(0, bestEtaSq - linearR2);
    const hasNonlinearSignal = curvatureGain >= 0.22 && bestEtaSq >= 0.35;

    return {
      hasNonlinearSignal,
      binnedMeans: forward.binnedMeans,
      binnedEtaSq: bestEtaSq,
      linearR2,
      curvatureGain
    };
  }

  function analyzeNumericPair(rows, varAProfile, varBProfile) {
    // varAProfile = Primary Target (Y axis), varBProfile = Comparison Predictor (X axis)
    const totalRows = rows.length;
    const x = []; // varB (predictor)
    const y = []; // varA (primary target)
    const points = [];
    let excludedMissing = 0;

    for (let i = 0; i < totalRows; i++) {
      const rawA = rows[i][varAProfile.name];
      const rawB = rows[i][varBProfile.name];
      const numA = parseNumericToken(rawA);
      const numB = parseNumericToken(rawB);
      if (numA.isNumeric && !numA.isSentinel && numB.isNumeric && !numB.isSentinel) {
        x.push(numB.value);
        y.push(numA.value);
        points.push({ x: numB.value, y: numA.value, rowIndex: i + 1 });
      } else {
        excludedMissing++;
      }
    }

    const validN = x.length;
    const pearson = computePearsonCorrelation(x, y);
    const spearman = computeSpearmanCorrelation(x, y);
    const nonlinear = detectNonlinearityAndBinnedTrend(x, y, pearson);

    let direction = 'Undefined';
    let strengthLabel = 'Undefined';
    if (!pearson.isUndefined) {
      const absR = Math.abs(pearson.r);
      const absRho = spearman.rho !== null ? Math.abs(spearman.rho) : absR;
      if (nonlinear.hasNonlinearSignal && absR < 0.25) {
        direction = 'Non-linear / Curved';
        strengthLabel = `Strong non-linear curvature (binned R² = ${nonlinear.binnedEtaSq.toFixed(2)}, linear r = ${pearson.r.toFixed(2)})`;
      } else {
        direction = pearson.r > 0.05 ? 'Positive' : (pearson.r < -0.05 ? 'Negative' : 'Near Zero / Flat');
        if (absR >= 0.75) strengthLabel = 'Strong linear';
        else if (absR >= 0.45) strengthLabel = 'Moderate linear';
        else if (absR >= 0.20) strengthLabel = 'Weak linear';
        else strengthLabel = 'Negligible linear';

        if (Math.abs(absRho - absR) >= 0.18) {
          strengthLabel += ' (rank divergence)';
        }
      }
    }

    const cautions = [];
    if (pearson.isUndefined) {
      cautions.push(pearson.reason);
    }
    if (nonlinear.hasNonlinearSignal) {
      cautions.push(`Strong non-linear curvature detected: binned conditional means capture ${(nonlinear.binnedEtaSq * 100).toFixed(0)}% of variance while linear Pearson r is ${pearson.r.toFixed(2)}. Inspect in QuartetLab.`);
    }
    if ((varAProfile.numericSummary && varAProfile.numericSummary.outlierCount > 0) ||
        (varBProfile.numericSummary && varBProfile.numericSummary.outlierCount > 0)) {
      cautions.push('Extreme values are present; compare Pearson r against rank-based Spearman ρ.');
    }

    return {
      family: 'numeric_numeric',
      varA: varAProfile.name,
      varB: varBProfile.name,
      xVar: varBProfile.name,
      yVar: varAProfile.name,
      totalRows,
      validN,
      excludedMissing,
      pearsonR: pearson.r,
      rSquared: pearson.rSquared,
      spearmanRho: spearman.rho,
      isUndefined: pearson.isUndefined,
      undefinedReason: pearson.reason,
      olsSlope: pearson.slope,
      olsIntercept: pearson.intercept,
      nonlinear,
      direction,
      strengthLabel,
      cautions,
      points
    };
  }

  function analyzeNumericCategoricalPair(rows, numProfile, catProfile, primaryIsNumeric = true) {
    const totalRows = rows.length;
    const groupMap = new Map();
    const allNum = [];
    let excludedMissing = 0;

    for (let i = 0; i < totalRows; i++) {
      const rawNum = rows[i][numProfile.name];
      const rawCat = String(rows[i][catProfile.name] || '').trim();
      const numCheck = parseNumericToken(rawNum);
      const catLower = rawCat.toLowerCase();

      if (numCheck.isNumeric && !numCheck.isSentinel && rawCat !== '' && !SENTINEL_MISSING_TOKENS.has(catLower)) {
        if (!groupMap.has(rawCat)) groupMap.set(rawCat, []);
        groupMap.get(rawCat).push(numCheck.value);
        allNum.push(numCheck.value);
      } else {
        excludedMissing++;
      }
    }

    const validN = allNum.length;
    const overallMean = validN > 0 ? allNum.reduce((a, b) => a + b, 0) / validN : 0;
    let ssTotal = 0;
    for (let i = 0; i < validN; i++) {
      ssTotal += Math.pow(allNum[i] - overallMean, 2);
    }

    let ssBetween = 0;
    const groups = [];
    groupMap.forEach((vals, category) => {
      const sumStat = computeNumericSummary(vals);
      ssBetween += vals.length * Math.pow(sumStat.mean - overallMean, 2);
      groups.push({
        category,
        n: vals.length,
        mean: sumStat.mean,
        sd: sumStat.sd,
        median: sumStat.median,
        q1: sumStat.q1,
        q3: sumStat.q3,
        iqr: sumStat.iqr,
        min: sumStat.min,
        max: sumStat.max,
        values: vals.slice(0, 60)
      });
    });

    groups.sort((a, b) => b.mean - a.mean);

    const isUndefined = validN < 3 || groups.length < 2 || ssTotal <= 1e-14;
    const etaSquared = !isUndefined ? Math.max(0, Math.min(1, ssBetween / ssTotal)) : null;

    let pointBiserial = null;
    let binaryCodingLabel = null;
    if (!isUndefined && groups.length === 2) {
      const g1 = groups[0];
      const g0 = groups[1];
      const codedX = [];
      const codedY = [];
      g1.values.forEach(v => { codedX.push(1); codedY.push(v); });
      g0.values.forEach(v => { codedX.push(0); codedY.push(v); });
      const pb = computePearsonCorrelation(codedX, codedY);
      if (!pb.isUndefined) {
        pointBiserial = pb.r;
        binaryCodingLabel = `"${g1.category}" = 1 vs "${g0.category}" = 0`;
      }
    }

    const smallGroups = groups.filter(g => g.n < 5);
    const cautions = [];
    if (isUndefined) {
      cautions.push(groups.length < 2
        ? 'Only 1 category group is present; group comparison requires at least 2 groups.'
        : 'Numeric outcome has zero variance across groups.');
    }
    if (smallGroups.length > 0) {
      cautions.push(`${smallGroups.length} group(s) have small sample size (n < 5: ${smallGroups.map(g => `${g.category} [n=${g.n}]`).join(', ')}).`);
    }
    if (groups.length > 10) {
      cautions.push(`High cardinality (${groups.length} groups) can inflate descriptive η².`);
    }

    let strengthLabel = 'Undefined';
    if (etaSquared !== null) {
      if (etaSquared >= 0.25) strengthLabel = 'Large group separation';
      else if (etaSquared >= 0.09) strengthLabel = 'Moderate group separation';
      else if (etaSquared >= 0.02) strengthLabel = 'Small group separation';
      else strengthLabel = 'Minimal group difference';
    }

    const meanSpread = groups.length >= 2 ? groups[0].mean - groups[groups.length - 1].mean : 0;

    return {
      family: 'numeric_categorical',
      varA: primaryIsNumeric ? numProfile.name : catProfile.name,
      varB: primaryIsNumeric ? catProfile.name : numProfile.name,
      numericVar: numProfile.name,
      categoricalVar: catProfile.name,
      totalRows,
      validN,
      excludedMissing,
      groupCount: groups.length,
      groups,
      overallMean,
      etaSquared,
      pointBiserial,
      binaryCodingLabel,
      meanSpread,
      isUndefined,
      undefinedReason: isUndefined ? cautions[0] : null,
      strengthLabel,
      cautions
    };
  }

  function analyzeCategoricalPair(rows, varAProfile, varBProfile) {
    const totalRows = rows.length;
    const rowCatsSet = new Set();
    const colCatsSet = new Set();
    const cellCounts = new Map();
    let validN = 0;
    let excludedMissing = 0;

    for (let i = 0; i < totalRows; i++) {
      const rawA = String(rows[i][varAProfile.name] || '').trim();
      const rawB = String(rows[i][varBProfile.name] || '').trim();
      if (rawA !== '' && !SENTINEL_MISSING_TOKENS.has(rawA.toLowerCase()) &&
          rawB !== '' && !SENTINEL_MISSING_TOKENS.has(rawB.toLowerCase())) {
        rowCatsSet.add(rawA);
        colCatsSet.add(rawB);
        const key = `${rawA}|||${rawB}`;
        cellCounts.set(key, (cellCounts.get(key) || 0) + 1);
        validN++;
      } else {
        excludedMissing++;
      }
    }

    const rowCats = Array.from(rowCatsSet).sort();
    const colCats = Array.from(colCatsSet).sort();
    const R = rowCats.length;
    const C = colCats.length;

    const rowTotals = new Map();
    const colTotals = new Map();
    rowCats.forEach(r => rowTotals.set(r, 0));
    colCats.forEach(c => colTotals.set(c, 0));

    rowCats.forEach(r => {
      colCats.forEach(c => {
        const count = cellCounts.get(`${r}|||${c}`) || 0;
        rowTotals.set(r, rowTotals.get(r) + count);
        colTotals.set(c, colTotals.get(c) + count);
      });
    });

    let chiSquare = 0;
    let sparseCellCount = 0;
    let totalCells = R * C;
    const matrix = [];

    rowCats.forEach(r => {
      const rTot = rowTotals.get(r);
      const rowCells = [];
      colCats.forEach(c => {
        const cTot = colTotals.get(c);
        const observed = cellCounts.get(`${r}|||${c}`) || 0;
        const expected = validN > 0 ? (rTot * cTot) / validN : 0;
        if (expected < 5) sparseCellCount++;
        if (expected > 0) {
          chiSquare += Math.pow(observed - expected, 2) / expected;
        }
        rowCells.push({
          rowCategory: r,
          colCategory: c,
          count: observed,
          expected: Number(expected.toFixed(2)),
          jointPct: validN > 0 ? (observed / validN) * 100 : 0,
          rowPct: rTot > 0 ? (observed / rTot) * 100 : 0,
          colPct: cTot > 0 ? (observed / cTot) * 100 : 0
        });
      });
      matrix.push({
        rowCategory: r,
        rowTotal: rTot,
        rowSharePct: validN > 0 ? (rTot / validN) * 100 : 0,
        cells: rowCells
      });
    });

    const minDim = Math.min(R - 1, C - 1);
    const isUndefined = validN < 3 || minDim < 1;
    const cramersV = !isUndefined ? Math.min(1, Math.sqrt(chiSquare / (validN * minDim))) : null;

    let cramersVBiasCorrected = null;
    if (!isUndefined && validN > 1) {
      const phi2 = chiSquare / validN;
      const phi2Corr = Math.max(0, phi2 - ((R - 1) * (C - 1)) / (validN - 1));
      const rCorr = R - Math.pow(R - 1, 2) / (validN - 1);
      const cCorr = C - Math.pow(C - 1, 2) / (validN - 1);
      const denom = Math.min(rCorr - 1, cCorr - 1);
      cramersVBiasCorrected = denom > 0 ? Math.min(1, Math.sqrt(phi2Corr / denom)) : 0;
    }

    const cautions = [];
    if (isUndefined) {
      cautions.push('At least one categorical variable has only 1 level; contingency association is undefined.');
    }
    if (sparseCellCount > 0) {
      cautions.push(`${sparseCellCount} of ${totalCells} contingency cell(s) have expected counts < 5; interpret Cramér's V with caution.`);
    }

    let strengthLabel = 'Undefined';
    if (cramersV !== null) {
      if (cramersV >= 0.45) strengthLabel = 'Strong categorical association';
      else if (cramersV >= 0.25) strengthLabel = 'Moderate categorical association';
      else if (cramersV >= 0.10) strengthLabel = 'Weak categorical association';
      else strengthLabel = 'Minimal categorical association';
    }

    return {
      family: 'categorical_categorical',
      varA: varAProfile.name,
      varB: varBProfile.name,
      totalRows,
      validN,
      excludedMissing,
      rowCategories: rowCats,
      colCategories: colCats,
      rowTotals: Object.fromEntries(rowTotals),
      colTotals: Object.fromEntries(colTotals),
      matrix,
      chiSquare,
      cramersV,
      cramersVBiasCorrected,
      sparseCellCount,
      totalCells,
      isUndefined,
      undefinedReason: isUndefined ? cautions[0] : null,
      strengthLabel,
      cautions
    };
  }

  function analyzeTemporalNumericPair(rows, tempProfile, numProfile, primaryIsTemporal = true) {
    const totalRows = rows.length;
    const series = [];
    let excludedMissing = 0;

    for (let i = 0; i < totalRows; i++) {
      const rawT = rows[i][tempProfile.name];
      const rawN = rows[i][numProfile.name];
      const tCheck = parseTemporalToken(rawT);
      const nCheck = parseNumericToken(rawN);
      if (tCheck.isTemporal && nCheck.isNumeric && !nCheck.isSentinel) {
        series.push({
          epochMs: tCheck.epochMs,
          isoDate: new Date(tCheck.epochMs).toISOString().slice(0, 10),
          value: nCheck.value,
          rowIndex: i + 1
        });
      } else {
        excludedMissing++;
      }
    }

    series.sort((a, b) => a.epochMs - b.epochMs);
    const validN = series.length;

    const timeIdx = series.map((_, idx) => idx);
    const vals = series.map(s => s.value);
    const trendCorr = computePearsonCorrelation(timeIdx, vals);
    const spearmanTrend = computeSpearmanCorrelation(timeIdx, vals);

    let lag1Autocorr = null;
    if (validN >= 5) {
      const lagX = vals.slice(0, validN - 1);
      const lagY = vals.slice(1);
      const ac = computePearsonCorrelation(lagX, lagY);
      if (!ac.isUndefined) lag1Autocorr = ac.r;
    }

    const movingAvg = series.map((pt, idx) => {
      const start = Math.max(0, idx - 1);
      const end = Math.min(validN - 1, idx + 1);
      let sum = 0;
      let count = 0;
      for (let k = start; k <= end; k++) {
        sum += series[k].value;
        count++;
      }
      return { epochMs: pt.epochMs, isoDate: pt.isoDate, maValue: sum / count };
    });

    const cautions = [];
    if (tempProfile.temporalSummary && tempProfile.temporalSummary.gapCount > 0) {
      cautions.push(`${tempProfile.temporalSummary.gapCount} timestamp gap(s) detected in "${tempProfile.name}"; regularize cadence before horizon modeling in ForecastLab.`);
    }

    return {
      family: 'temporal_numeric',
      varA: primaryIsTemporal ? tempProfile.name : numProfile.name,
      varB: primaryIsTemporal ? numProfile.name : tempProfile.name,
      temporalVar: tempProfile.name,
      numericVar: numProfile.name,
      totalRows,
      validN,
      excludedMissing,
      series,
      movingAvg,
      trendR: trendCorr.r,
      trendSpearman: spearmanTrend.rho,
      lag1Autocorr,
      isUndefined: trendCorr.isUndefined,
      undefinedReason: trendCorr.reason,
      strengthLabel: !trendCorr.isUndefined
        ? `Temporal trend r = ${trendCorr.r.toFixed(2)} (lag-1 r = ${lag1Autocorr !== null ? lag1Autocorr.toFixed(2) : 'n/a'})`
        : 'Undefined temporal trend',
      cautions
    };
  }

  function analyzePair(rows, profileA, profileB) {
    const famA = profileA.roleFamily;
    const famB = profileB.roleFamily;

    if (famA === 'numeric' && famB === 'numeric') {
      return analyzeNumericPair(rows, profileA, profileB);
    }
    if (famA === 'numeric' && famB === 'categorical') {
      return analyzeNumericCategoricalPair(rows, profileA, profileB, true);
    }
    if (famA === 'categorical' && famB === 'numeric') {
      return analyzeNumericCategoricalPair(rows, profileB, profileA, false);
    }
    if (famA === 'categorical' && famB === 'categorical') {
      return analyzeCategoricalPair(rows, profileA, profileB);
    }
    if (famA === 'temporal' && famB === 'numeric') {
      return analyzeTemporalNumericPair(rows, profileA, profileB, true);
    }
    if (famA === 'numeric' && famB === 'temporal') {
      return analyzeTemporalNumericPair(rows, profileB, profileA, false);
    }
    if ((famA === 'temporal' && famB === 'categorical') || (famA === 'categorical' && famB === 'temporal')) {
      return analyzeCategoricalPair(rows, profileA, profileB);
    }
    return {
      family: 'unsupported_pair',
      varA: profileA.name,
      varB: profileB.name,
      totalRows: rows.length,
      validN: rows.length,
      excludedMissing: 0,
      isUndefined: true,
      undefinedReason: `Pair (${profileA.EffectiveTypeLabel} × ${profileB.EffectiveTypeLabel}) is an identifier or free-text field not suitable for statistical association.`,
      strengthLabel: 'Identifier / Non-statistical',
      cautions: ['Identifier and free-text columns are excluded from statistical modeling.']
    };
  }

  // =========================================================================
  // 7. ANALYSIS-AWARE QUALITY GATE & READINESS ENGINE (SECTION 11)
  // =========================================================================
  function evaluateDatasetReadiness(dataset, profiles, primaryVarName, selectedSecondaryVarName = null) {
    const rows = dataset.rows || [];
    const totalRows = rows.length;
    const issues = [];

    (dataset.parseIssues || []).forEach(pi => {
      if (pi.severity === 'error') {
        issues.push({
          severity: 'blocking',
          scope: 'Dataset Structure',
          variable: 'All Columns',
          code: pi.code,
          title: 'Structural File / Row Parse Error',
          whyItMatters: pi.message,
          affectedCount: pi.affectedCount || totalRows,
          affectedPct: 100,
          recommendedAction: 'Repair malformed CSV quoting or inconsistent row widths in DataMend Lab before statistical modeling.'
        });
      } else if (pi.severity === 'warning') {
        issues.push({
          severity: 'caution',
          scope: 'Dataset Structure',
          variable: 'Header Row',
          code: pi.code,
          title: 'Header Or Schema Warning',
          whyItMatters: pi.message,
          affectedCount: 1,
          affectedPct: 0,
          recommendedAction: 'Review disambiguated column names in the Variable Browser.'
        });
      }
    });

    if (totalRows === 0) {
      issues.push({
        severity: 'blocking',
        scope: 'Dataset',
        variable: 'All Columns',
        code: 'ZERO_ROWS',
        title: 'Dataset Contains Zero Observation Rows',
        whyItMatters: 'Statistical profiling and relationship analysis require observation records.',
        affectedCount: 0,
        affectedPct: 100,
        recommendedAction: 'Upload a dataset containing data rows below the header line.'
      });
    } else if (totalRows < 5) {
      issues.push({
        severity: 'caution',
        scope: 'Dataset',
        variable: 'All Columns',
        code: 'VERY_SMALL_SAMPLE',
        title: `Very Small Sample Size (n = ${totalRows})`,
        whyItMatters: 'Samples under n = 5 provide minimal statistical power and unstable variance estimates.',
        affectedCount: totalRows,
        affectedPct: 100,
        recommendedAction: 'Treat all correlations and group summaries as purely illustrative.'
      });
    }

    const seenRowSignatures = new Set();
    let exactDuplicateRows = 0;
    rows.forEach(r => {
      const sig = JSON.stringify(r);
      if (seenRowSignatures.has(sig)) exactDuplicateRows++;
      else seenRowSignatures.add(sig);
    });
    if (exactDuplicateRows > 0) {
      issues.push({
        severity: 'blocking',
        scope: 'Dataset Hygiene',
        variable: 'Row Records',
        code: 'DUPLICATE_ROWS',
        title: `${exactDuplicateRows} Exact Duplicate Row(s) Detected`,
        whyItMatters: 'Duplicate records artificially inflate sample size n and bias group means and correlations.',
        affectedCount: exactDuplicateRows,
        affectedPct: totalRows > 0 ? (exactDuplicateRows / totalRows) * 100 : 0,
        recommendedAction: 'Deduplicate identical records in DataMend Lab.'
      });
    }

    profiles.forEach(prof => {
      const isPrimary = prof.name === primaryVarName;
      const isSelectedSecondary = prof.name === selectedSecondaryVarName;
      const isActiveFocus = isPrimary || isSelectedSecondary;
      const scopeLabel = isPrimary ? `Primary Variable (${prof.name})` : (isSelectedSecondary ? `Selected Variable (${prof.name})` : `Variable (${prof.name})`);

      if (prof.diagnostics.sentinelCount > 0) {
        issues.push({
          severity: 'blocking',
          scope: scopeLabel,
          variable: prof.name,
          code: 'SENTINEL_CODES',
          title: `Numeric Sentinel Codes (-999) in "${prof.name}"`,
          whyItMatters: `${prof.diagnostics.sentinelCount} observation(s) contain coded sentinel values (-999) that corrupt means, slopes, and standard deviations if not recoded to missing.`,
          affectedCount: prof.diagnostics.sentinelCount,
          affectedPct: totalRows > 0 ? (prof.diagnostics.sentinelCount / totalRows) * 100 : 0,
          recommendedAction: 'Recode sentinel tokens (-999) to explicit null/missing values in DataMend Lab.'
        });
      }

      if (prof.diagnostics.unitContaminatedCount > 0) {
        issues.push({
          severity: 'blocking',
          scope: scopeLabel,
          variable: prof.name,
          code: 'UNIT_CONTAMINATED_NUMERIC',
          title: `Unparsed Unit/Text Strings in Numeric Column "${prof.name}"`,
          whyItMatters: `${prof.diagnostics.unitContaminatedCount} cell(s) contain text suffixes (e.g., "138 mmHg") that prevent numeric parsing and exclude valid records.`,
          affectedCount: prof.diagnostics.unitContaminatedCount,
          affectedPct: totalRows > 0 ? (prof.diagnostics.unitContaminatedCount / totalRows) * 100 : 0,
          recommendedAction: 'Strip unit suffixes and coerce to clean numeric values in DataMend Lab.'
        });
      }

      if (prof.diagnostics.invalidDateCount > 0) {
        issues.push({
          severity: 'blocking',
          scope: scopeLabel,
          variable: prof.name,
          code: 'INVALID_DATE_STRINGS',
          title: `Malformed Date Values in "${prof.name}"`,
          whyItMatters: `${prof.diagnostics.invalidDateCount} timestamp(s) represent impossible calendar dates (e.g., month 19 or day 40) and break chronological ordering.`,
          affectedCount: prof.diagnostics.invalidDateCount,
          affectedPct: totalRows > 0 ? (prof.diagnostics.invalidDateCount / totalRows) * 100 : 0,
          recommendedAction: 'Standardize and repair invalid calendar dates in DataMend Lab.'
        });
      }

      if (prof.diagnostics.caseWhitespaceConflicts.length > 0) {
        issues.push({
          severity: 'blocking',
          scope: scopeLabel,
          variable: prof.name,
          code: 'CATEGORY_HYGIENE_CONFLICT',
          title: `Inconsistent Category Casing/Whitespace in "${prof.name}"`,
          whyItMatters: `Identical categories are split by capitalization or trailing spaces (${prof.diagnostics.caseWhitespaceConflicts[0].map(x => `"${x}"`).join(' vs ')}), distorting group counts and ANOVA η².`,
          affectedCount: prof.diagnostics.caseWhitespaceConflicts.length,
          affectedPct: 0,
          recommendedAction: 'Trim whitespace and normalize category casing in DataMend Lab.'
        });
      }

      if (prof.effectiveType === SEMANTIC_TYPES.IDENTIFIER && prof.validCount > prof.distinctCount) {
        const dupKeys = prof.validCount - prof.distinctCount;
        issues.push({
          severity: 'blocking',
          scope: scopeLabel,
          variable: prof.name,
          code: 'DUPLICATE_ID_KEYS',
          title: `Duplicate Identifier Keys in "${prof.name}"`,
          whyItMatters: `${dupKeys} repeated identifier key(s) violate primary-key uniqueness.`,
          affectedCount: dupKeys,
          affectedPct: totalRows > 0 ? (dupKeys / totalRows) * 100 : 0,
          recommendedAction: 'Deduplicate or reconcile repeated key rows in DataMend Lab.'
        });
      }

      if (prof.isConstant && isActiveFocus) {
        issues.push({
          severity: isPrimary ? 'blocking' : 'caution',
          scope: scopeLabel,
          variable: prof.name,
          code: 'CONSTANT_VARIABLE',
          title: `Zero Variance (Constant Value) in "${prof.name}"`,
          whyItMatters: `Every observation in "${prof.name}" equals the same constant value. Variance is 0, making Pearson r and regression slopes mathematically undefined.`,
          affectedCount: prof.validCount,
          affectedPct: 100,
          recommendedAction: 'Select a primary variable with variation or exclude constant metadata columns.'
        });
      }

      if (prof.missingCount > 0 && prof.diagnostics.sentinelCount === 0) {
        issues.push({
          severity: prof.missingPct >= 25 && isActiveFocus ? 'blocking' : 'caution',
          scope: scopeLabel,
          variable: prof.name,
          code: 'MISSING_OBSERVATIONS',
          title: `Missing Observations in "${prof.name}" (${prof.missingCount} of ${totalRows})`,
          whyItMatters: `${prof.missingCount} row(s) (${prof.missingPct.toFixed(1)}%) are excluded during pairwise complete-case analysis.`,
          affectedCount: prof.missingCount,
          affectedPct: prof.missingPct,
          recommendedAction: 'Inspect missingness mechanism or impute/filter incomplete records in DataMend Lab.'
        });
      }

      if (prof.numericSummary && prof.numericSummary.outlierCount > 0) {
        issues.push({
          severity: 'caution',
          scope: scopeLabel,
          variable: prof.name,
          code: 'EXTREME_VALUES_PRESENT',
          title: `${prof.numericSummary.outlierCount} Extreme Value(s) (1.5×IQR) in "${prof.name}"`,
          whyItMatters: `Extreme observations (${prof.numericSummary.outlierValues.join(', ')}) can exert high leverage on parametric means and Pearson r. Compass never auto-deletes legitimate extremes.`,
          affectedCount: prof.numericSummary.outlierCount,
          affectedPct: totalRows > 0 ? (prof.numericSummary.outlierCount / totalRows) * 100 : 0,
          recommendedAction: 'Compare Pearson r with rank-based Spearman ρ, or test robustness via bootstrap in ResampleLab.'
        });
      }

      if (prof.temporalSummary && prof.temporalSummary.gapCount > 0) {
        issues.push({
          severity: 'caution',
          scope: scopeLabel,
          variable: prof.name,
          code: 'TEMPORAL_CADENCE_GAP',
          title: `${prof.temporalSummary.gapCount} Timestamp Spacing Gap(s) in "${prof.name}"`,
          whyItMatters: `Time series contains missing date intervals (${prof.temporalSummary.gaps.map(g => `${g.fromIso} → ${g.toIso}`).join(', ')}), which affects lag autocorrelation and seasonal decomposition.`,
          affectedCount: prof.temporalSummary.gapCount,
          affectedPct: 0,
          recommendedAction: 'Regularize timestamp index or interpolate missing dates before ForecastLab modeling.'
        });
      }
    });

    const blockingIssues = issues.filter(i => i.severity === 'blocking');
    const cautionIssues = issues.filter(i => i.severity === 'caution');

    let status = 'READY';
    let statusLabel = 'Ready to explore';
    let statusHeadline = 'Dataset passes structural, type, and statistical readiness checks for the selected analysis.';

    if (blockingIssues.length > 0) {
      status = 'CLEANING_REQUIRED';
      statusLabel = 'Fix this issue before continuing';
      statusHeadline = `${blockingIssues.length} blocking data-hygiene issue(s) (${blockingIssues.map(b => b.code).slice(0, 3).join(', ')}) require repair in DataMend Lab before reliable downstream inference.`;
    } else if (cautionIssues.length > 0) {
      status = 'READY_WITH_CAUTIONS';
      statusLabel = 'Review these cautions';
      statusHeadline = `Ready for exploratory analysis with ${cautionIssues.length} analytical caution(s) (${cautionIssues.map(c => c.title).slice(0, 2).join('; ')}).`;
    }

    return {
      status,
      statusLabel,
      statusHeadline,
      totalRows,
      totalColumns: profiles.length,
      blockingCount: blockingIssues.length,
      cautionCount: cautionIssues.length,
      needsDataMend: status === 'CLEANING_REQUIRED',
      issues,
      blockingIssues,
      cautionIssues
    };
  }

  // =========================================================================
  // 8. TARGET VARIABLE RELATIONSHIP RANKING ENGINE (SECTION 21)
  // =========================================================================
  function buildTargetRelationshipExplorer(rows, profiles, primaryVarName, temporalOutcomeVarName = null) {
    const primaryProfile = profiles.find(p => p.name === primaryVarName) || profiles[0];
    if (!primaryProfile) {
      return {
        primaryProfile: null,
        effectiveCenterProfile: null,
        families: {
          numericAssociations: [],
          groupDifferences: [],
          categoricalAssociations: [],
          temporalSeries: [],
          excludedIdentifiers: []
        },
        allPairs: []
      };
    }

    const effectiveCenterProfile = (primaryProfile.roleFamily === 'temporal' && temporalOutcomeVarName)
      ? (profiles.find(p => p.name === temporalOutcomeVarName) || primaryProfile)
      : primaryProfile;

    const numericAssociations = [];
    const groupDifferences = [];
    const categoricalAssociations = [];
    const temporalSeries = [];
    const excludedIdentifiers = [];
    const allPairs = [];

    profiles.forEach(otherProf => {
      if (otherProf.name === primaryProfile.name) return;

      if (otherProf.roleFamily === 'identifier' || otherProf.roleFamily === 'other') {
        excludedIdentifiers.push({
          variable: otherProf.name,
          typeLabel: otherProf.EffectiveTypeLabel,
          reason: `Identifier / key column (${otherProf.distinctCount} unique values) excluded from statistical ranking.`
        });
        return;
      }

      const pairAnalysis = analyzePair(rows, primaryProfile, otherProf);
      allPairs.push({
        otherVariable: otherProf.name,
        otherProfile: otherProf,
        analysis: pairAnalysis
      });

      if (pairAnalysis.family === 'numeric_numeric') {
        numericAssociations.push({
          variable: otherProf.name,
          typeLabel: otherProf.EffectiveTypeLabel,
          validN: pairAnalysis.validN,
          excludedMissing: pairAnalysis.excludedMissing,
          missingPct: otherProf.missingPct,
          pearsonR: pairAnalysis.pearsonR,
          absPearsonR: pairAnalysis.pearsonR !== null ? Math.abs(pairAnalysis.pearsonR) : -1,
          spearmanRho: pairAnalysis.spearmanRho,
          absSpearmanRho: pairAnalysis.spearmanRho !== null ? Math.abs(pairAnalysis.spearmanRho) : -1,
          rSquared: pairAnalysis.rSquared,
          hasNonlinearSignal: pairAnalysis.nonlinear ? pairAnalysis.nonlinear.hasNonlinearSignal : false,
          binnedEtaSq: pairAnalysis.nonlinear ? pairAnalysis.nonlinear.binnedEtaSq : 0,
          isUndefined: pairAnalysis.isUndefined,
          undefinedReason: pairAnalysis.undefinedReason,
          direction: pairAnalysis.direction,
          strengthLabel: pairAnalysis.strengthLabel,
          cautions: pairAnalysis.cautions,
          analysis: pairAnalysis
        });
      } else if (pairAnalysis.family === 'numeric_categorical') {
        groupDifferences.push({
          variable: otherProf.name,
          typeLabel: otherProf.EffectiveTypeLabel,
          validN: pairAnalysis.validN,
          excludedMissing: pairAnalysis.excludedMissing,
          missingPct: otherProf.missingPct,
          groupCount: pairAnalysis.groupCount,
          etaSquared: pairAnalysis.etaSquared,
          pointBiserial: pairAnalysis.pointBiserial,
          binaryCodingLabel: pairAnalysis.binaryCodingLabel,
          meanSpread: pairAnalysis.meanSpread,
          isUndefined: pairAnalysis.isUndefined,
          undefinedReason: pairAnalysis.undefinedReason,
          strengthLabel: pairAnalysis.strengthLabel,
          cautions: pairAnalysis.cautions,
          analysis: pairAnalysis
        });
      } else if (pairAnalysis.family === 'categorical_categorical') {
        categoricalAssociations.push({
          variable: otherProf.name,
          typeLabel: otherProf.EffectiveTypeLabel,
          validN: pairAnalysis.validN,
          excludedMissing: pairAnalysis.excludedMissing,
          missingPct: otherProf.missingPct,
          cramersV: pairAnalysis.cramersV,
          cramersVBiasCorrected: pairAnalysis.cramersVBiasCorrected,
          chiSquare: pairAnalysis.chiSquare,
          sparseCellCount: pairAnalysis.sparseCellCount,
          isUndefined: pairAnalysis.isUndefined,
          undefinedReason: pairAnalysis.undefinedReason,
          strengthLabel: pairAnalysis.strengthLabel,
          cautions: pairAnalysis.cautions,
          analysis: pairAnalysis
        });
      } else if (pairAnalysis.family === 'temporal_numeric') {
        temporalSeries.push({
          variable: otherProf.name,
          typeLabel: otherProf.EffectiveTypeLabel,
          validN: pairAnalysis.validN,
          excludedMissing: pairAnalysis.excludedMissing,
          missingPct: otherProf.missingPct,
          trendR: pairAnalysis.trendR,
          absTrendR: pairAnalysis.trendR !== null ? Math.abs(pairAnalysis.trendR) : -1,
          lag1Autocorr: pairAnalysis.lag1Autocorr,
          isUndefined: pairAnalysis.isUndefined,
          undefinedReason: pairAnalysis.undefinedReason,
          strengthLabel: pairAnalysis.strengthLabel,
          cautions: pairAnalysis.cautions,
          analysis: pairAnalysis
        });
      }
    });

    numericAssociations.sort((a, b) => {
      if (a.isUndefined !== b.isUndefined) return a.isUndefined ? 1 : -1;
      const scoreA = Math.max(a.absPearsonR, a.absSpearmanRho, a.hasNonlinearSignal ? Math.sqrt(a.binnedEtaSq) : 0);
      const scoreB = Math.max(b.absPearsonR, b.absSpearmanRho, b.hasNonlinearSignal ? Math.sqrt(b.binnedEtaSq) : 0);
      return scoreB - scoreA;
    });

    groupDifferences.sort((a, b) => {
      if (a.isUndefined !== b.isUndefined) return a.isUndefined ? 1 : -1;
      return (b.etaSquared || 0) - (a.etaSquared || 0);
    });

    categoricalAssociations.sort((a, b) => {
      if (a.isUndefined !== b.isUndefined) return a.isUndefined ? 1 : -1;
      return (b.cramersV || 0) - (a.cramersV || 0);
    });

    temporalSeries.sort((a, b) => {
      if (a.isUndefined !== b.isUndefined) return a.isUndefined ? 1 : -1;
      return b.absTrendR - a.absTrendR;
    });

    return {
      primaryProfile,
      effectiveCenterProfile,
      families: {
        numericAssociations,
        groupDifferences,
        categoricalAssociations,
        temporalSeries,
        excludedIdentifiers
      },
      allPairs
    };
  }

  function sortRelationshipFamily(items, familyKey, sortMode = 'abs_strength') {
    const copy = items.slice();
    copy.sort((a, b) => {
      if (a.isUndefined !== b.isUndefined) return a.isUndefined ? 1 : -1;
      if (sortMode === 'sample_size') {
        return b.validN - a.validN;
      }
      if (sortMode === 'low_missing') {
        return a.missingPct - b.missingPct;
      }
      if (familyKey === 'numericAssociations') {
        if (sortMode === 'signed_r') return (b.pearsonR || 0) - (a.pearsonR || 0);
        if (sortMode === 'abs_spearman') return (b.absSpearmanRho || 0) - (a.absSpearmanRho || 0);
        return (b.absPearsonR || 0) - (a.absPearsonR || 0);
      }
      if (familyKey === 'groupDifferences') {
        return (b.etaSquared || 0) - (a.etaSquared || 0);
      }
      if (familyKey === 'categoricalAssociations') {
        return (b.cramersV || 0) - (a.cramersV || 0);
      }
      if (familyKey === 'temporalSeries') {
        return (b.absTrendR || 0) - (a.absTrendR || 0);
      }
      return 0;
    });
    return copy;
  }

  // =========================================================================
  // 9. LAYER 3: DETAILED PAIR EXPLANATIONS (SIMPLE / STANDARD / TECHNICAL)
  // =========================================================================
  function generatePairExplanations(pairAnalysis) {
    if (!pairAnalysis) return { simple: '', standard: '', technical: '' };

    if (pairAnalysis.isUndefined) {
      return {
        simple: `We cannot calculate a relationship between ${pairAnalysis.varA} and ${pairAnalysis.varB} because ${pairAnalysis.undefinedReason}`,
        standard: `Pairwise association is mathematically undefined (${pairAnalysis.validN} valid paired records, ${pairAnalysis.excludedMissing} excluded). ${pairAnalysis.undefinedReason}`,
        technical: `Estimator undefined: ${pairAnalysis.undefinedReason} Zero-variance or single-stratum vectors yield a singular denominator (S_xx = 0 or min(R-1, C-1) = 0); Compass explicitly reports Undefined rather than imputing r = 0.`
      };
    }

    if (pairAnalysis.family === 'numeric_numeric') {
      const rStr = pairAnalysis.pearsonR.toFixed(3);
      const rhoStr = pairAnalysis.spearmanRho !== null ? pairAnalysis.spearmanRho.toFixed(3) : 'n/a';
      const r2Pct = (pairAnalysis.rSquared * 100).toFixed(1);
      const nl = pairAnalysis.nonlinear;

      if (nl && nl.hasNonlinearSignal) {
        return {
          simple: `At first glance, a straight line misses the pattern between ${pairAnalysis.varA} and ${pairAnalysis.varB} (linear correlation is near ${rStr}). However, tracing the curve across bins reveals a strong ${pairAnalysis.direction.toLowerCase()} relationship across ${pairAnalysis.validN} records.`,
          standard: `Linear Pearson r = ${rStr} (R² = ${r2Pct}%) and rank Spearman ρ = ${rhoStr} across n = ${pairAnalysis.validN} complete pairs (${pairAnalysis.excludedMissing} missing excluded). Binned conditional means explain ${(nl.binnedEtaSq * 100).toFixed(1)}% of variance, indicating strong non-linear structure.`,
          technical: `Parametric OLS slope β₁ = ${pairAnalysis.olsSlope.toFixed(4)} (intercept β₀ = ${pairAnalysis.olsIntercept.toFixed(4)}), Pearson r = ${rStr}, tie-corrected Spearman ρ = ${rhoStr} (n = ${pairAnalysis.validN}). Non-parametric bin-partitioned η²_bins = ${nl.binnedEtaSq.toFixed(3)} exceeds linear R² = ${nl.linearR2.toFixed(3)} by Δ = +${nl.curvatureGain.toFixed(3)}, diagnosing non-monotonic curvature where linear correlation understates dependence.`
        };
      }

      return {
        simple: `As ${pairAnalysis.varB} changes, ${pairAnalysis.varA} tends to move in a ${pairAnalysis.direction.toLowerCase()} direction (${pairAnalysis.strengthLabel.toLowerCase()}, based on ${pairAnalysis.validN} paired observations).`,
        standard: `Pearson linear correlation r = ${rStr} (explaining ${r2Pct}% of linear variance) and rank-order Spearman ρ = ${rhoStr} across n = ${pairAnalysis.validN} complete pairs (${pairAnalysis.excludedMissing} missing excluded).`,
        technical: `Bivariate complete-case estimator (n = ${pairAnalysis.validN}, excluded = ${pairAnalysis.excludedMissing}): Pearson product-moment r = ${rStr} (R² = ${pairAnalysis.rSquared.toFixed(4)}, OLS fit: ${pairAnalysis.varA} = ${pairAnalysis.olsIntercept.toFixed(3)} + ${pairAnalysis.olsSlope.toFixed(4)}·${pairAnalysis.varB}), tie-corrected Spearman rank correlation ρ = ${rhoStr}.`
      };
    }

    if (pairAnalysis.family === 'numeric_categorical') {
      const etaPct = (pairAnalysis.etaSquared * 100).toFixed(1);
      const topG = pairAnalysis.groups[0];
      const botG = pairAnalysis.groups[pairAnalysis.groups.length - 1];
      const pbNote = pairAnalysis.pointBiserial !== null
        ? ` Point-biserial r_pb = ${pairAnalysis.pointBiserial.toFixed(3)} (${pairAnalysis.binaryCodingLabel}).`
        : '';

      return {
        simple: `Across the ${pairAnalysis.groupCount} categories of ${pairAnalysis.categoricalVar}, average ${pairAnalysis.numericVar} ranges from ${botG.mean.toFixed(1)} (in "${botG.category}") to ${topG.mean.toFixed(1)} (in "${topG.category}").`,
        standard: `Category membership in ${pairAnalysis.categoricalVar} accounts for ${etaPct}% of the variance in ${pairAnalysis.numericVar} (descriptive η² = ${pairAnalysis.etaSquared.toFixed(3)}, n = ${pairAnalysis.validN} across ${pairAnalysis.groupCount} groups).${pbNote}`,
        technical: `One-way partition of variance for ${pairAnalysis.numericVar} by ${pairAnalysis.categoricalVar} (k = ${pairAnalysis.groupCount}, n = ${pairAnalysis.validN}, excluded = ${pairAnalysis.excludedMissing}): descriptive η² = SS_between / SS_total = ${pairAnalysis.etaSquared.toFixed(4)}, mean contrast Δ_max = ${pairAnalysis.meanSpread.toFixed(3)}.${pbNote} Non-parametric group medians range from ${botG.median.toFixed(2)} (IQR ${botG.iqr.toFixed(2)}) to ${topG.median.toFixed(2)} (IQR ${topG.iqr.toFixed(2)}).`
      };
    }

    if (pairAnalysis.family === 'categorical_categorical') {
      return {
        simple: `The categories of ${pairAnalysis.varA} and ${pairAnalysis.varB} show a ${pairAnalysis.strengthLabel.toLowerCase()} across ${pairAnalysis.validN} records (${pairAnalysis.rowCategories.length} × ${pairAnalysis.colCategories.length} table).`,
        standard: `Contingency analysis across n = ${pairAnalysis.validN} records yields Cramér's V = ${pairAnalysis.cramersV.toFixed(3)} (bias-corrected Ṽ = ${pairAnalysis.cramersVBiasCorrected.toFixed(3)}, Pearson χ² = ${pairAnalysis.chiSquare.toFixed(2)}).`,
        technical: `R × C contingency table (${pairAnalysis.rowCategories.length} × ${pairAnalysis.colCategories.length}, n = ${pairAnalysis.validN}, excluded = ${pairAnalysis.excludedMissing}): Pearson χ² = ${pairAnalysis.chiSquare.toFixed(4)}, Cramér's V = √(χ² / [n·min(R-1, C-1)]) = ${pairAnalysis.cramersV.toFixed(4)}, Bergsma bias-corrected Ṽ = ${pairAnalysis.cramersVBiasCorrected.toFixed(4)}. Sparse cells (E_ij < 5): ${pairAnalysis.sparseCellCount}/${pairAnalysis.totalCells}.`
      };
    }

    if (pairAnalysis.family === 'temporal_numeric') {
      const tr = pairAnalysis.trendR !== null ? pairAnalysis.trendR.toFixed(3) : 'n/a';
      const ac = pairAnalysis.lag1Autocorr !== null ? pairAnalysis.lag1Autocorr.toFixed(3) : 'n/a';
      return {
        simple: `Tracking ${pairAnalysis.numericVar} across ${pairAnalysis.validN} time points of ${pairAnalysis.temporalVar} shows an overall trend correlation of r = ${tr}.`,
        standard: `Chronological series (n = ${pairAnalysis.validN} valid timestamps, ${pairAnalysis.excludedMissing} excluded) exhibits linear time-index trend r = ${tr} and lag-1 serial autocorrelation r₁ = ${ac}.`,
        technical: `Ordered time-series evaluation on ${pairAnalysis.temporalVar} → ${pairAnalysis.numericVar} (n = ${pairAnalysis.validN}): deterministic index trend r = ${tr} (Spearman ρ = ${pairAnalysis.trendSpearman !== null ? pairAnalysis.trendSpearman.toFixed(3) : 'n/a'}), first-order autoregressive lag-1 correlation r₁ = ${ac}, overlaid with 3-point centered moving average.`
      };
    }

    return {
      simple: pairAnalysis.strengthLabel || '',
      standard: pairAnalysis.strengthLabel || '',
      technical: pairAnalysis.strengthLabel || ''
    };
  }

  // =========================================================================
  // 10. DETERMINISTIC APPLICATION RECOMMENDATION ENGINE (SECTIONS 23 & 24)
  // =========================================================================
  function generateApplicationRecommendations(dataset, profiles, readiness, explorer, activePair = null) {
    const recommendations = [];
    const primary = explorer.primaryProfile;
    if (!primary) return recommendations;

    const focusedPair = activePair || (explorer.allPairs.length > 0 ? explorer.allPairs[0].analysis : null);

    if (readiness.status === 'CLEANING_REQUIRED') {
      const affectedVars = Array.from(new Set(readiness.blockingIssues.map(i => i.variable)));
      recommendations.push({
        stepOrder: 1,
        priorityBadge: 'Step 1 · Required First',
        app: ECOSYSTEM_APPS.datamend,
        whyThisTool: `Dataset readiness is "${readiness.statusLabel}" due to ${readiness.blockingCount} blocking hygiene issue(s): ${readiness.blockingIssues.map(i => i.title).slice(0, 2).join('; ')}.`,
        whatYouCanAccomplish: 'Recode numeric sentinel values (-999 → null), strip unit text from numeric cells, standardize category casing/whitespace, repair invalid calendar dates, and deduplicate repeated keys.',
        variablesToUse: affectedVars,
        preparationNeeded: 'None — DataMend Lab is the preparation and remediation environment.',
        howToContinue: 'Click "Clean in DataMend Lab (Browser Round-Trip)" to hand off this dataset via IndexedDB or download the DataSense JSON package.',
        caveats: 'Running regression, ANOVA, or forecasting before resolving sentinel codes or duplicate keys will produce biased parameters.'
      });
    }

    const nonlinearPairs = explorer.families.numericAssociations.filter(a => a.hasNonlinearSignal);
    const hasOutliers = profiles.some(p => p.numericSummary && p.numericSummary.outlierCount > 0);
    if (nonlinearPairs.length > 0 || (focusedPair && focusedPair.family === 'numeric_numeric' && hasOutliers)) {
      const targetVars = nonlinearPairs.length > 0
        ? [primary.name, nonlinearPairs[0].variable]
        : [primary.name, focusedPair ? focusedPair.varB : ''].filter(Boolean);
      recommendations.push({
        stepOrder: recommendations.length + 1,
        priorityBadge: recommendations.length === 0 ? 'Primary Recommendation' : `Step ${recommendations.length + 1} · Structural Diagnostic`,
        app: ECOSYSTEM_APPS.quartetlab,
        whyThisTool: nonlinearPairs.length > 0
          ? `Non-linear curvature detected between "${primary.name}" and "${nonlinearPairs[0].variable}" (linear Pearson r = ${nonlinearPairs[0].pearsonR.toFixed(2)}, whereas binned conditional means explain ${(nonlinearPairs[0].binnedEtaSq * 100).toFixed(0)}% of variance).`
          : `Extreme observations (1.5×IQR outliers) are present alongside numeric associations with "${primary.name}", where summary statistics alone can mask structural leverage.`,
        whatYouCanAccomplish: 'Compare parametric linear fits against non-parametric loess/binned trends, inspect Anscombe-style summary deception, and evaluate outlier leverage.',
        variablesToUse: targetVars,
        preparationNeeded: readiness.needsDataMend ? 'Complete DataMend Lab hygiene cleanup first.' : 'Dataset is ready for structural inspection.',
        howToContinue: 'Launch QuartetLab and map the primary and explanatory numeric variables to the bivariate diagnostic canvas.',
        caveats: 'Do not rely solely on Pearson r when curvature or high-leverage points are flagged.'
      });
    }

    const temporalProfiles = profiles.filter(p => p.roleFamily === 'temporal');
    if (primary.roleFamily === 'temporal' || (temporalProfiles.length > 0 && explorer.families.temporalSeries.length > 0)) {
      const tVar = primary.roleFamily === 'temporal' ? primary.name : temporalProfiles[0].name;
      const numTarget = primary.roleFamily === 'numeric'
        ? primary.name
        : (explorer.families.temporalSeries[0] ? explorer.families.temporalSeries[0].variable : 'numeric series');
      const tProf = profiles.find(p => p.name === tVar);
      const hasGaps = tProf && tProf.temporalSummary && tProf.temporalSummary.gapCount > 0;

      recommendations.push({
        stepOrder: recommendations.length + 1,
        priorityBadge: primary.roleFamily === 'temporal' && recommendations.length === 0 ? 'Primary Recommendation' : `Step ${recommendations.length + 1} · Time-Series Modeling`,
        app: ECOSYSTEM_APPS.forecastlab,
        whyThisTool: `Ordered chronological index "${tVar}" paired with numerical measure "${numTarget}" supports trend-seasonal decomposition and horizon forecasting.`,
        whatYouCanAccomplish: 'Perform STL trend/seasonality decomposition, inspect ACF/PACF serial correlation, and evaluate rolling-origin forecast accuracy.',
        variablesToUse: [tVar, numTarget],
        preparationNeeded: hasGaps
          ? `Regularize the ${tProf.temporalSummary.gapCount} timestamp spacing gap(s) in "${tVar}" via DataMend Lab before fitting ARIMA/ETS models.`
          : 'Timestamp cadence is regular and ready for decomposition.',
        howToContinue: 'Open ForecastLab with the timestamp index and target numerical series.',
        caveats: hasGaps ? 'Missing date intervals will bias lag autocorrelation if left unindexed.' : 'Verify stationarity before extrapolating long horizons.'
      });
    }

    if (explorer.families.groupDifferences.length > 0 || explorer.families.numericAssociations.length > 0) {
      const topGroup = explorer.families.groupDifferences[0];
      const topNum = explorer.families.numericAssociations[0];
      const useVars = topGroup
        ? [primary.name, topGroup.variable]
        : [primary.name, topNum ? topNum.variable : ''].filter(Boolean);

      recommendations.push({
        stepOrder: recommendations.length + 1,
        priorityBadge: recommendations.length === 0 ? 'Primary Recommendation' : `Step ${recommendations.length + 1} · Non-Parametric Inference`,
        app: ECOSYSTEM_APPS.resamplelab,
        whyThisTool: topGroup
          ? `Group differences across "${topGroup.variable}" (descriptive η² = ${topGroup.etaSquared !== null ? topGroup.etaSquared.toFixed(3) : 'n/a'}) warrant permutation testing and bootstrap confidence intervals without normality assumptions.`
          : `Quantify uncertainty around the association with "${primary.name}" via bootstrap resampling.`,
        whatYouCanAccomplish: 'Run 10,000-iteration bootstrap confidence intervals for group mean/median contrasts and permutation distribution tests.',
        variablesToUse: useVars,
        preparationNeeded: readiness.needsDataMend ? 'Clean sentinel codes and category labels in DataMend Lab first.' : 'Ready for resampling.',
        howToContinue: 'Launch ResampleLab to construct empirical sampling distributions for the selected pair.',
        caveats: 'Small subgroup sizes (n < 5) produce discrete bootstrap distributions.'
      });
    }

    const topVars = [
      primary.name,
      ...(explorer.families.numericAssociations.slice(0, 2).map(a => a.variable)),
      ...(explorer.families.groupDifferences.slice(0, 2).map(g => g.variable)),
      ...(explorer.families.categoricalAssociations.slice(0, 1).map(c => c.variable))
    ].filter((v, idx, arr) => v && arr.indexOf(v) === idx).slice(0, 4);

    recommendations.push({
      stepOrder: recommendations.length + 1,
      priorityBadge: recommendations.length === 0 ? 'Primary Recommendation' : `Step ${recommendations.length + 1} · Multivariate Encoding`,
      app: ECOSYSTEM_APPS.visualgrammar,
      whyThisTool: `After inspecting pairwise relationships with "${primary.name}", layered visual encoding allows simultaneous mapping of X, Y, color, and small-multiple facets.`,
      whatYouCanAccomplish: 'Build publication-grade faceted scatterplots, raincloud distributions, and stacked contingency bars with explicit aesthetic mappings.',
      variablesToUse: topVars,
      preparationNeeded: readiness.needsDataMend ? 'Clean dataset in DataMend Lab prior to publication plotting.' : 'Variables are typed and ready for encoding.',
      howToContinue: 'Open VisualGrammar and assign the primary variable to the primary position channel.',
      caveats: 'Avoid overplotting when encoding more than 4 simultaneous dimensions.'
    });

    return recommendations;
  }

  // =========================================================================
  // 11. SUBSET FILTERING & FULL COMPASS ANALYSIS PIPELINE
  // =========================================================================
  function filterDatasetRows(rows, filterSpec) {
    if (!filterSpec || !filterSpec.variable || filterSpec.value === undefined || filterSpec.value === 'ALL') {
      return rows;
    }
    return rows.filter(r => String(r[filterSpec.variable] || '').trim() === String(filterSpec.value).trim());
  }

  function analyzeDataset(datasetInput, options = {}) {
    const parsed = (datasetInput && typeof datasetInput === 'object' && Array.isArray(datasetInput.rows) && Array.isArray(datasetInput.headers))
      ? datasetInput
      : parseDatasetInput(datasetInput, options);

    const typeOverrides = Object.assign({}, parsed.typeOverrides || {}, options.typeOverrides || {});
    const activeRows = filterDatasetRows(parsed.rows, options.subsetFilter);

    const profiles = parsed.headers.map(col =>
      inferVariableProfile(col, activeRows.map(r => r[col]), typeOverrides[col] || null)
    );

    let primaryVar = options.primaryVar;
    if (primaryVar && !parsed.headers.includes(primaryVar) && parsed.lineage && parsed.lineage.renamedVariables) {
      const mapped = parsed.lineage.renamedVariables[primaryVar];
      if (mapped && parsed.headers.includes(mapped)) {
        primaryVar = mapped;
      }
    }
    if (!primaryVar || !parsed.headers.includes(primaryVar)) {
      const candidate = profiles.find(p => p.roleFamily === 'numeric' && !p.isConstant)
        || profiles.find(p => p.roleFamily === 'categorical')
        || profiles[0];
      primaryVar = candidate ? candidate.name : (parsed.headers[0] || null);
    }

    const secondaryVar = (options.secondaryVar && parsed.headers.includes(options.secondaryVar) && options.secondaryVar !== primaryVar)
      ? options.secondaryVar
      : null;

    const readiness = evaluateDatasetReadiness(
      Object.assign({}, parsed, { rows: activeRows }),
      profiles,
      primaryVar,
      secondaryVar
    );

    const explorer = buildTargetRelationshipExplorer(
      activeRows,
      profiles,
      primaryVar,
      options.temporalOutcomeVar || null
    );

    let activePairAnalysis = null;
    if (secondaryVar) {
      const profA = profiles.find(p => p.name === primaryVar);
      const profB = profiles.find(p => p.name === secondaryVar);
      if (profA && profB) activePairAnalysis = analyzePair(activeRows, profA, profB);
    }
    if (!activePairAnalysis) {
      const topDefined = explorer.families.numericAssociations.find(a => !a.isUndefined)
        || explorer.families.groupDifferences.find(g => !g.isUndefined)
        || explorer.families.categoricalAssociations.find(c => !c.isUndefined)
        || explorer.families.temporalSeries.find(t => !t.isUndefined)
        || (explorer.allPairs[0] ? explorer.allPairs[0] : null);
      if (topDefined) {
        activePairAnalysis = topDefined.analysis;
      }
    }

    const activePairExplanations = activePairAnalysis ? generatePairExplanations(activePairAnalysis) : null;
    const recommendations = generateApplicationRecommendations(parsed, profiles, readiness, explorer, activePairAnalysis);

    const matrixProfiles = profiles
      .filter(p => p.roleFamily !== 'identifier' && p.roleFamily !== 'other')
      .slice(0, 6);
    const relationshipMatrix = matrixProfiles.map((rowProf, rIdx) => {
      return matrixProfiles.map((colProf, cIdx) => {
        if (rIdx === cIdx) {
          return { kind: 'diagonal', variable: rowProf.name, profile: rowProf };
        }
        const pair = analyzePair(activeRows, rowProf, colProf);
        return {
          kind: rIdx < cIdx ? 'upper' : 'lower',
          rowVar: rowProf.name,
          colVar: colProf.name,
          pair
        };
      });
    });

    return {
      dataset: {
        id: parsed.id,
        name: parsed.name,
        description: parsed.description,
        sourceFormat: parsed.sourceFormat,
        totalRows: activeRows.length,
        unfilteredTotalRows: parsed.rows.length,
        totalColumns: parsed.headers.length,
        headers: parsed.headers,
        rows: activeRows,
        unfilteredRows: parsed.rows,
        parseIssues: parsed.parseIssues,
        typeOverrides,
        subsetFilter: options.subsetFilter || null,
        lineage: parsed.lineage || null
      },
      primaryVar,
      secondaryVar: activePairAnalysis ? activePairAnalysis.varB : secondaryVar,
      profiles,
      readiness,
      explorer,
      activePairAnalysis,
      activePairExplanations,
      matrixVariables: matrixProfiles.map(p => p.name),
      relationshipMatrix,
      recommendations
    };
  }

  // =========================================================================
  // 12. DATAMEND ROUND-TRIP CLEANING ENGINE & HANDOFF ENVELOPE (SECTIONS 12–13)
  // =========================================================================
  function executeDataMendCleaning(dataset, cleaningOptions = {}) {
    const opts = Object.assign({
      recodeSentinels: true,
      stripNumericUnits: true,
      normalizeCategoryStrings: true,
      repairInvalidDates: true,
      deduplicateRows: true,
      renameVariableFrom: null,
      renameVariableTo: null
    }, cleaningOptions);

    const originalRowCount = dataset.rows.length;
    const headers = dataset.headers.slice();
    const renamedVariables = {};

    if (opts.renameVariableFrom && opts.renameVariableTo && opts.renameVariableFrom !== opts.renameVariableTo) {
      const idx = headers.indexOf(opts.renameVariableFrom);
      if (idx !== -1) {
        headers[idx] = opts.renameVariableTo;
        renamedVariables[opts.renameVariableFrom] = opts.renameVariableTo;
      }
    }

    let sentinelsRecoded = 0;
    let unitsStripped = 0;
    let categoriesNormalized = 0;
    let datesRepaired = 0;
    let duplicatesRemoved = 0;

    const initialProfiles = dataset.headers.map(col =>
      inferVariableProfile(col, dataset.rows.map(r => r[col]), (dataset.typeOverrides || {})[col])
    );
    const profMap = new Map();
    initialProfiles.forEach(p => profMap.set(p.name, p));

    const cleanedRows = [];
    const seenRowKeys = new Set();

    dataset.rows.forEach(rawRow => {
      const newRow = {};
      dataset.headers.forEach((oldCol, cIdx) => {
        const targetCol = headers[cIdx];
        const prof = profMap.get(oldCol);
        let val = rawRow[oldCol] !== undefined && rawRow[oldCol] !== null ? String(rawRow[oldCol]) : '';
        const trimmed = val.trim();
        const lower = trimmed.toLowerCase();

        if (opts.recodeSentinels && NUMERIC_SENTINELS.has(lower)) {
          val = '';
          sentinelsRecoded++;
        } else if (opts.stripNumericUnits && prof && prof.roleFamily === 'numeric') {
          const unitMatch = /^([+-]?\d+(?:\.\d+)?)\s*[a-zA-Z%$€£]+$/.exec(trimmed);
          if (unitMatch) {
            val = unitMatch[1];
            unitsStripped++;
          } else {
            val = trimmed;
          }
        } else if (opts.repairInvalidDates && prof && (prof.roleFamily === 'temporal' || prof.diagnostics.invalidDateCount > 0)) {
          const tCheck = parseTemporalToken(trimmed);
          if (tCheck.isTemporal) {
            const iso = new Date(tCheck.epochMs).toISOString().slice(0, 10);
            if (iso !== trimmed) datesRepaired++;
            val = iso;
          } else if (tCheck.isInvalidDate) {
            val = '';
            datesRepaired++;
          }
        } else if (opts.normalizeCategoryStrings && prof && prof.roleFamily === 'categorical' && trimmed !== '') {
          const titleNormalized = trimmed
            .replace(/\s+/g, ' ')
            .split(' ')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
            .join(' ');
          if (titleNormalized !== val) {
            categoriesNormalized++;
          }
          val = titleNormalized;
        } else {
          val = trimmed;
        }

        newRow[targetCol] = val;
      });

      if (opts.deduplicateRows) {
        const idCol = headers.find((h, idx) => initialProfiles[idx] && initialProfiles[idx].effectiveType === SEMANTIC_TYPES.IDENTIFIER);
        const rowKey = idCol && newRow[idCol] ? `ID:${newRow[idCol]}` : `ROW:${JSON.stringify(newRow)}`;
        if (seenRowKeys.has(rowKey)) {
          duplicatesRemoved++;
          return;
        }
        seenRowKeys.add(rowKey);
      }

      cleanedRows.push(newRow);
    });

    const operations = [];
    if (sentinelsRecoded > 0) operations.push({ action: 'RECODE_SENTINELS', count: sentinelsRecoded, detail: `Recoded ${sentinelsRecoded} sentinel value(s) (-999) to explicit missing.` });
    if (unitsStripped > 0) operations.push({ action: 'STRIP_NUMERIC_UNITS', count: unitsStripped, detail: `Extracted clean numeric values from ${unitsStripped} unit-suffixed string(s).` });
    if (categoriesNormalized > 0) operations.push({ action: 'NORMALIZE_CATEGORIES', count: categoriesNormalized, detail: `Standardized casing and trimmed whitespace on ${categoriesNormalized} categorical label(s).` });
    if (datesRepaired > 0) operations.push({ action: 'STANDARDIZE_DATES', count: datesRepaired, detail: `Standardized ${datesRepaired} slash/invalid date value(s) to ISO-8601.` });
    if (duplicatesRemoved > 0) operations.push({ action: 'DEDUPLICATE_RECORDS', count: duplicatesRemoved, detail: `Removed ${duplicatesRemoved} duplicate record(s).` });
    if (Object.keys(renamedVariables).length > 0) {
      operations.push({
        action: 'RENAME_VARIABLE',
        count: Object.keys(renamedVariables).length,
        detail: `Renamed variable(s): ${Object.entries(renamedVariables).map(([a, b]) => `"${a}" → "${b}"`).join(', ')}.`
      });
    }

    const newTypeOverrides = {};
    Object.entries(dataset.typeOverrides || {}).forEach(([k, v]) => {
      const mappedKey = renamedVariables[k] || k;
      newTypeOverrides[mappedKey] = v;
    });

    return {
      dataset: {
        id: dataset.id + '_cleaned',
        name: dataset.name.replace(/\s*\(Cleaned\)$/i, '') + ' (Cleaned)',
        description: dataset.description,
        headers,
        rows: cleanedRows,
        parseIssues: [],
        sourceFormat: 'datasense_json_v1',
        typeOverrides: newTypeOverrides,
        lineage: {
          parentDatasetId: dataset.id,
          cleanedAt: new Date().toISOString(),
          originalRowCount,
          cleanedRowCount: cleanedRows.length,
          renamedVariables,
          operations
        }
      },
      auditSummary: {
        originalRowCount,
        cleanedRowCount: cleanedRows.length,
        sentinelsRecoded,
        unitsStripped,
        categoriesNormalized,
        datesRepaired,
        duplicatesRemoved,
        renamedVariables,
        operations
      }
    };
  }

  function createHandoffEnvelope(analysisResult, targetAppId = 'datamend') {
    const ds = analysisResult.dataset;
    const payloadStr = JSON.stringify({ headers: ds.headers, rows: ds.rows });
    let hash = 2166136261;
    for (let i = 0; i < payloadStr.length; i++) {
      hash ^= payloadStr.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    const syncDigest = 'fnv1a_' + (hash >>> 0).toString(16).padStart(8, '0');

    const now = Date.now();
    return {
      protocol: 'datasense_compass_handoff_v1',
      schemaVersion: '1.0.0',
      handoffId: 'ds_handoff_' + now + '_' + Math.random().toString(36).slice(2, 8),
      state: 'CREATED',
      createdAt: new Date(now).toISOString(),
      expiresAt: new Date(now + 24 * 60 * 60 * 1000).toISOString(),
      sourceApp: 'datasense-compass',
      targetApp: targetAppId,
      returnUrl: typeof window !== 'undefined' ? window.location.href.split('#')[0] + '#compass' : 'https://rkohnmn.github.io/datasense-studio/#compass',
      integrityDigest: syncDigest,
      compassContext: {
        primaryVariable: analysisResult.primaryVar,
        secondaryVariable: analysisResult.secondaryVar,
        typeOverrides: ds.typeOverrides || {},
        subsetFilter: ds.subsetFilter || null,
        readinessStatus: analysisResult.readiness.status,
        flaggedIssues: analysisResult.readiness.issues
      },
      dataset: {
        id: ds.id,
        name: ds.name,
        description: ds.description,
        headers: ds.headers,
        rows: ds.rows,
        rowCount: ds.rows.length,
        columnCount: ds.headers.length
      },
      lineage: ds.lineage || {
        originDatasetId: ds.id,
        createdAt: new Date(now).toISOString(),
        operations: []
      }
    };
  }

  // =========================================================================
  // 13. REPRODUCIBLE EXPORTS (SECTION 27)
  // =========================================================================
  function exportDatasetToCSV(dataset) {
    const headers = dataset.headers || [];
    const rows = dataset.rows || [];
    const escapeCell = (val) => {
      const str = val !== undefined && val !== null ? String(val) : '';
      if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
        return '"' + str.replace(/"/g, '""') + '"';
      }
      return str;
    };
    const lines = [headers.map(escapeCell).join(',')];
    rows.forEach(r => {
      lines.push(headers.map(h => escapeCell(r[h])).join(','));
    });
    return lines.join('\n');
  }

  function exportRelationshipsToCSV(analysisResult) {
    const primary = analysisResult.primaryVar;
    const lines = [
      'primary_variable,comparison_variable,comparison_type,statistical_family,metric_name,metric_value,secondary_metric_name,secondary_metric_value,valid_n,excluded_missing,direction_or_notes'
    ];
    const fam = analysisResult.explorer.families;

    fam.numericAssociations.forEach(item => {
      lines.push([
        primary,
        item.variable,
        item.typeLabel,
        'Numerical Association',
        'Pearson r',
        item.isUndefined ? 'Undefined' : item.pearsonR.toFixed(4),
        'Spearman rho',
        item.spearmanRho !== null ? item.spearmanRho.toFixed(4) : 'Undefined',
        item.validN,
        item.excludedMissing,
        `"${(item.undefinedReason || item.strengthLabel).replace(/"/g, '""')}"`
      ].join(','));
    });

    fam.groupDifferences.forEach(item => {
      lines.push([
        primary,
        item.variable,
        item.typeLabel,
        'Group Difference',
        'Eta Squared (eta^2)',
        item.isUndefined ? 'Undefined' : item.etaSquared.toFixed(4),
        'Point-Biserial r_pb',
        item.pointBiserial !== null ? item.pointBiserial.toFixed(4) : 'N/A',
        item.validN,
        item.excludedMissing,
        `"${(item.undefinedReason || item.strengthLabel).replace(/"/g, '""')}"`
      ].join(','));
    });

    fam.categoricalAssociations.forEach(item => {
      lines.push([
        primary,
        item.variable,
        item.typeLabel,
        'Categorical Association',
        'Cramers V',
        item.isUndefined ? 'Undefined' : item.cramersV.toFixed(4),
        'Chi-Square',
        item.isUndefined ? 'Undefined' : item.chiSquare.toFixed(4),
        item.validN,
        item.excludedMissing,
        `"${(item.undefinedReason || item.strengthLabel).replace(/"/g, '""')}"`
      ].join(','));
    });

    fam.temporalSeries.forEach(item => {
      lines.push([
        primary,
        item.variable,
        item.typeLabel,
        'Temporal Series',
        'Time Trend r',
        item.isUndefined ? 'Undefined' : item.trendR.toFixed(4),
        'Lag-1 Autocorr',
        item.lag1Autocorr !== null ? item.lag1Autocorr.toFixed(4) : 'N/A',
        item.validN,
        item.excludedMissing,
        `"${(item.undefinedReason || item.strengthLabel).replace(/"/g, '""')}"`
      ].join(','));
    });

    return lines.join('\n');
  }

  function exportProfileReportJSON(analysisResult) {
    return JSON.stringify({
      schema: 'datasense_compass_profile_report_v1',
      generatedAt: new Date().toISOString(),
      dataset: {
        id: analysisResult.dataset.id,
        name: analysisResult.dataset.name,
        totalRows: analysisResult.dataset.totalRows,
        totalColumns: analysisResult.dataset.totalColumns,
        primaryVariable: analysisResult.primaryVar,
        typeOverrides: analysisResult.dataset.typeOverrides,
        lineage: analysisResult.dataset.lineage
      },
      readiness: analysisResult.readiness,
      variableProfiles: analysisResult.profiles,
      relationshipsByFamily: {
        numericAssociations: analysisResult.explorer.families.numericAssociations.map(x => ({
          variable: x.variable,
          validN: x.validN,
          excludedMissing: x.excludedMissing,
          pearsonR: x.pearsonR,
          spearmanRho: x.spearmanRho,
          hasNonlinearSignal: x.hasNonlinearSignal,
          isUndefined: x.isUndefined,
          undefinedReason: x.undefinedReason
        })),
        groupDifferences: analysisResult.explorer.families.groupDifferences.map(x => ({
          variable: x.variable,
          validN: x.validN,
          excludedMissing: x.excludedMissing,
          groupCount: x.groupCount,
          etaSquared: x.etaSquared,
          pointBiserial: x.pointBiserial,
          isUndefined: x.isUndefined
        })),
        categoricalAssociations: analysisResult.explorer.families.categoricalAssociations.map(x => ({
          variable: x.variable,
          validN: x.validN,
          excludedMissing: x.excludedMissing,
          cramersV: x.cramersV,
          chiSquare: x.chiSquare,
          sparseCellCount: x.sparseCellCount,
          isUndefined: x.isUndefined
        })),
        temporalSeries: analysisResult.explorer.families.temporalSeries.map(x => ({
          variable: x.variable,
          validN: x.validN,
          trendR: x.trendR,
          lag1Autocorr: x.lag1Autocorr
        }))
      },
      recommendations: analysisResult.recommendations
    }, null, 2);
  }

  return {
    SEMANTIC_TYPES,
    SEMANTIC_TYPE_LABELS,
    ECOSYSTEM_APPS,
    SAMPLE_DATASETS,
    parseDelimitedText,
    parseDatasetInput,
    parseNumericToken,
    parseTemporalToken,
    inferVariableProfile,
    computeAverageRanks,
    computePearsonCorrelation,
    computeSpearmanCorrelation,
    analyzePair,
    evaluateDatasetReadiness,
    buildTargetRelationshipExplorer,
    sortRelationshipFamily,
    generatePairExplanations,
    generateApplicationRecommendations,
    analyzeDataset,
    executeDataMendCleaning,
    createHandoffEnvelope,
    exportDatasetToCSV,
    exportRelationshipsToCSV,
    exportProfileReportJSON
  };
});
