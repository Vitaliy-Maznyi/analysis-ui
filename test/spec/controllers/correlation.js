'use strict';

describe('Controller: CorrelationCtrl', function () {

  // load the controller's module
  beforeEach(module('analysisUiApp'));

  var CorrelationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CorrelationCtrl = $controller('CorrelationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CorrelationCtrl.awesomeThings.length).toBe(3);
  });
});
