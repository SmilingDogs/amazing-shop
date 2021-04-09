import {
  PRODUCTS_REQUEST,
  PRODUCTS_REQUEST_FAIL,
  PRODUCTS_REQUEST_SUCCESS,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  isLoading: "",
  products: [],
  error: "",
};

const productListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return { ...state, isLoading: true };

    case PRODUCTS_REQUEST_SUCCESS:
      return { ...state, isLoading: false, products: action.payload };

    case PRODUCTS_REQUEST_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default productListReducer;
