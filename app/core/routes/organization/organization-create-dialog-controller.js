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
        vm.zoomLevel = 7;

        vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB3K32QdljqJokEOccmjyNdEIylY7nTukY';

        vm.latlng = [0.8349313860427184, 37.4853515625];
        vm.registerOrganization.roles = ["ROLE_USER"];

        console.log('vm.registerOrganization');
        console.log(vm.registerOrganization);

        vm.getpos = function (event) {
            vm.latlng = [event.latLng.lat(), event.latLng.lng()];
            // console.log(event.latLng);
            vm.registerOrganization.latitude = event.latLng.lat();
            vm.registerOrganization.longitude = event.latLng.lng();
        };

        vm.setLocation = function (locationId) {

            var location = vm.getLocationById(locationId);
            console.log('location');
            console.log(location);
            if (location !== null) {
                vm.registerOrganization.latitude = location.latitude;
                vm.registerOrganization.longitude = location.longitude;
                vm.zoomLevel = 12;
            }
        };

        vm.getLocationById = function (id) {
            var selectedLocation = null;
            angular.forEach(vm.locations, function (location) {
                if (location.id === id) {
                    selectedLocation = location;
                }
            });

            return selectedLocation;
        }

        LocationService.query().$promise.then(function (result) {
            vm.locations = result;
            console.log('vm.locations');
            console.log(vm.locations);

            vm.registerOrganization.latitude = vm.locations[0].latitude;
            vm.registerOrganization.longitude = vm.locations[0].longitude;
        });



        $timeout(function () {
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear() {
            $uibModalInstance.dismiss('cancel');
        }

        function save() {
            vm.isSaving = true;

            console.log(angular.toJson(vm.registerOrganization));
            console.log(angular.toJson('vm.registerOrganization'));
            OrganizationService.register(vm.registerOrganization, onSaveSuccess, onSaveError);
        }

        function onSaveSuccess(result) {
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError() {
            vm.isSaving = false;
        }

    }
})();
