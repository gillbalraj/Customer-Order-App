(function(){
<<<<<<< HEAD
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
       
=======
    var eventsController = function($scope){
        $scope.events = [
        {   eveId: 1,
            Title: 'Primary School',
            Date: '12-04-2010',
            Place: 'Amritsar, India',
            Level: 'A',
            Detail:[
                {eveId: 1,
                Organization:'Little Flower High School',
                Subjects:'English, Maths, Science, Social Studies, Computers'}
            ]
        },
        { eveId: 2,
            Title: 'High School',
            Date: '29-04-2012',
            Place: 'Amritsar, India',
            Level: 'B+',
            Detail:[
                {eveId: 2,
                Organization:'Khalsa College Public School',
                Subjects:'English, Maths, Science'}
            ]
        },
        { eveId: 3,
            Title: 'Undergraduation',
            Date: '30-04-2016',
            Place: 'Sathiala, India',
            Level: 'B+',
            Detail:[
                {eveId: 3,
                Organization:'Guru Nanak Dev University',
                Subjects:'Electronics and Communication Engineering'}
            ]
        },
        { eveId: 4,
            Title: 'Graduation',
            Date: '03-05-2018',
            Place: 'Windsor, Canada',
            Level: 'A',
            Detail:[
                {eveId: 4,
                Organization:'University of Windsor',
                Subjects:'Computers and Electrical Engineering'}
            ]
        }];
    
>>>>>>> 1a79bf4a48c72985cffbc582a22392261f07cb79
        $scope.doSort = function(params){
            $scope.sortBy = params;
            $scope.reverse = !$scope.reverse;
        };
    };
<<<<<<< HEAD
    eventsController.$inject=['$scope', 'eventsFactory'];
=======
    eventsController.$inject=['$scope'];
>>>>>>> 1a79bf4a48c72985cffbc582a22392261f07cb79
    
    angular.module('infoApp')
            .controller('eventsController',eventsController);
}());