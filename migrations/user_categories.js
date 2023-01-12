'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      category_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },

      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '1'
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_categories');
  }
};