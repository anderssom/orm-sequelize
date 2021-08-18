'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 return queryInterface.bulkInsert('Pessoas', [{
   nome: 'Zé Andim',
   ativo: true,
   email:"ze@ruela.com",
   role:"vagabundo",
   createdAt: new Date(),
   updatedAt: new Date()
   
  }], {});
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pessoas', null, {})
  }
};
