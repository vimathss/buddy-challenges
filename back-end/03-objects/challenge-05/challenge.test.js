const test = require("node:test");
const assert = require("node:assert/strict");

const { hasRequiredFields } = require("./challenge");

test("returns true when all required fields exist", () => {
  assert.equal(
    hasRequiredFields(
      { name: "Ana", email: "ana@example.com" },
      ["name", "email"],
    ),
    true,
  );
});

test("returns false when a required field is missing", () => {
  assert.equal(hasRequiredFields({ name: "Ana" }, ["name", "email"]), false);
});

test("counts undefined as present when the property exists", () => {
  assert.equal(hasRequiredFields({ email: undefined }, ["email"]), true);
});

test("does not count inherited properties as own fields", () => {
  const data = Object.create({ email: "ana@example.com" });
  data.name = "Ana";

  assert.equal(hasRequiredFields(data, ["name", "email"]), false);
});
