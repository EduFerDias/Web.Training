import styled from 'styled-components';

const Conteudo = styled.div`

{
    display:flex;
    justify-content:flex-end;
    width:100%;
}

button{
    margin: 1vw 2vw 0vw 0vw;
    padding:0.5em 0.68em 0.5em 0.68em;

    background-color:transparent;

    border-radius:25px;
    border:none;
}

button:hover{
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
    transition:0.1s;
}

svg {
        width:2em;
        height:2em;
    }


`

export { Conteudo }