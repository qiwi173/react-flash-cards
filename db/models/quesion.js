'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quesion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(categories) {
      this.belongsTo(categories,{foreignKey:'categoriesid'})
    }
  }
  Quesion.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    quesion: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    categoriesid: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      references:{
         model:'categories',
         key:'id'
      },
      onDelete:'CASCADE'

    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Quesion',
  });
  return Quesion;
};