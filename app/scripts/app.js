'use strict';

angular.module('angularDemoBarchartApp', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'ngStorage',
    'ui.keypress'
]).

config(function(
    $locationProvider,
    $routeProvider
){
    $locationProvider.html5Mode(true);

    $routeProvider.

    when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as main'
    }).

    when('/end', {
        templateUrl: 'views/end.html'
    }).

    otherwise({
        redirectTo: '/'
    });
}).

run(function(
    $rootScope,
    $location
){
    $rootScope.$location = $location;
});
