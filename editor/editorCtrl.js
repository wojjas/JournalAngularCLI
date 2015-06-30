(function () {
    'use strict';

    angular
        .module('jaEditor')
        .controller('EditorController', editorCtrl);

    //editorCtrl.$inject = ['DEP'];

    function editorCtrl() {
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
            console.log('Sending "%s" to server', vm.note);
        }
        function handleClearClick(){
            console.log('Clearing input box');
            vm.note = '';
        }
    }
})();