import { useState, useEffect } from 'react'
//react hook

import { Button } from "../components/button";
import { Contador } from '../components/contador';

export function Home(){
    const [currentTime, updateCurrentTime] = useState('01')

    // setInterval(() => {
    //     let novoValor = new Date().toLocaleTimeString()
    //     updateCurrentTime(novoValor)
    // }, 1000)


    //useEffect controla quantas vezes será reinderizado o componente
    useEffect( () => {

       const interval = setInterval(() => {
            let novoValor = new Date().toLocaleTimeString()
            console.log("-------------")
            updateCurrentTime(novoValor)
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [] )

    return(
        <div className='container'>
            <div id="clock">{currentTime}</div>
            <Button/>
            <Contador/>
        </div>
    )
}