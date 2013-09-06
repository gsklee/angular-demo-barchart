'use strict';

angular.module('angularDemoBarchartApp').

controller('MainCtrl', function(
    $timeout,
    Data
){
    var _this = this;

    this.resource = Data.retrieve('age-structure');

    this.filter = {
        startFrom: 0
    };

    this.resource.$promise.then(function(data) {
        (function _loop() {
            $timeout(function() {
                _this.filter.startFrom = (_this.filter.startFrom + 1) % data.length;

                _loop();
            }, 1000);
        })();
    });
});
