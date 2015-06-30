(function () {
    'use strict';

    angular
        .module('jaAuth')
        .factory('currentUser', currentUser);

    //currentUser.$inject = ['DEP'];

    function currentUser() {
        var service = {
            isAuthenticated: isAuthenticated
        };

        return service;

        ////////////////

        function isAuthenticated() {
            return false;
        }
    }
})();