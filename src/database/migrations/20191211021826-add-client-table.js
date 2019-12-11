'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('clientes',
      {
        cpfCliente: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNulll: false
        },
        nome : {
          type: Sequelize.TEXT,
          allowNulll:false
        },
        email : {
          type: Sequelize.TEXT,
          allowNulll:false
        },
        telefone : {
          type: Sequelize.TEXT,
          allowNulll:false
        },
        senha : {
          type: Sequelize.TEXT,
          allowNulll:false
        }

      });

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('clientes');
    
  }
};
