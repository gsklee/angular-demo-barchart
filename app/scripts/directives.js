'use strict';

angular.module('angularDemoBarchartApp').

directive('appGeohighlight', function(
){
    return function(scope, element, attrs) {
        scope.$watch('currentRegion', function(newVal, oldVal) {
            newVal !== oldVal && newVal === scope.$eval(attrs.appGeohighlight) && element.addClass('geohighlight');
        });
    };
});
