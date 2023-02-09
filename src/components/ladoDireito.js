export default

    function LadoDireito() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
                <div class="texto">
                    <span>
                        <strong>catanacomics</strong>
                        <ion-icon name="pencil"></ion-icon>
                    </span>
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <SingleSugestao img='assets/img/bad.vibes.memes.svg' name='bad.vibes.memes' />
                <SingleSugestao img='assets/img/chibirdart.svg' name='chibirdart' />
                <SingleSugestao img='assets/img/razoesparaacreditar.svg' name='razoesparaacreditar' />
                <SingleSugestao img='assets/img/adorable_animals.svg' name='adorable_animals' />
                <SingleSugestao img='assets/img/smallcutecats.svg' name='smallcutecats' />
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2023 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function SingleSugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt={props.name} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}