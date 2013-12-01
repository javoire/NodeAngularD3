'use strict';

// NOTE: hmm, not good practice.. ? 
angular.module('angularD3App')
  .factory('Colors', function () {
    var mainBlue = '#5DA3DF';
    return {
      getMainBlue: function () {
        return mainBlue;
      }
    };
  });