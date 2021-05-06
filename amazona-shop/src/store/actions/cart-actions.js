import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./actionTypes";
import axios from "axios";
//* getState 2 parameter -> to read the cart[] value from Store.

export const addToCartAction = (productID, qty) => (dispatch, getState ) => {
    axios(`/api/products/${productID}`).then(res => {
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
  localStorage.setItem('cart', JSON.stringify(getState().cart.data))

};
export const removeFromCartAction = (removeID) => (dispatch, getState) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: removeID //*to Remove item from Cart we just need to pass removeID to reducer
    });
  localStorage.setItem('cart', JSON.stringify(getState().cart.data))
}
