require("dotenv").config();
const mongoose = require("mongoose");
const conn = mongoose.connect(process.env.MONGODB_URL);
module.exports = conn;
