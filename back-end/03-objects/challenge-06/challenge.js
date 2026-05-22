/**
 * @typedef {Object} Product
 * @property {string} name - Product name.
 * @property {number} price - Product price.
 */

/**
 * Creates an object where product names point to product prices.
 *
 * @param {Product[]} products - List of products to convert.
 * @returns {Record<string, number>} Object where keys are product names and values are prices.
 */
function createPriceMap(products) {
  throw new Error("Not implemented");
}

module.exports = {
  createPriceMap,
};
