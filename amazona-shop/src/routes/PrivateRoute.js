import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const { userInfo } = useSelector((state) => state.userSignin);

  return (
    <Route
      {...rest}
      render={() => (userInfo ? { children } : <Redirect to="/signin" />)}
    ></Route>
  );
}
export default PrivateRoute;
