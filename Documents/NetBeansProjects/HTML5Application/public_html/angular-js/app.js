(function(){
    var app = angular.module('infoApp',['ngRoute','ngAnimate']);
    
   app.config(function($routeProvider){
       $routeProvider
               .when('/', {
                    controller: 'eventsController',
                    templateUrl:'view/events.html'
                })
                .when('/details/:eveId',{
                    controller: 'detailsController',
                    templateUrl:'view/details.html'
                })
               .otherwise({redirectTo: '/'});
   });
}());