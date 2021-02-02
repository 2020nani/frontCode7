/*
    Dados da pagina
   * Nome : Code7
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021
   
*/

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Conteudo } from './styles'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.jpg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-amil válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
/*funcao cadastra admin*/
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Container>
      <Conteudo>
        <img src={logo} width="300px" alt="Code7" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome completo" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          />

          <button type="submit">Criar conta</button>
          <Link to="/">Já tenho login</Link>
        </Form>
      </Conteudo>
    </Container>
  );
}