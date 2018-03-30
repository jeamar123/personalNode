
var app = angular.module('Todo', ['ui.router'])


.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider 
   .state('home', {
      url: '/',
      views: {
        'main': {
          templateUrl: 'views/home.html'
        },
      }
    })
   
    $urlRouterProvider.otherwise('/');

})