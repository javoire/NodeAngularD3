'use strict';

angular.module('angularD3App')
  .controller('MainCtrl', function ($scope) {
    $scope.d3Data = [
      {name: 'Greg', score: 98},
      {name: 'Ari', score: 96},
      {name: 'Q', score: 75},
      {name: 'Loser', score: 48}
    ];
  });
