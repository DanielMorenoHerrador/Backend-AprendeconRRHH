'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('services', [{
        name : "Orientacion laboral",
        price : 5,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        name : "Correccion de CV",
        price : 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Correccion de CV + Preparacion entrevista",
        price : 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Asesoria juridica laboral para empleados",
        price : 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Asesoria juridica laboral para empresa",
        price : 50,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('services', null, {});
    
  }
};
