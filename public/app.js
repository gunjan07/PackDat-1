'use strict';

angular
    .module('packDat', ['ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/view/MainPage.html',
                })
                .when('/signup', {
                    templateUrl: '/view/SignUp.html',
                    controller: 'SignUpController as signUpCtrl'
                })
                .when('/profile',{
                    templateUrl: '/view/Profile.html'
                })
}]);