const test = require("node:test");
const assert = require("node:assert/strict");

const { getProfileFields } = require("./challenge");

test("returns all profile field names", () => {
  assert.deepStrictEqual(
    getProfileFields({ name: "Ana", age: 22, city: "Recife" }),
    ["name", "age", "city"],
  );
});

test("returns an empty array for an empty object", () => {
  assert.deepStrictEqual(getProfileFields({}), []);
});

test("does not mutate the original object", () => {
  const profile = { username: "dev_jr", active: true };

  getProfileFields(profile);

  assert.deepStrictEqual(profile, { username: "dev_jr", active: true });
});
