'use strict';

angular.module('angularDemoBarchartApp', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'ngStorage'
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
