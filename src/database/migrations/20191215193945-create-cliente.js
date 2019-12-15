"use strict";

const tableName = "tb_estabelecimento";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const table = queryInterface.createTable(tableName, {
      cpf: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      }
    });
    return table;
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
