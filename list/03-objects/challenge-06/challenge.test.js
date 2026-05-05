const test = require("node:test");
const assert = require("node:assert/strict");

const { createPriceMap } = require("./challenge");

test("creates a price map by product name", () => {
  assert.deepStrictEqual(
    createPriceMap([
      { name: "Keyboard", price: 120 },
      { name: "Mouse", price: 80 },
    ]),
    { Keyboard: 120, Mouse: 80 },
  );
});

test("returns an empty object for an empty product list", () => {
  assert.deepStrictEqual(createPriceMap([]), {});
});

test("does not mutate the original products", () => {
  const products = [{ name: "Monitor", price: 900 }];

  createPriceMap(products);

  assert.deepStrictEqual(products, [{ name: "Monitor", price: 900 }]);
});
