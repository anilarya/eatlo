'use strict';

/**
 * @ngdoc function
 * @name tookitakiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tookitakiApp
 */
angular.module('eatloApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
