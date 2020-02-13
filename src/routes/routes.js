'use strict';
const express = require('express');
const jwt = require('jsonwebtoken')
const routes = express.Router();
const ClienteController = require('../controller/ClienteController');
const EstabelecimentoController = require('../controller/EstabelecimentoController');
const ItemController = require('../controller/ItemController');
const PedidoController = require('../controller/PedidoController');
const MesaController = require('../controller/MesaController');
const FuncionarioController = require('../controller/FuncionarioController');
const ImagemController = require('../controller/ImagemController');


const verifyJWT = (req, res, next) => {
   const token = req.headers['x-access-token']
   if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
   jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
      next();
   })
};


routes.get('/', (req, res) => {
   return res.json({ hello: 'World' })
})



//Chamadas que o App fará deverão ser autenticadas via JWT

//Chamadas que fazem parte do APP



//Rotas autenticadas

//Rotas não autenticadas

//Authentication
routes.post('/authentication', (req, res) => {
   ClienteController.authentication(req, res)
});

//Cadastro

routes.post('/signin', (req, res) => {
   ClienteController.signIn(req, res)

})




//rotas para cliente
routes.post('/cliente', ClienteController.store);
routes.get('/cliente', ClienteController.index);

//rotas para estabelecimento
routes.post('/estabelecimento', EstabelecimentoController.store);
routes.get('/estabelecimento', EstabelecimentoController.index);

//rotas para item
routes.post('/item', ItemController.store);
routes.get('/item', ItemController.index);

//rotas para pedido
routes.post('/pedido', PedidoController.store);
routes.get('/pedido', PedidoController.index);

//rotas para mesa
routes.post('/mesa', MesaController.store);
routes.get('/mesa', MesaController.index);

//rotas para funcionarios
routes.post('/funcionario', FuncionarioController.store);
routes.get('/funcionario', FuncionarioController.index);

//rotas para imagens
routes.post('/imagem', ImagemController.store)
routes.get('/imagem', ImagemController.find)

module.exports = routes;