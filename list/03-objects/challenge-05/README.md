# Challenge 05

Context: Objects

Difficulty: Easy

Status: Not started

Methods to practice: `Object.hasOwn`

## Prompt

Create a function called `hasRequiredFields(data, requiredFields)` that receives:

- `data`: an object
- `requiredFields`: an array of property names

Return `true` if `data` has every required property. Otherwise, return `false`.

## Examples

```javascript
hasRequiredFields({ name: "Ana", email: "ana@example.com" }, ["name", "email"]);
// true

hasRequiredFields({ name: "Ana" }, ["name", "email"]);
// false
```

## Requirements

- Use `Object.hasOwn`.
- A property with value `undefined` still counts as present if the property exists.

## Solution

```javascript

```
