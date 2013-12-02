'use strict';

angular.module('angularD3App')
  .controller('MainCtrl', function ($scope, $http) {

    $http.get('/companies.json').then(function(data) {
      console.log('got', data);
    });
  });
