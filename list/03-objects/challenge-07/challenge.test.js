const test = require("node:test");
const assert = require("node:assert/strict");

const { countValueTypes } = require("./challenge");

test("counts values by typeof result", () => {
  assert.deepStrictEqual(
    countValueTypes({
      name: "Ana",
      age: 22,
      active: true,
      city: "Recife",
    }),
    { string: 2, number: 1, boolean: 1 },
  );
});

test("returns an empty object when there are no values", () => {
  assert.deepStrictEqual(countValueTypes({}), {});
});

test("counts object and undefined values", () => {
  assert.deepStrictEqual(
    countValueTypes({ profile: null, preferences: {}, nickname: undefined }),
    { object: 2, undefined: 1 },
  );
});
