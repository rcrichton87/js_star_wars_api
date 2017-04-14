var app = function(){

  var shipList = new ShipList('http://swapi.co/api/starships/');
  shipList.getData();

}



window.onload = app;