import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import { signin } from "../../store/actions/user-actions";
import { connect } from "react-redux";
import { loadingSigninSelector, userSigninSelector, errorSigninSelector } from "../../store/selectors/user-selectors";

function SigninScreen({
  history,
  location,
  dispatch,
  userInfo,
  error,
  loading,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <Loader />}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
            New customer?
            <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link>
          </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userInfo: userSigninSelector(state),
    loading: loadingSigninSelector(state),
    error: errorSigninSelector(state),
  };
};
export default connect(mapStateToProps)(SigninScreen);
