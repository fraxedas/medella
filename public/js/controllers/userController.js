app.controller('UserController', [
  '$scope',
  '$http',
  'medella',
  function ($scope, $http, medella) {

    $http.get('/user/' + medella.username).success(function (response) {
      medella.user = response;
    });

    $scope.medella = medella;

    $scope.update = function () {
      $http.put('/user/', medella.user).success(function (response) {
        medella.user = response;
      });
    };

    $scope.create = function () {
      $http.post('/user/', medella.user).success(function (response) {
        medella.user = response;
      });
    };

  },
]);