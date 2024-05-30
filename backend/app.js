const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const Product_Route = require("./routes/Products.route");
const User = require("./routes/User.route");
require("dotenv").config();
const conn = require("./config/db");
const app = express();
app.use(express.json());
app.use(helmet());
app.use("/", Product_Route);
app.use("/", User);
app.use(cors());
app.listen(process.env.PORT, async () => {
  try {
    await conn;
    console.log("connected to DB");
    console.log(`server is listening on port ${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
});
