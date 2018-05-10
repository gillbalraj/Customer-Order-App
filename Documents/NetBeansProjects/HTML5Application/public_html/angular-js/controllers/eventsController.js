(function(){
    var eventsController = function($scope, eventsFactory){
        
        $scope.events = [];
        
        function init(){
             $scope.events = eventsFactory.getEvents();
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