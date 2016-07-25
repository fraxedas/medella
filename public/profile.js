var app = angular.module('medella', []);

app.controller('ProfileController', [
  '$scope',
  '$http',
  'medella',
  function ($scope, $http, medella) {
    $scope.medella = medella;

    $scope.load = function () {
      return $http.get('/profile/' + $scope.medella.user).success(function (data) {
        $scope.medella.profiles = data;
      });
    };
    
  },
]);

app.factory('medella', function(){
  var medella = {
    tittle: "Profile",
    user: "fraxedas@gmail.com",
    profiles: null
  };
  return medella;
})