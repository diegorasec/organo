import './Lista.css'

const Lista = (props) => {
    return (
        
        <div className="lista">  
            <label>{props.label}</label>
            <select 
                onChange={evento=> props.changed(evento.target.value)} 
                required={props.obrig} 
                value={props.valor}
            >
                {props.itens.map((item, index) => {
                    return (
                    <option key={index}>{item}</option>
                )})}
            </select>
        </div>
    )
}

export default Lista