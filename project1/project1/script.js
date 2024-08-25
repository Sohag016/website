var barchartOption = {
    series: [
        {
        name: 'Grade 5',
    data: [400, 43, 448, 47, 540, 580, 690, 1100, 1200, 1380]
  },
  {
    name: 'Grade 3',
data: [400, 43, 448, 47, 540, 50, 690, 1100, 120, 130]
},
{
    name: 'Grade 10',
data: [40, 43, 448, 47, 540, 58, 690, 1100, 120, 180]
}
],
    chart: {
    type: 'bar',
    height: 350,
    tollbar:{
        show:false,
    }
  },
  plotOptions: {
    bar: {
     
      horizontal: false,
      columnWidth:'80%',
      endingShape:'rounded',

    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Jun', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'July',
      'Aug', 'Sep', 'Oct','Nov','Dec'
    ],
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barchartOption);
  barChart.render();

  //line area chart
  var areaChartOptions = {
    series: [{
    name: 'Grade 5 Black',
    type: 'area',
    data: [44, 55, 31, 47, 31, 43]
  }, {
    name: 'Grade 5 Blue',
    type: 'line',
    data: [55, 69, 45, 61, 43, 54]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['Jun', 'Fab', 'Mar', 'Apr', 'May', 'Jun'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Series A',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Series B',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions );
  areaChart.render();
 