import {
  PRODUCTS_REQUEST,
  PRODUCTS_REQUEST_FAIL,
  PRODUCTS_REQUEST_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL
} from "./actionTypes";
import axios from "axios";

export const loadProducts = ({ seller = '', name = '' }) => async (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  try {
    await axios(`/api/products?seller=${seller}&name=${name}`).then((res) => {
      dispatch({ type: PRODUCTS_REQUEST_SUCCESS, payload: res.data });
    });
  } catch (err) {
    dispatch({ type: PRODUCTS_REQUEST_FAIL, payload: err.message });
  }
};

export const loadProductDetails = (productID) => async (dispatch) => {
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
export const createProductAction = () => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  const { userSignin: { userInfo }} = getState();
  try {
    await axios
      .post(
        "/api/products",
        {},
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      )
      .then((res) => {
        dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: res.data.product }); //todo payload is createdProduct from backend
      });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: message });
  }
};
export const updateProductAction = (product) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.put(`/api/products/${product._id}`, product, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_UPDATE_FAIL, payload: message });
  }
};
export const productDeleteAction = (productId) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_DELETE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {

    const { data } = await axios.delete(`/api/products/${productId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },

    });
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
  }
};
