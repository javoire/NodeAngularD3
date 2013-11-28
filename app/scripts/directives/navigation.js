'use strict';

angular.module('angularD3App')
  .directive('navigation', function ($location) {
    return {
      template: '<ul><li ng-repeat="navItem in navList"><a ng-class="{active:navItem.active}" href="#{{navItem.url}}">{{navItem.title}}</a></li></ul>',
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.navList = [
          { url: '/', title: 'Bars'},
          { url: '/donut', title: 'Donut'}
        ];

        function detectRoute() {
          angular.forEach(scope.navList, function(item) {
            item.active = $location.path() === item.url ? true : false;
          });
        }

        scope.$on('$routeChangeSuccess', detectRoute);
      }
    };
  });
