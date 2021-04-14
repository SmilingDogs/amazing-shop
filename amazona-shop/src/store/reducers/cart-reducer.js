import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actions/actionTypes";

const INITIAL_STATE = {
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const itemToAdd = action.payload; //* get item to add to Cart from action.payload {object};
      const alreadyInCart = state.cart.find((i) => i.product === itemToAdd.product); //*i.product === i._id!!! here (product: res.data._id,)
      if (alreadyInCart) {
        return { ...state, cart: state.cart.map(i => i.product === alreadyInCart.product ? itemToAdd : i )}
      } return {...state, cart: [...state.cart, itemToAdd]}
    case CART_REMOVE_ITEM:
      return {...state, cart: state.cart.filter(i => i.product !== action.payload)} //*i.product === i._id!!! here (product: res.data._id,)
    default:
      return state;
  }
};

export default cartReducer;
