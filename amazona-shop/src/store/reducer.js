import { combineReducers } from "redux";
import productDetailsReducer from "./reducers/details-reducer";
import productListReducer from "./reducers/product-reducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,

});

export default reducer;
