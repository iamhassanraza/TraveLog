require("../config/Passport");
const express = require("express");

const AuthRouter = express.Router();
const passport = require("passport");

const AuthController = require("../Controllers/AuthController");
const validation = require("../Middleware/validation");

//GET all the tours/
AuthRouter.post(
  "/signup",
  [validation.validateSignupEmail, validation.validatePassword],
  AuthController.signup
);

AuthRouter.post(
  "/signin",
  [validation.validateSignupEmail],
  AuthController.signin
);
///================ LOGIN WITH GOOGLE ====================// 

AuthRouter.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["openid", "profile", "email"]
  })
);

AuthRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login",session:false }),
  function(req, res) {
    res.send(req.user);
  }
);
//======================================================//
///================ LOGIN WITH Facebook ====================// 

AuthRouter.get(
  "/facebook",
  passport.authenticate("facebook", { scope:['email'],session:false })
);

AuthRouter.get(
  "/facebook/callback/",
  passport.authenticate("facebook", { failureRedirect: "/login",session:false,scope:['email'] }),
  function(req, res) {
    console.log('agaya isme')
    res.send(req.user);
  }
);
//======================================================//



module.exports = AuthRouter;
