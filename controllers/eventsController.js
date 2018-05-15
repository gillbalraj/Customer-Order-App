(function(){
    var eventsController = function($scope, eventsFactory){
        
        $scope.events = [];
        
        function init(){
             eventsFactory.getEvents()
                     .success(function(events){
                         $scope.events = events;
                     })
                    .error(function(data,status, headers, cofig){
                        //error message goes here
                    })
        }
        init();
       
        $scope.doSort = function(params){
            $scope.sortBy = params;
            $scope.reverse = !$scope.reverse;
        };
    };
    eventsController.$inject=['$scope', 'eventsFactory'];
    
    angular.module('infoApp')
            .controller('eventsController',eventsController);
}());