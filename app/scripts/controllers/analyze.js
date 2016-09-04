'use strict';

/**
 * @ngdoc function
 * @name analysisUiApp.controller:AnalyzeCtrl
 * @description
 * # AnalyzeCtrl
 * Controller of the analysisUiApp
 */

function AnalyzeCtrl(){

}

angular.module('analysisUiApp')
  .controller('AnalyzeCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.submit = function() {
      console.log($scope.dataset);
      $http({
        method: 'POST',
        url: 'https://dataset-analysis.herokuapp.com/api/analyzes/analyze',
        data: { data: $scope.dataset }
      })
        .success(function(response) {
          console.log(response.analysis);
          $scope.analysis = response.analysis;
        });
    };
  }]);

