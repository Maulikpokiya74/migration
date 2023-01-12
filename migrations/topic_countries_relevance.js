'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('topic_countries_relevance', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      country_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'countries',
          key: 'id',
        },
      },

      topic_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'topics',
          key: 'id',
        },
      },

      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('topic_countries_relevance');
  }
};