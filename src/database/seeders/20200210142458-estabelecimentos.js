'use strict';

const tableName = 'Estabelecimentos'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [
      {
        cnpj:"42591651000143",
        razaoSocial: "ARCOS DOURADOS COMERCIO DE ALIMENTOS",
        nomeFantasia: "McDonalds I",
        telefone: "telefone",
        cep: "06090023",
        cidade: "Osasco",
        bairro: "Centro",
        estado: "SP",
        endereco: "Av. dos Autonomistas",
        numero: "3330",
        tipoEstabelecimento: "Restaurante",
        logo: "macDonalds.jpg",
        latitude: "-23.532881",
        longitude: "-46.792004",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        cnpj:"42591651000142",
        razaoSocial: "ARCOS DOURADOS COMERCIO DE ALIMENTOS",
        nomeFantasia: "McDonalds II",
        telefone: "telefone",
        cep: "06090023",
        cidade: "Osasco",
        bairro: "Centro",
        estado: "SP",
        endereco: "Av. dos Autonomistas",
        numero: "3330",
        tipoEstabelecimento: "Restaurante",
        logo: "macDonalds.jpg",
        latitude: "-23.532981",
        longitude: "-46.792104",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        cnpj:"42591651000141",
        razaoSocial: "ARCOS DOURADOS COMERCIO DE ALIMENTOS",
        nomeFantasia: "McDonalds III",
        telefone: "telefone",
        cep: "06090023",
        cidade: "Osasco",
        bairro: "Centro",
        estado: "SP",
        endereco: "Av. dos Autonomistas",
        numero: "3330",
        tipoEstabelecimento: "Restaurante",
        logo: "macDonalds.jpg",
        latitude: "-23.532971",
        longitude: "-46.792204",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
