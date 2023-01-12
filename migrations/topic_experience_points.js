'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('topic_experience_points', {
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
  user_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references:{
     model : 'users',
     key : 'id'
    }
  },

  xp :{
    type : Sequelize.INTEGER(11),
    allowNull:false,
    defaultValue:'0'
  },
  created_at: {
    type: 'DATETIME',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
 },
});
},
async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('topic_experience_points');
}
};