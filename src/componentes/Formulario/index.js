import './Formulario.css'
import CampoTexto from '../CampoTexto';
import Lista from '../Lista';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const save = (evento) => {
        evento.preventDefault()
        props.colabCadastrado({
            nome, 
            cargo, 
            imagem, 
            time
        })  
        setNome('')
        setCargo('') 
        setImagem('') 
        setTime('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar os dados do colaborador</h2>
                <CampoTexto
                    obrig={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    changed={valor => setNome(valor)}
                />
                <CampoTexto
                    obrig={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    changed={valor => setCargo(valor)}

                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    changed={valor => setImagem(valor)}
                />
                <Lista 
                    obrig={true} 
                    label="Time" 
                    itens={props.nomesTimes}
                    valor={time}
                    changed={valor => setTime(valor)} />
                <Botao>
                    Criar CARD
                </Botao>
            </form>
        </section>
    )
}

export default Formulario