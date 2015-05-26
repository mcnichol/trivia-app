angular.module('app').controller('mvCategoryDetailCtrl', function($scope, mvCachedCategories, $routeParams){
  mvCachedCategories.query().$promise.then(function(collection){
    collection.forEach(function(category){
      if(category._id === $routeParams.id){
        $scope.category = category;
      }
    })
  })
});
