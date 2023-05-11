import PropTypes from 'prop-types'
import { Component } from 'react';
import { ReactComponent  as CommentIcon } from "../../assets/comment.svg"
import { ReactComponent as ViewsIcon } from "../../assets/view.svg"
import ImagemPaisagem from "../../assets/img.png"
import ImagemPessoas from "../../assets/img-1.png"
import ImagemComida from "../../assets/img-2.png"
import FotoLynsey from "../../assets/Ellipse 1.png"
import FotoBrady from "../../assets/fotoBrady.png"
import FotoTaya from "../../assets/fotoTaya.png"

// function Title({children, className=""}){
//     return <h1 className={className}>{children}</h1>
// }
// tambem funcionou mas o vsCode fica dando erro por causa do eslintrc

class Title extends Component{
    render(){
        return(
            <h1 className="titulo">
                {this.props.children}
            </h1>
        )
    }
}

Title.propTypes={
    children: PropTypes.node.isRequired
}

class Card extends Component{
    render(){
        return(
            <div className='Card'>
                {this.props.children}
            </div>
        )
    }
}

Card.propTypes={
    children: PropTypes.node.isRequired
}

class SubTitulo extends Component{
    render(){
        return(
           <h2 className="subtitulo">
                {this.props.children}
           </h2> 
        )
    }
}

SubTitulo.propTypes={
    children: PropTypes.node.isRequired
}

class Perfil extends Component{
    render(){
        return(
            <div className="perfil">
                {this.props.children}
            </div>
        )
    }
}

Perfil.propTypes={
    children: PropTypes.node.isRequired
}

export function Home(){
    return(
        <div id="principal">
           <Title>Terça-feira, 14/06/2022</Title> 
           <div className="pai">
            <Card>
                <div>
                    <img className="imagemTopo" src={ImagemPaisagem} />
                </div>
                <SubTitulo>Escolha do dia - Natureza</SubTitulo>
                <Perfil>
                    <div className="divPerfil">
                        <img className="fotoPerfil" src={FotoLynsey} />
                        <p className="textoPerfil"><strong>Lynsey Searle </strong>• 1 dia atrás</p>
                    </div>
                </Perfil>
                <div className="paiIcons">
                    <div className="divIcons"><CommentIcon/><p>72</p></div>
                    <div className="divIcons"><ViewsIcon/><p>24</p></div>
                </div>
            </Card>

            <Card>
                <div>
                    <img className="imagemTopo" src={ImagemPessoas} />
                </div>
                <SubTitulo>Escolha do dia - Pessoas</SubTitulo>
                <Perfil>
                    <div className="divPerfil">
                        <img className="fotoPerfil" src={FotoBrady} />
                        <p className="textoPerfil"><strong>Brady Combs </strong>• 3 dias atrás</p>
                    </div>
                </Perfil>
                <div className="paiIcons">
                    <div className="divIcons"><CommentIcon/><p>56</p></div>
                    <div className="divIcons"><ViewsIcon/><p>18</p></div>
                </div>
            </Card>

            <Card>
                <div>
                    <img className="imagemTopo" src={ImagemComida} />
                </div>
                <SubTitulo>Escolha do dia - Comida</SubTitulo>
                <Perfil>
                    <div className="divPerfil">
                        <img className="fotoPerfil" src={FotoTaya} />
                        <p className="textoPerfil"><strong>Taya Bates </strong>• 2 dias atrás</p>
                    </div>
                </Perfil>
                <div className="paiIcons">
                    <div className="divIcons"><CommentIcon/><p>88</p></div>
                    <div className="divIcons"><ViewsIcon/><p>72</p></div>
                </div>
            </Card>
           </div>
        </div>
    )
}