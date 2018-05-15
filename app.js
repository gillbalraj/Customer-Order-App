(function(){
<<<<<<< HEAD
    var app = angular.module('infoApp',['ngRoute','ngAnimate']);
=======
    var app = angular.module('infoApp',['ngRoute']);
>>>>>>> 1a79bf4a48c72985cffbc582a22392261f07cb79
    
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