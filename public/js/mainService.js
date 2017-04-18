angular.module('myApp').service('mainService', function($http) {
  this.getinsta = function() {
    return $http({
      method: 'GET',
      url: "/users/self/media/recent",
      data: 'id'
    }).then(function(res) {
      return res.data;
    })

  }
});
