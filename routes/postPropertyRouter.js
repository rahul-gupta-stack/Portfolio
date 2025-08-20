// Core Module
const express = require('express');
const postPropertyRouter = express.Router();

// local module
const propertyController = require('../controller/propertyController');

postPropertyRouter.get('/post-property', propertyController.getAddProperty);
postPropertyRouter.get('/my-listing', propertyController.getMyListing);
postPropertyRouter.post('/post-property', propertyController.postAddProperty);


// module.exports = postPropertyRouter;
exports.postPropertyRouter = postPropertyRouter;

