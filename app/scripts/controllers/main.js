'use strict';

/**
 * @ngdoc function
 * @name tookitakiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tookitakiApp
 */
angular.module('eatloApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log("I am here");
  });
