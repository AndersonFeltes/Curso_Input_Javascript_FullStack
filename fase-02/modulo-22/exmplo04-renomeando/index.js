import calc from './calc.js' //export defaul

import { soma, teste } from "./calc.js" //named export
import { soma as adicao } from "./soma.js"

const result = soma(1, 2)
console.log(result)

console.log(teste)

calc()

adicao()

const person = {
    name: 'Anderson',
    age: 27
}

const person2 = {
    name: 'Anderson',
    age: 27
}

const {name, age} = person
const {name: name1, age: age1} = person2
