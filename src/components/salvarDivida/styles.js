/*
    Dados da pagina
   * Nome : Code7
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021
   
*/

import styled from 'styled-components';
export const Container = styled.div`
background: lightgrey;
display:flex;
flex-direction:column;
width:70vw;
height:70vh;
margin-left:5vw;
padding-left:5vw
font-family: Arial, Helvetica, sans-serif;
font-size: 1rem;
h1{
  text-align:center
}
.formulario{
  margin-top: 5px;
  margin-left:10px;
  display:flex;
  width:60vw;
  flex-direction:column; 
label{
    margin-top: 1vh;
}
select{
  margin-top: 1vh;
  height:5vh;
  border: solid 1px;
  border-radius:5px;
  font-size: 1rem
}
input{
  margin-top: 1vh;
  padding-left:5px;
  height:5vh;
  border: solid 1px;
  border-radius:5px;
  font-size: 1rem
}
button{
  margin-top: 1vh;
  width: 20vw;
  height:4vh;
  border: solid 1px;
  border-radius:5px;
  font-size: 1rem
}
}

`
export const ButtonForm = styled.div`
display:flex;
justify-content: space-between;
align-items: center

`
