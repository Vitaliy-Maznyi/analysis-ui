'use strict';

/**
 * @ngdoc overview
 * @name analysisUiApp
 * @description
 * # analysisUiApp
 *
 * Main module of the application.
 */
angular
  .module('analysisUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'ng-token-auth'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/analysis', {
        templateUrl: 'views/analysis.html',
        controller: 'AnalyzeCtrl',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .when('/correlation', {
        templateUrl: 'views/correlation.html',
        controller: 'CorrelationCtrl',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .when('/sign_in', {
        templateUrl: 'views/user_sessions/new.html',
        controller: 'UserSessionsCtrl'
      })
      .when('/sign_up', {
        templateUrl: 'views/user_registrations/new.html',
        controller: 'UserRegistrationsCtrl'
      })
      .otherwise({
        redirectTo: '/sign_in'
      });
  })
  .config(function($authProvider) {
    $authProvider.configure({
      apiUrl: 'http://localhost:3000/api'
    });
  })
  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('auth:login-success', function() {
      $location.path('/analysis');
    });
    $rootScope.$on('auth:invalid', function () {
      $location.path('/sign_in');
    });
    $rootScope.$on('auth:logout-success', function () {
      $location.path('/sign_in');
    })
  }]);
