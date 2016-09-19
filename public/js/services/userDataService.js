app.factory('userDataService', ['$http', function ($http) {
  return {
    get: function (username, next) {
      $http.get('/api/user/' + username).success(next);
    },
    update: function (user, next) {
      $http.put('/api/user/', user).success(next);
    },
    cancel: function (username) {
      return $http.post('/api/cancel/' + username).success(function (data) {
        $scope.medella.tittle = data;
        $scope.medella.isCalling = false;
      });
    }
  };
}]);