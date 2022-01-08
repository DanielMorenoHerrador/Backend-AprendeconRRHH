'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('orders', [{
      userId: 1,
      peliculaId: 1,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 2,
      peliculaId: 2,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 2,
      peliculaId: 3,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 1,
      peliculaId: 4,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 1,
      peliculaId: 5,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 1,
      peliculaId: 3,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 2,
      peliculaId: 1,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 2,
      peliculaId: 4,
      rentDate: new Date(),
      returnDate: new Date(),
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('orders', null, {});
    
  }
};
