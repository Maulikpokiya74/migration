'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('topics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      created_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: 'Admin ID'
      },

      name: {
        type: Sequelize.STRING(164),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      access: {
        type: Sequelize.STRING(16),
        allowNull: false,
        defaultValue: "Open",
        comment: "Open,Close"
      },
      access_code: {
        type: Sequelize.STRING(32),
        allowNull: true,
      },
      regional_relevance: {
        type: Sequelize.STRING(16),
        allowNull: false,
        defaultValue: "Global",
        comment: "Global,Local"
      },
      color_code: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      search_tags: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      icon: {
        type: Sequelize.STRING(164),
        allowNull: false,
      },
      allow_bot: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '1'
      },
      is_popular: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      is_featured: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      game_mode: {
        type: Sequelize.STRING(16),
        allowNull: false,
        defaultValue: 'Training',
        comment: 'Training,Tournament'
      },
      match_format: {
        type: Sequelize.STRING(16),
        allowNull: false,
        defaultValue: 'Blitz',
        comment: 'Blitz,Classic'
      },
      number_of_questions: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '7'
      },
      time_for_question: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "20",
        comment: 'in second'
      },
      learning_point: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1"
      },
      experience_point: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
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
    await queryInterface.dropTable('topics');
  }
};