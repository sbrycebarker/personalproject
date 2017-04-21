angular.module('myApp').controller('facebookCtrl', function($scope, facebookService) {

  facebookService.getfacebook().then(function(result) {
    console.log(result.data)
    $scope.feed = result;

})

});
