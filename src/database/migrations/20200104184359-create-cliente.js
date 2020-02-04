'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('Clientes', { 
        
        //dados cadastrais do cliente
        
        cpf: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        sbname:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        telefone:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        // marcador de criação dos dados e de alteração de dados

        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        }, 

      });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Clientes');
  }
};
