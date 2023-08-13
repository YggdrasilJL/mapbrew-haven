const sequelize = require('../config/connection');
const { User } = require('.././models')
const mysql = require('mysql')
const fs = require('bcrypt')

// load env
require('dotenv').config()

// seed query
const seedQuery = fs.readFileSync('seed.sql', {
    encoding: 'utf-8',
})

//connect to db
const connection = mysql.createConnection({
    user: process.env.DB_NAME,
    host: process.env.DB_USER,
    password: process.env.DB_PASS,

    multipleStatements: true,

})

connection.connect()

