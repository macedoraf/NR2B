'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Itens', { 
      idItem: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      //relações com a tabela estabelecimento
      
      estabelecimento_cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'Estabelecimentos', key: 'cnpj'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      //marcadores temporais
      
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
    return queryInterface.dropTable('Itens');
}
};
