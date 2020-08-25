import * as ActionTypes from "./actionTypes";

export const increment = (value = 1) => {
  return {
    type: ActionTypes.INCREMENT,
    value,
  };
};

export const decrement = (value = 1) => {
  return {
    type: ActionTypes.DECREMENT,
    value,
  };
};
