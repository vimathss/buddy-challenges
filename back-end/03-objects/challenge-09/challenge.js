/**
 * @typedef {Object} InventoryItem
 * @property {string} category - Product category.
 * @property {number} quantity - Available quantity.
 * @property {number} price - Unit price.
 */

/**
 * @typedef {Object} InventorySummary
 * @property {number} totalProducts - Number of product entries.
 * @property {number} totalItems - Sum of all product quantities.
 * @property {number} totalValue - Sum of quantity multiplied by price for all products.
 * @property {Record<string, number>} categories - Total quantity grouped by category.
 */

/**
 * Summarizes product quantities, values, and category totals.
 *
 * @param {Record<string, InventoryItem>} inventory - Object where keys are product names.
 * @returns {InventorySummary} Inventory totals and category summary.
 */
function summarizeInventory(inventory) {
  throw new Error("Not implemented");
}

module.exports = {
  summarizeInventory,
};
