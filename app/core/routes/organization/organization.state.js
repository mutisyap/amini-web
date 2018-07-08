(function () {
    'use strict';

    angular.module('aminiApp').config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('organizations', {
                parent: 'app',
                url: '',
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
                url: '/new',
                data: { pageTitle: 'create church' },
                onEnter: [
                    '$uibModal',
                    '$stateParams',
                    function ($uibModal, $stateParams) {
                        console.log('$stateParams');
                        console.log($stateParams);
                        $uibModal
                            .open({
                                templateUrl:
                                    'core/routes/organization/organization-dialog.html',
                                controller: 'OrganizationController',
                                controllerAs: 'vm',
                                backdrop: 'static',
                                size: 'lg',
                                resolve: {
                                    entity: function () {
                                        return {
                                            "contact1": null,
                                            "contact1Value": null,
                                            "contact2": null,
                                            "contact2Value": null,
                                            "contact3": null,
                                            "contact3Value": null,
                                            "contentStatus": null,
                                            "createdBy": null,
                                            "createdOn": null,
                                            "description": null,
                                            "id": null,
                                            "lastUpdatedBy": null,
                                            "lastUpdatedOn": null,
                                            "latitude": null,
                                            "longitude": null,
                                            "name": null,
                                            "type": "CHURCH",
                                            "uuid": null
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