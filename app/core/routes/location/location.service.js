(function () {
    'use strict';
    angular
        .module('aminiApp')
        .factory('LocationService', LocationService);

    LocationService.$inject = ['$resource'];

    var resourceUrl = 'http://51.15.123.128:8080/api/locations';

    function LocationService($resource) {
        return $resource(resourceUrl, {}, {
            'query': {
                method: 'GET',
                isArray: true,
                url: resourceUrl
            }
        });
    }
})();