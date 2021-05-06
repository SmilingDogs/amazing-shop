import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload }; //todo action.payload === data (user  Object) from Backend
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }; //todo action.payload === error.message from try catch
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export default reducer;
