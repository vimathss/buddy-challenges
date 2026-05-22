# Challenge 08

Context: Objects

Difficulty: Easy

Status: Not started

Methods to practice: `Object.entries`, `Object.fromEntries`

## Prompt

Create a function called `removeEmptyValues(data)` that receives an object and returns a new object without properties whose values are:

- `null`
- `undefined`
- an empty string

## Examples

```javascript
removeEmptyValues({
  name: "Ana",
  email: "",
  age: 22,
  phone: null,
  city: undefined
});
// { name: "Ana", age: 22 }
```

## Requirements

- Use `Object.entries`.
- Use `Object.fromEntries`.
- Do not mutate the original object.
- Keep values like `0` and `false`.

## Solution

```javascript

```
