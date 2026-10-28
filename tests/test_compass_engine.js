/**
 * Automated Verification & Acceptance Test Suite for DataSense Compass Engine
 * Covers Statistical Profiling, RFC-4180 Parsing, Readiness Gating, Ranking,
 * DataMend Round-Trip & Lineage Restoration, and Reproducible Exports.
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const engineCandidatePaths = [
  path.resolve(__dirname, '../compass/compass_engine.js'),
  path.resolve(__dirname, './compass_engine.js'),
  path.resolve(process.cwd(), 'compass/compass_engine.js')
];
const resolvedEnginePath = engineCandidatePaths.find(p => fs.existsSync(p));
if (!resolvedEnginePath) {
  throw new Error('Could not locate compass_engine.js from ' + __dirname);
}
const Engine = require(resolvedEnginePath);

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed++;
    console.log(`  [PASS] ${name}`);
  } catch (err) {
    failed++;
    console.error(`  [FAIL] ${name}\n         ${err.message}`);
  }
}

console.log('===================================================================');
console.log('DataSense Compass — Automated Statistical & Scenario Test Suite');
console.log('===================================================================');

// Scenario 1: Sample Dataset Exploration
test('Scenario 1: All 6 built-in sample datasets load, profile, and route deterministically', () => {
  const keys = Object.keys(Engine.SAMPLE_DATASETS);
  assert.strictEqual(keys.length, 6, 'Expected 6 sample datasets');
  keys.forEach(k => {
    const sample = Engine.SAMPLE_DATASETS[k];
    const res = Engine.analyzeDataset(sample.csvText, {
      id: sample.id,
      name: sample.name,
      primaryVar: sample.defaultPrimaryVar
    });
    assert.ok(res.dataset.totalRows >= 20, `Dataset ${k} should have >= 20 rows`);
    assert.ok(res.profiles.length >= 4, `Dataset ${k} should have >= 4 columns`);
    assert.strictEqual(res.primaryVar, sample.defaultPrimaryVar);
    assert.ok(res.recommendations.length >= 2, `Dataset ${k} should produce recommendations`);
  });
});

// Scenario 2 & 14: CSV Upload with Quoted Fields, Embedded Commas, Newlines, BOM, Leading Zeros
test('Scenario 2 & 14: RFC-4180 CSV parser handles BOM, quoted commas, newlines, escaped quotes, and leading-zero IDs', () => {
  const trickyCSV = '\uFEFFid_code,notes,score,group\n' +
    '00142,"Quoted, with, commas",88.5,Alpha\n' +
    '00143,"Multi-line\ncomment with ""escaped"" quotes",92.0,Beta\n' +
    '00144,Plain text,79.5,Alpha\n' +
    '00145,Another note,85.0,Beta';
  const res = Engine.analyzeDataset(trickyCSV, { primaryVar: 'score' });
  assert.strictEqual(res.dataset.totalRows, 4);
  const idProf = res.profiles.find(p => p.name === 'id_code');
  assert.strictEqual(idProf.effectiveType, Engine.SEMANTIC_TYPES.IDENTIFIER, 'Leading-zero column must be preserved as Identifier');
  assert.strictEqual(res.dataset.rows[0].id_code, '00142', 'Leading zero must not be coerced to 142');
  assert.ok(res.dataset.rows[1].notes.includes('"escaped"'), 'Escaped quotes must be preserved');
});

// Scenario 3: Numerical Primary Variable (Housing)
test('Scenario 3: Numerical primary variable (sale_price_usd) ranks numerical & categorical predictors separately', () => {
  const sample = Engine.SAMPLE_DATASETS.housing;
  const res = Engine.analyzeDataset(sample.csvText, { primaryVar: 'sale_price_usd' });
  const numAssoc = res.explorer.families.numericAssociations;
  const groupDiff = res.explorer.families.groupDifferences;
  assert.ok(numAssoc.length >= 3, 'Should have numerical associations');
  assert.ok(groupDiff.length >= 2, 'Should have categorical group differences');
  const sqft = numAssoc.find(a => a.variable === 'sqft_living');
  assert.ok(sqft && sqft.pearsonR > 0.85, `Expected strong positive correlation with sqft_living, got ${sqft ? sqft.pearsonR : 'null'}`);
  const parcelInNum = numAssoc.find(a => a.variable === 'parcel_id');
  assert.strictEqual(parcelInNum, undefined, 'Leading-zero parcel_id must be excluded from numerical correlations');
  assert.strictEqual(res.readiness.status, 'READY');
  assert.strictEqual(res.readiness.statusLabel, 'Ready to explore');
});

// Scenario 4: Categorical Primary Variable (Customer Churn)
test('Scenario 4: Categorical primary variable (churn_status) computes group differences (eta^2, point-biserial) and Cramer\'s V', () => {
  const sample = Engine.SAMPLE_DATASETS.customer_behavior;
  const res = Engine.analyzeDataset(sample.csvText, { primaryVar: 'churn_status' });
  const groupDiff = res.explorer.families.groupDifferences;
  const catAssoc = res.explorer.families.categoricalAssociations;
  assert.ok(groupDiff.length >= 3, 'Should rank numeric predictors by eta^2 against binary churn_status');
  assert.ok(catAssoc.length >= 3, 'Should rank categorical predictors by Cramer\'s V');
  const tickets = groupDiff.find(g => g.variable === 'support_tickets_qtr');
  assert.ok(tickets && tickets.etaSquared > 0.5 && tickets.pointBiserial !== null, 'Expected strong eta^2 and point-biserial for support_tickets_qtr');
});

// Scenario 5: Temporal Primary Variable & Irregular Cadence
test('Scenario 5: Temporal variable detects 2-day telemetry gap and supports temporal series analysis', () => {
  const sample = Engine.SAMPLE_DATASETS.time_activity;
  const res = Engine.analyzeDataset(sample.csvText, { primaryVar: 'observation_date', temporalOutcomeVar: 'grid_demand_mw' });
  const tempProf = res.profiles.find(p => p.name === 'observation_date');
  assert.strictEqual(tempProf.roleFamily, 'temporal');
  assert.ok(tempProf.temporalSummary.gapCount >= 1, 'Should detect the Jan 14 -> Jan 17 timestamp gap');
  assert.ok(res.explorer.families.temporalSeries.length >= 3, 'Should analyze numeric series over time');
});

// Scenario 6: Constant Column Handling (Never return r = 0 for undefined correlation)
test('Scenario 6: Constant column (constant_tax_tier / zero-variance numeric) yields Undefined correlation, never 0', () => {
  const csvWithConstNum = 'y,x_const,x_var\n10,5,1\n20,5,2\n30,5,3\n40,5,4\n50,5,5';
  const res = Engine.analyzeDataset(csvWithConstNum, { primaryVar: 'y' });
  const constPair = res.explorer.families.numericAssociations.find(a => a.variable === 'x_const');
  assert.ok(constPair, 'x_const should appear in numeric associations list with explanation');
  assert.strictEqual(constPair.isUndefined, true, 'Correlation with constant column must be flagged isUndefined = true');
  assert.strictEqual(constPair.pearsonR, null, 'Pearson r must be null (Undefined), never 0');
  assert.strictEqual(constPair.spearmanRho, null, 'Spearman rho must be null (Undefined), never 0');
});

// Scenario 7: Non-Linear Relationship Detection & QuartetLab Routing
test('Scenario 7: Quadratic inverted-U dataset detects low Pearson r but high binned curvature and recommends QuartetLab', () => {
  const sample = Engine.SAMPLE_DATASETS.nonlinear_patterns;
  const res = Engine.analyzeDataset(sample.csvText, { primaryVar: 'cognitive_throughput' });
  const arousal = res.explorer.families.numericAssociations.find(a => a.variable === 'stimulus_arousal');
  assert.ok(arousal, 'stimulus_arousal should be analyzed');
  assert.ok(Math.abs(arousal.pearsonR) < 0.05, `Expected near-zero Pearson r, got ${arousal.pearsonR}`);
  assert.strictEqual(arousal.hasNonlinearSignal, true, 'Must detect strong non-linear curvature');
  assert.ok(arousal.binnedEtaSq > 0.70, `Expected high binned eta^2, got ${arousal.binnedEtaSq}`);
  const hasQuartetRec = res.recommendations.some(r => r.app.id === 'quartetlab');
  assert.ok(hasQuartetRec, 'Must recommend QuartetLab when non-linear curvature is detected');
});

// Scenario 8: Tied Ranks in Spearman's Rho
test('Scenario 8: Spearman rank correlation uses tie-corrected average ranks accurately', () => {
  const x = [1, 2, 2, 2, 5, 6];
  const y = [10, 20, 20, 30, 50, 60];
  const ranksX = Engine.computeAverageRanks(x);
  assert.deepStrictEqual(ranksX.ranks, [1, 3, 3, 3, 5, 6], 'Tied values at indices 1,2,3 must receive average rank 3');
  const sp = Engine.computeSpearmanCorrelation(x, y);
  assert.strictEqual(sp.isUndefined, false);
  assert.strictEqual(sp.tiesX, true);
  assert.ok(sp.rho > 0.90 && sp.rho < 1.0, `Expected tie-corrected rho ~ 0.955, got ${sp.rho}`);
});

// Scenario 9: Dirty Dataset Quality Gating
test('Scenario 9: Messy clinical import triggers CLEANING_REQUIRED ("Fix this issue before continuing") and prioritizes DataMend Lab first', () => {
  const sample = Engine.SAMPLE_DATASETS.messy_import;
  const res = Engine.analyzeDataset(sample.csvText, { primaryVar: 'systolic_bp' });
  assert.strictEqual(res.readiness.status, 'CLEANING_REQUIRED');
  assert.strictEqual(res.readiness.statusLabel, 'Fix this issue before continuing');
  assert.strictEqual(res.readiness.needsDataMend, true);
  assert.strictEqual(res.recommendations[0].app.id, 'datamend', 'First recommendation must be DataMend Lab when CLEANING_REQUIRED');
});

// Scenario 10: Legitimate Extreme Values (Ready with Cautions, no auto-deletion)
test('Scenario 10: Student outcomes dataset with legitimate fellowship prodigies triggers READY_WITH_CAUTIONS ("Review these cautions") and preserves all rows', () => {
  const sample = Engine.SAMPLE_DATASETS.student_outcomes;
  const res = Engine.analyzeDataset(sample.csvText, { primaryVar: 'final_exam_score' });
  assert.strictEqual(res.dataset.totalRows, 28, 'All 28 student records must be preserved without auto-deletion');
  assert.strictEqual(res.readiness.status, 'READY_WITH_CAUTIONS');
  assert.strictEqual(res.readiness.statusLabel, 'Review these cautions');
  const studyHoursProf = res.profiles.find(p => p.name === 'weekly_study_hours');
  assert.ok(studyHoursProf.numericSummary.outlierCount >= 2, 'Should flag the 2 fellowship outliers via 1.5xIQR');
});

// Scenario 11 & 12: DataMend Round-Trip Cleaning & Renamed Primary Variable Restoration
test('Scenario 11 & 12: DataMend cleaning repairs sentinels, units, dates, duplicates, and restores renamed primary variable', () => {
  const sample = Engine.SAMPLE_DATASETS.messy_import;
  const initial = Engine.analyzeDataset(sample.csvText, { primaryVar: 'systolic_bp' });
  assert.strictEqual(initial.readiness.status, 'CLEANING_REQUIRED');

  const cleanedOut = Engine.executeDataMendCleaning(initial.dataset, {
    recodeSentinels: true,
    stripNumericUnits: true,
    normalizeCategoryStrings: true,
    repairInvalidDates: true,
    deduplicateRows: true,
    renameVariableFrom: 'systolic_bp',
    renameVariableTo: 'systolic_bp_mmhg'
  });

  assert.ok(cleanedOut.auditSummary.sentinelsRecoded >= 3, 'Should recode -999 sentinels');
  assert.ok(cleanedOut.auditSummary.unitsStripped >= 2, 'Should strip unit strings like "138 mmHg"');
  assert.ok(cleanedOut.auditSummary.duplicatesRemoved >= 1, 'Should remove duplicate PT-405 record');
  assert.strictEqual(cleanedOut.dataset.lineage.renamedVariables['systolic_bp'], 'systolic_bp_mmhg');

  const afterRoundTrip = Engine.analyzeDataset(cleanedOut.dataset, { primaryVar: 'systolic_bp' });
  assert.strictEqual(afterRoundTrip.primaryVar, 'systolic_bp_mmhg', 'Compass must map renamed primary variable via lineage');
  assert.notStrictEqual(afterRoundTrip.readiness.status, 'CLEANING_REQUIRED', 'Cleaned dataset must pass blocking hygiene gate');
});

// Scenario 15, 16, 17, 18, 19: Edge Cases (Empty file, Header-only, Single-column, Malformed CSV, Override Type)
test('Scenario 15–19: Edge cases (empty file, header-only, single-column, malformed quote, type override) handled gracefully', () => {
  const emptyRes = Engine.analyzeDataset('');
  assert.strictEqual(emptyRes.readiness.status, 'CLEANING_REQUIRED');

  const headerOnly = Engine.analyzeDataset('col_a,col_b,col_c');
  assert.strictEqual(headerOnly.dataset.totalRows, 0);
  assert.strictEqual(headerOnly.readiness.status, 'CLEANING_REQUIRED');

  const singleCol = Engine.analyzeDataset('metric\n10\n20\n30\n40\n50');
  assert.strictEqual(singleCol.dataset.totalColumns, 1);
  assert.strictEqual(singleCol.explorer.allPairs.length, 0);

  const malformed = Engine.analyzeDataset('a,b\n1,"unclosed quote\n2,3');
  assert.ok(malformed.dataset.parseIssues.some(i => i.code === 'UNTERMINATED_QUOTE'));

  const overrideRes = Engine.analyzeDataset(Engine.SAMPLE_DATASETS.housing.csvText, {
    primaryVar: 'sale_price_usd',
    typeOverrides: { bedrooms: Engine.SEMANTIC_TYPES.ORDINAL_CATEGORICAL }
  });
  const bedProf = overrideRes.profiles.find(p => p.name === 'bedrooms');
  assert.strictEqual(bedProf.effectiveType, Engine.SEMANTIC_TYPES.ORDINAL_CATEGORICAL);
  assert.strictEqual(bedProf.isOverridden, true);
  assert.ok(overrideRes.explorer.families.groupDifferences.some(g => g.variable === 'bedrooms'), 'Overridden bedrooms should move to groupDifferences');
});

// Scenario 20–22: Exports & Handoff Envelope Integrity
test('Scenario 20–22: Profile JSON, Relationships CSV, Dataset CSV, and DataSense Handoff Envelope exports validate cleanly', () => {
  const sample = Engine.SAMPLE_DATASETS.housing;
  const res = Engine.analyzeDataset(sample.csvText, { primaryVar: 'sale_price_usd' });
  const profileJson = JSON.parse(Engine.exportProfileReportJSON(res));
  assert.strictEqual(profileJson.schema, 'datasense_compass_profile_report_v1');
  assert.strictEqual(profileJson.dataset.primaryVariable, 'sale_price_usd');

  const relCsv = Engine.exportRelationshipsToCSV(res);
  assert.ok(relCsv.includes('primary_variable,comparison_variable,comparison_type,statistical_family'), 'Relationships CSV header missing');
  assert.ok(relCsv.includes('sqft_living'), 'Relationships CSV should contain sqft_living');

  const envelope = Engine.createHandoffEnvelope(res, 'datamend');
  assert.strictEqual(envelope.protocol, 'datasense_compass_handoff_v1');
  assert.ok(envelope.handoffId.startsWith('ds_handoff_'));
  assert.ok(envelope.integrityDigest.startsWith('fnv1a_'));
});

console.log('-------------------------------------------------------------------');
console.log(`Completed: ${passed} passed, ${failed} failed.`);
if (failed > 0) process.exit(1);
