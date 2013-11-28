'use strict';

angular.module('angularD3App')
  .directive('navigation', function () {
    return {
      template: '<ul><li ng-repeat="navItem in navList"><a href="{{navItem.url}}">{{navItem.title}}</a></li></ul>',
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.navList = [
          { url: '#/', title: 'Bars'},
          { url: '#/donut', title: 'Donut'}
        ];
      }
    };
  });
