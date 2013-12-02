'use strict';

angular.module('angularD3App.directives')
  .directive('d3CompaniesSummary', function($window, $timeout, d3Service, Colors) {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        label: '@'
      },
      link: function (scope, element, attrs) {
        d3Service.d3().then(function(d3) { 
          console.log('var');
          var svg = d3.select(element[0])
            .append('svg')
            .style('position', 'absolute')
            .style('width', '100%')
            .style('height', '100%')
            .style('left', '0')
            .style('top', '0'); // css perhaps?
 
          $window.onresize = function() {
            scope.$apply();
          };
 
          scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
          }, function() {
            scope.render(scope.data);
          });
 
          scope.$watch(function() {
            return angular.element($window)[0].innerHeight;
          }, function() {
            scope.render(scope.data);
          });
 
          scope.$watch('data', function(newData) {
            scope.render(newData);
          }, true);

          scope.render = function(data) {
            if (!data) { return; }
            
            svg.selectAll('*').remove();
            data = data.sort(d3.descending);

            // actual graph stuff here:

          }
        });
      }
    };
  });
