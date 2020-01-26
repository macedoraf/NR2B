'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('pedidos', { 
        idPedido: {
          type: Sequelize.INTEGER,
          primarykey: true,
          allowNull: false,
        },
        dataInicio:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        dataTermino:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }, 

      });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('pedidos');
  }
};
