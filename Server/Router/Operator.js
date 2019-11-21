const express = require('express')
const rout = express.Router()

const OperatorControllers = require('../Controllers/Operators')

rout.get('/', OperatorControllers.getAllOperators)
rout.get('/card/:operatorId/:userId', OperatorControllers.operatorCard)

//rout.get('/review/:category/:operatorid', OperatorControllers.getReviews)

module.exports = rout;