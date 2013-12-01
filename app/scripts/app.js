'use strict';

angular.module('angularD3App.directives', []);

angular.module('angularD3App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
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
      .when('/companies', {
        templateUrl: 'views/companies.html',
        controller: 'CompaniesCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
