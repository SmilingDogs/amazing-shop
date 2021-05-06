import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actions/actionTypes";

const INITIAL_STATE = {
  data: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const itemToAdd = action.payload; //*  from action.payload -> {name: res.data.
      //* image: res.data.image,
      //* price: res.data.price,
      //* countInStock: res.data.countInStock,
      //* product: res.data._id, here product === _id (for the database needs)
      //* qty,};
      const alreadyInCart = state.data.find((i) => i.product === itemToAdd.product); //*i.product === i._id!
      if (alreadyInCart) {
        return { ...state, data: state.data.map(i => i.product === alreadyInCart.product ? itemToAdd : i )}
      } return {...state, data: [...state.data, itemToAdd]}
    case CART_REMOVE_ITEM:
      return {...state, data: state.data.filter(i => i.product !== action.payload)} //*i.product === i._id! here (product: res.data._id,)
    default:
      return state;
  }
};

export default reducer;
