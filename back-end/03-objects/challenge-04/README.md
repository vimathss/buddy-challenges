# Challenge 04

Context: Objects

Difficulty: Easy

Status: Not started

Methods to practice: `Object.assign`

## Prompt

Create a function called `applyUserSettings(defaultSettings, userSettings)` that returns a new settings object.

The returned object must start with all properties from `defaultSettings`, but any property also present in `userSettings` must use the value from `userSettings`.

## Examples

```javascript
applyUserSettings(
  { theme: "light", notifications: true, language: "en" },
  { theme: "dark" }
);
// { theme: "dark", notifications: true, language: "en" }

applyUserSettings(
  { pageSize: 10, compactMode: false },
  { compactMode: true, pageSize: 20 }
);
// { pageSize: 20, compactMode: true }
```

## Requirements

- Use `Object.assign`.
- Return a new object.
- Do not mutate `defaultSettings` or `userSettings`.

## Solution

```javascript

```
