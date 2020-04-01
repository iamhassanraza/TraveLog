const express = require('express');

const ContactRouter = express.Router();

const Contact = require('../Controllers/Contact');


ContactRouter.post('/', Contact.sendMessage);



module.exports  = ContactRouter;