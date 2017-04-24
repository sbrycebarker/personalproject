angular.module('myApp').controller('profileCtrl', function($scope, facebookService) {

  facebookService.getfacebook().then(function(result) {
    console.log(result.data)
    $scope.feed = result;

})

});
