'use strict';

app.controller('ProfileController', [
  '$scope',
  '$http',
  'medella',
  function ($scope, $http, medella) {

    $scope.medella = medella;
    $http.get('/profile/' + $scope.medella.user).success(function (response) {
        $scope.medella.profile = response;
    });

  },
]);