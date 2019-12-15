"use strict";

const tableName = "tb_estabelecimento";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const table = queryInterface.createTable(tableName, {
      cnpj: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nomeFantasia: {
        type: Sequelize.STRING
      },
      razaoSocial: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      tipoEstabelecimento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "tb_tipo_estabelecimento", key: "id" }
      }
    });
    return table;
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
