/**
 * 

6. Cifra de Cezar

- Refaça o exercício da aula 8 do módulo 1, dessa vez usando JS

 */

const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z']

const nome = ['A', 'N', 'D', 'E', 'R', 'S', 'O', 'N']

const numLetras = 8

const novoNome = nome.map(letra => {
    for(let i=0; i<alfabeto.length; i++){
        if(letra === alfabeto[i]){
            console.log(letra + "-----" + alfabeto[i+8])
            return alfabeto[i+numLetras]
        }
        if(letra === 'S'){
            console.log(letra + "-----" + 'A')
            return "A"
        }
    }
})
console.log(nome)
console.log(novoNome)

/*
for(let i=0; i<nome.length; i++){
    const letra = nome[i]
    for(let j=0; j<alfabeto.length && letra != alfabeto[j]; j++){
        if(letra == alfabeto[j]){
            novoNome.push(alfabeto[j + numLetras])
        }
    }
    console.log(alfabeto[i])
    console.log(nome[i])
    console.log( nome[i] + "--" + novoNome[i])
    console.log(novoNome)
}
*/

/*
for(let i=0; i<nome.length; i++){
    //console.log(nome[i])
    for(let j = 0; j<alfabeto.length; j++){
        //console.log(alfabeto[i])
        if(alfabeto[i] === nome[i] && novoNome[i] != alfabeto[i + numLetras]){
            novoNome.push(alfabeto[i + numLetras])
            console.log(alfabeto[i])
            console.log(nome[i])
            console.log( nome[i] + "--" + novoNome[i])
        }
    }
    console.log(novoNome)
}
*/