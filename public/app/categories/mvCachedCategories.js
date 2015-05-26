angular.module('app').factory('mvCachedCategories', function(mvCategory){
  var categoryList;

  return {
    query: function(){
      if(!categoryList){
        categoryList = mvCategory.query();
      }

      return categoryList;
    }
  }
});
