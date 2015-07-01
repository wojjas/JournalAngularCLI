(function () {
    'use strict';

    angular
        .module('jaAuth')
        .factory('oauth', oauth);

    oauth.$inject = ['$http', 'formEncoder', 'currentUser'];

    function oauth($http, formEncoder, currentUser) {
        var service = {
            login: login
        };

        return service;

        ////////////////

        function login(username, password, callback) {
            var config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
            var data = formEncoder.encode({
                username: username,
                password: password,
                grant_type: "password"
            });

            //TODO: put to common configuration:
            //https://localhost:5001/users/login
            //https://localhost:5001/users
            //https://localhost:5001/notes
            //https://localhost:5001/ping
            var url = 'https://localhost:5001';

            return $http.post(url + "/users/login", data, config).success(function (response) {
                console.log('Server response: ', response);
                currentUser.setProfile(username, response.token);
                callback();
            }).error(function (err) {
                console.log('Error: ', err);
            });
        }
    }
})();