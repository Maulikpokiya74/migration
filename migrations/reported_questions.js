'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reported_questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      question_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'questionnaires',
          key: 'id'
        },
      },
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        comment: 'reporter'

      },
      report_reason: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1"
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reported_questions');
  }
};