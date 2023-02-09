
const dadosPost = [
    { imgPerfil: "assets/img/foto-perfil.jpeg", name: "ivan_matesu2", imgPost: "assets/img/desbravadores.jpg" },
    { imgPerfil: "assets/img/meowed.svg", name: "meowed", imgPost: "assets/img/gato-telefone.svg" },
    { imgPerfil: "assets/img/barked.svg", name: "barked", imgPost: "assets/img/dog.svg" }
]

let curtiu;

export default
    function Posts() {
    return (
        <div class="posts">

            {dadosPost.map((p) => <SinglePost imgPerfil={p.imgPerfil} name={p.name} imgPost={p.imgPost} />)}

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
                <img src={props.imgPost} />
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
                        Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Click() {
    if (curtiu === undefined) {
        document.getElementsByName('heart-outline').style.color = "red"

    }
}

