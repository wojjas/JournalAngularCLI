(function () {
    'use strict';

    angular
        .module('jaEditor')
        .controller('EditorController', editorCtrl);

    editorCtrl.$inject = ['$http', 'CONFIG', 'formEncoder'];

    function editorCtrl($http, CONFIG, formEncoder) {
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
            //console.log('Sending "%s" to server', vm.note);
            var data = formEncoder.encode({
                note: vm.note
            });

            return $http.post(CONFIG.apiUrl + "/notes", {"note":vm.note}).success(function (response) {
                console.log('Server response: ', response);
                vm.note = '';
                //TODO: refresh notes list!
            }).error(function (err) {
                console.log('Error: ', err);
            });
        }
        function handleClearClick(){
            console.log('Clearing input box');
            vm.note = '';
        }
    }
})();