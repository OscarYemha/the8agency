const S = require("sequelize");
const db = require("../db/db");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    country: {
      type: S.STRING,
      allowNull: false,
    },
    phone: {
      type: S.STRING,
      allowNull: false,
    },
    position: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "User" }
);

module.exports = User;