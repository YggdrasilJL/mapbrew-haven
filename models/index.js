const User = require('./User');
// const UserCreations = require('./UserCreations');
const League = require('./League');

// User.hasMany(UserCreations, {
//   foreignKey: 'user_name',
// });

User.hasMany(League, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

League.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, League };
//  UserCreations