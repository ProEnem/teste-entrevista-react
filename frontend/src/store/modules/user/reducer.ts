import { Reducer } from 'redux';
import produce from 'immer';

import { IUserState, ActionTypes } from './types';

const INITIAL_STATE: IUserState = {
  user: {
    id: '',
    name: '',
    email: '',
    imageProfile: '',
    courses: [],
  },
  isError: false,
  message: '',
};

const user: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.userSuccess: {
        const { user: userData } = action.payload;

        draft.user = userData;

        return draft;
      }

      case ActionTypes.userFailure: {
        const { isError, message } = action.payload;

        draft.isError = isError;
        draft.message = message;

        return draft;
      }
      default: {
        return draft;
      }
    }
  });
};

export default user;
