angular.module('myApp').service('mainService', function($http) {
  this.getinsta = function() {
    console.log('hello')
    return $http({
      method: 'GET',
      url: '/api/instagram/data'
      }).then(function(res) {
        console.log(res)
      return res;

    }, function(err) {
      console.log(err)
    })

  }
});
