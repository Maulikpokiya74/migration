'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('question_topics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
  
  topic_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references:{
     model : 'topics',
     key : 'id'
    }
  },
   
  
  question_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references:{
     model : 'questionnaires',
     key : 'id'
    }
  },
   
   status: {
     type: Sequelize.INTEGER,
     allowNull : false,
     defaultValue : "1"
   },
  });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('question_topics');
  }
  };