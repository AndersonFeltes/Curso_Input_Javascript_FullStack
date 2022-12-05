/* 
4. Verificando um veículo

- Crie uma variável chamada veículo

- Crie atributos cor, marca (fiat, renault, chevrolet, mercedes...), modelo, tipo (carro, moto, caminhão)

- Utilize um switch baseado no tipo de veículo, para mostrar a mensagem O [MODELO] é um veículo de [RODAS] rodas 
da marca [MARCA] (substitua as variáveis na string)

OBS: Você não tem uma variável RODAS, então, terá que definir baseada no tipo de veículo.
*/

const veiculo = {
    cor: "vermelho",
    marca: "Fiat",
    modelo: "Uno",
    tipo: "carro"
}

switch(veiculo.tipo){
    case "carro":
        console.log(`O ${veiculo.modelo} é um veiculo de 4 rodas da marca ${veiculo.marca}`)
        break
    case "caminhao":
        console.log(`O ${veiculo.modelo} é um veiculo de 8 rodas da marca ${veiculo.marca}`)
        break 
    case "moto":
        console.log(`O ${veiculo.modelo} é um veiculo de 2 rodas da marca ${veiculo.marca}`)
        break  
    default:
        console.log("Tipo do veículo nao correspondente") 
}