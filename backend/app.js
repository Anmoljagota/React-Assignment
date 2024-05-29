const express = require("express");
const Product_Route = require("./routes/Products.route");
require("dotenv").config();
const conn = require("./config/db");
const app = express();
app.use(express.json());
app.use("/", Product_Route);
app.listen(process.env.PORT, async () => {
  try {
    await conn;
    console.log("connected to DB");
    console.log(`server is listening on port ${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
});
