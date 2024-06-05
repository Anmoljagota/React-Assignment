import React, { useEffect, useState } from "react";
import User from "../components/User";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../redux/User/action";
import Otp from "../components/Otp";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const details = ["email", "password"];
  const uservalue = { email: "", password: "" };
  const { message } = useSelector((details) => {
    return details.User;
  });
  const [loginDetails, setLoginDetails] = useState(uservalue);
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");
  const handleDetails = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  //TO CHECK THE MAIL PATTERNN
  const validateEmailFormat = (email) => {
    email = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = () => {
    if (!validateEmailFormat(loginDetails.email)) {
      setError("email");
      setFormError("write valid email");
    } else if (loginDetails.password.length < 4) {
      setError("password");
      setFormError("must be atleast five characters");
    } else {
      dispatch(LoginUser(loginDetails));
    }
  };
  useEffect(() => {
    // if (message.message === "logged in successfully") {
    //   navigate("/");
    // }
  }, [message]);
  return (
    <div>
      {message?.message !== "OTP sent" &&
      message?.message !== "wrong otp" &&
      message?.message !== "logged in successfully" ? (
        <>
          <User
            title={"Login"}
            details={details}
            uservalue={loginDetails}
            handleDetails={handleDetails}
            handleSubmit={handleSubmit}
            error={error}
            formError={formError}
          />
        </>
      ) : (
        <Otp />
      )}
    </div>
  );
};

export default Login;
