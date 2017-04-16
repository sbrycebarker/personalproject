angular.module('myApp')
.controller('homeCtrl', function($scope, profileService, $state ) {
  function getUser() {
    profileService.getUser().then(function(user){
      if (user) $scope.user = user.username;
      else $scope.user = 'Not logged in!'
    })
  }

  getUser();

  $scope.loginLocal = function(username, password) {
    console.log('Logging in with', username, password);
    profileService.loginLocal({
      username: username,
      password: password
    })
    .then(function(res) {
      getUser();
    })
  }

  $scope.logout = profileService.logout;


})
