'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questionnaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },


      question: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      correct_answer: {
        type: Sequelize.STRING(164),
        allowNull: false,
      },
      wrong_answer_1: {
        type: Sequelize.STRING(164),
        allowNull: false,
      },
      wrong_answer_2: {
        type: Sequelize.STRING(164),
        allowNull: false,
      },
      wrong_answer_3: {
        type: Sequelize.STRING(164),
        allowNull: false,
      },
      difficulty_level_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        comment: "General Knowledge / Specialized Knowledge",
        references: {
          model: 'difficulty_levels',
          key: 'id'
        }
      },
      regional_relevance: {
        type: Sequelize.STRING(16),
        allowNull: false,
        defaultValue: 'Global',
        comment: "Global,Local"

      },
      time_for_question: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "20"
      },
      time_for_answer: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "10"
      },
      total_time: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
      },
      is_question_image: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1",
        comment: '0=Off,1=On'
      },
      question_image: {
        type: Sequelize.STRING(164),
        allowNull: true,
      },
      created_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1",
        comment: 'admin id'
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1"
      },
      created_at: {
        type: 'DATETIME',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'DATETIME',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('questionnaires');
  }
};