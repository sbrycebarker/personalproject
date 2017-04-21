angular.module('myApp').controller('mainCtrl', function($scope, mainService, facebookService) {

  mainService.getinsta().then(function(result) {
    console.log(result)
    $scope.instafeed = result.data.data;

  })

  facebookService.getfacebook().then(function(result) {
    $scope.facebookfeed = result;

})


});
