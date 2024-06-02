const pmodel = require("../models/Products.model");
const mongoose = require("mongoose");
const RegisterModel = require("../models/Register.model");
const ProductsControllers = async (req, res) => {
  try {
    const newproduct = new pmodel(req.body);
    await newproduct.save();
    res.status(201).send("product created");
  } catch (err) {
    res.status(500).send(err);
  }
};

const GetProducts = async (req, res) => {
  try {
    const products = await pmodel.find();
    res.status(200).send(products);
  } catch (err) {
    res.send(err);
  }
};

//ADD TO CART LOGIC
const AddToCart = async (req, res) => {
  const { UserId } = req.body;
  const { productId } = req.query;
  try {
    const user = await RegisterModel.findById({ _id: UserId });
    console.log(user, "user");
    const checkProduct = user.cart.find(
      (item) => item.productId.toString() === productId
    );
    console.log(checkProduct, "pp");
    if (checkProduct) {
      checkProduct.count += 1;
    } else {
      user.cart.push({ productId, count: 1 });
    }
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    res.send(err);
  }
};

module.exports = { ProductsControllers, GetProducts, AddToCart };
