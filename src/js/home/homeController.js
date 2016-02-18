angular.module('todo.home').controller('HomeController', function ($scope) {
    $scope.message = 'These are your Todos:';

    $scope.todos = [];

    $scope.addTodo = function () {
        $scope.todos.push({
            name: $scope.newTodo
        });

        $scope.newTodo = '';
    }
});