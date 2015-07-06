(function () {
    'use strict';

    angular
        .module('jaEditor')
        .controller('EditorController', editorCtrl);

    editorCtrl.$inject = ['$scope', 'notes'];

    function editorCtrl($scope, notes) {
        var vm = this;

        vm.note = '';
        vm.handleSendClick = handleSendClick;
        vm.handleClearClick = handleClearClick;
        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
        }

        function handleSendClick(){
            return notes.createNote(vm.note)
                .success(function (response) {
                    console.log('Server response: ', response);
                    vm.note = '';

                    $scope.$broadcast('updateNotesList');
                })
                .error(function (err) {
                    console.log('Error: ', err);
                });
        }
        function handleClearClick(){
            console.log('Clearing input box');
            vm.note = '';
        }
    }
})();