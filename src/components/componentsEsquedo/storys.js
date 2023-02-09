export default
    function Storys() {
    return (
        <div class="stories">

            <StorySingle img='assets/img/9gag.svg' name="9gag" />
            <StorySingle img='assets/img/meowed.svg' name="meowed" />
            <StorySingle img='assets/img/barked.svg' name="barked" />
            <StorySingle img='assets/img/nathanwpylestrangeplanet.svg' name="nathanwpylestrangeplanet" />
            <StorySingle img='assets/img/wawawicomics.svg' name="wawawicomics" />
            <StorySingle img='assets/img/respondeai.svg' name="respondeai" />
            <StorySingle img='assets/img/filomoderna.svg' name="filomoderna" />
            <StorySingle img='assets/img/memeriagourmet.svg' name="memeriagourmet" />

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