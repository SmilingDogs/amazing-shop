import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_DETAILS,
  CART_SAVE_PAYMENT_METHOD,
} from "./actionTypes";
import axios from "axios";
//* getState 2 parameter -> to read the cart[] value from Store.

export const addToCartAction = (productID, qty) => (dispatch, getState) => {
  axios(`/api/products/${productID}`).then((res) => {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        name: res.data.name,
        image: res.data.image,
        price: res.data.price,
        countInStock: res.data.countInStock,
        product: res.data._id, //* here product === _id (for the database needs)
        qty,
      },
    });
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.data));
};
export const removeFromCartAction = (removeID) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: removeID, //*to pass removeID to reducer
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.data));
};
export const saveShippingDetails = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_DETAILS, payload: data });
  localStorage.setItem("shippingDetails", JSON.stringify(data));
};
export const savePaymentMethod = (data) => ({
  type: CART_SAVE_PAYMENT_METHOD,
  payload: data,
});
