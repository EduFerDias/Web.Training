import styled from 'styled-components'

const Conteudo = styled.body`

.sidebar{
   background-color:#0C0560;
   height:100vh;
   width: 19.5vw;
   font-family:Be-Vietnam-Light;
}
.upsection{
   display:flex;
   height:12vh;
   align-items:center;
   justify-content:center;
}

.upsection img{
   height:4.0625em;
}

.Logo-text{
   height:100%;
   font-size:1.5em;
   line-height:6.875rem;
}

.reg-color{
   color:#B6B4CF;
}
.diff-color{
   background: -webkit-linear-gradient(#F12711, #F5AF19);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
 }
/*------*/

.buttons{
   display:flex;
   flex-direction:column;
}

.buttons button{
   font-size:1em
}

.button-on, .button-off{
   width:100%;
   height:8vh;
   padding:0px;
}
.button-on{
   display:flex;
   justify-content:space-between;
   align-items:center;


   color:white;
   background-color:#3E0E45;
   border: 2px solid #5B0EA8;
   border-right:none;

   font-family:Be-Vietnam-Light;

}

.button-text{
   display:flex;
   justify-content:center;
   align-items:center;

   width:100%;
}

.tip-gradient{
    background: linear-gradient(180deg, #F12711 -10.17%, #F5AF19 115.25%);
    width: 4px;
    height: 100%;
}
.button-off{
   display:flex;
   justify-content:center;
   align-items:center;

   background-color:transparent;
   border:none;
   color:white;
   font-family:Be-Vietnam-Light;

   whidth:100%;
}
`;

export default Conteudo;