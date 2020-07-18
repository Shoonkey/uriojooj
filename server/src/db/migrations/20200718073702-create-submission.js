'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('submissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      problem_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'problems', key: 'id' },
        onUpdate: 'CASCADE', onDelete: 'NO ACTION'
      },
      submission_status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'submission_statuses', key: 'id' },
        onUpdate: 'CASCADE', onDelete: 'RESTRICT'
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE', onDelete: 'NO ACTION'
      },
      code: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Date.now()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('submissions');
  }
};