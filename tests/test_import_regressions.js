const assert = require('node:assert/strict');
const engine = require('../compass/compass_engine.js');

const collision = engine.parseDelimitedText('a,a,a_2,,column_4\n1,2,3,4,5');
assert.equal(new Set(collision.headers).size, 5);
assert.deepEqual(collision.headers.map(h => collision.rows[0][h]), ['1','2','3','4','5']);
const special = engine.parseDelimitedText('__proto__,constructor,value\nkept,also kept,42');
assert.equal(special.rows[0].__proto__, 'kept');
assert.equal(special.rows[0].constructor, 'also kept');
for (const input of [
  '[null, 2]', '[[1,2],[3,4]]', '[{"a":{"nested":1}}]',
  '{"headers":["a","a"],"rows":[{"a":1}]}',
  '{"headers":[3],"rows":[{"a":1}]}',
  '{"headers":["a"],"rows":[{"a":1,"b":2}]}'
]) {
  const parsed = engine.parseDatasetInput(input);
  assert.ok(parsed.parseIssues.some(issue => issue.severity === 'error'), input);
}
const valid = engine.parseDatasetInput('[{"a":1,"b":null},{"a":2,"b":"001"}]');
assert.equal(valid.rows[1].b, '001');
assert.equal(valid.parseIssues.length, 0);
console.log('Import regressions: header collisions, special keys, invalid JSON shapes and leading zeros PASS');

const repeated = engine.parseDatasetInput('patient_id,visit,value\nPT-1,1,10\nPT-1,2,20\nPT-1,2,20');
const cleaned = engine.executeDataMendCleaning(repeated, { deduplicateRows: true });
assert.equal(cleaned.dataset.rows.length, 2, 'Distinct visits with the same identifier must survive');
assert.equal(cleaned.auditSummary.duplicatesRemoved, 1);
assert.throws(() => engine.executeDataMendCleaning(repeated, {renameVariableFrom:'value', renameVariableTo:'visit'}), /overwrite/);
console.log('Cleaning regressions: repeated identifiers preserved; destructive rename rejected PASS');
