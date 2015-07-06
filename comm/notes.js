(function () {
    'use strict';

    angular
        .module('jaComm')
        .factory('notes', notes);

    notes.$inject = ['$http', 'CONFIG'];

    function notes($http, CONFIG) {
        var service = {
            readNotes: readNotes,
            createNote: createNote
        };

        return service;

        ////////////////

        function readNotes() {
            return $http.get(CONFIG.apiUrl + "/notes")
        }

        function createNote(data) {
            return $http.post(CONFIG.apiUrl + "/notes", {"note":data});
        }
    }
})();