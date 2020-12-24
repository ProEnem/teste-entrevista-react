export const isAuthenticated = () => {
  if (!!localStorage.getItem("token")) {
    return true;
  }
  return false;
};
