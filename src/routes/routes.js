'use strict';
const express = require('express');
const routes = express.Router();
const ClienteController = require('../controller/ClienteController');
const EstabelecimentoController = require('../controller/EstabelecimentoController');

routes.get('/', (req,res) => {
   return res.json({hello: 'World'})
})

routes.post('/clientes', ClienteController.store);

routes.get('/clientes', ClienteController.index);

routes.post('/estabelecimento', EstabelecimentoController.store);

routes.get('/estabelecimento', EstabelecimentoController.index);

module.exports = routes;