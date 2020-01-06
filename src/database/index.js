const Sequelize = require('sequelize'); //efetuando o import do sequelize para utlização
const dbConfig = require('../config/database');//efetuando o import da configuração de comunicação com o banco de dados
const Cliente = require('../models/Cliente')
const Estabelecimento = require('../models/Estabelecimento')
const Mesa = require('../models/Mesa')
const Funcionario = require('../models/Funcionario')
const Item = require('../models/Item')
const Cartao = require('../models/Cartao')

//criando a conexão com o banco de dados - chamando o Sequelize que foi importado e jagando o JSON da config/database.js
const connection =  new Sequelize(dbConfig);

Cliente.init(connection);
Estabelecimento.init(connection);
Mesa.init(connection);
Funcionario.init(connection);
Item.init(connection);
Cartao.init(connection);

module.exports = connection;

