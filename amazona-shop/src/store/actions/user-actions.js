import axios from "axios";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "./actionTypes";

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } }); //todo отправляем ЗНАЧЕНИЯ name, email, password ввиде Объекта

  try {
    //todo 1param === "/api/users/register", 2 param - Объект
    const { data } = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    //* data === Object User from Backend
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: message,
    });
  }
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } }); //todo отправляем ЗНАЧЕНИЯ email, password ввиде Объекта

  try {
    //todo 1param === "/api/users/signin", 2 param is {email, password} obj
    const { data } = await axios.post("/api/users/signin", { email, password });
    //*data === Object user from Backend
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cart");
  localStorage.removeItem("shippingDetails");
  dispatch({ type: USER_SIGNOUT });
};
