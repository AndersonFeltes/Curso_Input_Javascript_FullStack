//named export --- mantem o nome na importqação e exportação
export function soma(n1, n2){
    return n1 + n2
}

export const teste = 100


// dafault export --- não mantém o nome na importação e nem na exportação
export default function calc(){
    console.log('Ola default export')
}