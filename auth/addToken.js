(function () {
    'use strict';

    /*
        HTTP-Interceptor, if user is logged in, add user's token to the header of the request
     */
    angular
        .module('jaAuth')
        .factory('addToken', addToken)
        .config(function ($httpProvider) {
        $httpProvider.interceptors.push("addToken");
    })

    addToken.$inject = ['currentUser', '$q'];

    function addToken(currentUser, $q) {
        var service = {
            request: request
        };

        return service;

        ////////////////

        function request(config) {
            if(currentUser.profile.isLoggedIn){
                config.headers.Authorization = "Bearer " + currentUser.profile.token;
            }
            return $q.when(config);
        }
    }
})();