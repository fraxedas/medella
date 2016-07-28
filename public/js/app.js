var app = angular.module('medella', []);

app.factory('medella', function(){
  var medella = {
    tittle: "Medella",
    username: "fraxedas@gmail.com",
    isCalling: false
  };
  return medella;
});