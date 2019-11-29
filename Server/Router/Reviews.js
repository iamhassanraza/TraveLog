const express = require('express')
const rout = express.Router()

const reviewControllers = require('../Controllers/Reviews')

rout.get('/operator/:reference', reviewControllers.getAllReviews)

module.exports = rout;