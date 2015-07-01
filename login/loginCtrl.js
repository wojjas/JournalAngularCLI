(function () {
    'use strict';

    angular
        .module('jaLogin')
        .controller('LoginController', loginCtrl);

    loginCtrl.$inject = ['oauth', '$location', '$http'];

    function loginCtrl(oauth, $location, $http) {
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
            //console.log('handleLoginClick, email: %s password-len: %s',
            //    vm.email, vm.password.length);
            oauth.login(vm.email, vm.password, function(){
                //$location.path('/editor');

                var url = 'https://localhost:5001';

                return $http.get(url + "/notes").success(function (response) {
                    console.log('Server response: ', response);
                    $location.path('/editor');
                }).error(function (err) {
                    console.log('Error: ', err);
                });
            });
        }

    }
})();