import { useState,useEffect } from "react"

function Counter(){
    const [total, setTotal] = useState(0)

    const add  = () => setTotal(total + 1) 
    const remove = () => setTotal (total - 1)

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