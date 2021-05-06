import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import { register } from "../../store/actions/user-actions";
import { connect } from "react-redux";

function RegisterScreen({
  history,
  location,
  dispatch,
  userInfo,
  error,
  loading,
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
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
          <h1>Register</h1>
        </div>
        {loading && <Loader />}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
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
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an acount? <Link to="/signin">Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userInfo: state.userRegister.userInfo,
    loading: state.useRegister.loading,
    error: state.userRegister.error,
  };
};
export default connect(mapStateToProps)(RegisterScreen);
