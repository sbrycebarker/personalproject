angular.module('myApp').service('facebookService', function($http) {

  this.getfacebook = function() {
    console.log('FACEBOOK')
    return $http({
      method: 'GET',
      url: '/api/facebook/data'
      }).then(function(res) {
        console.log(res)
      return res;

    }, function(err) {
      console.log(err)
    })

  }

})
