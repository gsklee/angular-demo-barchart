'use strict';

angular.module('angularDemoBarchartApp').

controller('MainCtrl', function(
    $timeout,
    Data
){
    var _this = this;

    this.resource = Data.retrieve('age-structure');
    this.regions = Data.retrieve('regions');

    this.resource.$promise.then(function(data) {
        (function _loop() {
            $timeout(function() {
                _this.tick = (_this.tick + 1) % data.length;

                _loop();
            }, 200);
        })();
    });

    this.whitelist = function(criteria) {
        return function(input) {
            return criteria.indexOf(input.name) > -1;
        };
    };
});
