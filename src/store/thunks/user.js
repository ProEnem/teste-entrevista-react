import { userActions } from "../actions/user";
import API from "../../api";

const token = localStorage.getItem("token");

const userThunks = {
  getUser: () => {
    API.get("/person/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((user) => {
      userActions.setUserData(user.data);
    });
  },
};

export { userThunks };
