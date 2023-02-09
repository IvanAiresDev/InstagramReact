import Sugestoes from "./componentsDireito/Sugestoes"
export default

    function LadoDireito() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img data-test="profile-image" onClick={MudarImg} src="assets/img/catanacomics.svg" alt="imagem de perfil" />
                <div class="texto">
                    <span>
                        <strong data-test="name">catanacomics</strong>
                        <ion-icon data-test="edit-name" onClick={MudarNome} name="pencil"></ion-icon>
                    </span>
                </div>
            </div>

            <Sugestoes />


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

function MudarNome() {
    const nomeAntigo = document.querySelector('.sidebar strong')
    const novoNome = prompt("digite seu novo nome de usuario");
    if (novoNome) {
        nomeAntigo.innerHTML = novoNome
    }
}

function MudarImg() {
    const imgAntiga = document.querySelector('.sidebar img')
    const novaImg = prompt('Digite o link da sua imagem');
    if (novaImg && novaImg.contains === 'https') {
        imgAntiga.innerHTML = `<img src=${novaImg} />`
    }
}