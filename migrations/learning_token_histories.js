'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('learning_token_histories', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },


      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },

      learning_token: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
      },

      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1",
        comment: '1=added,2=deduct'
      },

      reason_for: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: '1=singUp,2=game'
      },
      quiz_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'quizzes',
          key: 'id'
        }
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
    await queryInterface.dropTable('learning_token_histories');
  }
};
