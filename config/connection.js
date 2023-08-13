const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DB_NAME && process.env.DB_USER && process.env.DB_PASSWORD) {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
} else {
  throw new Error('Missing environment variables for database connection.');
}

module.exports = sequelize;
