import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess, signFailure } from './actions';


/* funcao de logar e adquirir token para acesso as rotas privasas*/
export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'login', {
      email,
      password,
    });
    
    const { token, user } = response.data;

    console.log(user)
    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/home');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seu email/senha');
    yield put(signFailure());
  }
}

/* funcao de cadastrar admin */
export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'admins', {
      name,
      email,
      password,
     
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro verifique seus dados!');
    yield put(signFailure());
  }
}

/*function setar token para autenticacao e acesso as rotas privadas*/
export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

/*define token como null e faz logout na pagina */
export function signOut() {
  history.push('/');
}

/* exporta as funcoes */
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);