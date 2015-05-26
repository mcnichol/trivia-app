angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
  var routeRoleChecks = {
    admin: {auth: function(mvAuth){
      //console.log("Entering Route Role Check with Admin Role")
      return mvAuth.authorizeCurrentUserForRoute('admin');
      //This is unreachable
    }},
    user: {auth: function(mvAuth){
      //console.log("Enter Route Role Checks User Check");
      return mvAuth.authorizeAuthenticatedUserForRoute();
      //This is unreachable
    }}
  }

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {templateUrl: '/partials/main/main', controller: 'mvMainCtrl'
    })
    .when('/admin/users', {templateUrl: '/partials/admin/user-list', 
      controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
    })
    .when('/signup', {templateUrl: '/partials/account/signup', 
      controller: 'mvSignupCtrl'
    })
    .when('/profile', {templateUrl: '/partials/account/profile', 
      controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
    })
    .when('/categories', {templateUrl: '/partials/categories/category-list', 
      controller: 'mvCategoryListCtrl'
    })
    .when('/categories/:id', {templateUrl: '/partials/categories/category-details', 
      controller: 'mvCategoryDetailCtrl'
    })
});

angular.module('app').run(function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection){
    if(rejection === 'Not Authorized'){
      $location.path('/');
    }
  })
})
