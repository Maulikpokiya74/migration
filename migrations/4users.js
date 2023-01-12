'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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

      full_name: {
        type: Sequelize.STRING(164),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(164),
        allowNull: false,
      },
      is_social_login: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
      },
      social_media_id: {
        type: Sequelize.STRING(164),
        allowNull: true,
      },
      social_media_type: {
        type: Sequelize.STRING(16),
        allowNull: true,
        comment: "google,facebook"
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      otp: {
        type: Sequelize.INTEGER(8),
        allowNull: true,
      },
      verification_code: {
        type: Sequelize.STRING(164),
        allowNull: true,
      },
      birth_year: {
        type: Sequelize.INTEGER(4),
        allowNull: true,
      },
      country_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'countries',
          key: 'id'
        },
      },
      contact_no: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
      },
      is_email_verify: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
      },
      is_contact_verify: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
      },
      xp: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
      },
      lp: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
      },
      lt: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
      },
      avatar: {
        type: Sequelize.STRING(164),
        allowNull: true,
      },
      avatar_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'avatars',
          key: 'id'
        },
      },
      account_type_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'account_types',
          key: 'id'
        },
        defaultValue: "1"
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "1"
      },
      is_bot: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
      },
      created_at: {
        type: 'DATETIME',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'DATETIME',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      is_active: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
      },



    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};