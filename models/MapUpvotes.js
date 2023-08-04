const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MapUpvotes extends Model {}

MapUpvotes.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    mapId: {
      type: DataTypes.UUID,
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
