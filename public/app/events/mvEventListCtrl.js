angular.module('app').controller('mvEventListCtrl', function($scope, mvEvent){
    $scope.events = mvEvent.query();

    $scope.sortOptions = [
        {value:"title", text: "Sort by Event Name"},
        {value:"scheduled", text:"Sort by Event Date"}
    ];
    $scope.sortOrder = $scope.sortOptions[1].value;
});