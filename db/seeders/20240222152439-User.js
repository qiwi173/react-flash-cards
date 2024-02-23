"use strict";
const {User}=require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: "Alex",
        email: "alex@mail.ru",
        password: "123",
       score:0
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};
