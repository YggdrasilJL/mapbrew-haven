const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

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
      unique: true,
      validate: {
        isEmail: true,
        len: [4, 25],
      },
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
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUser) => {
        newUser.password = await bcrypt.hash(newUser.password, 10);
        return newUser;
      },
    },
    sequelize,
    underscored: true,
    modelName: 'users',
  }
);

module.exports = User;
