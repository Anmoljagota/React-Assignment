const jwt = require("jsonwebtoken");

const CheckUserAuth = (req, res, next) => {
  const token = req.headers.auth;
  if (token) {
    const decode = jwt.verify(token, "checklogin");
    console.log(decode, "decode");
    if (decode) {
      console.log("running");
      req.body.UserId = decode.UserId;
      next();
    } else {
      res.send({ message: "something wrong" });
    }
  } else {
    res.send({ message: "login first" });
  }
};

module.exports = CheckUserAuth;
