(function () {
    'use strict';

    angular
        .module('jaList')
        .controller('ListController', listCtrl);

    listCtrl.$inject = ['$scope', 'notes', 'CONFIG'];

    function listCtrl($scope, notes, CONFIG) {
        var vm = this;

        vm.maxNumberOfNotes = CONFIG.maxNumberOfNotes;
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
            notes.readNotes()
                .then(function(response){
                    console.log('Notes: ', response);
                    vm.numberOfNotes = response.data.documents.length;
                    //TODO: sort in inversed chronological order, based on timeStamp,
                    // and remove all but CONFIG.maxNumberOfNotes. So that "the last 10 notes" are shown.
                    vm.notes = response.data.documents;
                })
                .catch(function(err){
                    console.log('Refresh of list failed: ', err);
                });
        }

        //Event handlers:
        $scope.$on('updateNotesList', function () {
            refreshList();
        })
    }
})();