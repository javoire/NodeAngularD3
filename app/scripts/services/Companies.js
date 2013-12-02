'use strict';

angular.module('angularD3App')
  .factory('Companies', function($q, $http) {
    var d = $q.defer(),
      companiesList,
      Companies = {
        loaded: function() {
          return true;
        },
        companies: function() {
          return companiesList;
        }
      };

    $http.get('/companies.json').then(function(data) {
      console.log('factory loaded json', data);
      companiesList = data;
      d.resolve(data);
    });

    return d.promise;
  });
