import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSupensa from '../ListaSuspensa';
import './Formulário.css'

const Formulário = (props) => {

    /* para utilizarmos o useState precisamos de um valor que iremos manipular e 
    uma funcao que vai ser responsável pela manipulação/mudando de estado desse valor, 
    nomeado sempre por setNomeDaProp */

    const [nome, setNome] = useState('') 
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault(); //prevenir o padrão para controlar o evento submit
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        //limpando os inputs
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os cards do colaborador</h2>
                <CampoTexto 
                    obrigatorio = {true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio = {true} 
                    label='Cargo' placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Digite o endereço de sua imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSupensa 
                    obrigatorio = {true} 
                    label='Time' 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulário;