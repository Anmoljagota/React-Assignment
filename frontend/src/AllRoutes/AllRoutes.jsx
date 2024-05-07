import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SinglePage from "../components/SinglePage";
import Favourate from "../components/Favourate";
import { useSelector } from "react-redux";
const AllRoutes = () => {
  const { wishlist, cartItems } = useSelector((favourate) => {
    return favourate.Products;
  });
  console.log(wishlist, "allroutes");
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail/:id" element={<SinglePage />}></Route>
      <Route path="/favourate" element={<Favourate items={wishlist} text={"Your Wishist"}/>} />
      <Route path="/cart" element={<Favourate items={cartItems} text={"Cart Items"}/>} />
    </Routes>
  );
};

export default AllRoutes;
