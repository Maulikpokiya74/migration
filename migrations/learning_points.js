'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('learning_points', {
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
        }
      },

      lp: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"

      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1"
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('learning_points');
  }
};