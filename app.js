(function(){
    var app = angular.module('infoApp',['ngRoute']);
    
   app.config(function($routeProvider){
       $routeProvider
               .when('/', {
                    controller: 'eventsController',
                    templateUrl:'view/events.html'
                })
               .otherwise({redirectTo: '/'});
   })
}());