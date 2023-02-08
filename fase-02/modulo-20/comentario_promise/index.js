
const resultado = document.createElement('div')
resultado.style.display = 'flex'
resultado.style.justifyContent = 'center'
resultado.style.alignItems = 'center'
resultado.style.gap = '40px'
resultado.style.padding = '24px 56px'
resultado.style.width = '80%'
resultado.style.minWidth = '128px'
resultado.style.backgroundColor = '#ffffff'
resultado.style.borderR = '32px'

const imagem = document.createElement('img')
imagem.src = './imagens/img-perfil.png'
imagem.style.width = '80px'
imagem.style.height = '80px'

const containerTextos = document.createElement('div')
containerTextos.style.display = 'flex'
containerTextos.style.flex = '1'
containerTextos.style.flexDirection = 'column'
containerTextos.style.gap = '8px'

const nomeUsuario = document.createElement('h2')
nomeUsuario.innerText = 'Anderson Feltes  • 3h atrás'
nomeUsuario.style.height = '32px'
nomeUsuario.style.fontWeight = '700'
nomeUsuario.style.fontSize = '24px'
nomeUsuario.style.lineHeight = '32px'
nomeUsuario.style.color = '#18161f'

const comentario = document.createElement('p')
comentario.style.height = '32px'
comentario.style.fontWeight = '400'
comentario.style.fontSize = '20px'
comentario.style.line = '32px'
comentario.style.color = '#18161f'

async function getPosts(){
    try{
        const promise = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await promise.json()  //tambem é uma promise o retorno recebido

        return data
    }catch(error){
        console.log("Algo deu errado!!/n", error)
    }
}

async function main(){
    const posts = await getPosts()

    const user01 = posts.filter(post => post.userId === 1)
    // console.log(user01)
    
    return user01
}

async function carregaComentario(){
        
    const textComent = await main()
    // console.log(textComent) 

    const vetorComentario = []

    textComent.forEach(element => {
        const texto = element.title
        // console.log(texto)
        vetorComentario.push(texto)

        return vetorComentario
    })

    console.log(vetorComentario)

    for(let i=0; i<vetorComentario.length; i++){
        const pai = document.getElementById('main')
        pai.style.display = 'flex'
        pai.style.flexDirection  = 'column'
        pai.style.gap = '10px'
        // console.log(pai)
        pai.innerHTML += ''
        comentario.innerText = vetorComentario[i]

        // console.log(comentario + "passou aqui")
        
        resultado.appendChild(imagem)
        containerTextos.appendChild(nomeUsuario)
        containerTextos.appendChild(comentario)
        resultado.appendChild(containerTextos)

        // console.log(resultado)

        // console.log(pai)

        pai.appendChild(resultado)
    }
}

carregaComentario()