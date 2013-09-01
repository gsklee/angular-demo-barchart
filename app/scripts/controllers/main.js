'use strict';

angular.module('angularDemoBarchartApp').

controller('MainCtrl', function(
    $resource
){
    this.resource = $resource('/data/taiwan-percentage-of-young-population.json').query();
});
