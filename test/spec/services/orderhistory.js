'use strict';

describe('Service: orderHistory', function () {

  // load the service's module
  beforeEach(module('eatloApp'));

  // instantiate service
  var orderHistory;
  beforeEach(inject(function (_orderHistory_) {
    orderHistory = _orderHistory_;
  }));

  it('should do something', function () {
    expect(!!orderHistory).toBe(true);
  });

});
