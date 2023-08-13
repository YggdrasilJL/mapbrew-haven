const sequelize = require('../config/connection');
const { User } = require('.././models')
const mysql = require('mysql')
const fs = require('bcrypt')

// load env
require('dotenv').config()

// seed query
const seedQuery = fs.readFileSync('seed.sql',{
encoding: 'utf-8',
})

//connect to db
const connection = mysql.createConnection({
    host: process.env.DB_USER,
    user: process.env.DB_NAME,
    password: process.env.DB_PASS,
  
    multipleStatements: true,

})

connection.connect()

// rando admin password
const psw = Math.random()
    .toString(32)
    .substring(3)
const hash = bcrypt.hashSync(pasw, 10)
console.log('Running seed')

//query
connection.query(seedQuery, [hash], err =>{
    if(err) {
        throw err
    }
    console.log('SQL seeeeeed complete. This is the password:' + psw)
    connection.end()
})