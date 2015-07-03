(function () {
    'use strict';

    var app = angular.module('journal', [
        'jaMain',
        'jaAuth',
        'jaLogin',
        'jaEditor',
        'jaList',

        // Angular modules
        //'ngAnimate',
        'ngRoute'
        //'ngSanitize',

        // Custom modules

        // 3rd Party Modules
        //'ui.bootstrap'
    ]);

    // To test go to: http://localhost:63342/JournalAngularCLI/index.html#/editor
    // or           : http://localhost:63342/JournalAngularCLI/index.html#/login
    app.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/editor', {
                    templateUrl: '/JournalAngularCLI/editor/editor.html',
                    controller: 'EditorController',
                    controllerAs: 'editorCtrl'
                })
                .when('/login', {
                    templateUrl: '/JournalAngularCLI/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'loginCtrl'
                });

            //$locationProvider.html5Mode(true);
        }]);

    app.constant('CONFIG', {
        //'Possible Api routes:
        //'https://localhost:5001/users/login';
        //'https://localhost:5001/users';
        //'https://localhost:5001/notes';
        "apiUrl": "https://localhost:5001",
        "maxNumberOfNotes": "10"
    });

    // Handle routing errors and success events
    //app.run(['$route', function ($route) {
    //    // Include $route to kick start the router.
    //}]);
})();