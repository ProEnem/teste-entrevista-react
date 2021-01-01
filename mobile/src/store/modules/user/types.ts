export enum ActionTypes {
  userRequest = '@user/USER_REQUEST',
  userSuccess = '@user/USER_SUCCESS',
  userFailure = '@user/USER_FAILURE',
}

export interface IUserProps {
  token: string;
}

export interface IUserRequest {
  type: string;
  payload: IUserProps;
}

export interface IUserSuccessProps {
  user: IUserItem;
}

export interface IUserSuccessRequest {
  type: string;
  payload: IUserSuccessProps;
}

export interface IUserFailureProps {
  isError: boolean;
  message: string;
}

export interface IUserFailureRequest {
  type: string;
  payload: IUserFailureProps;
}

export interface ICourseItem {
  id: string;
  name: string;
  slug: string;
}

export interface IUserItem {
  id: string;
  name: string;
  email: string;
  imageProfile: string;
  courses: ICourseItem[];
}

export interface IUserState {
  user: IUserItem;
  isError: boolean;
  message: string;
}
