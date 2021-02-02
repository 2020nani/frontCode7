/*
    Dados da pagina
   * Nome : Code7
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021
   
*/

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Container, Conteudo} from './styles'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.jpg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória').min(6, 'No mínimo 6 caracteres'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
/*funcao loga admin*/
  function handleSubmit({ email, password }) {
     dispatch(signInRequest(email, password));
    console.log(email,password)
  }

  return (
    <Container>
      <Conteudo>
      <img src={logo} width="300px" alt="Code7" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? 'Carregando..' : 'Acessar'}</button>
        <Link to="/cadastro">Criar conta gratuita</Link>
      </Form>
      </Conteudo>
    </Container>
  );
}
