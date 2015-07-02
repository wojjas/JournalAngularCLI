(function () {
    'use strict';

    angular
        .module('jaList')
        .controller('ListController', listCtrl);

    listCtrl.$inject = ['$http'];

    function listCtrl($http) {
        var vm = this;


        vm.numberOfNotes = 0;
        vm.refreshList = refreshList;
        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
            refreshList();
        }
        function refreshList(){
            var url = 'https://localhost:5001';

            return $http.get(url + "/notes")
                .then(function (response) {
                    console.log('Notes: ', response);
                    vm.numberOfNotes = response.data.documents.length;
                    //TODO: set vm.data so list gets populated via binding
                })
                .catch(function (err) {
                    console.log('Refresh of list failed: ', err);
                });
        }
    }
})();