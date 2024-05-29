import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SinglePage from "../components/SinglePage";
import Favourate from "../components/Favourate";
import { useSelector } from "react-redux";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
const AllRoutes = () => {
  const { wishlist, cartItems } = useSelector((favourate) => {
    return favourate.Products;
  });
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail/:id" element={<SinglePage />}></Route>
      <Route
        path="/favourate"
        element={<Favourate items={wishlist} text={"Your Wishist"} />}
      />
      <Route
        path="/cart"
        element={<Favourate items={cartItems} text={"Cart Items"} />}
      />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default AllRoutes;
