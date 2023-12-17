const { sequelize } = require("./db");
const { DataTypes } = require("sequelize");
const { StudentModel } = require("./student");
// Path: model/class.js

const ClassModel = sequelize.define(
  "class",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
    deletedAt: "deleted_at",
    freezeTableName: true,
  }
);

ClassModel.hasMany(StudentModel);

exports.ClassModel = ClassModel;
