angular.module('todo.home', []).config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: "js/home/home.html"
    });
});