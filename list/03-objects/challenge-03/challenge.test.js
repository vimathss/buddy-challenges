const test = require("node:test");
const assert = require("node:assert/strict");

const { formatInventory } = require("./challenge");

test("formats each inventory entry", () => {
  assert.deepStrictEqual(formatInventory({ apples: 4, bananas: 2 }), [
    "apples: 4",
    "bananas: 2",
  ]);
});

test("formats a single item inventory", () => {
  assert.deepStrictEqual(formatInventory({ notebook: 3 }), ["notebook: 3"]);
});

test("does not mutate the original inventory", () => {
  const inventory = { apples: 4 };

  formatInventory(inventory);

  assert.deepStrictEqual(inventory, { apples: 4 });
});
