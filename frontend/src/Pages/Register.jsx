import React, { useState } from "react";
import User from "../components/User";
import { useDispatch } from "react-redux";
import { RegiterUser } from "../redux/User/action";

const Register = () => {
  const dispatch = useDispatch();
  const details = ["name", "email", "phone", "password"];
  const uservalue = { name: "", email: "", phone: "", password: "" };
  const [loginDetails, setLoginDetails] = useState(uservalue);

  const handleDetails = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(RegiterUser(loginDetails));
  };
  return (
    <div>
      <User
        title={"Register"}
        details={details}
        uservalue={loginDetails}
        handleDetails={handleDetails}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Register;