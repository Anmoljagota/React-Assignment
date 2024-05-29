const pmodel = require("../models/Products.model");
const ProductsControllers = async (req, res) => {
  try {
    const newproduct = new pmodel(req.body);
    await newproduct.save();
    res.status(201).send("product created");
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = { ProductsControllers };
