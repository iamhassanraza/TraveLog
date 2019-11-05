const express = require('express');

const router = express.Router();

const TourControllers = require('../Controllers/Tours')

//GET all the tours
router.get('/Tours/:start&:count',TourControllers.getAllTours)