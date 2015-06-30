(function () {
    'use strict';

    angular
        .module('jaLogin')
        .controller('LoginController', loginCtrl);

    //loginCtrl.$inject = ['DEP'];

    function loginCtrl() {
        var vm = this;

        vm.email = '';
        vm.password = '';
        vm.handleLoginClick = handleLoginClick;
        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
            //TODO: set last known user from session-storage if logged out because of expire?
        }
        function handleLoginClick() {
            console.log('handleLoginClick, email: %s password-len: %s',
                vm.email, vm.password.length);
        }

    }
})();