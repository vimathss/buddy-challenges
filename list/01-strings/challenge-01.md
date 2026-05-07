# Challenge 01

Context: Strings

Status: finished

Exercise link: https://www.codewars.com/kata/57eae20f5500ad98e50002c5/javascript

## Solution

```typescript
export function noSpace(x:string):string {
  const noSpaceString = x.replace(/\s/g, '');
  return noSpaceString
}
```
