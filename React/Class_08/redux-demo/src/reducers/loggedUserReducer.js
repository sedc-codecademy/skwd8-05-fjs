import * as ActionTypes from "../actions/actionTypes";

const loggedUserReducer = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return {
        ...state,
        isLogged: true,
      };
    case ActionTypes.LOG_OUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default loggedUserReducer;
