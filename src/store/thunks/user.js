import { userActions } from "../actions/user";
import API from "../../config/api";
import { getToken } from '../../utils/storage';

const userThunks = {
  getUser: () => {
    API.get("/person/me", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }).then((user) => {
      userActions.setUserData(user.data);
    });
  },
};

export { userThunks };
