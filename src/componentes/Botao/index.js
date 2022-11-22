import './Botao.css'


const Botao = (props) => {
    return (
        <button className='button'>{props.children}</button>
    )
}
//props.children vai pegar informações que colocar dentro do scopo do componente, ex: <Botao> Enviar </Botao>
export default Botao;