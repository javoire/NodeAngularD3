'use strict';

angular.module('angularD3App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'd3'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
