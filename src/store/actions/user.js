import { ACTIONS } from "../../actionConstants";

const userActions = {
  setUserData: (user) => {
    return {
      type: ACTIONS.GET_USER_DATA,
      payload: user,
    };
  },
  setLoadingOn: () => ({
    type: ACTIONS.SET_LOADING_ON,
  }),
  setLoadingOff: () => ({
    type: ACTIONS.SET_LOADING_OFF,
  }),
};

export { userActions };
