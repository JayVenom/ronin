'use strict';

/**
 * @ngdoc function
 * @name roninApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the roninApp
 */
angular.module('roninApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
