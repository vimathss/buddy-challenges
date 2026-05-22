const test = require("node:test");
const assert = require("node:assert/strict");

const { applyUserSettings } = require("./challenge");

test("overrides default settings with user settings", () => {
  assert.deepStrictEqual(
    applyUserSettings(
      { theme: "light", notifications: true, language: "en" },
      { theme: "dark" },
    ),
    { theme: "dark", notifications: true, language: "en" },
  );
});

test("keeps user values when multiple settings are provided", () => {
  assert.deepStrictEqual(
    applyUserSettings(
      { pageSize: 10, compactMode: false },
      { compactMode: true, pageSize: 20 },
    ),
    { pageSize: 20, compactMode: true },
  );
});

test("returns a new object without mutating inputs", () => {
  const defaultSettings = { theme: "light" };
  const userSettings = { theme: "dark" };
  const result = applyUserSettings(defaultSettings, userSettings);

  assert.notEqual(result, defaultSettings);
  assert.notEqual(result, userSettings);
  assert.deepStrictEqual(defaultSettings, { theme: "light" });
  assert.deepStrictEqual(userSettings, { theme: "dark" });
});
