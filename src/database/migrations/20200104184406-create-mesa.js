'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('mesas', { 
      idMesa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      // relacionamento com a tabela de estabelecimento

      estabelecimento_cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'estabelecimentos', key: 'cnpj' },
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
    return queryInterface.dropTable('mesas');
}
};
