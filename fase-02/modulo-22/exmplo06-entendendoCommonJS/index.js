import * as calc from "./calc.js" //named export

// const calc = require('./calc.js') //importando o default
// const { soma: novoNome } = require ('./calc.js') //importando o named export

const result = calc.soma(1, 2)
console.log(result)

console.log(calc.teste)
console.log(calc.outra)