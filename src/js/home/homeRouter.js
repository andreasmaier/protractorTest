angular.module('todo.home', []).config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: "src/js/home/home.html"
    });
});