import { combineReducers } from "redux";
import cartReducer from "./reducers/cart-reducer";
import productDetailsReducer from "./reducers/details-reducer";
import productListReducer from "./reducers/product-reducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cartDetails: cartReducer,

});

export default reducer;
