'use strict';

describe('Service: Colors', function () {

  // load the service's module
  beforeEach(module('angularD3App'));

  // instantiate service
  var Colors;
  beforeEach(inject(function (_Colors_) {
    Colors = _Colors_;
  }));

  it('should do something', function () {
    expect(!!Colors).toBe(true);
  });

});
