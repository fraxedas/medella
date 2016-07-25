var app = angular.module('medella', []);

app.controller('MainController', [
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

app.factory('medella', function(){
  var medella = {
    tittle: "Medella",
    user: "fraxedas@gmail.com",
    isCalling: false
  };
  return medella;
})