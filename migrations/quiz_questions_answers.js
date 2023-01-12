'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('quiz_questions_answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },


      quiz_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'quizzes',
          key: 'id'
        },
      },
      question_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'questionnaires',
          key: 'id'
        },
      },
      player_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        references: {
          model: 'users',
          key: 'id'
        },
      },
      player_answer: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: '1=correct,2=wrong'
      },

      player_answer_key: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      player_spent_time: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0',

      },
      player_time_out: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      opponent_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        references: {
          model: 'users',
          key: 'id'
        },
      },
      opponent_answer: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: '1=correct,2=wrong'
      },
      opponent_answer_key: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      opponent_spent_time: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0',

      },
      opponent_time_out: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '1'
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
    await queryInterface.dropTable('quiz_questions_answers');
  }
};