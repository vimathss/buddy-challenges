# Challenge 07

Context: Strings

Status: Finished

Exercise link: https://www.codewars.com/kata/577bd026df78c19bca0002c0/javascript

## Solution

```typescript
export function correct(s: string): string{
  let correct: string = ""
  for(let letter of s){
    letter = letter == "5" ? "S" : letter == "0" ? "O" : letter == "1" ? "I" : letter
    correct += letter
  }
  return correct
}
```
