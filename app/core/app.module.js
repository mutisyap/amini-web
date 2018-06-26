(function () {
    'use strict';

    angular
        .module('aminiApp', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            "ui.router",
            "ngMap"
        ])
        .run(run);

    run.$inject = ['stateHandler'];

    function run(stateHandler) {
        stateHandler.initialize();
    }
})();
