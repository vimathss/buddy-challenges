const test = require("node:test");
const assert = require("node:assert/strict");

const { removeEmptyValues } = require("./challenge");

test("removes null, undefined, and empty string values", () => {
  assert.deepStrictEqual(
    removeEmptyValues({
      name: "Ana",
      email: "",
      age: 22,
      phone: null,
      city: undefined,
    }),
    { name: "Ana", age: 22 },
  );
});

test("keeps false and zero values", () => {
  assert.deepStrictEqual(
    removeEmptyValues({ active: false, score: 0, notes: "" }),
    { active: false, score: 0 },
  );
});

test("does not mutate the original object", () => {
  const data = { name: "Ana", email: "" };

  removeEmptyValues(data);

  assert.deepStrictEqual(data, { name: "Ana", email: "" });
});
