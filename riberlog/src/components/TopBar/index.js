import MenuIcon from "../../contents/assets/images/menu-icon";
import { Conteudo } from "./styled";


export default function Header (){
    return(

        <Conteudo>
            <button>
                <MenuIcon className='svg'/>
            </button>
        </Conteudo>

    );
}