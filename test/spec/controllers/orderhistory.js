'use strict';

describe('Controller: OrderhistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('eatloApp'));

  var OrderhistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderhistoryCtrl = $controller('OrderhistoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
