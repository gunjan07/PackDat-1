var bcrypt   = require('bcrypt-nodejs');

module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define('user', {
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        salary: Sequelize.INTEGER
    });
    return User;
}