const express = require("express");
const Product_Route = express.Router();
const { ProductsControllers } = require("../controllers/Products.controllers");
Product_Route.post("/products", ProductsControllers);
module.exports = Product_Route;
