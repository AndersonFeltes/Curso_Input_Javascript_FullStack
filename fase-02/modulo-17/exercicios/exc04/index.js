/**
 * 

4. Simulando forEach

- Declare uma função chamada forEach que recebe dois parâmetros: um array e um callback

- Use a estrutura "for" para percorrer o array e executar o callback para cada um dos itens da lista

- Execute forEach passando uma lista de 7 números, 
e um callback que mostre a mensagem "O número NUMERO é par/ímpar".

 */

function forEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i])
    }
}

function parOuImpar(num){
    if(num %2 === 0){
        return console.log(`O numero ${num} é par!`)
    }

    return console.log("O numero "+ num +" é impar!")
}

forEach([1, 2, 3, 4, 5, 6, 7], parOuImpar)