var app = function(){

  var shipList = new ShipList('http://swapi.co/api/starships/');
  var shipsSelectViewLeft = new ShipsSelectView(document.querySelector('#ships-left') );
  var shipDetailsViewLeft = new ShipDetailsView(document.querySelector('#ship-details-left') );
  var shipsSelectViewRight = new ShipsSelectView(document.querySelector('#ships-right') );
  var shipDetailsViewRight = new ShipDetailsView(document.querySelector('#ship-details-right') );
  var comparisonChartView = new ComparisonChartView(document.querySelector('#charts-container'))
  
  shipList.getData(function(ships){
    console.log(ships)
    shipsSelectViewLeft.render(ships);
    shipsSelectViewRight.render(ships);

    shipsSelectViewLeft.selectElement.addEventListener('change', function(){
      shipDetailsViewLeft.render(ships[this.value]);
      comparisonChartView.renderCharts(ships[this.value], ships[shipsSelectViewRight.selectElement.value]);

    }); 

    shipsSelectViewRight.selectElement.addEventListener('change', function(){
      shipDetailsViewRight.render(ships[this.value]);
      comparisonChartView.renderCharts(ships[shipsSelectViewLeft.selectElement.value], ships[this.value]);
    }); 

  });

}

window.onload = app;