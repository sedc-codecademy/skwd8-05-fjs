import * as ActionTypes from "../actions/actionTypes";

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + parseInt(action.value);
    case ActionTypes.DECREMENT:
      return state - parseInt(action.value);
    default:
      return state;
  }
};

export default countReducer;
