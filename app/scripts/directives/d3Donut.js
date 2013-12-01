'use strict';

angular.module('angularD3App.directives')
  .directive('d3Donut', function($window, $timeout, d3Service, Colors) {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        label: '@',
        onClick: '&'
      },
      link: function(scope, element, attrs) {
        d3Service.d3().then(function(d3) {
          var renderTimeout;
 
          var svg = d3.select(element[0])
            .append('svg')
            .attr('position', 'absolute')
            .attr('width', '100%')
            .attr('height', '100%');
 
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

            var width = 400,
                height = 400,
                radius = Math.min(width, height) / 2;

            var color = d3.scale.linear()
              .domain([
                0,
                data.length
              ])
              .range([
                d3.hsl(Colors.getMainBlue()),
                d3.hsl(Colors.getMainBlue()).brighter(1)
              ]);

            var pie = d3.layout.pie()
                .sort(null);

            var arc = d3.svg.arc()
                .innerRadius(radius - 100)
                .outerRadius(radius - 50);

            var g = svg.append('g')
              .attr('transform', 'translate(' + svg[0][0].clientWidth / 2 + ',' + svg[0][0].clientHeight / 2 + ')');

            var path = g.selectAll('path')
                .data(pie(data))
              .enter().append('path')
                .attr('fill', function(d, i) { return color(i); }) // TODO: dynamic normalization instead of '7'
                .attr('d', arc)
                .attr('margin-left', width);
          };
        });
      }
    };
  });