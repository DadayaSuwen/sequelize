// 同步所有的model
require("./admin");
require("./class");
require("./admin");
require("./student");
require("./book");

const sequelize = require("./db").sequelize;

sequelize.sync({
  alter: true,
});
