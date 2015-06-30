(function () {
    'use strict';

    angular
        .module('jaList')
        .controller('ListController', listCtrl);

    //listCtrl.$inject = ['DEP'];

    function listCtrl() {
        var vm = this;

        vm.activate = activate;
        vm.title = 'listCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();