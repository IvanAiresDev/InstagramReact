
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
                <img onClick={LikeNaImg} src={props.imgPost} />
            </div>


            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={Click} name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras {props.numLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Click(curtida) {
    let numCurtidas;
    const textCurtidas = curtida.target.parentNode.parentNode.parentNode
    if (curtida.target.name === "heart-outline") {
        curtida.target.name = "heart"
        curtida.target.classList.add('red')
    } else {
        curtida.target.name = "heart-outline"
        curtida.target.classList.remove('red')
    }
}

function LikeNaImg(curtida) {
    const post = curtida.target.parentNode.parentNode;
    const like = post.querySelector('.fundo ion-icon:first-child');
    if (like.name === "heart-outline") {
        like.name = "heart";
        like.classList.add('red');
    } else {
        like.name = "heart-outline";
        like.classList.remove('red');
    }
}

