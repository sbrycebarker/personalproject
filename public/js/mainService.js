angular.module('myApp').service('mainService', function($http) {
  this.getinsta = function() {
    return $http({
      method: 'GET',
      url: "https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=ACCESS_TOKEN"
    })
  }
})
