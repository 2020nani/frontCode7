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
width:70vw;
height:70vh;
display:flex;
flex-direction:column;
margin-left:5vw;
padding-left:5vw;
font-family: Arial, Helvetica, sans-serif;
font-size: 1rem;
h1{
  text-align:center
}
.formulario{
  margin-top: 5px;
  margin-left:10px;
  display:flex;
  width:40vw;
  flex-direction:column; 
label{
    margin-top: 1vh;
}
select{
  margin-top: 1vh;
  height:30px;
  border: solid 1px;
  border-radius:5px;
  font-size: 1rem
}
input{
  margin-top: 1vh;
  height:40px;
  padding-left:5px
  border: solid 1px;
  border-radius:5px;
  font-size: 1rem
}
button{
  margin-top: 1vh;
  width: 100px;
  height:40px;
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