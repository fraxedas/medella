app.controller('AlertController', [
  '$scope',
  '$http',
  'medella',
  function ($scope, $http, medella) {
    $scope.medella = medella;

    $scope.isCalling = function () {
      return $scope.medella.isCalling;
    };

    $scope.sos = function () {
      return $http.post('/sos/fraxedas@gmail.com').success(function (data) {
        $scope.medella.tittle = data;
        $scope.medella.isCalling = true;
      });
    };

    $scope.cancel = function () {
      return $http.post('/cancel/fraxedas@gmail.com').success(function (data) {
        $scope.medella.tittle = data;
        $scope.medella.isCalling = false;
      });
    };

  },
]);