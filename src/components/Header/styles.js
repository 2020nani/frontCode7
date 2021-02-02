/*
    Dados da pagina
   * Nome : Code7
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021
   
*/

import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center
width:100vw;
height: 10vh;
margin-top:1vh;
margin:0;
background: lightSkyblue;



`
export const Profile = styled.div`
width:100vw;
margin-top:2vh;
display: flex;
justify-content: center;
align-items: center;

`
export const ConteudoProfile = styled.div`
width:50vw;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width:750px) {
  width:60vw
  }
  @media (max-width:500px) {
    width:95vw
    }
`


