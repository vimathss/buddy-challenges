# Challenge 09

Context: Arrays

Status: Finished

Exercise link: https://www.codewars.com/kata/563cf89eb4747c5fb100001b/javascript

## Solution

```javascript
function removeSmallest(numbers) {
  let result = numbers
  let menorNumero = numbers[0]
  
  for(let num of numbers){
    if(num < menorNumero) menorNumero = num;
  }
  
  const remove = result.indexOf(menorNumero)
  
  let x = numbers.filter((num, indice) =>{
    if(num == menorNumero && indice == remove){
      return false
    }
    return true
  })

  return x
}
```
