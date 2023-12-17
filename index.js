const sequelize = require("./model/db").sequelize;

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
require("./model/sync");
// const adminModel = require("./model/admin").adminModel;
// 往数据库中插入数据
// adminModel.create({
//   username: "admin",
//   password: "admin",
// });

// 删除数据库中的数据
// adminModel.destroy({
//   where: {
//     username: "admin",
//   },
// });

// 恢复软删除的数据
// adminModel.restore({
//   where: {
//     id: 1,
//   },
// });
