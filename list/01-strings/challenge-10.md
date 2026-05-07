# Challenge 10

Context: Strings

Status: Finished

Exercise link: https://www.codewars.com/kata/585b1fafe08bae9988000314/javascript

## Solution

```typescript
export function explode(s: string): string {
  let mensagem: string = ""

  for (let num of s) {
    let x = Number(num)
    
    for (let i = 0; i < x; i++) {
      mensagem += num
    }

  }
  return mensagem
}

```
