'use strict';

/**
 * @ngdoc function
 * @name eatloApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the eatloApp
 */
angular.module('eatloApp')
  .controller('DashboardCtrl', function ($scope, $cookies,$cookieStore,$rootScope, $state, $location, dashboard) {
    
  	$scope.model = {
  		location : [] ,
      choosen_location : ""
  	}
 
    $scope.fetchMenuFromLocation = function(location , id){ 
      console.log("id", location, id)
      $scope.model.choosen_location = location ; 
      $cookieStore.put('location', location);
      $scope.$emit('someEvent', [1,2,3]);
      $state.go('menu');
    }

    $scope.isActive = function(route) {
        return route === $location.path();
    }

    var fetchLocation = function(keyword){
      dashboard.fetchLocation().success(function (results) {
          $scope.model.location = results.results; 
          console.log("fetchLocation results",results.results );
      }).error(function (campaignData) { 
          
      });
    }
                 
    var init = function () {
      console.log('DashboardCtrl.init()');
      fetchLocation();  
    }();

  });
