(function () {
    'use strict';
    angular
        .module('aminiApp')
        .factory('OrganizationService', OrganizationService);

    OrganizationService.$inject = ['$resource'];

    var resourceUrl = 'http://51.15.123.128:8080/api/organizations';

    function OrganizationService($resource) {
        return $resource(resourceUrl, {}, {
            'query': {
                method: 'GET',
                isArray: true,
                url: resourceUrl
            }
        });
    }

    function OrganizationService($resource) {
        return $resource(resourceUrl, {}, {
            'register': {
                method: 'POST',
                isArray: false,
                url: resourceUrl+"/register"
            }
        });
    }
})();