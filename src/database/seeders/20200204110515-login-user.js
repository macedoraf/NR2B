'use strict';

const tableName = 'Clientes'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [
      {
        cpf: '12345678910',
        name: 'Rafael ',
        sbname: 'Macedo',
        telefone: '11980841888',
        password: '123456',
        email: 'macedo.rafanazareth@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '109876543221',
        name: 'Rafael 2 ',
        sbname: 'Macedo 2',
        telefone: '11980841899',
        password: '123456',
        email: 'macedo.rafanazareth2@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
