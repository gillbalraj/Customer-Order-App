(function(){
    var detailsController = function($scope, $routeParams, eventsFactory){
       var eveId = $routeParams.eveId;
              
       $scope.info = null;
        function init(){
            //search for the details of selected field
          eventsFactory.getDetails(eveId)   
                  .success(function(info){
                      $scope.info = info;
                  })
                          .error(function(data,status, headers, cofig){
                              //error message goes here
                          })
        }
        
        init();
     
    };
    detailsController.$inject=['$scope', '$routeParams', 'eventsFactory'];
    
    angular.module('infoApp')
            .controller('detailsController',detailsController);
}());