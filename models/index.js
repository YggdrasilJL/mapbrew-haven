const User = require('./User');
// const UserCreations = require('./UserCreations');
const League = require('./League');

// User.hasMany(UserCreations, {
//   foreignKey: 'user_name',
// });

module.exports = { User, League };
//  UserCreations