# Challenge 04

Context: Strings

Status: finished

Exercise link: https://www.codewars.com/kata/51c8991dee245d7ddf00000e/javascript

## Solution

```typescript
export function reverseWords(str: string): string {
 const array: string[] = str.split(" ").reverse()

    let stringReversed: string = ""
    
    for (const i of array) {
        stringReversed += i + " "
    }

    stringReversed = stringReversed.trim()
    return stringReversed
}

```
