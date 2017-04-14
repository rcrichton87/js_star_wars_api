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

    var speedMGLT = document.createElement('p');
    var speedMGLTAsInt = parseInt(ship.MGLT)
    if(isNaN(speedMGLTAsInt)){
      speedMGLT.innerText = 'Speed (MGLT): ' + ship.MGLT;
    } else {
      speedMGLT.innerText = 'Speed (MGLT): ' + speedMGLTAsInt.toLocaleString() + ' MGLT';
    }
    this.detailsElement.appendChild(speedMGLT);

    var speedAtmosphere = document.createElement('p');
    var speedAtmosphereAsInt = parseInt(ship.max_atmosphering_speed);
    if(isNaN(speedAtmosphereAsInt)){
      speedAtmosphere.innerText = 'Speed (Atmospheric): ' + ship.max_atmosphering_speed;
    } else {
      speedAtmosphere.innerText = 'Speed (Atmospheric): ' + speedAtmosphereAsInt.toLocaleString() + ' km/h';
    }
    this.detailsElement.appendChild(speedAtmosphere);

    var hyperdrive = document.createElement('p');
    var hyperdriveAsFloat = parseFloat(ship.hyperdrive_rating);
    if(isNaN(hyperdriveAsFloat)){
      hyperdrive.innerText = 'Hyperdrive Rating: ' + ship.hyperdrive_rating;
    } else {
      hyperdrive.innerText = 'Hyperdrive Rating: ' + hyperdriveAsFloat;
    }
    this.detailsElement.appendChild(hyperdrive);

    var cost = document.createElement('p');
    var costAsInt = parseInt(ship.cost_in_credits);
    if(isNaN(costAsInt)){
      cost.innerText = 'Cost: ' + ship.cost_in_credits;
    } else {
      cost.innerText = 'Cost: ' + costAsInt.toLocaleString() + ' credits';
    }
    this.detailsElement.appendChild(cost);

    var crew = document.createElement('p');
    var crewAsInt = parseInt(ship.crew);
    if(isNaN(crewAsInt)){
      crew.innerText = 'Crew: ' + ship.crew;
    } else { 
      crew.innerText = 'Crew: ' + crewAsInt.toLocaleString();
    }
    this.detailsElement.appendChild(crew);

    var passengers = document.createElement('p');
    var passengersAsInt = parseInt(ship.passengers);
    if(isNaN(passengersAsInt)){
      passengers.innerText = 'Passengers: ' + ship.passengers;
    } else {  
      passengers.innerText = 'Passengers: ' + passengersAsInt.toLocaleString();
    }
    this.detailsElement.appendChild(passengers);

    var length = document.createElement('p');
    var lengthAsFloat = parseFloat(ship.length.replace(',', '')); // replace because the Executor's length is 19,000 in the API
    if(isNaN(lengthAsFloat)){
      length.innerText = 'Length: ' + ship.length;
    } else {
      length.innerText = 'Length: ' + lengthAsFloat.toLocaleString() + 'm';
    }
    this.detailsElement.appendChild(length);
  }
}