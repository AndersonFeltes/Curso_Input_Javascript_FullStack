/* 
    1. Arrow function + Templ$te String

    Crie uma Arrow function que receba 3 parâmetros, e
    retorne a soma dos dois primeiros multiplicado pelo terceiro
    Atribua à uma variavel soma
    Atribua o valor da execução da função acima, à uma variável resultado

    Mostre no console a frase "A resultado da execução é "VALOR" Substitua o VALOR pelo resultado
    usando template string

*/

const resultado = (n1, n2, n3) => {
    let soma = (n1 + n2) * n3
    return soma
}

console.log(`O resultado da execução é ${resultado(10,20,2)}`)