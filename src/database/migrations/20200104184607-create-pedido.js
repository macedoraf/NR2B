'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('pedidos', { 
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
          references: { model: 'estabelecimentos', key: 'cnpj' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },

        cliente_cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'clientes', key: 'cpf'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },

        mesa_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'mesas', key: 'idMesa'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        
        funcionario_cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'funcionarios', key: 'cpf'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },

       


        // marcadores de criação e modificação de dados do banco

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
