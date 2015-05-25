'use strict';

/**
 * @ngdoc overview
 * @name eatloApp
 * @description
 * # eatloApp
 *
 * Main module of the application.
 */
angular
  .module('eatloApp', ['ngAnimate','ngCookies','ui.router','ngResource',
    'ui.bootstrap','ngRoute','ngSanitize','ngTouch','kendo.directives'
  ]).config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider 
        .state('/', {
            url: '/',
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('menu', {
            url: '/menu/?location',
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        })
        .state('order', {
            url: '/place_order',
            templateUrl: 'views/placeOrder.html',
            controller: 'PlaceorderCtrl'
        })  
        .state('order_history', {
            url: '/order_history',
            templateUrl: 'views/orderHistory.html',
            controller: 'OrderhistoryCtrl'
        }) 
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })  

    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  });
