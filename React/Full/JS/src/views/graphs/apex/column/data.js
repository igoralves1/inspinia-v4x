import { getColor } from '@/helpers/color';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
dayjs.extend(quarterOfYear);

// BASIC COLUMN CHART

export const getBasicColumnChart = () => ({
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      // endingShape: 'flat',
      columnWidth: '65%',
      borderRadius: 6,
      borderRadiusApplication: 'end'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  colors: [getColor('primary'), getColor('secondary'), getColor('info')],
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
  },
  legend: {
    offsetY: 5
  },
  yaxis: {
    title: {
      text: '$ (thousands)',
      offsetX: 0,
      style: {
        fontSize: '14px',
        fontWeight: 500
      }
    },
    labels: {
      offsetX: -7
    }
  },
  fill: {
    opacity: 1
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2
    },
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: 0,
      bottom: -5,
      left: 5
    }
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      }
    }
  }
});

// COLUMN CHART WITH DATALABELS

export const getChartWithDataTabels = () => ({
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top'
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + '%';
    },
    offsetY: -25,
    style: {
      fontSize: '12px',
      colors: [getColor('body-color')]
    }
  },
  colors: [getColor('secondary')],
  legend: {
    show: true,
    horizontalAlign: 'center',
    offsetX: 0,
    offsetY: -5
  },
  series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    position: 'top',
    labels: {
      offsetY: 0
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: true,
      offsetY: -10
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + '%';
      }
    }
  },
  title: {
    text: 'Monthly Inflation in Argentina, 2025',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: getColor('body-color'),
      fontSize: '14px',
      fontWeight: 500
    }
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2
    },
    borderColor: getColor('border-color')
  }
});

// STACKED COLUMN CHART

export const getStackedColumnChart = () => ({
  chart: {
    height: 350,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%'
    }
  },
  series: [{
    name: 'iPhone 16',
    data: [65, 59, 80, 81, 56, 55, 40, 72]
  }, {
    name: 'iPhone 16 Pro',
    data: [28, 48, 40, 19, 86, 27, 90, 50]
  }, {
    name: 'iPhone 15',
    data: [35, 29, 50, 45, 60, 33, 38, 47]
  }],
  xaxis: {
    categories: ['2023 Q1', '2023 Q2', '2023 Q3', '2023 Q4', '2024 Q1', '2024 Q2', '2024 Q3', '2024 Q4']
  },
  yaxis: {
    labels: {
      offsetX: -10
    }
  },
  colors: [getColor('primary'), getColor('secondary'), getColor('info'), getColor('danger')],
  fill: {
    opacity: 1
  },
  legend: {
    offsetY: 7
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return +val + ' Orders';
      }
    }
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2
    },
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: 0,
      bottom: -5,
      left: 0
    }
  }
});

// 100% STACKED COLUMN CHART

export const getFullStackedColumnChart = () => ({
  chart: {
    height: 350,
    type: 'bar',
    stacked: true,
    stackType: '100%',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  series: [{
    name: 'iPhone 16',
    data: [44, 55, 41, 67, 22, 43, 21, 49]
  }, {
    name: 'iPhone 16 Pro',
    data: [13, 23, 20, 8, 13, 27, 33, 12]
  }, {
    name: 'iPhone 15',
    data: [11, 17, 15, 15, 21, 14, 15, 13]
  }],
  xaxis: {
    categories: ['2023 Q1', '2023 Q2', '2023 Q3', '2023 Q4', '2024 Q1', '2024 Q2', '2024 Q3', '2024 Q4']
  },
  yaxis: {
    labels: {
      offsetX: -10
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return +val + ' Orders';
      }
    }
  },
  legend: {
    offsetY: 7
  },
  colors: [getColor('success'), getColor('info'), getColor('warning')],
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2
    },
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: 0,
      bottom: -5,
      left: 0
    }
  }
});

// Grouped Stacked Columns Chart

export const getGroupedStackedColumnChart = () => ({
  series: [{
    name: 'Q1 Budget',
    group: 'budget',
    data: [44000, 55000, 41000, 67000, 22000, 43000]
  }, {
    name: 'Q1 Actual',
    group: 'actual',
    data: [48000, 50000, 40000, 65000, 25000, 40000]
  }, {
    name: 'Q2 Budget',
    group: 'budget',
    data: [13000, 36000, 20000, 8000, 13000, 27000]
  }, {
    name: 'Q2 Actual',
    group: 'actual',
    data: [20000, 40000, 25000, 10000, 12000, 28000]
  }],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  dataLabels: {
    formatter: val => {
      return val / 1000 + 'K';
    }
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  xaxis: {
    categories: ['Online advertising', 'Sales Training', 'Print advertising', 'Catalogs', 'Meetings', 'Public relations']
  },
  fill: {
    opacity: 1
  },
  colors: [getColor('primary-rgb', 0.7), getColor('primary'), getColor('secondary-rgb', 0.7), getColor('secondary')],
  yaxis: {
    labels: {
      formatter: val => {
        return val / 1000 + 'K';
      },
      offsetX: -10
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    offsetY: -8
  },
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: -30,
      bottom: -5,
      left: 5
    }
  }
});

// Dumbbell Chart

export const getDumbbellChart = () => ({
  series: [{
    data: [{
      x: '2019',
      y: [2400, 4300]
    }, {
      x: '2020',
      y: [3000, 4800]
    }, {
      x: '2021',
      y: [3200, 7200]
    }, {
      x: '2022',
      y: [3500, 5100]
    }, {
      x: '2023',
      y: [4000, 5300]
    }, {
      x: '2024',
      y: [4700, 6700]
    }, {
      x: '2025',
      y: [4200, 6000]
    }]
  }],
  chart: {
    height: 350,
    type: 'rangeBar',
    zoom: {
      enabled: false
    }
  },
  plotOptions: {
    bar: {
      isDumbbell: true,
      columnWidth: 3,
      dumbbellColors: [[getColor('secondary'), getColor('success')]]
    }
  },
  legend: {
    show: true,
    offsetY: -8,
    showForSingleSeries: true,
    position: 'top',
    horizontalAlign: 'center',
    customLegendItems: ['Product A', 'Product B']
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      gradientToColors: [getColor('success')],
      inverseColors: true,
      stops: [0, 100]
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: 0,
      bottom: -11,
      left: 5
    }
  },
  colors: [getColor('primary'), getColor('secondary')],
  xaxis: {
    tickPlacement: 'on',
    axisBorder: {
      show: true,
      color: getColor('border-color')
    },
    axisTicks: {
      show: true,
      color: getColor('border-color')
    }
  },
  yaxis: {
    labels: {
      offsetX: -10
    }
  }
});

// COLUMN WITH MARKERS

export const getColumnWithMarkersChart = () => ({
  series: [{
    name: 'Actual',
    data: [{
      x: '2018',
      y: 1292,
      goals: [{
        name: 'Expected',
        value: 1400,
        strokeHeight: 5,
        strokeColor: getColor('secondary')
      }]
    }, {
      x: '2029',
      y: 4432,
      goals: [{
        name: 'Expected',
        value: 5400,
        strokeHeight: 5,
        strokeColor: getColor('secondary')
      }]
    }, {
      x: '2020',
      y: 5423,
      goals: [{
        name: 'Expected',
        value: 5200,
        strokeHeight: 5,
        strokeColor: getColor('secondary')
      }]
    }, {
      x: '2021',
      y: 6653,
      goals: [{
        name: 'Expected',
        value: 6500,
        strokeHeight: 5,
        strokeColor: getColor('secondary')
      }]
    }, {
      x: '2022',
      y: 8133,
      goals: [{
        name: 'Expected',
        value: 6600,
        strokeHeight: 13,
        strokeWidth: 0,
        strokeLineCap: 'round',
        strokeColor: getColor('secondary')
      }]
    }, {
      x: '2023',
      y: 7132,
      goals: [{
        name: 'Expected',
        value: 7500,
        strokeHeight: 5,
        strokeColor: getColor('secondary')
      }]
    }, {
      x: '2024',
      y: 7332,
      goals: [{
        name: 'Expected',
        value: 8700,
        strokeHeight: 5,
        strokeColor: getColor('secondary')
      }]
    }, {
      x: '2025',
      y: 6553,
      goals: [{
        name: 'Expected',
        value: 7300,
        strokeHeight: 2,
        strokeDashArray: 2,
        strokeColor: getColor('secondary')
      }]
    }]
  }],
  chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      columnWidth: '60%'
    }
  },
  colors: [getColor('primary'), getColor('secondary')],
  dataLabels: {
    enabled: false
  },
  yaxis: {
    labels: {
      offsetX: -10
    }
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + ' Sales';
      }
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: [getColor('primary'), getColor('secondary')]
    }
  },
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: 0,
      bottom: -5,
      left: 0
    }
  }
});

// COLUMN WITH GROUP LABEL

export const getColumnWithGroupLabelChart = () => ({
  series: [{
    name: 'Sales',
    data: [{
      x: '2024/01/01',
      y: 400
    }, {
      x: '2024/04/01',
      y: 430
    }, {
      x: '2024/07/01',
      y: 448
    }, {
      x: '2024/10/01',
      y: 470
    }, {
      x: '2025/01/01',
      y: 540
    }, {
      x: '2025/04/01',
      y: 580
    }, {
      x: '2025/07/01',
      y: 690
    }, {
      x: '2025/10/01',
      y: 690
    }]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '45%'
    }
  },
  colors: [getColor('secondary')],
  xaxis: {
    type: 'category',
    labels: {
      formatter: function (val) {
        return 'Q' + dayjs(val).quarter();
      },
      style: {
        fontSize: '12px',
        fontWeight: 600
      }
    },
    group: {
      style: {
        fontSize: '12px',
        fontWeight: 700
      },
      groups: [{
        title: '2024',
        cols: 4
      }, {
        title: '2025',
        cols: 4
      }]
    }
  },
  yaxis: {
    labels: {
      offsetX: -10
    }
  },
  tooltip: {
    x: {
      formatter: function (val) {
        return 'Q' + dayjs(val).quarter() + ' ' + dayjs(val).format('YYYY');
      }
    }
  },
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: 0,
      bottom: -15,
      left: 0
    }
  }
});

// COLUMN CHART WITH ROTATED LABELS & ANNOTATIONS

export const getRotateLabelColumn = () => ({
  annotations: {
    points: [{
      x: 'Bananas',
      seriesIndex: 0,
      label: {
        borderColor: getColor('secondary'),
        offsetY: 0,
        style: {
          color: '#fff',
          background: getColor('secondary')
        },
        text: 'Bananas are good'
      }
    }]
  },
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      borderRadius: 10
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2
  },
  colors: [getColor('primary')],
  series: [{
    name: 'Servings',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
  }],
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      top: 0,
      right: -2,
      bottom: -35,
      left: 10
    }
  },
  xaxis: {
    labels: {
      rotate: -45
    },
    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas', 'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas']
  },
  yaxis: {
    title: {
      text: 'Servings',
      style: {
        fontSize: '14px',
        fontWeight: 500
      }
    },
    labels: {
      offsetX: -10
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100]
    }
  }
});

// COLUMN CHART WITH NEGATIVE VALUES

export const getNegativeValueColumnChart = () => ({
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [{
          from: -100,
          to: -46,
          color: getColor('danger')
        }, {
          from: -45,
          to: 0,
          color: getColor('warning')
        }]
      },
      columnWidth: '80%',
      borderRadius: 6,
      borderRadiusApplication: 'end'
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: [getColor('primary')],
  series: [{
    name: 'Cash Flow',
    data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4]
  }],
  yaxis: {
    title: {
      text: 'Growth',
      style: {
        fontSize: '14px',
        fontWeight: 500
      }
    },
    labels: {
      formatter: function (y) {
        return y.toFixed(0) + '%';
      },
      offsetX: -10
    }
  },
  xaxis: {
    //type: 'datetime',
    categories: ['2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01', '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01', '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01', '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01', '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01', '2013-07-01', '2013-08-01', '2013-09-01'],
    labels: {
      rotate: -90
    }
  },
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: 10,
      bottom: -25,
      left: 10
    }
  }
});

// DISTRIBUTED COLUMN CHART

export const getDistributedColumnCharts = () => ({
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false
    },
    events: {
      click: function (chart, w, e) {
        console.log(chart, w, e);
      }
    }
  },
  colors: [getColor('primary'), getColor('secondary'), getColor('info'), getColor('danger'), getColor('success'), getColor('warning'), getColor('purple'), getColor('orange')],
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    data: [21, 22, 10, 28, 16, 21, 13, 30]
  }],
  xaxis: {
    categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
    labels: {
      style: {
        fontSize: '14px'
      }
    }
  },
  yaxis: {
    labels: {
      offsetX: -10
    }
  },
  legend: {
    offsetY: 7
  },
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: 10,
      bottom: -8,
      left: 10
    }
  }
});

// Range Column Chart

export const getRangeColumnCharts = () => ({
  chart: {
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  dataLabels: {
    enabled: true
  },
  legend: {
    offsetY: 7
  },
  yaxis: {
    labels: {
      offsetX: -10
    }
  },
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: 0,
      bottom: -5,
      left: 0
    }
  },
  colors: [getColor('primary'), getColor('secondary')],
  series: [{
    name: 'Product A',
    data: [{
      x: 'Team A',
      y: [1, 5]
    }, {
      x: 'Team B',
      y: [4, 6]
    }, {
      x: 'Team C',
      y: [5, 8]
    }, {
      x: 'Team D',
      y: [3, 11]
    }]
  }, {
    name: 'Product B',
    data: [{
      x: 'Team A',
      y: [2, 6]
    }, {
      x: 'Team B',
      y: [1, 3]
    }, {
      x: 'Team C',
      y: [7, 8]
    }, {
      x: 'Team D',
      y: [5, 9]
    }]
  }]
});