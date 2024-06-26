const express = require("express");
const Product_Route = express.Router();
const {
  ProductsControllers,
  GetProducts,
} = require("../controllers/Products.controllers");
Product_Route.post("/products", ProductsControllers);
Product_Route.get("/products", GetProducts);
module.exports = Product_Route;
