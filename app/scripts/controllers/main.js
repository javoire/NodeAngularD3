'use strict';

angular.module('angularD3App')
  .controller('MainCtrl', function($scope, $q, Companies) {
    Companies.then(function(data) {
      console.log('MainCtrl got the json from factory', data);
      $scope.companies = data;
    });
  });
