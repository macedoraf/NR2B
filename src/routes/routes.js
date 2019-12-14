'use strict';
const express = require('express');
const routes = express.Router();
const ClienteController = require('../controller/ClienteController');
const AcademiaController = require('../controller/AcademiaController');

routes.get('/', (req,res) => {
   return res.json({hello: 'World'})
})

routes.post('/clientes', ClienteController.store);

routes.get('/clientes', ClienteController.index);

routes.post('/academia', AcademiaController.store);

routes.get('/academia', AcademiaController.index);

module.exports = routes;