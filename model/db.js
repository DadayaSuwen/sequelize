const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sequelize", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
});

exports.sequelize = sequelize;
