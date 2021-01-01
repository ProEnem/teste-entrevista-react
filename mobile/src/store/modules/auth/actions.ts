import {
  ISignInRequest,
  ISignInProps,
  ISignInSuccessProps,
  ISignInSuccessRequest,
  ISignInFailureProps,
  ISignInFailureRequest,
  ActionTypes,
  ISignOutRequest,
} from './types';

export function signInRequest({
  email,
  password,
}: ISignInProps): ISignInRequest {
  return {
    type: ActionTypes.authSignInRequest,
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess({
  token,
}: ISignInSuccessProps): ISignInSuccessRequest {
  return {
    type: ActionTypes.authSignInSuccess,
    payload: {
      token,
    },
  };
}

export function signInFailure({
  isError,
  message,
}: ISignInFailureProps): ISignInFailureRequest {
  return {
    type: ActionTypes.authSignInFailure,
    payload: {
      isError,
      message,
    },
  };
}

export function signOutRequest(): ISignOutRequest {
  return {
    type: ActionTypes.authSignOutRequest,
  };
}

export function signOutSuccess(): ISignOutRequest {
  return {
    type: ActionTypes.authSignOutSuccess,
  };
}
