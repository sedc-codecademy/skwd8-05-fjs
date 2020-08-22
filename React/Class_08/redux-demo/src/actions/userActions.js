import * as ActionTypes from "./actionTypes";

export const logIn = () => {
  return {
    type: ActionTypes.LOG_IN,
  };
};

export const logOut = () => {
  return {
    type: ActionTypes.LOG_OUT,
  };
};
