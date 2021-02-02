/*
    Dados da pagina
   * Nome : Code7
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021
   
*/

import React, { useState, useEffect } from 'react';
import { Container, ButtonForm } from './styles'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api'

const schema = Yup.object().shape({
  usuarioId: Yup.string()
    .required('usuarioId é obrigatório'),
  motivoDivida: Yup.string().required('Campo obrigatório'),
  dataDivida: Yup.string().required('Campo obrigatório')
    .min(10, 'Preencha conforme exemplo (11/10/1984)')
    .max(10, 'Preencha conforme exemplo (11/10/1984)'),
  valorDivida: Yup.number().required('Campo obrigatório').min(1),
});

export default function SalvarDivida() {
  const [pessoas, setPessoas] = useState([]);

/* instancia todos os objetos Pessoas salvas na api JsonPlaceHolder na constante pessoas */
  useEffect(() => {
    async function listarPessoas() {
      const response = await api.get('https://jsonplaceholder.typicode.com/users');
      setPessoas(response.data)

    }
    listarPessoas()
  }, [])

/* reseta objeto do formulario e atualliza pagina */
  function cancelar() {

    window.location.href = 'index.js'
  }

  return (

    <Container>
      <h1>Cadastrar nova divida</h1>
      <Formik
        initialValues={{
          usuarioId: '',
          motivoDivida: '',
          dataDivida: '',
          valorDivida: ''
        }}
        validationSchema={schema}

        onSubmit={async (values, actions) => {
          const { usuarioId, motivoDivida, dataDivida, valorDivida } = values;
          const response = await api.post('dividas', {
            usuarioId,
            motivoDivida,
            dataDivida,
            valorDivida
          })

          window.location.href = 'index.js'
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({
          touched,
          errors,
          handleSubmit,
          isValid,
          isSubmitting,
        }) => (
          <Form className="formulario">
            <label>Cliente</label>
            <Field as="select" name="usuarioId">
              <option  >Escolha nome do devedor</option>
              {pessoas.map(pessoa => (
                <option value={pessoa.id} >{pessoa.name}</option>
              ))}
            </Field >
            {errors.usuarioId && touched.usuarioId ? (<div>{errors.usuarioId}</div>) : null}
            <label>Motivo</label>
            <Field name="motivoDivida" placeholder="Ex: Divida cartao credito" />
            {errors.motivoDivida && touched.motivoDivida ? (<div>{errors.motivoDivida}</div>) : null}
            <label>Valor</label>
            <Field type="number" name="valorDivida" placeholder="Ex: 900.00" />
            {errors.valorDivida && touched.valorDivida ? (<div>{errors.valorDivida}</div>) : null}
            <label>Data </label>
            <Field name="dataDivida" placeholder="Ex: 11/10/1987" />
            {errors.dataDivida && touched.dataDivida ? (<div>{errors.dataDivida}</div>) : null}

            <ButtonForm>
              <button type="submit">Salvar</button>
              <button type="button" onClick={() => cancelar()}>Cancelar</button>
            </ButtonForm>
          </Form>
        )}
      </Formik>

    </Container>

  );

}

