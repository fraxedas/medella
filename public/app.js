var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
  '$scope',
  'medella',
  function ($scope, medella) {
    $scope.medella = medella;

    $scope.sos = function () {
      return $http.post('/sos/fraxedas@gmail.com').success(function (data) {
        $scope.tittle = data;
      });
    };

    $scope.cancel = function () {
      return $http.post('/cancel/fraxedas@gmail.com').success(function (data) {
        $scope.tittle = data;
      });
    };
    
  },
]);

app.factory('medella', [function(){
  var medella = {
    title: "Medella",
    user: "fraxedas@gmail.com",
    safe: true
  };
  return medella;
}])