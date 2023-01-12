'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('quizzes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },


      player_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: 'Requested by',
        references: {
          model: 'users',
          key: 'id'
        },
      },
      opponent_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        comment: 'Opponent Id',
        references: {
          model: 'users',
          key: 'id'
        },
      },
      topic_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'topics',
          key: 'id'
        },
      },
      request_status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '1',
        comment: '1=Request, 2 =accept,3=reject by opponet, 4=auto reject'
      },
      request_time: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      winner_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      is_draw: {
        type: Sequelize.INTEGER(11),
        defaultValue: '0'
      },
      spent_learning_token: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '5'
      },
      play_by_player: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: '1=played'
      },
      done_by_player: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      xp_player: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      xp_opponent: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      play_by_opponent: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: '1=played'
      },
      done_by_opponent: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      is_timer_on: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '1'
      },
      is_done: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
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
    await queryInterface.dropTable('quizzes');
  }
};