const express = require('express');

const AttractionsRoutes = express.Router();

const Attractions = require('../Controllers/Attractions')

//GET all the tours/
AttractionsRoutes.get('/',Attractions.getAllAttractions)
AttractionsRoutes.get('/Attraction/:id', Attractions.getAttractionsCard)
AttractionsRoutes.get('/:id',Attractions.getDetailsOfAttraction)

module.exports  = AttractionsRoutes;