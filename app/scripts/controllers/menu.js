'use strict';

/**
 * @ngdoc function
 * @name eatloApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the eatloApp
 */
angular.module('eatloApp')
  .controller('MenuCtrl', function ($scope, $cookies, $cookieStore, $timeout, menu) {
    
    $scope.model = {
    	activate_all : true ,
    	activate_veg :false , 
    	activate_non_veg :false 
    }


    $scope.fetchMenuCategory = function(category){
    	if(category == 'all'){
    		$scope.model.activate_all = true;
    		$scope.model.activate_veg = false;
    		$scope.model.activate_non_veg = false;

    	}
    	else if(category == 'veg'){
    		$scope.model.activate_all = false;
    		$scope.model.activate_veg = true;
    		$scope.model.activate_non_veg = false;
    		$scope.model.food_category = "veg"
    	}
    	else if(category == 'non veg'){
    		$scope.model.activate_all = false;
    		$scope.model.activate_veg = false;
    		$scope.model.activate_non_veg = true;
    		$scope.model.food_category = "non veg"

    	}
    }

    $scope.selectedItem = function(menu){
      console.log("menu", menu);
    }

    var fetchMenus = function(){ 
      menu.fetchMenus().success(function (results) {
      	angular.forEach(results.results, function(value, key) {
              if ("1" === key) {  
                  $scope.model.menuResults = value ;
              }
          });
          console.log("$scope.model.menuResults",$scope.model.menuResults );
      }).error(function (err) { 
          alert("err", err);
      });

	} 

 

  $timeout(function () {
    $scope.$apply(function () {
        $scope.model.choosen_location = $cookieStore.get('location');
        console.log("$scope.model.choosen_location",$scope.model.choosen_location);
    });
  }, 2000);


    var init = function () {
      console.log('menu.init()');
      fetchMenus();  
    }();
 
  });
