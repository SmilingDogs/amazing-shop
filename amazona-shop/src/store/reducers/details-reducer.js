import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  isLoading: "",
  data: {},
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, isLoading: true };

    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };

    case PRODUCT_DETAILS_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
