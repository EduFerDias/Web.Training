import Sidebar from "../../../components/SideBar";
import Header from "../../../components/TopBar";

import { Conteudo } from '../../assets/common styles/styled';
import  { Conteudo2 } from './styled';

export default function Produtos (){
    return(
        <Conteudo>
            <Sidebar />
            <Conteudo2>
                <Header />
                <div>CUM</div>
            </Conteudo2>
        </Conteudo>
    )
}