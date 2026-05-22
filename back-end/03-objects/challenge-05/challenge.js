/**
 * Checks whether an object has all required own properties.
 *
 * @param {Record<string, unknown>} data - Object to validate.
 * @param {string[]} requiredFields - Property names that must exist in data.
 * @returns {boolean} True when every required field exists as an own property.
 */
function hasRequiredFields(data, requiredFields) {
  throw new Error("Not implemented");
}

module.exports = {
  hasRequiredFields,
};
