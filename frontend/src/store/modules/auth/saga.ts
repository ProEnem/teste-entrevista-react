import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { signInRequest, signInSuccess, signInFailure } from './actions';
import { userRequest } from '../user/actions';
import { ActionTypes } from './types';

import api from '../../../services/api';
import history from '../../../services/history';

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

    yield call(setAuthToken, token);

    yield put(signInSuccess({ token }));

    yield put(userRequest({ token }));

    history.push('/detail');
  } catch (err) {
    yield put(
      signInFailure({ isError: true, message: err.response.data.detail }),
    );
  }
}

function setAuthToken(token: string) {
  localStorage.setItem('@Proenem:token', token);
}

// function removeAuthToken() {
//   localStorage.removeItem('@Proenem:token');
// }

export default all([takeLatest(ActionTypes.authSignInRequest, signIn)]);
