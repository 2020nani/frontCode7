/*
    Dados da pagina
   * Nome : CotaboxTeste
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 22/12/2020 - 27/12/2020
   
*/

import styled from 'styled-components';
export const Container = styled.div`
background: #FFF6;
width:100vw;
height: 100vh;
display:flex;
flex-direction:column;
margin:0;
font-family: Arial, Helvetica, sans-serif;
h1{
  text-align:center
  margin-top:2vw;
  margin-left:2vw
}
p{
  text-align:center;
  margin-top:2vw;
  margin-left:1vw;
  font-size:2vw
}
`
export const Conteudo = styled.div`
display:flex;
justify-content:center;
align-items:center;
width: 98vw;
height:100vh;
margin-left: 1vw;


`
export const ListarDividas = styled.div`
display:flex;
flex-direction: column;
width: 18vw;
height:70vh;
margin-top: 1vh;
margin-left: 1vw;
button{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top:1vh;
  padding-left:1px;
  width:350px;
  height:50px;
  font-size:1.5rem
}
`
export const ListButton = styled.div`
display:flex
flex-direction:column;
.deleteButton{
  margin-let:1vw;
  width:30px;
  height:50px
}
.editarButton{
  margin-let:1vw;
  width:30px;
  height:50px
}
`

export const Formulario = styled.div`
margin-top: 1vh;
display:flex;
width: 80vw;
height:70vh;
margin-left: 1vw;

`

export const ButtonSalvar = styled.div`
display:flex;
justify-content:flex-end;
width: 98vw;
margin-left: 1vw;
padding-bottom: 2vh;
button{
  margin-top:1vh;
  margin-right: 15vw;
  width:160px;
  height:50px
}

`


