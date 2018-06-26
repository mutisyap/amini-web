(function () {
    'use strict';

    angular
        .module('aminiApp')
        .controller('OrganizationController', OrganizationController);

    OrganizationController.$inject = ['OrganizationService'];

    function OrganizationController(OrganizationService) {

        var vm = this;

        vm.organizations = [];

        loadAll();

        function loadAll() {
            OrganizationService.query(function (result) {
                vm.organizations = result;
                vm.searchQuery = null;
            });
        }
    }
})();