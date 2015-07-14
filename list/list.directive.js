(function () {
    'use strict';

    angular
        .module('jaList')
        .directive('jaList', list);

    function list()
    {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: './list/list.html'
        };
    }
})();