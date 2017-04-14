var app = function(){

  var shipList = new ShipList('http://swapi.co/api/starships/');
  var shipsSelectView = new ShipsSelectView(document.querySelector('#ships') );
  
  shipList.getData(function(ships){
    console.log(ships)
    shipsSelectView.render(ships);
  });

}



window.onload = app;