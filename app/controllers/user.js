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
    signUpSuccess(req,res){
        res.status(200).json({flag:true});
    },
    signUpFailure(req,res){
        res.status(200).json({flag:false});
    }
};