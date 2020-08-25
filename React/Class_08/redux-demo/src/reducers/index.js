import { combineReducers } from "redux";
import countReducer from "./countReducer";
import loggedUserReducer from "./loggedUserReducer";

export const rootReducer = combineReducers({
  count: countReducer,
  user: loggedUserReducer,
});
