const { Sequelize, DataTypes } = require("sequelize");

module.exports.sequelize = new Sequelize('node_table1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
