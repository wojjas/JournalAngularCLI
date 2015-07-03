(function () {
    'use strict';

    angular
        .module('jaList')
        .controller('ListController', listCtrl);

    listCtrl.$inject = ['$http', 'CONFIG'];

    function listCtrl($http, CONFIG) {
        var vm = this;

        vm.maxNumberOfNotes = 10;
        vm.numberOfNotes = 0;
        vm.notes = [];
        vm.refreshList = refreshList;
        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
            refreshList();
        }
        function refreshList(){
            return $http.get(CONFIG.apiUrl + "/notes")
                .then(function (response) {
                    console.log('Notes: ', response);
                    vm.numberOfNotes = response.data.documents.length;
                    vm.notes = response.data.documents;
                })
                .catch(function (err) {
                    console.log('Refresh of list failed: ', err);
                });
        }
    }
})();