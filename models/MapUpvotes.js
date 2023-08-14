const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MapUpvotes extends Model { }

MapUpvotes.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    mapId: {
      type: DataTypes.STING,
      allowNull: false,
      references: {
        model: 'UserCreations',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'MapUpvotes',
  }
);

module.exports = MapUpvotes;
