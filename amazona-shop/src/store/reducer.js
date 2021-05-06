import { combineReducers } from "redux";
import cartReducer from "./reducers/cart-reducer";
import productReducer from "./reducers/details-reducer";
import productListReducer from "./reducers/product-reducer";
import signinReducer from './reducers/usersignin-reducer';
import registerReducer from './reducers/userregister-reducer';

const reducer = combineReducers({
  productList: productListReducer,
  product: productReducer,
  cart: cartReducer,
  userSignin: signinReducer,
  userRegister: registerReducer,

});

export default reducer;
