# Challenge 08

Context: Arrays

Status: Finished

Exercise link: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/javascript

## Solution

```javascript
function removeEveryOther(arr){
  let array = []
  
  for(let index in arr){
    if((index) % 2 == 0)
      array.push(arr[index])
  }
  return array
  
}
```
