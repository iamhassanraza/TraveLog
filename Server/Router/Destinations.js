const express = require('express');

const DestinationsRouter = express.Router();

const Destinations = require('../Controllers/Destinations')

//GET all the tours/
DestinationsRouter.get('/',Destinations.getAllDestinations)


module.exports  = DestinationsRouter;