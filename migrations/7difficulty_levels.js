'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('difficulty_levels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

  
  name: {
     type: Sequelize.STRING(32),
     allowNull: false
   },
   
   status: {
     type: Sequelize.INTEGER,
     allowNull : false,
     defaultValue : "1"
   },
   created_at: {
    type: 'DATETIME',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
 }
  
});
},
async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('difficulty_levels');
}
};