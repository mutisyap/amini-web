(function () {
    'use strict';

    angular
        .module('aminiApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfig($stateProvider, $urlRouterProvider) {
        console.log('urlRouterProvider');
        console.log($urlRouterProvider);
        $stateProvider.state('app', {
            abstract: true,
            views: {
                'navbar@': {
                    templateUrl: 'core/layouts/navbar/navbar.html',
                    // controller: 'NavbarController',
                    // controllerAs: 'vm'
                }
            },
            resolve: {}
        });

        $urlRouterProvider.otherwise(function ($injector, $location) {
            $injector.invoke(['$state', function ($state) {
                $state.go('organizations');
            }]);
        });

    }
})();
