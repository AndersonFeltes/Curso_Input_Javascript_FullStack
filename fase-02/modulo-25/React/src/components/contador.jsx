import { useState,useEffect } from "react"

function Counter(){
    const [total, setTotal] = useState(0)

    // é preciso passar o valor com o prevStat para a função receber o ultimo estado em que se encontra o componente
    // para alterar um estado que depende de outro é preciso passar uma função callback nos parametros retornando o valor 
    // useState é assíncrono
    const add  = () => setTotal(prevState => prevState + 1) 
    const remove = () => setTotal (prevState => prevState - 1)

    useEffect( () => {
        console.log("Contador criado")

        return () => {
            console.log("Contador destruido")
        }
    }, [])

    return (
        <div>
            <button onClick={add}>Adicionar</button>
            <button onClick={remove}>Remover</button>
            <div>{total}</div>
        </div>
    )
}

export function Contador(){ 

    const [enabled, setEnabled] = useState(false)

    const toggleCounter = () => {
        setEnabled(!enabled)
    }

 return(
    <div className="container">
        <button onClick={toggleCounter}>
                {!enabled ? "Mostrar " : "Esconder " } Contador
        </button>
        {enabled ? <Counter/> : ''}
    </div>
 )
}