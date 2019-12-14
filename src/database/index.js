const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Cliente = require('../models/Cliente')
const Academia = require('../models/Academia')

const connection = new Sequelize(dbConfig);

Cliente.init(connection);
Academia.init(connection);

module.exports = connection;