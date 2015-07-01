(function () {
    'use strict';

    /*
        Http-response-interceptor, redirects every responseError with status 401 to /login
     */
    angular
        .module('jaAuth')//TODO: move to communication module
        .factory('loginRedirect', loginRedirect)
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('loginRedirect');
        });

    loginRedirect.$inject = ['$q', '$location'];

    function loginRedirect($q, $location) {
        var service = {
            responseError: responseError,
            response: response
        };

        return service;

        ////////////////

        function responseError(response) {
            if(response.status === 401){
                $location.path("/login");
            }

            return $q.reject(response);
        }
    }
})();