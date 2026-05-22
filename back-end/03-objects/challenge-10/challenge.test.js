const test = require("node:test");
const assert = require("node:assert/strict");

const { normalizeUsers } = require("./challenge");

test("normalizes users with defaults, removes empty values, and marks completeness", () => {
  assert.deepStrictEqual(
    normalizeUsers(
      [
        { id: 1, name: "Ana", email: "ana@example.com", role: "" },
        { id: 2, name: "Bruno", email: null },
        { id: 3, email: "carla@example.com" },
      ],
      { role: "student", active: true, name: "Unknown" },
    ),
    [
      {
        id: 1,
        name: "Ana",
        email: "ana@example.com",
        active: true,
        isComplete: true,
      },
      {
        id: 2,
        name: "Bruno",
        role: "student",
        active: true,
        isComplete: false,
      },
      {
        id: 3,
        name: "Unknown",
        email: "carla@example.com",
        role: "student",
        active: true,
        isComplete: true,
      },
    ],
  );
});

test("returns an empty array when there are no users", () => {
  assert.deepStrictEqual(normalizeUsers([], { role: "student" }), []);
});

test("does not mutate users or default values", () => {
  const users = [{ id: 1, name: "Ana", email: "" }];
  const defaultUser = { role: "student", active: true };

  normalizeUsers(users, defaultUser);

  assert.deepStrictEqual(users, [{ id: 1, name: "Ana", email: "" }]);
  assert.deepStrictEqual(defaultUser, { role: "student", active: true });
});
