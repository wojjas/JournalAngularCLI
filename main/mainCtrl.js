(function () {
    'use strict';

    angular
        .module('jaMain')
        .controller('MainController', mainCtrl);

    mainCtrl.$inject = ['$location'];

    function mainCtrl($location) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'mainCtrl';

        activate();

        ////////////////

        function activate() {
            $location.path('/editor');
        }
    }
})();