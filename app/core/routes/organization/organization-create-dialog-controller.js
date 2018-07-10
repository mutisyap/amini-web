(function () {
    'use strict';

    angular
        .module('aminiApp')
        .controller('OrganizationCreateDialogController', OrganizationCreateDialogController);

    OrganizationCreateDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'OrganizationService', 'LocationService'];

    function OrganizationCreateDialogController($timeout, $scope, $stateParams, $uibModalInstance, entity, OrganizationService, LocationService) {
        var vm = this;

        vm.registerOrganization = entity;
        vm.clear = clear;
        vm.save = save;

        vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB3K32QdljqJokEOccmjyNdEIylY7nTukY';

        vm.latlng = [0.8349313860427184, 37.4853515625];
        vm.registerOrganization.latitude = 0.8349313860427184;
        vm.registerOrganization.longitude = 37.4853515625;

        vm.getpos = function (event) {
            vm.latlng = [event.latLng.lat(), event.latLng.lng()];
            // console.log(event.latLng);
            vm.registerOrganization.latitude = event.latLng.lat();
            vm.registerOrganization.longitude = event.latLng.lng();
        };

        LocationService.query().$promise.then(function (result) {
            vm.locations = result;
            console.log('vm.locations');
            console.log(vm.locations);
        });



        $timeout(function () {
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear() {
            $uibModalInstance.dismiss('cancel');
        }

        function save() {
            vm.isSaving = true;

            // console.log(angular.toJson(vm.location));
            // LocationsService.create(vm.location, onSaveSuccess, onSaveError);
        }

        function onSaveSuccess(result) {
            //$scope.$emit('gatewayApp:locationUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError() {
            vm.isSaving = false;
        }

    }
})();
