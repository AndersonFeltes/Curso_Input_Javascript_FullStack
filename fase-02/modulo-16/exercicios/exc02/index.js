/*
    Soma + multiplicação do resultado
    Crie uma função que receba quatro argumentos e retorne a soma dos mesmos
    Defina uma variável que receba o retorno da função acima, multiplicado por 3 sem usar outra variável
    Mostre no console o valor final
 */

function somaNum(n1, n2, n3, n4){
    let soma = n1 + n2 + n3 + n4
    return soma
}

const multiplica = somaNum(10, 20, 30, 40) * 3

console.log(`O retorno da questão é ${multiplica}`)