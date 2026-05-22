/**
 * @typedef {Object} User
 * @property {number|string} [id] - User identifier.
 * @property {string} [name] - User name.
 * @property {string} [email] - User email.
 * @property {string} [role] - User role.
 * @property {boolean} [active] - Whether the user is active.
 */

/**
 * @typedef {User & { isComplete: boolean }} NormalizedUser
 */

/**
 * Applies default values, removes empty values, and marks users as complete or incomplete.
 *
 * @param {User[]} users - Users to normalize.
 * @param {User} defaultUser - Default values applied to each user before cleanup.
 * @returns {NormalizedUser[]} New array with normalized user objects.
 */
function normalizeUsers(users, defaultUser) {
  throw new Error("Not implemented");
}

module.exports = {
  normalizeUsers,
};
