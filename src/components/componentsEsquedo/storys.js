export default
    function Storys() {
    const stories = [
        { img: "assets/img/foto-perfil.jpeg", name: "ivan_mateus2" },
        { img: "assets/img/meowed.svg", name: "meowed" },
        { img: "assets/img/barked.svg", name: "barked" },
        { img: "assets/img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet" },
        { img: "assets/img/wawawicomics.svg", name: "wawawicomics" },
        { img: "assets/img/respondeai.svg", name: "respondeai" },
        { img: "assets/img/filomoderna.svg", name: "filomoderna" },
        { img: "assets/img/memeriagourmet.svg", name: "memeriagourmet" }

    ]
    return (
        <div class="stories">

            {stories.map((p) => <StorySingle img={p.img} name={p.name} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function StorySingle(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} alt={props.name} />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}