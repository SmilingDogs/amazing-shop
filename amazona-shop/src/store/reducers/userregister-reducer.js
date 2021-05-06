import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  
} from "../actions/actionTypes";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }; //todo action.payload === data (user  Object) from Backend
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }; //todo action.payload === error.message from try catch
    default:
      return state;
  }
};

export default reducer;
