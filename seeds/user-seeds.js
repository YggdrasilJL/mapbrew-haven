const sequelize = require('../config/connection');
const { User } = require('../models')


const userData = [
    {
        email: "knoblybilbo@gimp.com",
        user_name: "bilbo",
        password: "sloppyBob123",
    },
    {
        email: "snopbrews@gimp.com",
        user_name: "Glindus",
        password: "roughGl1ndus",
    },
    {
        email: "mynameisJEFF@gimp.com",
        user_name: "jeff1",
        password: "marshmellows!",
    },
    {
        email: "gumbleStubles@gimp.com",
        user_name: "cleff",
        password: "angryOLDguy",
    },
    {
        email: "notAr0b0t@gimp.com",
        user_name: "B3nd3r",
        password: "kissMyshiny",
    },
];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;