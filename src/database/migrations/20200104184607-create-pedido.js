'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('Pedidos', { 
        idPedido: {
          type: Sequelize.INTEGER,
          primaryKey: true,
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


        // relacionamento com a tabela de estabelecimento, cliente, mesa e funcionario

        estabelecimento_cnpj: {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'Estabelecimentos', key: 'cnpj' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },

        cliente_cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'Clientes', key: 'cpf'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },

        mesa_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'Mesas', key: 'idMesa'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        
        funcionario_cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'Funcionarios', key: 'cpf'},
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
      return queryInterface.dropTable('Pedidos');
  }
};
