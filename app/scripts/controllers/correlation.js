'use strict';

/**
 * @ngdoc function
 * @name analysisUiApp.controller:CorrelationCtrl
 * @description
 * # CorrelationCtrl
 * Controller of the analysisUiApp
 */

function CorrelationCtrl(){

}

angular.module('analysisUiApp')
  .controller('CorrelationCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.submit = function() {
      console.log($scope.dataset_1, $scope.dataset_2);
      $http({
        method: 'POST',
        url: 'https://dataset-analysis.herokuapp.com/api/analyzes/correlate',
        data: { dataset_1: $scope.dataset_1, dataset_2: $scope.dataset_2 }
      })
        .success(function(response) {
          console.log(response.correlation);
          $scope.correlation = response.correlation;
        });
    };
  }]);
