'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Problem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Problem.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    level: DataTypes.INTEGER,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Problem',
    tableName: 'problems'
  });

  return Problem;
};