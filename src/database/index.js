const Sequelize = require('sequelize'); //efetuando o import do sequelize para utlização
const dbConfig = require('../config/database');//efetuando o import da configuração de comunicação com o banco de dados
const Cliente = require('../models/Cliente')
<<<<<<< HEAD
const Academia = require('../models/Academia')
=======
>>>>>>> 0d142574ef4f2f8a5df11cc154200aab95258b61

//criando a conexão com o banco de dados - chamando o Sequelize que foi importado e jagando o JSON da config/database.js
const connection =  new Sequelize(dbConfig);

Cliente.init(connection);
Academia.init(connection);

module.exports = connection;

