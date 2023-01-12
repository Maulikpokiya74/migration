'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      user_name: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      contact_no: {
        type: Sequelize.STRING(64),
        allowNull: true,
      },
      roles: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1",
        comment: '1=super admin'
      },
      otp: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1",
        comment: '1=active,0= deactive',
      },
      created_at: {
        type: 'DATETIME',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'DATETIME',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('admins');
  }
};