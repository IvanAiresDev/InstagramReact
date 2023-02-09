import Top from "./cabeçalho"
import LadoDireito from "./ladoDireito"
import LadoEsquerdo from "./ladoEsquerdo"

export default

    function App() {
    return (
        <div class='corpo'>
            <Top />
            <LadoEsquerdo />
            <LadoDireito />
        </div>
    )
}
