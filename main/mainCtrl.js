(function () {
    'use strict';

    angular
        .module('jaMain')
        .controller('MainController', mainCtrl);

    mainCtrl.$inject = ['$location', 'currentUser'];

    function mainCtrl($location, currentUser) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'mainCtrl';

        activate();

        ////////////////

        function activate() {
            if(currentUser.profile.isLoggedIn)
            {
                $location.path('/editor');
            }else{
                $location.path('/login');
            }
        }
    }
})();