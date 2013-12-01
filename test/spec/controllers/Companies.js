'use strict';

describe('Controller: CompaniesctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularD3App'));

  var CompaniesctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompaniesctrlCtrl = $controller('CompaniesctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
