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
    .when('/courses', {templateUrl: '/partials/courses/course-list', 
      controller: 'mvCourseListCtrl'
    })
    .when('/courses/:id', {templateUrl: '/partials/courses/course-details', 
      controller: 'mvCourseDetailCtrl'
    })
});

angular.module('app').run(function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection){
    if(rejection === 'Not Authorized'){
      $location.path('/');
    }
  })
})
