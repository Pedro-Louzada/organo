import './Banner.css'

function Banner(){
    return(
        //JSX > transforma o hmtl do return em códio react
        <header className='banner'>
            <img src="/imagens/banner.png" alt="Banner Principal"/>
        </header>
    ); /*estamos retornando com parênteses pois é um retorno de múltiplas linhas*/
};

export default Banner;