import { combineReducers } from "redux";
import cartReducer from "./reducers/cart-reducer";
import productReducer from "./reducers/details-reducer";
import productListReducer from "./reducers/products-reducer";
import productCreateReducer from "./reducers/create-reducer";
import productUpdateReducer from "./reducers/update-reducer";
import productDeleteReducer from "./reducers/delete-reducer";
import {
  userSigninReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  allProducts: productListReducer,
  product: productReducer,
  cart: cartReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

export default reducer;
