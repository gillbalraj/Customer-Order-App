(function(){
    var customersController =function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers= [{joined:'2000-11-02',name:'John', city:'Amritsar',orderTotal:'9.4'},{joined:'2010-9-02',name:'Mohan', city:'Jalandhar',orderTotal:'119.9991'},{joined:'1990-10-02',name:'Sohan', city:'Pathankot',orderTotal:'50.9'},{joined:'1991-5-13',name:'Ringh', city:'Orlando',orderTotal:'150.9991'}];

            $scope.doSort = function(propName) {
                $scope.sortBy = propName;
                $scope.reverse = !$scope.reverse;
           };

           }
angular.module('customersApp')
    .controller('customersController', customersController);
}());