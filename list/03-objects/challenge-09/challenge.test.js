const test = require("node:test");
const assert = require("node:assert/strict");

const { summarizeInventory } = require("./challenge");

test("summarizes product inventory", () => {
  assert.deepStrictEqual(
    summarizeInventory({
      keyboard: { category: "hardware", quantity: 4, price: 150 },
      mouse: { category: "hardware", quantity: 10, price: 80 },
      notebook: { category: "office", quantity: 3, price: 20 },
    }),
    {
      totalProducts: 3,
      totalItems: 17,
      totalValue: 1460,
      categories: {
        hardware: 14,
        office: 3,
      },
    },
  );
});

test("returns zero totals for an empty inventory", () => {
  assert.deepStrictEqual(summarizeInventory({}), {
    totalProducts: 0,
    totalItems: 0,
    totalValue: 0,
    categories: {},
  });
});

test("does not mutate the original inventory", () => {
  const inventory = {
    keyboard: { category: "hardware", quantity: 4, price: 150 },
  };

  summarizeInventory(inventory);

  assert.deepStrictEqual(inventory, {
    keyboard: { category: "hardware", quantity: 4, price: 150 },
  });
});
