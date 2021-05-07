import React from "react";
import { Switch, Route } from "react-router-dom";
import CartScreen from "../pages/CartScreen/CartScreen";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import PaymentMethodScreen from "../pages/PaymentMethodScreen/PaymentMethodScreen";
import PlaceOrderScreen from "../pages/PlaceOrderScreen/PlaceOrderScreen";
import ProductScreen from "../pages/ProductScreen/ProductScreen";
import RegisterScreen from "../pages/RegisterScreen/RegisterScreen";
import ShippingAddressScreen from "../pages/ShippingAddressScreen/ShippingAddressScreen";
import SigninScreen from "../pages/SigninScreen/SigninScreen";

function Approutes() {
  return (
    <Switch>
      <Route path="/" component={HomeScreen} exact/>
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/signin" component={SigninScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/shipping" component={ShippingAddressScreen}></Route>
      <Route path="/payment" component={PaymentMethodScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
    </Switch>
  );
}

export default Approutes;
