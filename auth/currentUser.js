(function () {
    'use strict';

    angular
        .module('jaAuth')
        .factory('currentUser', currentUser);

    //currentUser.$inject = ['DEP'];

    function currentUser() {
        var profile = {
            "username": "",
            "token": "",
            get isLoggedIn(){
                return this.token ? true : false;
            }
        }

        var service = {
            profile: profile,
            setProfile: setProfile
        };

        return service;

        ////////////////

        function setProfile(username, token) {
            profile.username = username;
            profile.token = token;
        }
    }
})();