(function () {
    'use strict';

    angular
        .module('jaList')
        .controller('ListController', listCtrl);

    listCtrl.$inject = ['$scope', 'notes', 'CONFIG'];

    function listCtrl($scope, notes, CONFIG) {
        var vm = this;

        vm.maxNumberOfNotes = CONFIG.maxNumberOfNotes;
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
                    var notes = response.data.documents;

                    //Sort in reversed chronological order, based on timeStamp, show only maxNumberOfNotes:
                    notes.sort(function (a, b) {
                        var dateA = new Date(a.timeStamp);
                        var dateB = new Date(b.timeStamp);
                        return (dateB - dateA);     //Reversed order
                    });
                    notes.splice(vm.maxNumberOfNotes, notes.length);

                    vm.notes = notes;
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