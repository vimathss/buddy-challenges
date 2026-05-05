# Challenge 10

Context: Objects

Difficulty: Hard

Status: Not started

Methods to practice: `Object.assign`, `Object.hasOwn`, `Object.entries`, `Object.fromEntries`

## Prompt

Create a function called `normalizeUsers(users, defaultUser)` that receives:

- `users`: an array of user objects
- `defaultUser`: an object with default values

Return a new array of normalized user objects.

For each user:

1. Start with the properties from `defaultUser`.
2. Override them with the properties from the current user.
3. Remove properties whose values are `null`, `undefined`, or an empty string.
4. Add a boolean property called `isComplete`.

`isComplete` must be `true` only when the normalized user has all of these properties:

- `id`
- `name`
- `email`

## Example

```javascript
normalizeUsers(
  [
    { id: 1, name: "Ana", email: "ana@example.com", role: "" },
    { id: 2, name: "Bruno", email: null },
    { id: 3, email: "carla@example.com" }
  ],
  { role: "student", active: true, name: "Unknown" }
);
// [
//   {
//     id: 1,
//     name: "Ana",
//     email: "ana@example.com",
//     active: true,
//     isComplete: true
//   },
//   {
//     id: 2,
//     name: "Bruno",
//     role: "student",
//     active: true,
//     isComplete: false
//   },
//   {
//     id: 3,
//     name: "Unknown",
//     email: "carla@example.com",
//     role: "student",
//     active: true,
//     isComplete: true
//   }
// ]
```

## Requirements

- Use `Object.assign` to merge defaults.
- Use `Object.entries` and `Object.fromEntries` to remove empty values.
- Use `Object.hasOwn` to calculate `isComplete`.
- Do not mutate `users`, the user objects, or `defaultUser`.

## Solution

```javascript

```
