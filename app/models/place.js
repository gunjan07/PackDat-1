/**
 * Created by Gunjan on 22-May-17.
 */

module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define('place', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        category: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        reaction: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        gettingthere: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        }
    });
    return User;
}