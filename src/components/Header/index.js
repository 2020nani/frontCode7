/*
    Dados da pagina
   * Nome : Code7
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021
   
*/

import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, ConteudoProfile, Profile } from '../Header/styles';


export default function Header() {
  
  const profile = useSelector(state => state.admin.profile);

  

  return (console.log(profile),
    
    <Container> 
   
       <Profile>
       <ConteudoProfile>
       <strong>Administrador: </strong>
        <span>ID: {profile.id} NOME: {profile.name}</span>
        <Link to="/profile">Meu perfil</Link>
        </ConteudoProfile>
      </Profile>
      
    </Container>

  );

}
