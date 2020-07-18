'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Submission extends Model {
    static associate(models) {
      this.belongsTo(models.Problem, { sourceKey: "problemId" });
      this.belongsTo(models.User, { sourceKey: "userId" });
      this.belongsTo(models.SubmissionStatus, { sourceKey: "submissionStatusId" });
    }
  };

  Submission.init({
    problemId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    submissionStatusId: DataTypes.INTEGER,
    code: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Submission',
    tableName: 'submissions',
    updatedAt: false
  });

  return Submission;
};