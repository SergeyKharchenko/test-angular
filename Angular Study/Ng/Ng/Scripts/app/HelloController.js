angular.module("myAngular", []).controller('MainController', ['$scope', function ($scope) {
    $scope.greeting = 'Hola!';

    $scope.say = function() {
        alert(Date.now());
    };
}]);