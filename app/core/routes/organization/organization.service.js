(function () {
    'use strict';
    angular
        .module('aminiApp')
        .factory('OrganizationService', OrganizationService);

    OrganizationService.$inject = ['$resource'];

    var resourceUrl = 'http://localhost:8080/api/organizations';

    function OrganizationService($resource) {
        return $resource(resourceUrl, {}, {
            'query': {
                method: 'GET',
                isArray: true,
                url: resourceUrl
            }
        });
    }
})();