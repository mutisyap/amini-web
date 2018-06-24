(function () {
    'use strict';

    angular
        .module('aminiApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngTouch',
            "ui.router",
            "ngMap"
        ])
        .run(run);

    run.$inject = ['StateHandler'];

    function run(StateHandler) {
        StateHandler.initialize();
    }
})();
