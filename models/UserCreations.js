const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserCreations extends Model { }

UserCreations.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        map_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        date_updated: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        upvotes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    },
    // put hooks for the association between user and user creations
    {
        sequelize,
        underscored: true,
        modelName: 'user_creations',
    }
);

module.exports = UserCreations;