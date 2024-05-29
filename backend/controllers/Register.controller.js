const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");
const RegisterModel = require("../models/Register.model");
const jwt = require("jsonwebtoken");
//USER REGISTER CONTROLLER
const Register = async (req, res) => {
  const { name, phone, email, password } = req.body;
  const checkemail = await RegisterModel.find({ email });
  if (!isEmail(email)) {
    res.status(400).send("Invalid email address");
  } else if (checkemail.length > 0) {
    res.status(400).send("User Already exist");
  } else {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          res.status(400).send(err);
        } else {
          try {
            const User = new RegisterModel({
              name,
              email,
              phone,
              password: hash,
            });
            await User.save();
            res.status(201).send("User created");
          } catch (err) {
            res.status(400).send(err);
          }
        }
      });
    });
  }
};

//USER LOGIN CONTROLLER
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkuser = await RegisterModel.find({ email });
    console.log(password, "check");
    if (checkuser.length > 0) {
      bcrypt.compare(password, checkuser[0].password, function (err, result) {
        if (err) {
          res.send(err);
        } else if (!result) {
          res.status(401).send("Incorrect Password");
        } else {
          console.log("hooo");
          const token = jwt.sign({ UserId: checkuser[0]._id }, "checklogin");
          res.status(200).send(token);
        }
      });
    } else {
      res.status(401).send("Incorrect email");
    }
  } catch (err) {
    console.log("c...");
    res.status(500).send(err);
  }
};

module.exports = { Register, login };
