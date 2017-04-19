angular.module('myApp').controller('mainCtrl', function($scope, mainService) {
  // $scope.getinsta = function() {
  //   mainService.getinsta().then(function(result) {
  //     console.log(result)
  //     $scope.feed = result.data.data
  //   })
  // }

  // $scope.getinsta();

  mainService.getinsta().then(function(result) {
    console.log(result)
    $scope.feed = result.data.data;
  })



  // var feed = new Instafeed({
  //     get: 'user',
  //     limit: "16",
  //     userId: '37620940',
  //     resolution: "thumbnail",
  //     clientId: "8ccf63887ee24df6abe7098f4e7cb65d",
  //     accessToken: "37620940.8ccf638.96228796bf934c5fbf17c8a2394e2a88"
  // });
  // feed.run();

})
