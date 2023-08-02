const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');
const sequelize = require('../config/connection');

class BiomeIce extends Model {}
class BiomeDesert extends Model {}
class BiomeFire extends Model {}

BiomeIce.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    tile_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tile_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'biome_ice',
  }
);

BiomeDesert.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    tile_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tile_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'biome_desert',
  }
);

BiomeFire.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    tile_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tile_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'biome_fire',
  }
);
