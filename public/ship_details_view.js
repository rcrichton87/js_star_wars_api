var ShipDetailsView = function(detailsElement){
  this.detailsElement = detailsElement;
}

ShipDetailsView.prototype = {
  render: function(ship){

    this.detailsElement.innerHTML = '';

    console.log(ship)

    var name = document.createElement('p');

    if(ship.name === ship.model){
      name.innerText = 'Name: ' + ship.name
    } else {
      name.innerText = 'Name: ' + ship.name + ' - ' + ship.model;
    }
    this.detailsElement.appendChild(name);

    var shipClass = document.createElement('p');
    shipClass.innerText = 'Class: ' + ship.starship_class;
    this.detailsElement.appendChild(shipClass);

    var manufacturer = document.createElement('p');
    manufacturer.innerText = 'Manufacturer: ' + ship.manufacturer;
    this.detailsElement.appendChild(manufacturer);

    this.renderFloat(ship, 'MGLT', 'Speed (Space): ', ' MGLT');
    this.renderFloat(ship, 'max_atmosphering_speed', 'Speed (Atmospheric): ', ' km/h');
    this.renderFloat(ship, 'hyperdrive_rating', 'Hyperdrive Rating: ');
    this.renderFloat(ship, 'cost_in_credits', 'Cost: ', ' credits');
    this.renderFloat(ship, 'crew', 'Crew: ');
    this.renderFloat(ship, 'passengers', 'Passengers: ');
    this.renderFloat(ship, 'length', 'Length: ', ' m');

  },

  renderFloat: function(ship, stat, label, trailingString){
    var display = document.createElement('p');
    var statAsFloat = parseFloat(ship[stat].replace(',', '')); // replace because the Executor's length is 19,000 in the API
    if(isNaN(statAsFloat)){
      display.innerText = label + ship[stat];
    } else {  
      display.innerText = label + statAsFloat.toLocaleString();
      if(trailingString){display.innerText += trailingString}
    }
    this.detailsElement.appendChild(display);
  }
}