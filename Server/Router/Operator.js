const express = require('express')
const rout = express.Router()

const OperatorControllers = require('../Controllers/Operators')

rout.get('/', OperatorControllers.getAllOperators)

module.exports = rout;