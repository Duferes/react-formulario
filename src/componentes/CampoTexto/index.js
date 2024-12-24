import './CampoTexto.css'

const CampoTexto = (props) => {

    const  placeholderModifica = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder= {placeholderModifica} />
        </div>
    )
}

export default CampoTexto;