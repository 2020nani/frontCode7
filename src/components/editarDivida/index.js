/*
    Dados da pagina
   * Nome : Code7
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021
   
*/

import React  from 'react';
import { Container, ButtonForm } from './styles'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
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

export default function EditarDivida(props) {
  const dividas = props.children
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
 
  /*chamada na api para deletar obj dividas do banco de dados por id escolhido*/
  async function excluirDivida(id) {
    await api.delete(`dividas/${id}`)
    window.location.href = 'index.js'
  }

  return (

    <Container>
       <h1>Atualizar Ou Excluir Divida</h1>
          <Formik
            initialValues={{
              usuarioId: dividas.usuarioId,
              motivoDivida: dividas.motivoDivida,
              dataDivida: dividas.dataDivida,
              valorDivida: dividas.valorDivida.reduce(reducer)
            }}
            validationSchema={schema}

            onSubmit={async (values, actions) => {
              const { usuarioId, motivoDivida, dataDivida, valorDivida } = values;
              try{
              const response = await api.put(`dividas/${dividas._id}`, {
                usuarioId,
                motivoDivida,
                dataDivida,
                valorDivida
              })
              toast.success('divida atualizada com sucesso!');
              window.location.href = 'index.js'
            }catch(error){
              toast.error('Erro ao atualizar divida');
            }
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
           
            }) => (
              <Form className="formulario">

                <label>Motivo</label>
                <Field name="motivoDivida" placeholder="Ex: cartao credito" />
                {errors.motivoDivida && touched.motivoDivida ? (<div>{errors.motivoDivida}</div>) : null}
 
                <label>Valor</label>
                <Field type="number" name="valorDivida" placeholder="Digite o valor da divida" />
                {errors.valorDivida && touched.valorDivida ? (<div>{errors.valorDivida}</div>) : null}

                <label>Data</label>
                <Field name="dataDivida" placeholder="Digite a data da Divida" />
                {errors.dataDivida && touched.dataDivida ? (<div>{errors.dataDivida}</div>) : null}
               
                <ButtonForm>
                <button type="submit">Salvar</button>
                <button type="button" onClick={() => excluirDivida(dividas._id)}>Excluir</button>
                </ButtonForm>
             
              </Form>
            )}
          </Formik>


    </Container>

  );

}

