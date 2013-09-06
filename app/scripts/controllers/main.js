'use strict';

angular.module('angularDemoBarchartApp').

controller('MainCtrl', function(
    Data
){
    this.resource = Data.retrieve('age-structure');

    this.resource.$promise.then(function(data) {
        this.filter = {
            year: data[data.length - 1].year
        };
    }.bind(this));
});
