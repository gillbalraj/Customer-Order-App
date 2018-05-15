(function(){
    var eventsFactory = function($http){
    
  
    var factory = {};
    
    factory.getEvents = function(){
       return $http.get('/events');
    };
    
    factory.getDetails = function(eveId){
        return $http.get('/events/' + eveId)
    };
     return factory;
    
    };
     eventsFactory.$inject =['$http'];
     angular.module('infoApp').factory('eventsFactory', eventsFactory);
    
}()); 