/**
 * 

5. Somando e reduzindo

- Utilize reduce reduzir a lista do exercício 1

- Você deve usar soma quando o valor for par, e multiplicação quando o valor for ímpar

- Mostre no console o valor final

- Verifique, manualmente (no papel ou na calculadora) se o valor final está correto.

 */

const numeros = [2, 3, 4, 5, 6, 7, 8]

function calculadora(acc, num){
    
    if(num %2 === 0){
       return acc + num
    }
    return acc * num
    
    //return console.log(`${acc} ----- ${num}`)
}

const valorFinal = numeros.reduce(calculadora, 0)
console.log(`O valor final é ${valorFinal}`)