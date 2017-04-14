var app = function(){

  var shipList = new ShipList('http://swapi.co/api/starships/');
  var shipsSelectView = new ShipsSelectView(document.querySelector('#ships') );
  var shipDetailsView = new ShipDetailsView(document.querySelector('#ship-details') );
  
  shipList.getData(function(ships){
    console.log(ships)
    shipsSelectView.render(ships);

    shipsSelectView.selectElement.addEventListener('change', function(){
      shipDetailsView.render(ships[this.value]);
    }); 

  });

}

window.onload = app;