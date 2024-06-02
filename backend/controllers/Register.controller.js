const { isEmail } = require("validator");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const RegisterModel = require("../models/Register.model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
let otp;
let userIdcache;
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
  if (req.query.otp) {
    if (otp === +req.query.otp) {
      const token = jwt.sign({ UserId: userIdcache }, "checklogin");
      res.status(200).send({ message: token });
    } else {
      res.status(200).send({ message: "wrong otp" });
    }
  } else {
    try {
      const checkuser = await RegisterModel.find({ email });
      if (checkuser.length > 0) {
        userIdcache = checkuser[0]._id;
        bcrypt.compare(password, checkuser[0].password, function (err, result) {
          if (err) {
            res.send(err);
          } else if (!result) {
            res.status(401).send({ message: "Incorrect Password" });
          } else {
            otp = Math.floor(1000 + Math.random() * 9000);

            const transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
              },
            });

            const info = {
              from: "anmoljagota08@gmail.com",
              to: email,
              subject: "email verification shop.com",
              html: `
                  <b>Hello!</b>
                  <p>You are receiving this email because we received an OTP request for your account.</p>
                  <p>${otp}</p>
                  <p>If you did not request an OTP, no further action is required.</p>
                  <p>Regards,</p>
                  <p>shop.com</p>
                `,
            };

            transporter.sendMail(info, (err, result) => {
              if (err) {
                // console.log(`error in sending mail ${err}`);
              } else {
                res.status(200).send({ message: "OTP sent" });
              }
            });
          }
        });
      } else {
        userIdcache;
        res.status(401).send({ message: "Incorrect email" });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
module.exports = { Register, login };
