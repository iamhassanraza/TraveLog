const express = require('express');

const router = express.Router();

const TourControllers = require('../Controllers/Tours')

// GET all the tours/
router.get('filter/',TourControllers.getAllTours)

router.get('/:tourID',TourControllers.getTourById)

// GET tours/plan/1
router.get('/plan/:tourID',TourControllers.getTourPlan)

router.get('/card/:tourID',TourControllers.getTourCard)

router.get('/operatorcard/:operatorId',TourControllers.getOperatorCard)

module.exports  = router;