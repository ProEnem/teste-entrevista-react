import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { userRequest, userSuccess, userFailure } from './actions';
import { IUserItem, ActionTypes } from './types';

import api from '../../../services/api';

type IUserRequest = ReturnType<typeof userRequest>;

function* userLoading({ payload }: IUserRequest) {
  try {
    const { token } = payload;

    const response: AxiosResponse<IUserItem> = yield call(
      api.get,
      'person/me',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const { id, name, email, imageProfile, courses } = response.data;

    const user = {
      id,
      name,
      email,
      imageProfile,
      courses,
    };

    yield put(userSuccess({ user }));
  } catch (err) {
    yield put(
      userFailure({ isError: true, message: err.response.data.detail }),
    );
  }
}

export default all([takeLatest(ActionTypes.userRequest, userLoading)]);
