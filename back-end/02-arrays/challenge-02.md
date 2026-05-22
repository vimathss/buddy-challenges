# Challenge 02

Context: Arrays

Status: Finished

Exercise link: https://www.codewars.com/kata/54edbc7200b811e956000556/javascript

## Solution

```typescript
export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    let quantSheep = 0
    for(let sheep of arrayOfSheep){
        if(sheep) quantSheep++;
    }

    return quantSheep
}
```
