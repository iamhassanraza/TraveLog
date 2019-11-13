const express = require('express')
const rout = express.Router()

const OperatorControllers = require('../Controllers/Operators')

rout.get('/', OperatorControllers.getAllOperators)

//rout.get('/review/:category/:operatorid', OperatorControllers.getReviews)

module.exports = rout;