const express = require('express');
const userController = require('./controllers/userController');

const route = express.Router();

route.get('/users', userController.index);

route.post('/users', userController.store); 

module.exports = route;
