app.controller('UserController', [
  '$scope',
  'medella',
  'userDataService',
  function ($scope, medella, userData) {

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