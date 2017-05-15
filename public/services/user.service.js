(function () {
    'use strict';
    angular.module('packDat')
        .factory('UserService', function ($http) {
            return {
                get: function () {
                    return $http.get('/api/users');
                },
                create: function (userData) {
                    return $http.post('/api/signup', userData);
                },
                delete: function (id) {
                    return $http.delete('/api/users/' + id);
                }
            }
        });
})();