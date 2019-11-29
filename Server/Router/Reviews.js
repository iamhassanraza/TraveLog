const express = require('express')
const rout = express.Router()

const reviewControllers = require('../Controllers/Reviews')

rout.get('/:category/:reference', reviewControllers.getAllReviews)

module.exports = rout;