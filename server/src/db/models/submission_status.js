'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class SubmissionStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  SubmissionStatus.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SubmissionStatus',
    tableName: 'submission_statuses',
    timestamps: false
  });

  return SubmissionStatus;
};