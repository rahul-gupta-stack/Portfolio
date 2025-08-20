// Core Module
const express = require('express');

const propertyRouter = express.Router();

const propertyController = require('../controller/propertyController');

propertyRouter.get('/', propertyController.getIndex);
propertyRouter.get('/property-list', propertyController.getProperty);
propertyRouter.get('/property-list/:propertyId', propertyController.getPropertyDetails);

propertyRouter.get('/bookings', propertyController.getBookings);
propertyRouter.get('/favourite-list', propertyController.getFavouriteList);


module.exports = propertyRouter;
