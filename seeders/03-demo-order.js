'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('services', [{
      userId: 1,
      serviceId: 1,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 11,
      serviceId: 11,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 11,
      serviceId: 21,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 1,
      serviceId: 31,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 1,
      serviceId: 41,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 1,
      serviceId: 21,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 11,
      serviceId: 1,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 11,
      serviceId: 31,
      rentDate: new Date(),
      returnDate: new Date(),
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('services', null, {});
    
  }
};
