angular.module('myApp', ['ui.router'])

  .config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home', {
          url: '/',
          templateUrl: "./views/home.html",
          controller: "homeCtrl"
        })
        .state('sync', {
          url: '/sync',
          templateUrl: "./views/sync.html",
          controller: "syncCtrl"
        })
        .state('profile', {
        url: '/profile',
        templateUrl: "./views/profile.html",
        controller: "profileCtrl"
        })
        .state('about', {
          url: '/about',
          templateUrl: "./views/about.html",
      })
})
