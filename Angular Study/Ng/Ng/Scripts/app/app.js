'use strict';

var app = angular.module("myAngular", []);
app.config(['$routeProvider', '$locationProvider'], function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/hello',
    {
        templateUrl: '/Templates/Hello.html',
        //controller: 'HelloController'
    });
    $routeProvider.when('/',
    {
        templateUrl: '/Templates/Hello.html',
        //controller: 'HelloController'
    });
    //$routeProvider.otherwise({ redirectTo: '/hello' });
});