/*
    Dados da pagina
   * Nome : Code7
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021
   
*/

import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest, deleteProfile } from '~/store/modules/admin/actions';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-amil válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function Profile() {
  /*seta cont profile com os dados armazenados do admim logado */
  const profile = useSelector(state => state.admin.profile);
  /*seta useDispatch() que e uma funcao do redux*/
  const dispatch = useDispatch();

  /*editar admin conforme dados do formulario*/
  function handleSubmitUpdate(data) {
    dispatch(updateProfileRequest([data, profile.id]));
  }
  /*deleta admin logado atraves do id*/
  function handleSubmitDelete() {
    dispatch(deleteProfile(profile.id));
  }
  /*Define token como null e faz logout */
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <div>
        <Link to="/home">HOME</Link>
      </div>
      <Form initialData={profile} onSubmit={handleSubmitUpdate}>
       

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço completo" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="submit" onClick={handleSubmitDelete}>
        Deletar administrador 
      </button>

      <button type="submit" onClick={handleSignOut}>
        Sair 
      </button>
    </Container>
  );
}