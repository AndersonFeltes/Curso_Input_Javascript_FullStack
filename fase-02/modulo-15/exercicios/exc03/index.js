/* 
3. Excluindo grupos

- Declare uma variável que será um objeto pessoa .

- Adicione nome, renda, se está empregado, e se é um herdeiro ou não.

- Usando o exercício anterior, verifique a classe econômica, excluindo herdeiros e desempregados.
*/

const pessoa = {
    nome: "Anderson",
    renda: 2100,
    empregado: true,
    herdeiro: false
}

const classeA = 25554.33
const classeB1 = 11279.14
const classeC1 = 3085.48
const classeC2 = 1748.59
const classeDE = 719.81

if(pessoa.empregado == false || pessoa.herdeiro == true){
    console.log("Herdeiros e desempregados não são contados nas estatísticas!")
}
else if(pessoa.renda <= classeDE){
    console.log(`${pessoa.nome} esta na classe DE, com renda de ${pessoa.renda}`)
}
else if(pessoa.renda > classeDE && pessoa.renda <= classeC2){
    console.log(`${pessoa.nome} esta na classe C2, com renda de ${pessoa.renda}`)
}
else if(pessoa.renda > classeC2 && pessoa.renda <= classeC1){
    console.log(`${pessoa.nome} esta na classe C1, com renda de ${pessoa.renda}`)
}
else if(pessoa.renda > classeC1 && pessoa.renda <= classeB1){
    console.log(`${pessoa.nome} esta na classe B1, com renda de ${pessoa.renda}`)
}
else{
    console.log(`${pessoa.nome} esta na classe A, com renda de ${pessoa.renda}`)
}