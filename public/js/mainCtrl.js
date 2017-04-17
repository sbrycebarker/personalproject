angular.module('myApp').controller('mainCtrl', function($scope, mainService) {

  $scope.getinsta = function() {
    mainService.getinsta().then(function(result) {
      console.log(result)
      $scope.feed = result
    })
  }

  $scope.getinsta();
})
