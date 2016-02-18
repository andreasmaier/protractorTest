angular.module('todo.home').controller('HomeController', function ($scope) {
    $scope.message = 'These are your Todos:';

    $scope.todos = [];
});