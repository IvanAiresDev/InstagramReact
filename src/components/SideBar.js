import { useState } from "react"
import Sugestoes from "./componentsDireito/Sugestoes"
export default

    function LadoDireito() {

    const [img, setImg] = useState("assets/img/catanacomics.svg")
    const [nome, setNome] = useState("catanacomics")

    function mudarNome() {
        const novoNome = prompt("Digite seu novo nome de usuario")
        novoNome ? setNome(novoNome) : setNome(nome)
    }

    function mudarImg() {
        const novaImg = prompt("Digite o link da sua imagem");
        novaImg ? setImg(novaImg) : setImg(img)
    }

    return (
        <div class="sidebar">
            <div class="usuario">
                <img data-test="profile-image" onClick={mudarImg} src={img} alt="imagem de perfil" />
                <div class="texto">
                    <span>
                        <strong data-test="name">{nome}</strong>
                        <ion-icon data-test="edit-name" onClick={mudarNome} name="pencil"></ion-icon>
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
