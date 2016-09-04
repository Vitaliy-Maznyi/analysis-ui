'use strict';

/**
 * @ngdoc function
 * @name analysisUiApp.controller:UserSessionsCtrl
 * @description
 * # UserSessionsCtrl
 * Controller of the analysisUiApp
 */
angular.module('analysisUiApp')
  .controller('UserSessionsCtrl', ['$scope', function ($scope) {
    $scope.$on('auth:login-error', function(ev, reason) {
      $scope.error = reason.errors[0];
    });
  }]);
