'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('category_accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      account_type_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'account_types',
          key: 'id'
        },
      },
      category_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        },
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '1'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('category_accounts');
  }
};