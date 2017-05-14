'use strict';

angular
    .module('packDat')
    .controller('MainController', function($rootscope, $scope, $http) {
        $scope.formData = {};

        Users.get()
            .success(function(data) {
                $scope.users = data;
            });
    });