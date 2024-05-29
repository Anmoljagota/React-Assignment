const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: Number,
    password: { type: String, required: true, unique: true },
  },
  {
    versionKey: false,
  }
);

const RegisterModel = mongoose.model("Users", schema);
module.exports = RegisterModel;
