'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('categories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            account_type_id: {
                type: Sequelize.INTEGER(11),
                allowNull: true,
                references: {
                    model: 'account_types',
                    key: 'id',
                },
            },
            title: {
                type: Sequelize.STRING(164),
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            icon: {
                type: Sequelize.STRING(164),
                allowNull: true,
            },
            color_code: {
                type: Sequelize.STRING(16),
                allowNull: true,
            },
            created_by: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                comment: 'Admin ID',

            },
            status: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                defaultValue: '1',
                comment: '1=active,2=deactive',
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
        await queryInterface.dropTable('categories');
    }
};