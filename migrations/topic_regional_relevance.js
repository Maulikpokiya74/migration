'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('topic_regional_relevance', {
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
      region_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'regions',
          key: 'id'
        }
      },

      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '1',
        comment: '0=delete,1=active'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('topic_regional_relevance');
  }
};
