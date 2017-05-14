'use strict';

angular
    .module('packDat', ['ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    controller: 'MainController as mainCtrl',
                    templateUrl: '/view/MainPage.html'
                })

}]);