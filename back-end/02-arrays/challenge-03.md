# Challenge 03

Context: Arrays

Status: Finished

Exercise link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/javascript

## Solution

```typescript
export const digitize = (n: number): number[] => {
       let numString = n.toString()
    let numArray: number[] = []

    for(let num of numString){
        console.log(num)
        numArray.unshift(Number(num))
    }

    return numArray
};
```
