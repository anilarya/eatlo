'use strict';

/**
 * @ngdoc service
 * @name eatloApp.dashboard
 * @description
 * # dashboard
 * Factory in the eatloApp.
 */
angular.module('eatloApp')
  .factory('menu', function ($http, $log ) {
    // Service logic
    // ...
    return { 
        fetchMenus: function () {  
                var url = '/data/menu.json';  //Your own Rest APIs 
                
                var promise = $http({
                    url :url,
                    method : "GET",
                    format : "json", 
                }).success(function (result) { 
                    console.log("result data", result)
                }).error(function (err) {
                        console.log(err);
                });

                return promise;
            },
    }
 
  });
