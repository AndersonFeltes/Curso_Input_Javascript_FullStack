/*

Criador de objetos
Crie uma função que receba dois parâmetros: nome e idade
A função deve retornar um objeto com 3 atributos: nome, idade, anoNascimento. (para o cálculo do ano, ignore
meses e dias)
Atribua o valor à uma variável pessoa
Crie uma função que recebe um parametro do tipo objeto (pessoa) e retorne a frase `NOME tem IDADE pois nasceu
em ANO`. Substitua usando template string
Execute a função acima, e mostre a frase no console sem atribuir o valor à uma variável.

*/

const pessoa = function(nome, idade){
    let anoNascimento = 2022 - idade
    const pessoa = {
        nome: nome,
        idade: idade,
        anoNascimento: anoNascimento
    }
    console.log(pessoa)
    return pessoa
}

function frase(pessoa){
    let mensagem = console.log(`${pessoa.nome} tem ${pessoa.idade} anos pois nasceu em ${pessoa.anoNascimento}`)
    return mensagem
}

frase(pessoa("Anderson", 26))