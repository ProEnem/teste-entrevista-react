import { types } from './auth.types';

export function signinRequest(email: string, password: string) {
  return {
    type: types.SIGNIN_REQUEST,
    payload: {
      email,
      password,
    }
  }
}

interface UserProps {
  email: string;
  name: string;
  imageUrl: string;
}

export function signinSuccess(token: string, user: UserProps) {
  return {
    type: types.SIGNIN_REQUEST_SUCCESS,
    payload: {
      token,
      user,
    }
  }
}

export function signinFailure() {
  return {
    type: types.SIGNIN_REQUEST_FAILURE,
  }
}

export function logout() {
  return {
    type: types.LOGOUT,
  }
}
