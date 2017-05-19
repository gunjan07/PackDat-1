(function () {
    'use strict';
    angular
        .module('packDat')
        .controller('SignUpController',function($scope,$rootScope,UserService,$location) {
            $scope.signup = function(user){
                UserService.create($scope.user)
                .then(function (response) {
                    if(response.data.flag){
                        console.log($location.path("/profile"));
                    }
                    else{
                        console.log($location.path("/signup"));
                    }
                })
            };
        });
})();