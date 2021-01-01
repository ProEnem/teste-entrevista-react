import {
  IUserRequest,
  IUserProps,
  IUserSuccessProps,
  IUserSuccessRequest,
  IUserFailureProps,
  IUserFailureRequest,
  ActionTypes,
} from './types';

export function userRequest({ token }: IUserProps): IUserRequest {
  return {
    type: ActionTypes.userRequest,
    payload: {
      token,
    },
  };
}

export function userSuccess({ user }: IUserSuccessProps): IUserSuccessRequest {
  return {
    type: ActionTypes.userSuccess,
    payload: {
      user,
    },
  };
}

export function userFailure({
  isError,
  message,
}: IUserFailureProps): IUserFailureRequest {
  return {
    type: ActionTypes.userFailure,
    payload: {
      isError,
      message,
    },
  };
}
