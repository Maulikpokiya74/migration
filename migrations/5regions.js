'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('regions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },

      country_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'countries',
          key: 'id'
        }
      },

      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1",
        comment: '0=delete,1=active'
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('regions');
  }
};