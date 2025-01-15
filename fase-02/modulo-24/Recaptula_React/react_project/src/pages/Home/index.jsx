import Logo from '../../assets/react.svg?react'
function Title({children, className}){
    return <h1 className = {className}> {children} </h1>
}

export function Home(){
    return(
        <div>
            <Title className = "React">
                Ola novamente React
            </Title>
            <Logo width={200}/>
        </div>
    )
    
}