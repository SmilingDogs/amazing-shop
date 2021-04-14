import {
  PRODUCTS_REQUEST,
  PRODUCTS_REQUEST_FAIL,
  PRODUCTS_REQUEST_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "./actionTypes";
import axios from "axios";

export const loadProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  try {
    await axios("/api/products").then((res) => {
      dispatch({ type: PRODUCTS_REQUEST_SUCCESS, payload: res.data });
    });
  } catch (err) {
    dispatch({ type: PRODUCTS_REQUEST_FAIL, payload: err.message });
  }
};

export const productDetailsRequest = (productID) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productID });
  try {
    await axios(`/api/products/${productID}`).then((res) => {
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: res.data });
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
