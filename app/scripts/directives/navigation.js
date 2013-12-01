'use strict';

angular.module('angularD3App.directives')
  .directive('navigation', function ($location) {
    return {
      templateUrl: 'views/_navigation.html',
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.navList = [
          {
            url: '/',
            title: 'Summary'
          },
          {
            url: '/companies',
            title: 'Companies',
            subNav: [{
              url: '/industries',
              title: 'Industries'
            },{
              url: '/programmes',
              title: 'Programmes'
            },{
              url: '/offers',
              title: 'Offers'
            },{
              url: '/priorities',
              title: 'Priorities'
            }]
          },
          {
            url: '/users',
            title: 'Users',
            subNav: [{
              url: '/Bookmarks',
              title: 'Bookmarks'
            },{
              url: '/Interests',
              title: 'Interests'
            }]
          }
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
