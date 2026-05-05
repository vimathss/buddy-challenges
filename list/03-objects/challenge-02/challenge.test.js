const test = require("node:test");
const assert = require("node:assert/strict");

const { sumScores } = require("./challenge");

test("sums all score values", () => {
  assert.equal(sumScores({ html: 8, css: 7, javascript: 9 }), 24);
});

test("returns 0 when there are no scores", () => {
  assert.equal(sumScores({}), 0);
});

test("handles negative and zero values", () => {
  assert.equal(sumScores({ challenge1: 10, challenge2: 0, penalty: -2 }), 8);
});
