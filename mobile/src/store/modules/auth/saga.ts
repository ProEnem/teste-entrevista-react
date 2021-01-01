import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import {
  signInRequest,
  signInSuccess,
  signInFailure,
  signOutSuccess,
} from './actions';
import { userRequest } from '../user/actions';
import { ActionTypes } from './types';

import api from '../../../services/api';

type ISignInRequest = ReturnType<typeof signInRequest>;

interface IResponseDate {
  token: string;
}

function* signIn({ payload }: ISignInRequest) {
  try {
    const response: AxiosResponse<IResponseDate> = yield call(
      api.post,
      'token',
      payload,
    );
    const { token } = response.data;

    yield put(signInSuccess({ token }));

    yield put(userRequest({ token }));
  } catch (err) {
    yield put(
      signInFailure({ isError: true, message: err.response.data.detail }),
    );
  }
}

function* signOut() {
  try {
    yield put(signOutSuccess());
  } catch (err) {
    yield put(
      signInFailure({ isError: true, message: 'Erro ao sair do app.' }),
    );
  }
}

export default all([
  takeLatest(ActionTypes.authSignInRequest, signIn),
  takeLatest(ActionTypes.authSignOutRequest, signOut),
]);
