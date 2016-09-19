app.factory('alertDataService', ['$http', function ($http) {
  return {
    sos: function (username, next) {
      return $http.post('/api/sos/' + username).success(next);
    },
    cancel: function (username, next) {
      return $http.post('/api/cancel/' + username).success(next);
    }
  };
}]);