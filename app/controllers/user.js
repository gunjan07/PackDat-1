'use strict';
//var User = require('../models/user');
var models = require('../models');

module.exports = {
    list(req,res){
        models.user.findAll({})
            .then(function(users){
                res.status(200).json(users);
            })
            .catch(function (error) {
            res.status(500).json(error);
        });
    },
    create(req, res) {
        models.user.create(req.body)
            .then(function (newUser) {
                res.status(200).json(newUser);
            })
            .catch(function (error){
                res.status(500).json(error);
            });
    },
};
