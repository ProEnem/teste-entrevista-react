import { userActions } from "../actions/user";
import { getUser } from "../../services";

const userThunks = {
  getUser: () => dispatch => {
    getUser().then(response => { 
      const { data } = response;      
      dispatch(userActions.setUserData(data.name, data.email, data.imageProfile, data.courses));
    });
    ;
  },
};

export { userThunks };
