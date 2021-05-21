import { combineReducers } from "redux";
import cartReducer from "./reducers/cart-reducer";
import productReducer from "./reducers/details-reducer";
import productListReducer from "./reducers/products-reducer";
import signinReducer from './reducers/usersignin-reducer';
import registerReducer from './reducers/userregister-reducer';
import productCreateReducer from './reducers/create-reducer';
import productUpdateReducer from './reducers/update-reducer';
import productDeleteReducer from './reducers/delete-reducer';

const reducer = combineReducers({
  allProducts: productListReducer,
  product: productReducer,
  cart: cartReducer,
  userSignin: signinReducer,
  userRegister: registerReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,

});

export default reducer;
