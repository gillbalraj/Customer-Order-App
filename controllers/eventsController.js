(function(){
    var eventsController = function($scope){
        $scope.events = [
        {Date: '12-02-2010',Place: 'Amritsar',Level: 'Junior'},
        {Date: '02-04-2012',Place: 'Amritsar',Level: 'Senior'},
        {Date: '12-02-2015',Place: 'Jalandhar',Level: 'Senior'},
        {Date: '11-06-2017',Place: 'Chandigarh',Level: 'State'}];
    
        $scope.doSort = function(params){
            $scope.sortBy = params;
            $scope.reverse = !$scope.reverse;
        };
    };
    eventsController.$inject=['$scope'];
    
    angular.module('infoApp')
            .controller('eventsController',eventsController);
}());