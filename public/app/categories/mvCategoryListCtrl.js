angular.module('app').controller('mvCategoryListCtrl', function($scope, mvCachedCategories){
  $scope.categories = mvCachedCategories.query();

  $scope.sortOptions = [
    {value:"title",	text:"Sort by Title"},
    {value:"published", text:"Sort by Publish Date"}
  ];
  $scope.sortOrder = $scope.sortOptions[0].value;
});
