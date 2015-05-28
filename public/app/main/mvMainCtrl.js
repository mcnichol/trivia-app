angular.module('app').controller('mvMainCtrl', function($scope, mvCachedCategories, mvEvent){
  $scope.categories = mvCachedCategories.query();
  $scope.events = mvEvent.query();
});
