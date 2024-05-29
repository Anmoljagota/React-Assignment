const express = require("express");
const { Register, login } = require("../controllers/Register.controller");
const User = express.Router();
User.post("/register", Register);
User.post("/login", login);
module.exports = User;
