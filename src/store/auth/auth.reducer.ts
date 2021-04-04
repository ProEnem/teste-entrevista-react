import { Reducer } from "redux";
import { types } from "./auth.types";

const INITIAL_STATE = {
  token: null,
  loading: false,
  user: {
    email: '',
    name: '',
    imageUrl: '',
  },
}

type User = {
  email: string;
  name: string;
  imageUrl: string;
}

interface AuthState {
  readonly token: string | null;
  readonly loading: boolean;
  readonly user: User;
}

const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SIGNIN_REQUEST:
      return { ...state, loading: true };
    case types.SIGNIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: {
          email: action.payload.user.email,
          name: action.payload.user.name,
          imageUrl: action.payload.user.imageProfile,
        },
      };
    case types.SIGNIN_REQUEST_FAILURE:
      return { ...state, loading: false };
    case types.LOGOUT:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}

export default auth;
