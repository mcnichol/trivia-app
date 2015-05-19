//create the module and name it hostApp
var hostApp = angular.module('hostApp',['ngRoute']);

hostApp.config(function($routeProvider){
   $routeProvider

   // route for the home page
   .when('/home',{
      templateUrl:'app/home/home.html',
      controller:'mainController'
   })

   // route for the about page
   .when('/about',{
      templateUrl:'app/about/about.html',
      controller: 'aboutController'
   });
});

//create the controller and inject Angular's $scope
hostApp.controller('mainController',function($scope){
   $scope.message = 'Welcome to our home web server!';
});

hostApp.controller('aboutController', function($scope){
   $scope.message = 'This is the about page.';
});

