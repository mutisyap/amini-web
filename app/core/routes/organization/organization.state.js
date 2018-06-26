(function () {
    'use strict';

    angular.module('aminiApp').config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('organizations', {
                parent: 'app',
                url: '/',
                data: {
                    requiresAuthentication: false,
                    pageTitle: 'Insitutions'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/routes/organization/organization.html',
                        controller: 'OrganizationController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {}
            });
    }
})();