const express = require('express');

const router = express.Router();

const TourControllers = require('../Controllers/Tours')

//GET all the tours/
router.get('/',TourControllers.getAllTours)

//GET tours/plan/1
router.get('/plan/:tourID',TourControllers.getTourPlan)

module.exports  = router;