'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bot_levels', {
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
      level: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1"
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query("ALTER TABLE avatars AUTO_INCREMENT = 1;");

    await queryInterface.dropTable('bot_levels');
  }
};