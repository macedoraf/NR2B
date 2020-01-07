'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('mesas', { 
      idMesa: {
        type: Sequelize.INTEGER,
        primarykey: true,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
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
