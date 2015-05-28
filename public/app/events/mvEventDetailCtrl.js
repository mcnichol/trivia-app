angular.module('app').controller('mvEventDetailCtrl', function($scope, mvEvent, mvIdentity, $routeParams, $route){
    $scope.identity = mvIdentity;

    $scope.startEvent = function(){
        mvEvent.query().$promise.then(function(collection){
            collection.forEach(function(event) {
                if(event._id === $routeParams.id){
                    event.started = true;
                    event.round = 1
                    $scope.event = event;
                }
            });
        });
    };

    $scope.setRound = function(val){
        event = $scope.event;
        event.round = parseInt(val);
        event.started = true;
        $scope.event = event;
    };

    mvEvent.query().$promise.then(function(collection){
       collection.forEach(function(event){
           if(event._id === $routeParams.id){
               $scope.event = event;
           }
       })
   });
});