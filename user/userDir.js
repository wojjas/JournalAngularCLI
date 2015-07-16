(function () {
    'use strict';

    angular
        .module('jaComm')
        .directive('jaUser', user);

    //user.$inject = ['$window'];

    function user()
    {
        var directive = {
            restrict: 'E',
            templateUrl: './user/user.html',
            controller: 'UserController',
            controllerAs: 'userCtrl',
            bindToController: true
        };
        return directive;
    }
})();