const express = require('express');

const DestinationsRouter = express.Router();

const Destinations = require('../Controllers/Destinations')

//GET all the tours/
// DestinationsRouter.get('/',Destinations.getAllDestinations)
// DestinationsRouter.get('/Card/:id',Destinations.getDestinationCard)
// // DestinationsRouter.get('/Attraction/:id', Destinations.getAttractionsCard)
// DestinationsRouter.get('/:id',Destinations.getDetailsOfDestination)

module.exports  = DestinationsRouter;