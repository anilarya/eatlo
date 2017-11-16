"use strict";angular.module("eatloApp",["ngAnimate","ngCookies","ui.router","ngResource","ui.bootstrap","ngRoute","ngSanitize","ngTouch","kendo.directives"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("/",{url:"/",templateUrl:"views/dashboard.html",controller:"DashboardCtrl"}).state("menu",{url:"/menu/?location",templateUrl:"views/menu.html",controller:"MenuCtrl"}).state("order",{url:"/place_order",templateUrl:"views/placeOrder.html",controller:"PlaceorderCtrl"}).state("order_history",{url:"/order_history",templateUrl:"views/orderHistory.html",controller:"OrderhistoryCtrl"}).state("contact",{url:"/contact",templateUrl:"views/contact.html",controller:"ContactCtrl"})}]),angular.module("eatloApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],console.log("I am here")}]),angular.module("eatloApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("eatloApp").controller("DashboardCtrl",["$scope","$cookies","$cookieStore","$rootScope","$state","$location","dashboard",function(a,b,c,d,e,f,g){a.model={location:[],choosen_location:""},a.fetchMenuFromLocation=function(b,d){console.log("id",b,d),a.model.choosen_location=b,c.put("location",b),a.$emit("someEvent",[1,2,3]),e.go("menu")},a.isActive=function(a){return a===f.path()};var h=function(b){g.fetchLocation().success(function(b){a.model.location=b.results,console.log("fetchLocation results",b.results)}).error(function(a){})};(function(){console.log("DashboardCtrl.init()"),h()})()}]),angular.module("eatloApp").factory("dashboard",["$http","$log",function(a,b){return{fetchLocation:function(){var b="/data/location.json",c=a({url:b,method:"GET",format:"json"}).success(function(a){console.log("result data",a)}).error(function(a){console.log(a)});return c}}}]),angular.module("eatloApp").factory("menu",["$http","$log",function(a,b){return{fetchMenus:function(){var b="/data/menu.json",c=a({url:b,method:"GET",format:"json"}).success(function(a){console.log("result data",a)}).error(function(a){console.log(a)});return c}}}]),angular.module("eatloApp").controller("MenuCtrl",["$scope","$cookies","$cookieStore","$timeout","menu",function(a,b,c,d,e){a.model={activate_all:!0,activate_veg:!1,activate_non_veg:!1,selected_menu:[]},a.fetchMenuCategory=function(b){"all"==b?(a.model.activate_all=!0,a.model.activate_veg=!1,a.model.activate_non_veg=!1):"veg"==b?(a.model.activate_all=!1,a.model.activate_veg=!0,a.model.activate_non_veg=!1,a.model.food_category="veg"):"non veg"==b&&(a.model.activate_all=!1,a.model.activate_veg=!1,a.model.activate_non_veg=!0,a.model.food_category="non veg")},a.model.selected_menu=[],a.model.total_items=0,a.model.product_count=0,a.model.final_total_price=0,a.selectedItem=function(b){var c={};c=angular.copy(b),c.total_price=b.price,c.quantity=0;var d=!1,e=a.model.selected_menu.length;if(e>0)for(var f=0;e>f;f++)a.model.selected_menu[f].item_id==b.item_id&&(d=!0,a.model.total_items+=1,a.model.selected_menu[f].quantity+=1,a.model.selected_menu[f].total_price=a.model.selected_menu[f].quantity*a.model.selected_menu[f].price,a.model.final_total_price+=a.model.selected_menu[f].price);0==d&&(a.model.selected_menu.push(c),a.model.total_items+=1,a.model.selected_menu[a.model.selected_menu.length-1].quantity+=1,a.model.final_total_price+=a.model.selected_menu[a.model.selected_menu.length-1].price),a.model.product_count=a.model.selected_menu.length,console.log(f,a.model.selected_menu)},a.reduce_item=function(b){return a.model.total_items-=1,a.model.final_total_price-=a.model.selected_menu[b].price,a.model.selected_menu[b].quantity-=1,0==a.model.selected_menu[b].quantity?(a.model.product_count-=1,void a.model.selected_menu.splice(b,1)):(a.model.selected_menu[b].total_price-=a.model.selected_menu[b].price,void console.log(a.model.selected_menu))},a.add_item=function(b){a.model.total_items+=1,a.model.final_total_price+=a.model.selected_menu[b].price,a.model.selected_menu[b].quantity+=1,a.model.selected_menu[b].total_price+=a.model.selected_menu[b].price,console.log(a.model.selected_menu)},a.remove_item=function(b){a.model.product_count-=1,a.model.final_total_price-=a.model.selected_menu[b].total_price,a.model.total_items-=a.model.selected_menu[b].quantity,a.model.selected_menu.splice(b,1)};var f=function(){e.fetchMenus().success(function(b){angular.forEach(b.results,function(b,c){"1"===c&&(a.model.menuResults=b)}),console.log("$scope.model.menuResults",a.model.menuResults)}).error(function(a){alert("err",a)})};d(function(){a.$apply(function(){a.model.choosen_location=c.get("location"),console.log("$scope.model.choosen_location",a.model.choosen_location)})},2e3);(function(){console.log("menu.init()"),f()})()}]),angular.module("eatloApp").controller("PlaceorderCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("eatloApp").service("placeOrder",function(){}),angular.module("eatloApp").service("orderHistory",function(){}),angular.module("eatloApp").controller("OrderhistoryCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("eatloApp").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("eatloApp").service("contact",function(){});