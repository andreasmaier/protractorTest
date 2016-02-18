angular.module('todo', [
        'ui.router',
        'todo.home'
    ])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise("home");
    });