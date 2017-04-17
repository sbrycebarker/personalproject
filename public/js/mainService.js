angular.module('myApp').service('mainService', function($http) {
  this.getinsta = function() {
    return $http({
      method: 'GET',
      url: "/media",
    }).then(function(res) {
      return res.data;
    })

  }
})
