'use strict';

angular.module('angularDemoBarchartApp').

controller('MainCtrl', function(
    $resource
){
    this.resource = $resource('/data/taiwan-percentage-of-young-population.json').query();

    this.resource.$promise.then(function(data) {
        this.filter = {
            year: data[data.length - 1].year
        };
    }.bind(this));
});
