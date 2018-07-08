(function () {
    'use strict';

    angular
        .module('aminiApp')
        .controller('OrganizationCreateDialogController', OrganizationCreateDialogController);

    OrganizationCreateDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'setParentVisible', 'OrganizationService'];

    function OrganizationCreateDialogController($timeout, $scope, $stateParams, $uibModalInstance, entity, setParentVisible, OrganizationService) {
        var vm = this;

        vm.location = entity;
        vm.clear = clear;
        vm.save = save;

        vm.googleMapsUrl = 'https://maps.google.com/maps/api/js?key=AIzaSyBetzn287R0D4vcFpdUpzU01YyATpB221E';

        vm.latlng = [0.8349313860427184, 37.4853515625];
        vm.location.latitude = 0.8349313860427184;
        vm.location.longitude = 37.4853515625;

        vm.getpos = function (event) {
            vm.latlng = [event.latLng.lat(), event.latLng.lng()];
            // console.log(event.latLng);
            vm.location.latitude = event.latLng.lat();
            vm.location.longitude = event.latLng.lng();
        };

        vm.setParentVisible = setParentVisible;


        vm.locationTypes = LocationTypesService.query();

        vm.locations = LocationsService.getLocations();

        $timeout(function () {
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear() {
            $uibModalInstance.dismiss('cancel');
        }

        function save() {
            vm.isSaving = true;

            console.log(angular.toJson(vm.location));
            LocationsService.create(vm.location, onSaveSuccess, onSaveError);
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
