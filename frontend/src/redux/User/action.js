import * as User from "./actionTypes";
import axios from "axios";
const RegiterUser = (details) => async (dispatch) => {
  try {
    dispatch({ type: User.USER_REGISTER_LOADING });
    const res = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
    });
    const data = await res.text();
    dispatch({ type: User.USER_REGISTER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: User.USER_REGISTER_ERROR });
    console.log(err);
  }
};

//LOGIN LOGIC
const LoginUser = (details) => async (dispatch) => {
  const url = details.otp
    ? `http://localhost:8080/login?otp=${details.otp}`
    : "http://localhost:8080/login";
  console.log(url, "url..");
  try {
    dispatch({ type: User.USER_REGISTER_LOADING });
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
      credentials: "include",
    });
    const data = await res.json();
    console.log(data.data, "res");
    dispatch({ type: User.USER_REGISTER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: User.USER_REGISTER_ERROR });
    console.log(err);
  }
};

const UserDetails = () => async (dispatch) => {
  try {
    dispatch({ type: User.GET_USERDETAILS_LOADING });
    const data = await axios.get(`http://localhost:8080/details`, {
      withCredentials: true,
    });
    console.log(data, "data...");
    // const data = await res.json();
    dispatch({ type: User.GET_USERDETAILS_SUCCESS, payload: data.data });
  } catch (err) {
    console.log(err, "err");
    dispatch({ type: User.GET_USERDETAILS_ERROR });
  }
};

export { RegiterUser, LoginUser, UserDetails };
