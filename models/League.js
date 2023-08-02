const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');
const sequelize = require('../config/connection');

class League extends Model {}

League.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    user_names: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_maps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_reviews: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    date_updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'league',
  }
);

module.exports = League;
