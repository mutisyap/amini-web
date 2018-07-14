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
            })
            .state('organizations.new', {
                parent: 'organizations',
                url: '/{type}/new',
                data: { pageTitle: 'create church' },
                onEnter: [
                    '$uibModal',
                    '$stateParams',
                    function ($uibModal, $stateParams) {
                        console.log('$stateParams');
                        console.log($stateParams.type);
                        $uibModal
                            .open({
                                templateUrl:
                                    'core/routes/organization/organization-dialog.html',
                                controller: 'OrganizationCreateDialogController',
                                controllerAs: 'vm',
                                backdrop: 'static',
                                size: 'lg',
                                resolve: {
                                    entity: function () {
                                        return {
                                            "description": null,
                                            "emailAddress": null,
                                            "fullName": null,
                                            "latitude": null,
                                            "locationId": null,
                                            "locationName": null,
                                            "longitude": null,
                                            "organizationName": null,
                                            "password": null,
                                            "roles": [],
                                            "organizationType":$stateParams.type
                                        };
                                    }
                                },
                                setParentVisible: function () {
                                    return true;
                                }
                            })
                            .result.then(
                                function () {
                                    $state.go('organizations', null, {
                                        reload: 'organizations'
                                    });
                                },
                                function () {
                                    $state.go('organizations');
                                }
                            );
                    }
                ]
            });
    }
})();