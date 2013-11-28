'use strict';

angular.module('angularD3App.directives')
  .directive('d3Donut', function($window, $timeout, d3Service) {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        label: '@',
        onClick: '&'
      },
      link: function(scope, ele, attrs) {
        d3Service.d3().then(function(d3) {
          var renderTimeout;
 
          var svg = d3.select(ele[0])
            .append('svg')
            .style('position', 'absolute')
            .style('width', '100%')
            .style('height', '100%');
 
          $window.onresize = function() {
            scope.$apply();
          };
 
          scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
          }, function() {
            scope.render(scope.data);
          });
 
          scope.$watch('data', function(newData) {
            scope.render(newData);
          }, true);
 
          scope.render = function(data) {
            svg.selectAll('*').remove();
 
            if (!data) { return; }
            if (renderTimeout) { clearTimeout(renderTimeout); }

            var width = 460,
                height = 300,
                radius = Math.min(width, height) / 2;

            var color = d3.scale.category20();

            var pie = d3.layout.pie()
                .sort(null);

            var arc = d3.svg.arc()
                .innerRadius(radius - 100)
                .outerRadius(radius - 50);

            svg.append('g')
              .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

            var path = svg.selectAll('path')
                .data(pie(data))
              .enter().append('path')
                .attr('fill', function(d, i) { return color(i); })
                .attr('d', arc);
          };
        });
      }
    };
  });