# Challenge 01

Context: Arrays

Status: Finished

Exercise link: https://www.codewars.com/kata/515e271a311df0350d00000f/javascript

## Solution

```typescript
export function squareSum(numbers: number[]): number {
       const numsQuad: number[] = numbers.map((num)=>{
        return Math.pow(num, 2)
    })
    
    let soma: number = 0
    numsQuad.map(num => {
        soma += num
    })

    return soma
}
```
