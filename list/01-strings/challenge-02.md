# Challenge 02

Context: Strings

Status: finished

Exercise link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/javascript

## Solution

```typescript
export function abbrevName(name: string): string {
const names = name.toLocaleUpperCase().split(" ")  // Transforma em Maisculas e Corta nos espaços

let result: string[] = []

for(const name of names){
    result.push(name[0]) // Faz um array com cada inicial
}

return result.toString().replace(/\b,\b/g, ".") // Transforma o array em string e troca a virgula por ponto

}

```
