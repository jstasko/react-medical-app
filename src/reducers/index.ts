import { combineReducers } from "redux";
import {auth} from "./AuthReducers";
import {message} from "./MessageReducers";

export default combineReducers({
  auth,
  message,
});
