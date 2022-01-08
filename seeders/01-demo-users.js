'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
      name: "Daniel",
      dni: "23319933",
      email: "dani@dani.com",
      adress: "San Bruno",
      city: "Valencia",
      cp: "46009",
      password: bcrypt.hashSync("12345678", Number.parseInt(authConfig.rounds)),
      repeat_password: bcrypt.hashSync("12345678", Number.parseInt(authConfig.rounds)),
      phone: "628362639",
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "user",
      dni: "28398201",
      email: "user@user.com",
      adress: "San Bruno",
      city: "Valencia",
      cp: "46009",
      password: bcrypt.hashSync("12345678", Number.parseInt(authConfig.rounds)),
      repeat_password: bcrypt.hashSync("12345678", Number.parseInt(authConfig.rounds)),
      phone: "682915372",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};