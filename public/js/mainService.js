angular.module('myApp').service('mainService', function($http) {
  this.getinsta = function() {
    return $http({
      method: 'GET',
      url: "https://swapi.co/api/planets/" ,
    }).then(function(res) {
      return res.data;
    })

  }
});
