(function () {
    'use strict';

    angular
        .module('aminiApp', [
            'ngResource',
            'ngSanitize',
            "ui.router",
            "ngMap",
            "ui.bootstrap"
        ])
        .run(run);

    run.$inject = [];

    function run() {
    }
})();
