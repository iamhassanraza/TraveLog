const express = require('express');

const DestinationsRouter = express.Router();

const Destinations = require('../Controllers/Destinations')

//GET all the tours/
DestinationsRouter.get('/filter',Destinations.getAllDestinations)
DestinationsRouter.get('/card/:id',Destinations.getDestinationCard)
DestinationsRouter.get('/attraction/:id', Destinations.getAttractionsCard)
DestinationsRouter.get('/:id',Destinations.getDetailsOfDestination)

module.exports  = DestinationsRouter;