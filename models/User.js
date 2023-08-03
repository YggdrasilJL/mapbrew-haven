const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // first_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // last_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'users',
  }
);

module.exports = User;
