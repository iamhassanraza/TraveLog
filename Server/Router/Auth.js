const express = require('express');

const AuthRouter = express.Router();

const AuthController = require('../Controllers/AuthController')
const validation = require('../Middleware/validation')


//GET all the tours/
AuthRouter.post('/signup',[validation.validateSignupEmail,validation.validatePassword],AuthController.signup)
AuthRouter.post('/signin',[validation.validateSignupEmail],AuthController.signin)


module.exports  = AuthRouter;