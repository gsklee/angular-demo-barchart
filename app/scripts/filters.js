'use strict';

angular.module('angularDemoBarchartApp').

filter('startFrom', function() {
    return function(input, start) {
        return input.slice(+start);
    };
});
