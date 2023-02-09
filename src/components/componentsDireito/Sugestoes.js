const usuarioSugestoes = [
    { img: 'assets/img/bad.vibes.memes.svg', name: 'bad.vibes.memes' },
    { img: 'assets/img/chibirdart.svg', name: 'chibirdart' },
    { img: 'assets/img/razoesparaacreditar.svg', name: 'razoesparaacreditar' },
    { img: 'assets/img/adorable_animals.svg', name: 'adorable_animals' },
    { img: 'assets/img/smallcutecats.svg', name: 'smallcutecats' }
]



export default

    function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {usuarioSugestoes.map((p) => <SingleSugestao img={p.img} name={p.name} />)}
        </div>
    )
}

function SingleSugestao(props) {
    return (
        <div class="sugestao">
            <div className="usuario">
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