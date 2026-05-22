/**
 * Creates a settings object by applying user settings over defaults.
 *
 * @param {Record<string, unknown>} defaultSettings - Base settings used as defaults.
 * @param {Record<string, unknown>} userSettings - Settings that should override defaults.
 * @returns {Record<string, unknown>} New settings object with defaults and overrides.
 */
function applyUserSettings(defaultSettings, userSettings) {
  throw new Error("Not implemented");
}

module.exports = {
  applyUserSettings,
};
