"use strict";
const { Category, Question } = require("../models");
const path = require("path");


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Category.bulkCreate(
      [
        {
          name: "Программирование",
          img: "",
          Questions: [
            {
              name: "Что обозначает аббревиатура HTML?",
              answer: "Hyper Text Markup Language",
              img: "https://yandex-images.clstorage.net/9Mt5Ri449/a1011bevE4/o7vcCqneQ9La65gxlOW97L7oDigWEwVTQ_pgwXXmF-dtrU6LdMapnX8WxS2BnpaawyCv9WUg3CVPeJCvLje9auzonUbvn16Hj62GZZzmuO6jtU05CkkBDlm4PJVj7EnoP_gpsQHl3_dWcLUI_-fcw9tj6ZMIYqEqLWqJhnIzphiTlf4akcE81fPi2xKY_6z-rZU1BRVEBBxk1DiIcq9jhnyAEr8z6OzRaWmGGNPr8OiCYc-UIA21LylJi7BpG5c7ja_eD4ndFObw_NkstNuMxq2LKAwRXyoBQ8ous0KQQrJAuBKnNu3c23dpqi7a68vRnl70vzo4pggMbLywVCKsLJOc2CK1yibR0NDzLbTfrdOpsycjB3AEGlDECIhUu2OXX4UvnRnV5dh_Qb8_x8jt1aBk0bsAMrouGV29ik0Chw-6jO8DnukOzdv5xRyG27beiY81ARBQBBh9ywy-f79zvUi7M7w0w9TQSEy7Pcbc_ey9Sdm0NRu2NRRwi4hGEpExoa3pGo75IPP04cUfreaL2I-fMQIyWAMmXf8esVmycrd8gR-XJ-_e_FhgugPRz8Dgh0DsvycvmgsvdZ65WDGwNpiJ_QS32DjI2NfyOLrEl8GDqxUJO1koBV7sFbBYp2-QR4YEjzPn_9xgdZ8uwM7L5JNE24c8B6ACB3WZrVgnsw2Gl8Udjcwa2uze2CKW7prOnKEoARdzLjV5-geecZx2r3-AFYQFyNL7UEG_LMfe69O6V_SPHTG5Jx5ZhY5pPq4rjL3eJLPdK_vu6tEvovmp85yIMx41XS8hc_AHs2uuZIxMqTuXFfXn3U5hmyL7y8HmgWTVgTssiwIyU7GcWwaOM7S8-AW22i_a3_3uGYHvmvm_iBU0C0U_Pmj_KZVRn1G7VoAcuC_39OJgZpYD4ubj5IN79p0ZFIgVB2iXmXMasgO9nPEFvfwkztXc9Sui4rrKl7AmOhJpJS5J-TWtd58",
            },
            {
              name: "Какой HTTP-метод используется для отправки данных формы на сервер?",
              answer: "POST",
              img: "https://www.accommovision.com/wp-content/uploads/2017/11/Posting-to-Social.jpg",
            },
            {
              name: "Какой символ используется для комментариев в языке программирования HTML?",
              answer: "{/**/}",
              img: "https://avatars.mds.yandex.net/i?id=8b753fd588cfa1935785f4f28fcbea4529435002-12523274-images-thumbs&n=13",
            },
            {
              name: "Какие три основных языка программирования используются в веб-разработке?",
              answer: "HTML, CSS, JavaScript",
              img: "https://ирсиб.рф/wp-content/uploads/2018/10/4-2.jpg",
            },
            {
              name: "Какое свойство в CSS используется для изменения цвета текста?",
              answer: "color",
              img: "https://xthreadbearx.files.wordpress.com/2012/08/primary-colours1.jpg",
            },
          ],
        },
        {
          name: "Мужские профессии",
          img: "",
          Questions: [
            {
              name: "Назови профессию",
              answer: "Бармен",
              img: "https://steamuserimages-a.akamaihd.net/ugc/1760316663334576281/E3CAB24BD143285CE93852927759BEA8CCEC25EF/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
            },
            {
              name: "Назови профессию",
              answer: "Пожарный",
              img: "https://cs13.pikabu.ru/post_img/2024/02/02/9/170688569318723041.jpg",
            },
            {
              name: "Какое звание у данного персонажа",
              answer: "Сержант",
              img: "https://i.ytimg.com/vi/KMcQQcSOCNc/maxresdefault.jpg?7857057827",
            },
            {
              name: "Назови профессию",
              answer: "Шахтер",
              img: "https://ak.picdn.net/offset/photos/5314abff82359b9a6c407833/large_w/offset_85309.jpg",
            },
            {
              name: "Назови профессию",
              answer: "Сантехник",
              img: "https://cleacom.ru/wp-content/uploads/2022/03/santeh570.jpg",
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
