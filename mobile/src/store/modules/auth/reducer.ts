import { Reducer } from 'redux';
import produce from 'immer';

import { IAuthState, ActionTypes } from './types';

const INITIAL_STATE: IAuthState = {
  token: '',
  isError: false,
  message: '',
  loading: true,
};

const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.authSignInSuccess: {
        const { token } = action.payload;

        draft.token = token;
        draft.message = '';

        return draft;
      }

      case ActionTypes.authSignInFailure: {
        const { isError, message } = action.payload;

        draft.isError = isError;
        draft.message = message;

        return draft;
      }

      case ActionTypes.authSignOutSuccess: {
        draft.token = '';

        return draft;
      }

      default: {
        return draft;
      }
    }
  });
};

export default auth;
