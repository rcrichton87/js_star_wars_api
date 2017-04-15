var ShipDetailsView = function(detailsElement){
  this.detailsElement = detailsElement;
}

ShipDetailsView.prototype = {
  render: function(ship, shipToCompareWith){

    this.detailsElement.innerHTML = '';

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

    this.renderFloat(ship, shipToCompareWith, 'MGLT', 'Speed (Space): ', ' MGLT');
    this.renderFloat(ship, shipToCompareWith, 'max_atmosphering_speed', 'Speed (Atmospheric): ', ' km/h');
    this.renderFloat(ship, shipToCompareWith, 'hyperdrive_rating', 'Hyperdrive Rating: ');
    this.renderFloat(ship, shipToCompareWith, 'cost_in_credits', 'Cost: ', ' credits');
    this.renderFloat(ship, shipToCompareWith, 'crew', 'Crew: ');
    this.renderFloat(ship, shipToCompareWith, 'passengers', 'Passengers: ');
    this.renderFloat(ship, shipToCompareWith, 'length', 'Length: ', ' m');

  },

  renderFloat: function(ship, shipToCompareWith, stat, label, trailingString){
    var display = document.createElement('p');
    var statAsFloat = parseFloat(ship[stat].replace(',', '')); // replace because the Executor's length is 19,000 in the API
    if(isNaN(statAsFloat)){
      display.innerText = label + ship[stat];
    } else {  
      display.innerText = label + statAsFloat.toLocaleString();
      if(trailingString){display.innerText += trailingString}
    }

    if(shipToCompareWith){
      statToCompareWith = parseFloat(shipToCompareWith[stat].replace(',', ''));
      if(isNaN(statAsFloat) && !isNaN(statToCompareWith)){
        display.className = 'red-text';
      } else if (!isNaN(statAsFloat) && isNaN(statToCompareWith)){
        display.className = 'green-text';
      } else if (statAsFloat < statToCompareWith && stat !== 'hyperdrive_rating'){
        display.className = 'red-text';
      } else if (statAsFloat > statToCompareWith && stat !== 'hyperdrive_rating'){
        display.className = 'green-text';
      } else if (statAsFloat < statToCompareWith && stat === 'hyperdrive_rating'){ // making hyperdrive rating have lower as better
        display.className = 'green-text';
      } else if (statAsFloat > statToCompareWith && stat === 'hyperdrive_rating'){
        display.className = 'red-text';
      }
    }
    this.detailsElement.appendChild(display);
  }
}