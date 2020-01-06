const Sequelize = require('sequelize'); //efetuando o import do sequelize para utlização
const dbConfig = require('../config/database');//efetuando o import da configuração de comunicação com o banco de dados
const Cliente = require('../models/Cliente')
const Estabelecimento = require('../models/Estabelecimento')

//criando a conexão com o banco de dados - chamando o Sequelize que foi importado e jagando o JSON da config/database.js
const connection =  new Sequelize(dbConfig);

Cliente.init(connection);
Estabelecimento.init(connection);

module.exports = connection;

