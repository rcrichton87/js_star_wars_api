var ComparisonChartView = function(container){
  this.container = container;
}

ComparisonChartView.prototype = {
  renderCharts: function(leftShip, rightShip){
    this.container.innerHTML = '';

    if(leftShip && rightShip){

      this.renderChart(leftShip, rightShip, 'MGLT', 'Speed (MGLT)' )
      this.renderChart(leftShip, rightShip, 'max_atmosphering_speed', 'Speed (Atmospheric)')
      this.renderChart(leftShip, rightShip, 'hyperdrive_rating', 'Hyperdrive Rating')
      this.renderChart(leftShip, rightShip, 'cost_in_credits', 'Cost (Credits)')
      this.renderChart(leftShip, rightShip, 'crew', 'Crew')
      this.renderChart(leftShip, rightShip, 'passengers', 'Passengers')
      this.renderChart(leftShip, rightShip, 'length', 'Length')
    }
  },

  renderChart: function(leftShip, rightShip, propertyToCompare, chartTitle){
    var chartContainer = document.createElement('div')
    leftFloat = parseFloat(leftShip[propertyToCompare].replace(',', '')); // replace because the Executor's length is 19,000 in the API
    rightFloat = parseFloat(rightShip[propertyToCompare].replace(',', ''));
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
