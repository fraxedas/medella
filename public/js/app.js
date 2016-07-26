var app = angular.module('medella', []);

app.factory('medella', function(){
  var medella = {
    tittle: "Medella",
    user: "fraxedas@gmail.com",
    isCalling: false
  };
  return medella;
})