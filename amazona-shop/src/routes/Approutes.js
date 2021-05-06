import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import ProductScreen from "../components/ProductScreen/ProductScreen";
import SigninScreen from "../components/SigninScreen/SigninScreen";
import CartScreen from "../components/CartScreen/CartScreen";
import RegisterScreen from "../components/RegisterScreen/RegisterScreen";

function Approutes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/product/:id" component={ProductScreen} />
      <Route exact path="/signin" component={SigninScreen} />
      <Route exact path="/cart/:id?" component={CartScreen} />
      <Route exact path="/register" component={RegisterScreen} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Approutes;
