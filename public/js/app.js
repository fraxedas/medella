var app = angular.module('medella', ['ngRoute'])
  .config(function ($routeProvider) {
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
  })
  .factory('medella', function () {
    var medella = {
      tittle: "Medella",
      username: "fraxedas@gmail.com",
      isCalling: false
    };
    return medella;
  });