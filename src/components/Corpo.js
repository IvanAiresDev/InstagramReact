import Top from "./NavBar"
import LadoDireito from "./SideBar"
import LadoEsquerdo from "./ladoEsquerdo"

export default

    function Corpo() {
    return (
        <div class='corpo'>
            <Top />
            <LadoEsquerdo />
            <LadoDireito />
        </div>
    )
}
