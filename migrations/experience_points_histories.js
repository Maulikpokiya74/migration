'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('experience_points_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        defaultValue: "0"

      },
      topic_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'topics',
          key: 'id'
        },
        defaultValue: "0"

      },
      xp: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"

      },

      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: "1"
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('experience_points_histories');
  }
};