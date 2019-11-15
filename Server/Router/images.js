const express = require('express')
const rout = express.Router()

const imageController = require('../Controllers/images')

rout.get('/:category/:imagetype/:reference', imageController.getimages)

//rout.get('/review/:category/:operatorid', OperatorControllers.getReviews)

module.exports = rout;