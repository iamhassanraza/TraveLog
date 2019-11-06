const express = require('express');

const router = express.Router();

const TourControllers = require('../Controllers/Tours')

//GET all the tours/
router.get('/:from&:to',TourControllers.getAllTours)


module.exports  = router;