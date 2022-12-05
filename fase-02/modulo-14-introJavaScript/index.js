const age = 26
const nome = "AndersonFeltes"
const firstName = "Anderson"
const lastName = "Feltes"
// const fullName = "Eu " + firstName + " " + lastName + " tenho " + age + " anos."

//template string
const fullName = `Eu, ${firstName} ${lastName} tenho ${age} anos.`

console.log(age + 4)
console.log(26 + 4)
console.log(nome)
console.log(fullName)
console.log("")

//estrutura de dados
//lista-array-vetor
const guest = ['Joao', 'Mario', 'Paulo', 'Jose']

//lista multidimensional - matriz
const lista = [33, 'Mario', firstName, ['Ola']]

console.log(guest[0])
console.log(lista)


//declaração /definição
let y
const x = undefined

console.log(y)
console.log(x)


// 0 = falso
// 1 = verdadeiro
// boolean

const guest01 = 'Joao'
const guest02 = 'Maria'

const guest01Confirm = false
const guest02Confirm = true

const guestConfirmation = [
    ['Joao', true],
    ['Maria', false]
]

console.log(guestConfirmation[0])


//Objetos
// {}

/* const objeto01 = {
    name: 'Joao',
    confirmad: true
} 

const objeto02 = {
    name: 'Maria',
    confirmad: false
} */

const listaObjetos = [
    {name: 'Joao', confirmad: true},
    {name: 'Maria', confirmad: false}
]

console.log(listaObjetos[0].name)
console.log({name: 'Maria', confirmad: false}.name)

const obj = {
    text: 'Anderson',
    company: {
        name: 'Codar.me'
    }
}

const text = 'Anderson'
const num = 26

console.log(text.toUpperCase())
console.log("")

const person = {
    name: 'Anderson'
}

person.age = 26
person.outra = {}
person.outra.qualquerCoisa = 10

console.log(person)