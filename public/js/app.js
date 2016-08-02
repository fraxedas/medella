var app = angular.module('medella', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/',
      {
        templateUrl: 'templates/sos.html',
        controller: 'AlertController'
      });

    $routeProvider.when('/user',
      {
        templateUrl: 'templates/user.html',
        controller: 'UserController'
      });

    $routeProvider.otherwise(
      {
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  })
  .factory('medella', function () {
    var medella = {
      tittle: "Medella",
      username: "fraxedas@gmail.com",
      isCalling: false
    };
    return medella;
  });