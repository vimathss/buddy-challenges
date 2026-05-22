# Challenge 10

Context: Arrays

Status: Finished

Exercise link: https://www.codewars.com/kata/559590633066759614000063/javascript

## Solution

```javascript
function minMax(arr){
 
  let menorNumero = arr[0]
  let maiorNumero = arr[0]
  
  for(let num of arr){
    if(num < menorNumero) menorNumero = num;
    else if(num > maiorNumero) maiorNumero = num;
  }
  
  const result = [menorNumero, maiorNumero]
  
  return result
}
```
