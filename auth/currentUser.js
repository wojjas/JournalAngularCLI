(function () {
    'use strict';

    angular
        .module('jaAuth')
        .factory('currentUser', currentUser);

    currentUser.$inject = ['localStorage'];

    function currentUser(localStorage) {
        var USERKEY = 'utoken';

        var profile = init();

        var service = {
            profile: profile,
            setProfile: setProfile
        };

        return service;

        ////////////////

        function init(){
            var user = {
                "username": "",
                "token": "",
                get isLoggedIn(){
                    return this.token ? true : false;
                }
            }

            var localUser = localStorage.get(USERKEY);
            if(localUser){
                user.username = localUser.username;
                user.token = localUser.token;
            }

            return user;
        }

        function setProfile(username, token) {
            profile.username = username;
            profile.token = token;
            localStorage.add(USERKEY, profile);
        }
    }
})();