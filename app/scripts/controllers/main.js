'use strict';

angular.module('angularDemoBarchartApp').

controller('MainCtrl', function(
    $timeout,
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

    this.whitelist = function(criteria) {
        return function(input) {
            return criteria.indexOf(input.name) > -1;
        };
    };
});
