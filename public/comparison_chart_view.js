var ComparisonChartView = function(container){
  this.container = container;
}

ComparisonChartView.prototype = {
  renderCharts: function(leftShip, rightShip){
    this.container.innerHTML = '';

    if(leftShip && rightShip){

      this.renderChart(leftShip, rightShip, 'MGLT', 'Speed (MGLT)' )
      this.renderChart(leftShip, rightShip, 'max_atmosphering_speed', 'Speed(Atmospheric)')
    }
  },


    //   // MGLT speed comparison
    //   var speedMGLTContainer = document.createElement('div')
    //   var speedMGLTTitle = 'Speed (MGLT)';
    //   leftMGLT = parseInt(ships[leftIndex].MGLT);
    //   rightMGLT = parseInt(ships[rightIndex].MGLT);
    //   if(isNaN(leftMGLT)) {leftMGLT = 0}
    //   if(isNaN(rightMGLT)) {rightMGLT = 0}

    //   var speedMGLTSeries = [{
    //     name: ships[leftIndex].name, 
    //     data: [leftMGLT]
    //   },
    //   {
    //     name: ships[rightIndex].name, 
    //     data: [rightMGLT]
    //   }]
    //   var speedMGLTCategories = ['Speed (MGLT)'];
    //   new ColumnChart(speedMGLTContainer, speedMGLTTitle, speedMGLTSeries, speedMGLTCategories);
    //   this.container.appendChild(speedMGLTContainer);

    //   // Atmospheric speed comparison
    //   var speedAtmosphericContainer = document.createElement('div')
    //   var speedAtmosphericTitle = 'Speed (Atmospheric)';
    //   leftAtmospheric = parseInt(ships[leftIndex].max_atmosphering_speed);
    //   rightAtmospheric = parseInt(ships[rightIndex].max_atmosphering_speed);
    //   if(isNaN(leftAtmospheric)) {leftAtmospheric = 0}
    //   if(isNaN(rightAtmospheric)) {rightAtmospheric = 0}

    //   var speedAtmosphericSeries = [{
    //     name: ships[leftIndex].name, 
    //     data: [leftAtmospheric]
    //   },
    //   {
    //     name: ships[rightIndex].name, 
    //     data: [rightAtmospheric]
    //   }]
    //   var speedAtmosphericCategories = ['Speed (Atmospheric)'];
    //   new ColumnChart(speedAtmosphericContainer, speedAtmosphericTitle, speedAtmosphericSeries, speedAtmosphericCategories);
    //   this.container.appendChild(speedAtmosphericContainer);

    //   // hyperdrive rating comparison
    //   var hyperdriveContainer = document.createElement('div')
    //   var hyperdriveTitle = 'Hyperdrive Rating';
    //   leftHyperdrive = parseFloat(ships[leftIndex].hyperdrive_rating);
    //   rightHyperdrive = parseFloat(ships[rightIndex].hyperdrive_rating);
    //   if(isNaN(leftHyperdrive)) {leftHyperdrive = 0}
    //   if(isNaN(rightHyperdrive)) {rightHyperdrive = 0}

    //   var hyperdriveSeries = [{
    //     name: ships[leftIndex].name, 
    //     data: [leftHyperdrive]
    //   },
    //   {
    //     name: ships[rightIndex].name, 
    //     data: [rightHyperdrive]
    //   }]
    //   var hyperdriveCategories = ['Hyperdrive Rating'];
    //   new ColumnChart(hyperdriveContainer, hyperdriveTitle, hyperdriveSeries, hyperdriveCategories);
    //   this.container.appendChild(hyperdriveContainer);

    //   // cost rating comparison
    //   var costContainer = document.createElement('div')
    //   var costTitle = 'Cost (Credits)';
    //   leftCost = parseInt(ships[leftIndex].cost_in_credits);
    //   rightCost = parseInt(ships[rightIndex].cost_in_credits);
    //   if(isNaN(leftCost)) {leftCost = 0}
    //   if(isNaN(rightCost)) {rightCost = 0}

    //   var costSeries = [{
    //     name: ships[leftIndex].name, 
    //     data: [leftCost]
    //   },
    //   {
    //     name: ships[rightIndex].name, 
    //     data: [rightCost]
    //   }]
    //   var costCategories = ['cost Rating'];
    //   new ColumnChart(costContainer, costTitle, costSeries, costCategories);
    //   this.container.appendChild(costContainer);

    //   // crew comparison
    //   var crewContainer = document.createElement('div')
    //   var crewTitle = 'Crew';
    //   leftCrew = parseInt(ships[leftIndex].crew);
    //   rightCrew = parseInt(ships[rightIndex].crew);
    //   if(isNaN(leftCrew)) {leftCrew = 0}
    //   if(isNaN(rightCrew)) {rightCrew = 0}

    //   var crewSeries = [{
    //     name: ships[leftIndex].name, 
    //     data: [leftCrew]
    //   },
    //   {
    //     name: ships[rightIndex].name, 
    //     data: [rightCrew]
    //   }]
    //   var crewCategories = ['Crew'];
    //   new ColumnChart(crewContainer, crewTitle, crewSeries, crewCategories);
    //   this.container.appendChild(crewContainer);

    //   // passenger comparison
    //   var crewContainer = document.createElement('div')
    //   var crewTitle = 'Crew';
    //   leftCrew = parseInt(ships[leftIndex].crew);
    //   rightCrew = parseInt(ships[rightIndex].crew);
    //   if(isNaN(leftCrew)) {leftCrew = 0}
    //   if(isNaN(rightCrew)) {rightCrew = 0}

    //   var crewSeries = [{
    //     name: ships[leftIndex].name, 
    //     data: [leftCrew]
    //   },
    //   {
    //     name: ships[rightIndex].name, 
    //     data: [rightCrew]
    //   }]
    //   var crewCategories = ['Crew'];
    //   new ColumnChart(crewContainer, crewTitle, crewSeries, crewCategories);
    //   this.container.appendChild(crewContainer);
    // }
  // },


  renderChart: function(leftShip, rightShip, propertyToCompare, chartTitle){
    var chartContainer = document.createElement('div')
    leftFloat = parseFloat(leftShip[propertyToCompare]);
    rightFloat = parseFloat(rightShip[propertyToCompare]);
    if(isNaN(leftFloat)) {leftFloat = 0}
    if(isNaN(rightFloat)) {rightFloat = 0}

    var chartSeries = [{
      name: leftShip.name, 
      data: [leftFloat]
    },
    {
      name: rightShip.name, 
      data: [rightFloat]
    }]
    var chartCategories = [chartTitle];
    new ColumnChart(chartContainer, chartTitle, chartSeries, chartCategories);
    this.container.appendChild(chartContainer);
  }
}
