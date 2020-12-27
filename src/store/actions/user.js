import { ACTIONS } from "../../utils/actionConstants";

const userActions = {
  setUserData: (name, email, imageProfile, signedCourses) => {
    return {
      type: ACTIONS.GET_USER_DATA,
      payload: {name, email, imageProfile, signedCourses},
    };
  },
  setLoadingOn: () => ({
    type: ACTIONS.SET_LOADING_ON,
  }),
  setLoadingOff: () => ({
    type: ACTIONS.SET_LOADING_OFF,
  }),
  resetUserData: () => ({
    type: ACTIONS.RESET_USER_DATA
  })
};

export { userActions };
