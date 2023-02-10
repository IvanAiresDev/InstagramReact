import { useState } from "react"


const dadosPost = [
    { imgPerfil: "assets/img/foto-perfil.jpeg", name: "ivan_matesu2", imgPost: "assets/img/desbravadores.jpg", numLikes: 101.523 },
    { imgPerfil: "assets/img/meowed.svg", name: "meowed", imgPost: "assets/img/gato-telefone.svg", numLikes: 96.456 },
    { imgPerfil: "assets/img/barked.svg", name: "barked", imgPost: "assets/img/dog.svg", numLikes: 153.283 }
]

export default
    function Posts() {
    return (
        <div class="posts">

            {dadosPost.map((p) => <SinglePost imgPerfil={p.imgPerfil} name={p.name} imgPost={p.imgPost} numLikes={p.numLikes} />)}

        </div>
    )
}

function SinglePost(props) {

    const [qntdLike, setQntdLike] = useState(props.numLikes);
    const [like, setLike] = useState("heart-outline");
    const [color, setColor] = useState(null)
    const [salvar, setSalvar] = useState("bookmark-outline")

    function clickLike() {
        if (like === "heart-outline") {
            setLike("heart")
            setColor("red")
            setQntdLike(qntdLike + 0.001)
        } else {
            setLike("heart-outline")
            setColor(null)
            setQntdLike(qntdLike - 0.001)
        }
    }

    function imgLike() {
        if (like === "heart-outline") {
            setLike("heart")
            setColor("red")
            setQntdLike(qntdLike + 0.001)
        }
    }

    function salvarPost() {
        salvar === "bookmark-outline" ? setSalvar("bookmark") : setSalvar("bookmark-outline")
    }

    return (

        <div class="post" data-test="post">
            <div class="topo">

                <div class="usuario">
                    <img data-test="post-image" src={props.imgPerfil} alt={props.name} />
                    {props.name}
                </div>

                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onDoubleClick={imgLike} src={props.imgPost} />
            </div>


            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={clickLike} class={color} name={like}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={salvarPost} name={salvar}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras {qntdLike.toFixed(3)} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )



}



