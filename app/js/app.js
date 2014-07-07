var applications = angular.module('bootstrap', ['ui.router']);

applications.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.
        state('/', {
            url: '/',
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        }).
        state('profile', {
            url: '/profile',
            templateUrl: 'partials/profile.html',
            controller: 'profileCtrl'
        });
});

applications.controller('mainCtrl', function ($scope) {
    $scope.hello = "Hello World !";
});