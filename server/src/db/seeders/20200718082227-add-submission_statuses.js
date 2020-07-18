'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('submission_statuses', [
      { name: "Judging..." },
      { name: "Incorrect" },
      { name: "Correct" },
      { name: "Timed out" }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('submission_statuses');
  }
};
