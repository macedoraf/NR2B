'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Funcionarios', { 
      cpf: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobreNome:{
        type: Sequelize.STRING,
        allowNull:false
      },
      cargo:{
        type:Sequelize.STRING,
        allowNull: false
      },
      telefone:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      
      // relacionamento com a tabela de estabelecimento

      estabelecimento_cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'Estabelecimentos', key: 'cnpj'},
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
    return queryInterface.dropTable('Funcionarios');
}
};
