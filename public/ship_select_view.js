var ShipsSelectView = function(selectElement){
  this.selectElement = selectElement;
}

ShipsSelectView.prototype = {
  render: function(ships){
    ships.forEach(function(ship, index){
      var optionElement = document.createElement('option');
      optionElement.value = index;
      optionElement.text = ship.name;
      this.selectElement.appendChild(optionElement)
    }.bind(this)); 
  }
}