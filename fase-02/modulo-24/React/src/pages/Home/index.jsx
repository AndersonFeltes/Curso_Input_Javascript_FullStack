import { ReactComponent as Logo } from '../../assets/react.svg'

function Title({children, className="teste"}){
    return <h1 className={className}>{children}</h1>
}

export function Home(){
    // const title = 'Ola React!!'
    // const className = "ola02"

    // return <h1 className ={className}>{title}</h1>

    return(
        <div className="container">
            <Title className="reactVite">
                Ola React!!!
            </Title>

            <Logo width={120}/>
        </div>
    )
}