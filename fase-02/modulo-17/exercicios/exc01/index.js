/**
 * 

​1. Par ou ímpar?

- Declare uma variável que receba um array com 7 números

- Utilizando a função "forEach" nativa, percorra a lista e mostre no console se o número é par ou ímpar.
 Exemplo: "O número 4 é par"

 */

const numeros = [2, 3, 4, 5, 6, 7, 8]

function parOuImpar(num){
    if(num %2 === 0){
        return console.log(`O numero ${num} é par!`)
    }

    return console.log(`O numero ${num} é impar`)
}

numeros.forEach(parOuImpar)