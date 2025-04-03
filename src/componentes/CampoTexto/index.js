import './CampoTexto.css'

const CampoTexto = (props) => {
    const ret = `${props.placeholder}...`

    const typed = (evento) => {
        props.changed(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={typed} required={props.obrig} placeholder={ret} />
        </div>
    )
}
export default CampoTexto