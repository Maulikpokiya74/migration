'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('default_fees_and_rewards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },



      options: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      percentage: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      entry_fee: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: 'amount'
      },
      win_reward: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      icon: {
        type: Sequelize.STRING(164),
        allowNull: true,
      },
      color_code: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      game_mode: {
        type: Sequelize.STRING(32),
        allowNull: false,
        defaultValue: 'Training',
        comment: 'Training , Tournament'
      },
      unit: {
        type: Sequelize.STRING(32),
        allowNull: false,
        defaultValue: 'LT',
        comment: 'LT,TT,GT'
      },
      bot_speed_from: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0',
      },
      bot_speed_to: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0',
      },
      bot_correct_answer_from: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0',
      },
      bot_correct_answer_to: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0',
      },
      bot_error_from: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0',
      },
      bot_error_to: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0',
      },
      status: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('default_fees_and_rewards');
  }
};