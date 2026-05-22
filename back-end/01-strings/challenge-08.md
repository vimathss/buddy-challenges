# Challenge 08

Context: Strings

Status: Finished

Exercise link: https://www.codewars.com/kata/57fae964d80daa229d000126/javascript

## Solution

```typescript
export function remove(s: string): string {
    const leng: number = s.length
    const lastChar = s[leng-1]
    
    if (lastChar == "!"){
        s = s.slice(0,leng-1)
    }
    return s
}

```
