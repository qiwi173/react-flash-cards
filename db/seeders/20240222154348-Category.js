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
              name: "1",
              answer: "1",
              img: "какое-то изображение",
            },
            {
              name: "2",
              answer: "2",
              img: "какое-то изображение again",
            },
            {
              name: "3",
              answer: "3",
              img: "какое-то изображение again",
            },
            {
              name: "4",
              answer: "4",
              img: "какое-то изображение again",
            },
          ],
        },
        {
          name: "123",
          img: "123",
          Questions: [
            {
              name: "11",
              answer: "11",
              img: "какое-то изображение",
            },
            {
              name: "22",
              answer: "22",
              img: "какое-то изображение again",
            },
            {
              name: "33",
              answer: "33",
              img: "какое-то изображение again",
            },
            {
              name: "44",
              answer: "44",
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
