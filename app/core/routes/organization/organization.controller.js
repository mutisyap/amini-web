(function () {
    'use strict';

    angular
        .module('aminiApp')
        .controller('OrganizationController', OrganizationController);

    OrganizationController.$inject = ['OrganizationService'];

    function OrganizationController(OrganizationService) {

        var vm = this;

        vm.organizations = [];

        vm.latitude = -1.2921;
        vm.longitude = 36.8219;
        vm.zoomLevel = 7;

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