'use strict';

/**
 * @ngdoc function
 * @name analysisUiApp.controller:UserRegistrationsCtrl
 * @description
 * # UserRegistrationsCtrl
 * Controller of the analysisUiApp
 */
angular.module('analysisUiApp')
  .controller('UserRegistrationsCtrl', ['$scope', '$location', '$auth', function ($scope, $location, $auth) {
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function() {
          $auth.submitLogin({
            email: $scope.registrationForm.email,
            password: $scope.registrationForm.password
          });
        });
    };
  }]);
