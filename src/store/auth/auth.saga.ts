import { call, put, takeLatest } from 'redux-saga/effects';

import { signinSuccess, signinFailure } from '../auth/auth.actions';
import { types } from '../auth/auth.types';
import api from '../../services/api';
import { Alert } from 'react-native';

interface PyloadProps{
  payload: {
    email: string;
    password: string;
  }
}

type Credentials = {
  email: string;
  name: string;
  imageProfile: string;
}

interface ResponseProps {
  data: {
    token: string;
    credentials: Credentials;
  }
}

function* signIn(action: PyloadProps | any) {
  try {
    const { data }: ResponseProps = yield call(api.post, '/token', action.payload, {
      headers: {
        'X-Brand': 'proenem',
      }
    });


    const { token, credentials } = data;

    yield put(signinSuccess(token, {
      email: credentials.email,
      name: credentials.name,
      imageUrl: credentials.imageProfile,
    }));
  } catch (error) {
    Alert.alert('Email ou senha estão incorretos!');
    yield put(signinFailure());
  }
}

function* setToken({ payload }: any) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

function* authSaga() {
  yield takeLatest(types.SIGNIN_REQUEST, signIn);
  yield takeLatest(types.PERSIST_REHYDRATE, setToken);
}

export default authSaga;
