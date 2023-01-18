import Sidebar from "../../../components/SideBar";
import Tables from "../../../components/table";
import Header from "../../../components/TopBar";

import { Conteudo } from '../../assets/common styles/styled';
import  { Conteudo2 } from './styled';

export default function Produtos (){
    return(
        <Conteudo>
            <Sidebar />
            <Conteudo2>
                <Header />
                {/* <div>CUM</div> */}
                <Tables />
            </Conteudo2>
        </Conteudo>
    )
}