/**
 * 

2. Listas derivadas

- Baseado no código do exercício anterior, crie duas outras listas, uma com números pares, 
outra com números ímpares, utilizando "filter"

- Mostre no console a quantidade de números pares e a quantidade de ímpares

 */

const numeros = [2, 3, 4, 5, 6, 7, 8]
let pares = []
let impares = []

numeros.forEach((num) => {
    if( num %2 === 0){
     pares.push(num) 
     return pares
    }

    impares.push(num)
    return impares
})

console.log(pares)
console.log(`Foram registrados ${pares.length} numeros pares`)
console.log("---------------")
console.log(impares)
console.log(`Foram registrados ${impares.length} numeros impares`)

/**
 * 

3. Alterando valores

- Utilize o método map para criar uma nova lista

- Os valores pares devem ser multiplicados por 2

- Os valores ímpares devem ser multiplicados por 3

 */

console.log("----------------")

let multiPares = pares.map(num => {
    return num * 2
})

console.log(multiPares)

let multiImpares = impares.map(num => {
    return num * 3
})

console.log(multiImpares)