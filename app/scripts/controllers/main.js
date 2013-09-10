'use strict';

angular.module('angularDemoBarchartApp').

controller('MainCtrl', function(
    $scope,
    $window,
    $timeout,
    $filter,
    $resource,
    $localStorage,
    Data
){
    var _this = this;

    (this.resource = Data.retrieve('age-structure')).$promise.then(function(data) {
        (function _loop() {
            $timeout(function() {
                _this.tick = (_this.tick + 1) % data.length;

                _loop();
            }, 200);
        })();
    });

    (this.regions = Data.retrieve('regions')).$promise.then(function(data) {
        _this.$storage = $localStorage.$default({
            filter: {
                regions: data
            }
        });
    });
    
    this.regionNamesHash = Data.retrieve('region-names-dictionary');

    this.whitelist = function(criteria) {
        return function(input) {
            return criteria.indexOf(input.name) > -1;
        };
    };

    this.geocoding = function() {
        $scope.currentRegion = undefined;

        $window.navigator.geolocation.getCurrentPosition(function(position) {
            $resource('http://maps.googleapis.com/maps/api/geocode/json?sensor=false&latlng=' + position.coords.latitude + ',' + position.coords.longitude).get().$promise.then(function(geolocation) {
                $scope.currentRegion = $filter('filter')(geolocation.results[0].address_components, {
                    types: 'administrative_area_level_2'
                })[0].long_name;
            });
        });
    };
});
