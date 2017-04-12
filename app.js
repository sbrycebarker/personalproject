angular.module('myApp', ['ui.router'])

  .config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('', '/');
        $stateProvider
        .state('home', {
          url: '/',
          templateUrl: "./views/main.html",
          controller: "mainCtrl"
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
