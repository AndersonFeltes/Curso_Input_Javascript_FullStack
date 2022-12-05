/*
1. Salário mínimo

- Declare uma variável chamada renda e atribua uma instrução somando os valores 350, 180, 600

- Declare uma variável e atribua à ela o valor de um salário mínimo.

- Atribua à outra variável

- Verifique se a variável renda é maior que um salário mínimo.

- Caso o valor da renda seja menor que um salário mínimo, informe quanto falta para atingir o valor.

- Caso o valor da renda seja maior, mostre uma mensagem "Recebe pelo menos um salário mínimo"
*/

const renda  = 350 + 180 + 600 
const salarioMinimo = 1212

if(renda < salarioMinimo){
    let valor = salarioMinimo - renda
    console.log(`Faltam R$ ${valor} para sua renda atingir um salário mínimo!`)
}else if(renda >= salarioMinimo){
    console.log("Recebe pelo menos um salário mínimo!")
}