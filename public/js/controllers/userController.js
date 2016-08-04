app.controller('UserController', [
  '$scope',
  '$http',
  'medella',
  'userData',
  function ($scope, $http, medella, userData) {

    $scope.medella = medella;

    userData.get(medella.username, function (result) {
      medella.user = result;
    });

    $scope.update = function (user) {
      userData.update(user, function (result) {
        medella.user = result;
      });
    };

    $scope.cancel = function () {
      window.location = '/';
    };

  },
]);