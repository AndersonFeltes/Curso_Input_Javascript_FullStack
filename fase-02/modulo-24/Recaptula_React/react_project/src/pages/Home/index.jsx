function Title({children, className}){
    return <h1 className = {className}> {children} </h1>
}

export function Home(){
    return(
        <div>
            <Title className = "React">
                Ola novamente React
            </Title>
        </div>
    )
    
}