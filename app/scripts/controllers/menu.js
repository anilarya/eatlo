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
    	activate_non_veg :false ,
      selected_menu : []
    }
    // $scope.model.selected_menu[0] = {};s

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
    $scope.model.selected_menu = [];
    $scope.model.total_items = 0;
    $scope.model.product_count = 0 ;
    $scope.model.final_total_price = 0 ;

    $scope.selectedItem = function(menu){
      var temp_list = {} ;
      temp_list = angular.copy(menu) ; 
      temp_list.total_price = menu.price ;
      temp_list.quantity = 0 ; 
      var flag = false;
      var len = $scope.model.selected_menu.length ;
      var index ;  
      if(len > 0){
        for(var i =0 ; i < len; i++) {
           if($scope.model.selected_menu[i].item_id == menu.item_id){
              flag = true;
              $scope.model.total_items +=1 ; 
              $scope.model.selected_menu[i].quantity +=  1  ; 
              $scope.model.selected_menu[i].total_price = $scope.model.selected_menu[i].quantity * $scope.model.selected_menu[i].price;   
              $scope.model.final_total_price +=  $scope.model.selected_menu[i].price
            }
        };
      }
     
      if(flag == false){
        $scope.model.selected_menu.push(temp_list); 
        $scope.model.total_items +=1 ;
        $scope.model.selected_menu[$scope.model.selected_menu.length-1].quantity += 1; 
        $scope.model.final_total_price += $scope.model.selected_menu[$scope.model.selected_menu.length-1].price
      }  
      $scope.model.product_count = $scope.model.selected_menu.length;
      console.log(i,$scope.model.selected_menu); 
    }

    $scope.reduce_item = function(index){
     
      $scope.model.total_items -=1 ;
      $scope.model.final_total_price -= $scope.model.selected_menu[index].price ; 
      $scope.model.selected_menu[index].quantity -= 1  ; 
      if($scope.model.selected_menu[index].quantity == 0){
        $scope.model.product_count -= 1; 
        $scope.model.selected_menu.splice(index, 1);
        return ;
      }
      $scope.model.selected_menu[index].total_price -= $scope.model.selected_menu[index].price
      console.log($scope.model.selected_menu);
    }

    $scope.add_item = function(index){
      $scope.model.total_items +=1 ;
      $scope.model.final_total_price += $scope.model.selected_menu[index].price ; 
      $scope.model.selected_menu[index].quantity += 1  ;
      $scope.model.selected_menu[index].total_price += $scope.model.selected_menu[index].price
      console.log($scope.model.selected_menu);
    }

    $scope.remove_item = function(index){
      $scope.model.product_count -= 1; 
      $scope.model.final_total_price -= $scope.model.selected_menu[index].total_price 
      $scope.model.total_items -= $scope.model.selected_menu[index].quantity ;
      $scope.model.selected_menu.splice(index, 1);
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
