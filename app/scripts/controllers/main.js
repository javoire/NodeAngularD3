'use strict';

angular.module('angularD3App')
  .controller('MainCtrl', function ($scope) {
    $scope.d3Data = [
      {name: 'This', score: 98},
      {name: 'Is', score: 96},
      {name: 'Some', score: 75},
      {name: 'Data', score: 48}
    ];

    $scope.donutData = [53245, 28479, 19697, 24037, 40245];
  });
