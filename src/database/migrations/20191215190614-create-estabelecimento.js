"use strict";

const tableName = "tb_tipo_estabelecimento";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const table = queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
    return table;
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
