'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      country_code: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      flag: {
        type: Sequelize.STRING(164),
        allowNull: true,
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1",
        comment: '0=delete,1=active',
      }
    });
  },
  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('countries');
  }
};
