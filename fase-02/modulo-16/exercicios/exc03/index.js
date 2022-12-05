/*
    Crie uma função com as seguintes características
    A função deve receber 3 parâmetros se qualquer um dos três parâmetros não estiverem preenchidos, 
    a função deve retornar a mensagem: "Os valores não foram preenchidos corretamente"
    O retorno da função deve ser a soma dos 3 parâmetros, multiplicando por 4 o resultado da soma
    Invoque a função criada acima, passando só um número como parâmetro e mostre o resultado
*/

const somaNum  = (n1, n2, n3) => {
    if(n1 == undefined || n2 == undefined || n3 == undefined){
       let mensagem = console.log("Os valores não foram preenchidos corretamente!!!!")
       return mensagem
    }
    else{
        let soma = (n1 + n2 + n3) * 4
        return soma
    }
}

console.log("O retorno da função é "+ somaNum(2, 4, 6))

somaNum(2)