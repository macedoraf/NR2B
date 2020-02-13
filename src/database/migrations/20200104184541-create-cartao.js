'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Cartoes', {

      id: {
        primaryKey: true,
        autoIncrement: true,
      },
      
      numeroCartao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nameTitular: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataValidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bandeira: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      // relacionamento com a tabela de cliente

      cliente_cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'Clientes', key: 'cpf' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      // marcadores de criação e modificação de dados do banco

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
    return queryInterface.dropTable('Cartoes');
  }
};
