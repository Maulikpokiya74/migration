'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      quiz_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'quizzes',
          key: 'id'
        }
      },
      receiver_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      receiver_title: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      receiver_body: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      receiver_status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: '1=Withdrew\r\n2=Requested\r\n3=Play\r\n4=Waiting\r\n5=You decline\r\n6=Opponent decline\r\n7=You withdrawn\r\n8=Opponent withdrawn\r\n9=You Win\r\n10=You loss\r\n11=Expired'
      },
      sender_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      sender_title: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      sender_body: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      sender_status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: '1=Withdrew\r\n2=Requested\r\n3=Play\r\n4=Waiting\r\n5=You decline\r\n6=Opponent decline\r\n7=You withdrawn\r\n8=Opponent withdrawn\r\n9=You Win\r\n10=You loss\r\n11=Expired'
      },
      notification_for: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: '1=Send game request'
      },
      is_waiting: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
      },
      topic_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'topics',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: "0=Not read,1=read"
      },
      sender_flag: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '1',
      },
      receiver_flag: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '1',
      },
      receiver_read_flag: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        defaultValue: '1',
      },
      sender_read_flag: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        defaultValue: '0',
      },
      read_flag: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '1',
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('notifications');
  }
};