var ColumnChart = function(container, title, data, categories){

  this.chart = new Highcharts.Chart({
    
    chart: {
      type: 'column',
      renderTo: container,
      width: 180
    },

    title: {
      text: title
    },

    series: data,

    xAxis: {
      categories: categories,
      labels: {
       enabled:false,
     }
    },

    plotOptions: {
        column: {
            pointPadding: 0,
            borderWidth: 0,
            groupPadding: 0,
            shadow: false,
            maxPointWidth: 40
        }
    }, 

    yAxis: {
      title: {
       enabled:false,
     }
   }


  })

}