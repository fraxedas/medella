app.controller('AlertController', [
  '$scope',
  '$http',
  'medella',
  'alertDataService',
  function ($scope, $http, medella, alertData) {
    $scope.medella = medella;

    $scope.isCalling = function () {
      return $scope.medella.isCalling;
    };

    $scope.sos = function (username) {
      alertData.sos(username, function (data) {
        $scope.medella.tittle = data;
        $scope.medella.isCalling = true;
      });
    };

    $scope.cancel = function (username) {
      alertData.cancel(username, function (data) {
        $scope.medella.tittle = data;
        $scope.medella.isCalling = false;
      });
    };

  },
]);