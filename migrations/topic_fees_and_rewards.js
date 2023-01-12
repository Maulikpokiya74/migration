'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('topic_fees_and_rewards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },


      topic_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'topics',
          key: 'id'
        }
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
        allowNull: true,
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
        comment: 'LT,TT,GT  '
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
    await queryInterface.dropTable('topic_fees_and_rewards');
  }
};