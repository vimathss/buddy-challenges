# Challenge 09

Context: Strings

Status: Not started

Exercise link: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/javascript

## Solution

```typescript
export function solution(str: string, ending: string): boolean {
  if(ending == "") return true
  
  let leng = ending.length
  let x = str.slice(-leng)
  console.log(leng, x, ending)

  if(x == ending) return true
  else return false

}

```
