const express = require('express');

const DestinationsRouter = express.Router();

const Destinations = require('../Controllers/Destinations')

//GET all the tours/
DestinationsRouter.get('/',Destinations.getAllDestinations)
DestinationsRouter.get('/name/:id',Destinations.getNameOfDestination)


module.exports  = DestinationsRouter;