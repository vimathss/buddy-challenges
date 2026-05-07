# Challenge 05

Context: Strings

Status: finished

Exercise link: https://www.codewars.com/kata/5bb904724c47249b10000131/javascript

## Solution

```typescript
export function points(games : string[]): number {
    let pontos: number = 0

    for(const game of games){
        const x = game[0]
        const y = game[2]

        if (x>y) pontos+=3
        else if(x==y) pontos +=1 
    }
    return pontos
}

```
