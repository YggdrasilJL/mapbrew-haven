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
        model: 'user',
        key: 'id',
      },
    },
    mapId: {
      type: DataTypes.STING,
      allowNull: false,
      references: {
        model: 'user_creations',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'map_upvote',
  }
);

module.exports = MapUpvotes;
