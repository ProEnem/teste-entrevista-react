import { userReducers } from "./user";
import { combineReducers } from "redux";

const reducers = combineReducers({
  userReducers,
});

export { reducers };
