const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: {
    rate: Number,
    count: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const pmodel = mongoose.model("products", ProductSchema);
module.exports = pmodel;
