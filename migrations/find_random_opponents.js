'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('find_random_opponents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      topic_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'topics',
          key: 'id'
        },
      },
      quiz_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'quizzes',
          key: 'id'
        },
        defaultValue: "0",

      },
      user_one: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0",
      },
      user_two: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      level: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      play_one: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0",
        comment: '1=one ready for play,2= both ready to play',
      },
      play_two: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0",
      },
      get_one: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0",
      },
      get_two: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0",
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1",
      },
      created_at: {
        type: 'DATETIME',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },


    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('find_random_opponents');
  }
};