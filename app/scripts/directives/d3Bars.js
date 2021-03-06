'use strict';

angular.module('angularD3App.directives')
  .directive('d3Bars', function($window, $timeout, d3Service, Colors) {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        label: '@',
        onClick: '&'
      },
      link: function(scope, ele, attrs) {
        d3Service.d3().then(function(d3) {
          var renderTimeout;
          var margin = parseInt(attrs.margin) || 0,
              barHeight = parseInt(attrs.barHeight) || 40,
              barPadding = parseInt(attrs.barPadding) || 10;
 
          var svg = d3.select(ele[0])
            .append('svg')
            .style('width', '100%');
 
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
 
            var width = d3.select(ele[0])[0][0].offsetWidth - margin,
                height = scope.data.length * (barHeight + barPadding),
                color = d3.scale.linear()
              .domain([
                0,
                data.length
              ])
              .range([
                d3.hsl(Colors.getMainBlue()),
                d3.hsl(Colors.getMainBlue()).brighter(1)
              ]),
                xScale = d3.scale.linear()
                  .domain([0, d3.max(data, function(d) {
                    return d.score;
                  })])
                  .range([0, width]);

            svg.attr('height', height);

            svg.selectAll('rect')
              .data(data)
              .enter()
                .append('rect')
                .on('click', function(d,i) {
                  return scope.onClick({item: d});
                })
                .attr('height', barHeight)
                .attr('width', 0)
                .attr('x', Math.round(margin/2))
                .attr('y', function(d,i) {
                  return i * (barHeight + barPadding);
                })
                .attr('fill', function(d, i) {
                  return color(i);
                })
                .attr('class', 'bar-horizontal')
                .transition()
                  .duration(300)
                  .attr('width', function(d) {
                    return xScale(d.score);
                  });
          };
        });
      }
    };
  });