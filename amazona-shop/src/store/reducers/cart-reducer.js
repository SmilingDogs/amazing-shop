import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_DETAILS,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  data: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  shippingDetails: localStorage.getItem("shippingDetails")
    ? JSON.parse(localStorage.getItem("shippingDetails"))
    : {},
  paymentMethod: "PayPal",
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
      const alreadyInCart = state.data.find(
        (i) => i.product === itemToAdd.product
      ); //*i.product === i._id!
      if (alreadyInCart) {
        return {
          ...state,
          data: state.data.map((i) =>
            i.product === alreadyInCart.product ? itemToAdd : i
          ),
        };
      }
      return { ...state, data: [...state.data, itemToAdd] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        data: state.data.filter((i) => i.product !== action.payload),
      }; //*i.product === i._id! here (product: res.data._id,)
    case CART_SAVE_SHIPPING_DETAILS:
      return { ...state, shippingDetails: action.payload };
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    default:
      return state;
  }
};

export default reducer;
