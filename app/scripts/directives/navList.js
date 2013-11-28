'use strict';

angular.module('angularD3App.directives')
  .directive('navList', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        console.log('nav directive is here!');
      }
    };
  });
