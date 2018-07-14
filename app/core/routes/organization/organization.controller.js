(function () {
    'use strict';

    angular
        .module('aminiApp')
        .controller('OrganizationController', OrganizationController);

    OrganizationController.$inject = ['OrganizationService'];

    function OrganizationController(OrganizationService) {

        var vm = this;

        vm.organizations = [];

        vm.latitude = 0.25686187;
        vm.longitude = 38.239136;
        vm.zoomLevel = 6;

        vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB3K32QdljqJokEOccmjyNdEIylY7nTukY';

        loadAll();

        function loadAll() {
            OrganizationService.query(function (result) {
                vm.organizations = result;
                vm.searchQuery = null;
            });
        }
    }
})();