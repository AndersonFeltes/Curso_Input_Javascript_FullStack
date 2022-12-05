/* 
2. Classificação econômica

- Crie uma variável renda, e atribua um valor qualquer.

- Mostre no console a classe econômica (classe social) baseada nesse valor.

- Exemplo: O valor de 35000 deveria retornar "Classe A"

OBS: Você deve pesquisar as classificações econômicas definidas pelo IBGE.
*/

const rendaMedia = 2100 + 1600
const classeA = 25554.33
const classeB1 = 11279.14
const classeC1 = 3085.48
const classeC2 = 1748.59
const classeDE = 719.81

if(rendaMedia <= classeDE ){
    console.log(`Classe DE, renda de ${rendaMedia}`)
}
else if(rendaMedia > classeDE && rendaMedia <= classeC2){
    console.log(`Classe C2, renda de ${rendaMedia}`)
}
else if(rendaMedia > classeC2 && rendaMedia <= classeC1){
    console.log(`Classe C1, renda de ${rendaMedia}`)
}
else if(rendaMedia > classeC1 && rendaMedia <= classeB1){
    console.log(`Classe B1, renda de ${rendaMedia}`)
}
else{
    console.log(`Classe A, renda de ${rendaMedia}`)
}