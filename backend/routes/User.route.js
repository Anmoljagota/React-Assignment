const express = require("express");
const {
  Register,
  login,
  userDetails,
} = require("../controllers/Register.controller");
const { AddToCart } = require("../controllers/Products.controllers");
const CheckUserAuth = require("../middlewares/UserAuth");
const User = express.Router();
User.post("/register", Register);
User.post("/login", login);
User.post("/cart", CheckUserAuth, AddToCart);
User.get("/details", CheckUserAuth, userDetails);
module.exports = User;
