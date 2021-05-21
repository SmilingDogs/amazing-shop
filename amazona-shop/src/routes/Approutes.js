import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminProductsScreen from "../pages/Admin/ProductsScreen";
import ProfileScreen from "../pages/ProfileScreen/ProfileScreen";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import { publicRoutes } from "./publicRoutes";

function Approutes() {
  return (
    <main>
      <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
        <PrivateRoute path="/profile"><ProfileScreen /></PrivateRoute>
        <AdminRoute path="/productlist" component={AdminProductsScreen}></AdminRoute>
      </Switch>
    </main>
  );
}

export default Approutes;
