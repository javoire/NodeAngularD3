'use strict';

angular.module('angularD3App.directives', []);

angular.module('angularD3App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'd3',
  'angularD3App.directives'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/donut', {
        templateUrl: 'views/donut.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
