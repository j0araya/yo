'use strict';

/**
 * @ngdoc overview
 * @name pruebaYeomanApp
 * @description
 * # pruebaYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('pruebaYeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
