const express = require('express');

const router = express.Router();

const TourControllers = require('../Controllers/Tours')

//GET all the tours/
router.get('/',TourControllers.getAllTours)


module.exports  = router;