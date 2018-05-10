(function(){
    var detailsController = function($scope, $routeParams, eventsFactory){
       var eveId = $routeParams.eveId;
              
       $scope.info = null;
        function init(){
            //search for the details of selected field
           $scope.info = eventsFactory.getDetails(eveId);
        }
        
        init();
     
    };
    detailsController.$inject=['$scope', '$routeParams', 'eventsFactory'];
    
    angular.module('infoApp')
            .controller('detailsController',detailsController);
}());