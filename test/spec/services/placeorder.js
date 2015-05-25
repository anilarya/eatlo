'use strict';

describe('Service: placeOrder', function () {

  // load the service's module
  beforeEach(module('eatloApp'));

  // instantiate service
  var placeOrder;
  beforeEach(inject(function (_placeOrder_) {
    placeOrder = _placeOrder_;
  }));

  it('should do something', function () {
    expect(!!placeOrder).toBe(true);
  });

});
