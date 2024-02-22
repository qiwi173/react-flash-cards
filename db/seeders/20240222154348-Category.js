"use strict";
const { Category, Question } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Category.bulkCreate(
      [
        {
          name: "Угадай фильм по кадру",
          img: "какое-то изображение",
          Questions: [
            {
              name: "Из какого фильма данный кадр?",
              answer: "Крёстный отец",
              img: "какое-то изображение",
            },
            {
              name: "Из какого фильма данный кадр?",
              answer: "Крёстный отец 2",
              img: "какое-то изображение again",
            },
          ],
        },
      ],
      {
        include: [Question],
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await Category.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};
