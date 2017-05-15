(function () {
    'use strict';
    angular
        .module('packDat')
        .controller('SignUpController',function($scope,$rootScope,UserService) {
            console.log("$scope.user>>"+$scope.user);

            $scope.signup = function(user){
                console.log("$scope.user>>"+JSON.stringify(user));
                UserService.create($scope.user);
                console.log("After $scope.user>>");
            };



        });
})();