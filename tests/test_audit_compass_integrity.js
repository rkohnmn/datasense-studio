/** Batch 16: regression tests for the authoritative Compass engine (Node 20+). */
const assert = require('node:assert/strict');
const E = require('../compass/compass_engine.js');

function test(label, fn) {
  fn();
  console.log(`PASS ${label}`);
}

// Validate that every paired observation, not a 60-element UI sample, is used.
test('point-biserial uses all observations beyond the UI preview cap', () => {
  const records = [];
  for (let i = 0; i < 100; i++) {
    records.push({ group: 'A', y: i < 60 ? 0 : 1000 + i });
    records.push({ group: 'B', y: i < 60 ? 100 + i : -1000 - i });
  }
  const csv = ['y,group', ...records.map(r => `${r.y},${r.group}`)].join('\n');
  const result = E.analyzeDataset(csv, { primaryVar: 'y' });
  const pair = result.explorer.families.groupDifferences.find(p => p.variable === 'group');
  assert.ok(pair, 'Expected numeric-categorical analysis for group');
  assert.equal(pair.validN, records.length);
  const expected = E.computePearsonCorrelation(
    records.map(r => r.group === 'A' ? 1 : 0),
    records.map(r => r.y),
  ).r;
  assert.ok(Number.isFinite(pair.pointBiserial));
  assert.ok(Math.abs(Math.abs(pair.pointBiserial) - Math.abs(expected)) < 1e-10,
    `point-biserial=${pair.pointBiserial}; full-sample expected magnitude=${expected}`);
});

test('invalid ISO datetime and slash calendar dates do not roll into another month', () => {
  for (const bad of ['2026-02-31T12:45:00', '2026-04-31 03:00:00Z',
    '02/31/2026', '31/04/2026', '2026-01-01T25:00:00',
    '2026-01-01T12:00:00garbage', '2026-01-01T12:00+15:00']) {
    const result = E.parseTemporalToken(bad);
    assert.equal(result.isTemporal, false, `${bad} must be rejected`);
    assert.equal(result.isInvalidDate, true, `${bad} must be reported as invalid`);
  }
});

test('explicit UTC offsets are converted to true UTC instants', () => {
  const cases = [
    ['2026-01-02T12:30:00+05:30', '2026-01-02T07:00:00.000Z'],
    ['2026-01-02T12:30:00-04:00', '2026-01-02T16:30:00.000Z'],
    ['2026-01-02T12:30:00Z', '2026-01-02T12:30:00.000Z'],
    ['2026-01-02 12:30', '2026-01-02T12:30:00.000Z'],
  ];
  for (const [input, expected] of cases) {
    const result = E.parseTemporalToken(input);
    assert.equal(result.isTemporal, true, input);
    assert.equal(new Date(result.epochMs).toISOString(), expected, input);
  }
});

test('calendar years under 100 remain in their actual centuries', () => {
  const a = E.parseTemporalToken('0099-01-01');
  assert.equal(a.isTemporal, true);
  assert.equal(new Date(a.epochMs).getUTCFullYear(), 99);
  const b = E.parseTemporalToken('0099-01-01T08:30:00Z');
  assert.equal(b.isTemporal, true);
  assert.equal(new Date(b.epochMs).getUTCFullYear(), 99);
});

test('CSV export neutralizes formulas, including leading whitespace', () => {
  const csv = E.exportDatasetToCSV({
    headers: ['id', '=HYPERLINK("https://example.invalid")', 'details'],
    rows: [
      { id: '1', '=HYPERLINK("https://example.invalid")': '=1+1', details: '   @SUM(1,2)' },
      { id: '2', '=HYPERLINK("https://example.invalid")': '-42.5', details: '-CMD' },
      { id: '3', '=HYPERLINK("https://example.invalid")': 'Normal, text', details: 'line\nbreak' },
    ],
  });
  assert.ok(csv.includes("'=HYPERLINK"));
  assert.ok(csv.includes("'=1+1"));
  assert.ok(csv.includes("'   @SUM(1,2)"));
  assert.ok(csv.includes("'-CMD"));
  assert.ok(csv.includes('-42.5'), 'Plain negative numbers remain numeric');
  const parsed = E.parseDelimitedText(csv);
  assert.equal(parsed.rows.length, 3);
  assert.ok(!parsed.parseIssues.some(i => i.severity === 'error'));
});

test('relationship CSV safely quotes adversarial names and descriptions', () => {
  const fake = {
    primaryVar: '=HYPERLINK("https://example.invalid", "x")',
    explorer: { families: {
      numericAssociations: [{ variable: 'x,y', typeLabel: '+BAD', isUndefined: false,
        pearsonR: 0.1, spearmanRho: 0.2, validN: 3, excludedMissing: 0,
        strengthLabel: 'He said "hello", then left' }],
      groupDifferences: [], categoricalAssociations: [], temporalSeries: [],
    } },
  };
  const csv = E.exportRelationshipsToCSV(fake);
  const parsed = E.parseDelimitedText(csv);
  assert.ok(!parsed.parseIssues.some(i => i.severity === 'error'), JSON.stringify(parsed.parseIssues));
  assert.equal(parsed.rows.length, 1);
  assert.equal(parsed.rows[0].comparison_variable, 'x,y');
  assert.ok(parsed.rows[0].primary_variable.startsWith("'="));
  assert.ok(parsed.rows[0].comparison_type.startsWith("'+"));
  assert.equal(parsed.rows[0].direction_or_notes, 'He said "hello", then left');
});

test('CSV reader reports quotes placed inside bare values', () => {
  const csv = E.parseDelimitedText('id,name\n1,AB"CD');
  assert.ok(csv.parseIssues.some(i => i.code === 'MALFORMED_CSV_QUOTES' && i.severity === 'error'));
});

test('CSV reader reports text appended to a closed quoted value', () => {
  const csv = E.parseDelimitedText('id,name\n1,"Alice"junk');
  assert.ok(csv.parseIssues.some(i => i.code === 'MALFORMED_CSV_QUOTES' && i.severity === 'error'));
});

test('valid quoted commas, newlines and double quotes still round-trip', () => {
  const csv = E.parseDelimitedText('id,note\r\n1,"First, second\nline"\r\n2,"He said ""Hi"""');
  assert.equal(csv.rows.length, 2);
  assert.equal(csv.rows[0].note, 'First, second\nline');
  assert.equal(csv.rows[1].note, 'He said "Hi"');
  assert.ok(!csv.parseIssues.some(i => i.severity === 'error'));
});

test('cleaning cannot erase unresolved structural import errors', () => {
  const imported = E.parseDatasetInput('y,group\n1,A\n2,B,EXTRA');
  assert.ok(imported.parseIssues.some(i => i.severity === 'error'));
  const output = E.executeDataMendCleaning(imported, { deduplicateRows: false });
  assert.ok(output.dataset.parseIssues.some(i => i.code === 'INCONSISTENT_ROW_WIDTHS'));
  const result = E.analyzeDataset(output.dataset, { primaryVar: 'y' });
  assert.equal(result.readiness.status, 'CLEANING_REQUIRED');
});

console.log('All Batch 16 Compass integrity regression checks passed.');
