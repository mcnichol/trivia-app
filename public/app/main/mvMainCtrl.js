angular.module('app').controller('mvMainCtrl', function($scope, mvCachedCategories){
  $scope.categories = mvCachedCategories.query();
});
