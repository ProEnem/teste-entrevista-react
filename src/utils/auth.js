import { getToken } from './storage';

export const isAuthenticated = () => {
  if (!!getToken()) {
    return true;
  }
  return false;
};
