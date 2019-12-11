'use strict';
const express = require('express');
const routes = express.Router();
const ClienteController = require('../controller/ClienteController');

routes.get('/', (req,res) => {
   return res.json({hello: 'World'})
})

routes.post('/clientes',ClienteController.store);

routes.get('/clientes',ClienteController.index);

module.exports = routes;