// import { body } from "express-validator";
const body = require("express-validator").body
const con = require("../db");


exports.validateSignupEmail = body(
  "email",
  "Please enter a valid e-mail address."
)
  .isEmail()
 


exports.validatePassword = body(
  "password",
  "Please enter a alphanumeric password and at least 6 characters long."
)
  .isLength({ min: 6 })
  .isAlphanumeric()
  .trim().custom((val, { req }) => {
    if (val !== req.body.confirm_password) {
        throw new Error("Passwords don't match");
    } else {
        return true;
    }
});

