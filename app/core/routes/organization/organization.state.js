(function () {
    'use strict';

    angular.module('webApp').config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('organization', {
                parent: 'app',
                url: '/',
                data: {
                    requiresAuthentication: true,
                    authorities: [],
                    pageTitle: 'Insitutions'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/routes/home/organization.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {}
            });
    }
});