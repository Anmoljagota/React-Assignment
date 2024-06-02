const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema(
  {
    productId: { type: mongoose.Types.ObjectId, ref: "products" },
    count: { type: Number, default: 0 },
  },
  { _id: false }
);

const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: Number,
    password: { type: String, required: true, unique: true },
    cart: [cartItemSchema],
  },
  {
    versionKey: false,
  }
);

const RegisterModel = mongoose.model("Users", schema);
module.exports = RegisterModel;
