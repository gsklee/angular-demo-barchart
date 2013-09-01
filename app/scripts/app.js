'use strict';

angular.module('angularDemoBarchartApp', [
    'ngRoute'
]).

config(function(
    $routeProvider
){
    $routeProvider.

    when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as main'
    }).

    otherwise({
        redirectTo: '/'
    });
});
