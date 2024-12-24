import './Personagem.css'

const Personagem = ({ nome, caracteristica, imagem, corDeFundo }) => {
    return (
        <div className='personagem'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{caracteristica}</h5>
            </div>
        </div>
    )
}

export default Personagem