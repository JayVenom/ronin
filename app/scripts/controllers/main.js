'use strict';

/**
 * @ngdoc function
 * @name roninApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the roninApp
 */
angular.module('roninApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
