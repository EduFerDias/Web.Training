import Conteudo from './style'

export default function sidebar(){
    return(
        <Conteudo>
            <div className="sidebar">
                <div className="upsection">
                    <img src={require('../../contents/assets/images/Logo.png')} alt=""/> 
                    <div className='Logo-text'>
                        <span className='reg-color'>Riber</span>
                        <span className='diff-color'>log</span>
                    </div>
                </div>
                <div className='buttons'>
                    <div>
                        <button className="button-on"><span className='button-text'>Produtos</span><span className="tip-gradient">&nbsp;</span></button>
                    </div>
                    <div>
                        <button className="button-off">Vendas</button>
                    </div>
                </div>
            </div>
        </Conteudo>
    );

};