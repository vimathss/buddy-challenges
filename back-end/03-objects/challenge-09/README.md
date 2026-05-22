# Challenge 09

Context: Objects

Difficulty: Medium

Status: Not started

Methods to practice: `Object.entries`, `Object.values`, `Object.fromEntries`

## Prompt

Create a function called `summarizeInventory(inventory)` that receives an object where each key is a product name and each value is an object with product information.

Each product has this shape:

```javascript
{
  category: "hardware",
  quantity: 4,
  price: 150
}
```

Return an object with:

- `totalProducts`: total number of product entries
- `totalItems`: sum of all quantities
- `totalValue`: sum of `quantity * price` for all products
- `categories`: an object where each key is a category and each value is the total quantity in that category

## Example

```javascript
summarizeInventory({
  keyboard: { category: "hardware", quantity: 4, price: 150 },
  mouse: { category: "hardware", quantity: 10, price: 80 },
  notebook: { category: "office", quantity: 3, price: 20 }
});
// {
//   totalProducts: 3,
//   totalItems: 17,
//   totalValue: 1460,
//   categories: {
//     hardware: 14,
//     office: 3
//   }
// }
```

## Requirements

- Use at least two object methods.
- Do not mutate the original inventory.
- Return `0` totals and an empty `categories` object when the inventory is empty.

## Solution

```javascript

```
