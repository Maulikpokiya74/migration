'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('training_match_token', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },


      options: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      percentage: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      entry_fee: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      win_reward: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      comments: {
        type: Sequelize.STRING(164),
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
      is_free: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      sort: {
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
    await queryInterface.dropTable('training_match_token');
  }
};