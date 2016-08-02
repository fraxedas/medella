app.controller('UserController', [
  '$scope',
  '$http',
  'medella',
  function ($scope, $http, medella) {

    $http.get('/api/user/' + medella.username).success(function (response) {
      medella.user = response;
    });

    $scope.medella = medella;

    $scope.update = function (user) {
      $http.put('/api/user/', user).success(function (response) {
        medella.user = response;
      });
    };

    $scope.cancel = function () {
      window.location = '/api/index.html';
    };

  },
]);