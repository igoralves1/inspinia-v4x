import stock from '@/assets/images/stock/small-1.jpg';
import { getColor } from '@/helpers/color';
// BASIC BAR CHART

export const getBasicBarChart = () => ({
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + 'k' + ' Orders';
      }
    }
  },
  series: [{
    name: 'iPhone 16',
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  colors: [getColor('primary')],
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
    axisBorder: {
      show: false
    }
  },
  states: {
    hover: {
      filter: {
        type: 'none'
      }
    }
  },
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: 0,
      bottom: -16,
      left: 0
    }
  }
});

// GROUPED BAR CHART

export const getGroupedBarChart = () => ({
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 6,
      borderRadiusApplication: 'end',
      dataLabels: {
        position: 'top'
      }
    }
  },
  dataLabels: {
    enabled: true,
    offsetX: 15,
    style: {
      fontSize: '12px',
      colors: [getColor('body-color')]
    }
  },
  colors: [getColor('primary'), getColor('secondary')],
  stroke: {
    show: true,
    width: 2,
    colors: [getColor('secondary-bg')]
  },
  series: [{
    name: 'iPhone 16',
    data: [44, 55, 41, 64, 22, 43, 21]
  }, {
    name: 'iPhone 16 Pro',
    data: [53, 32, 33, 52, 13, 44, 32]
  }],
  xaxis: {
    categories: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
    axisBorder: {
      show: false
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
    offsetY: 5
  },
  states: {
    hover: {
      filter: {
        type: 'none'
      }
    }
  },
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: 0,
      bottom: -10,
      left: 0
    }
  }
});

// STACKED BAR CHART

export const getFullStackedBarChart = () => ({
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
      horizontal: true
    }
  },
  stroke: {
    show: false
  },
  series: [{
    name: 'Marine Sprite',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Tank Picture',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'Bucket Slope',
    data: [9, 7, 5, 8, 6, 9, 4]
  }, {
    name: 'Reborn Kid',
    data: [25, 12, 19, 32, 25, 24, 10]
  }],
  xaxis: {
    categories: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
    labels: {
      formatter: function (val) {
        return val + 'K';
      }
    },
    axisBorder: {
      show: false
    }
  },
  yaxis: {
    title: {
      text: undefined
    }
  },
  colors: [getColor('primary'), getColor('secondary'), getColor('info'), getColor('danger'), getColor('purple')],
  tooltip: {
    y: {
      formatter: function (val) {
        return val + 'K';
      }
    }
  },
  fill: {
    opacity: 1
  },
  states: {
    hover: {
      filter: {
        type: 'none'
      }
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    offsetY: -7
  },
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      top: -30,
      // You can use negative or positive values here
      right: 0,
      bottom: -15,
      left: 0
    }
  }
});

// 100% STACKED BAR CHART

export const getStackedBarChart = () => ({
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
      horizontal: true
    }
  },
  stroke: {
    width: 1,
    colors: ['transparent']
  },
  series: [{
    name: 'Marine Sprite',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Tank Picture',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'Bucket Slope',
    data: [9, 7, 5, 8, 6, 9, 4]
  }, {
    name: 'Reborn Kid',
    data: [25, 12, 19, 32, 25, 24, 10]
  }],
  xaxis: {
    categories: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
    axisBorder: {
      show: false
    }
  },
  colors: [getColor('info'), getColor('warning'), getColor('primary'), getColor('pink'), getColor('purple')],
  tooltip: {
    y: {
      formatter: function (val) {
        return val + 'K';
      }
    }
  },
  fill: {
    opacity: 1
  },
  states: {
    hover: {
      filter: {
        type: 'none'
      }
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    offsetY: -7
  },
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      top: -30,
      right: 0,
      bottom: -15,
      left: 0
    }
  }
});

// Grouped Stacked Bars

export const getGroupedStackedBarChart = () => ({
  series: [{
    name: 'Q1 Budget',
    group: 'budget',
    data: [44000, 55000, 41000, 67000, 22000]
  }, {
    name: 'Q1 Actual',
    group: 'actual',
    data: [48000, 50000, 40000, 65000, 25000]
  }, {
    name: 'Q2 Budget',
    group: 'budget',
    data: [13000, 36000, 20000, 8000, 13000]
  }, {
    name: 'Q2 Actual',
    group: 'actual',
    data: [20000, 40000, 25000, 10000, 12000]
  }],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: false
    }
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
      horizontal: true
    }
  },
  xaxis: {
    categories: ['Online advertising', 'Sales Training', 'Print advertising', 'Catalogs', 'Meetings'],
    labels: {
      formatter: val => {
        return val / 1000 + 'K';
      }
    }
  },
  fill: {
    opacity: 1
  },
  colors: [getColor('primary'), getColor('secondary'), getColor('info'), getColor('danger')],
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    offsetY: -7
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

// BAR WITH NEGATIVE VALUES

export const getNegativeBarChart = () => ({
  chart: {
    height: 350,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    }
  },
  colors: [getColor('success'), getColor('danger')],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1,
    colors: ['transparent']
  },
  series: [{
    name: 'Male',
    data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3]
  }, {
    name: 'Females',
    data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8]
  }],
  xaxis: {
    categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'],
    title: {
      text: 'Percent',
      style: {
        fontSize: '14px',
        fontWeight: 600
      }
    },
    labels: {
      formatter(val) {
        return Math.abs(Math.round(val)) + '%';
      }
    },
    axisBorder: {
      show: false
    }
  },
  yaxis: {
    min: -5,
    max: 5,
    title: {
      text: 'Age',
      style: {
        fontSize: '14px',
        fontWeight: 600
      }
    }
  },
  tooltip: {
    shared: false,
    x: {
      formatter(val) {
        return val;
      }
    },
    y: {
      formatter(val) {
        return Math.abs(val) + '%';
      }
    }
  },
  legend: {
    offsetY: 7
  },
  grid: {
    borderColor: getColor('border-color'),
    xaxis: {
      // showLines: false,
    },
    padding: {
      top: -20,
      right: 0,
      bottom: -15,
      left: 0
    }
  }
});

// Reversed Bar Chart
export const getReversedBarChart = () => ({
  series: [{
    data: [400, 430, 448, 470, 540, 580, 690]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  colors: [getColor('success')],
  annotations: {
    xaxis: [{
      x: 500,
      borderColor: getColor('success'),
      label: {
        borderColor: getColor('success'),
        style: {
          color: '#fff',
          background: getColor('success')
        },
        text: 'X annotation'
      }
    }],
    yaxis: [{
      y: 'July',
      y2: 'September',
      label: {
        text: 'Y annotation'
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
    axisBorder: {
      show: false
    }
  },
  grid: {
    borderColor: getColor('border-color'),
    xaxis: {
      lines: {
        show: true
      }
    },
    padding: {
      top: -20,
      right: 0,
      bottom: -15,
      left: 0
    }
  },
  yaxis: {
    reversed: true,
    axisTicks: {
      show: true
    }
  }
});

// BAR WITH IMAGE FILL

export const getImageFillBarChart = () => ({
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false
    },
    animations: {
      enabled: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: [getColor('success')],
  stroke: {
    colors: ['#fff'],
    width: 0.2
  },
  series: [{
    name: 'iPhones',
    data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12, 11, 12, 13, 14, 16, 14, 15, 17, 19, 21, 12, 12, 11, 12, 13, 14, 16, 14, 15, 17, 19, 21]
  }],
  // labels: labels,
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    },
    title: {
      text: 'Weight',
      style: {
        fontSize: '14px',
        fontWeight: 600
      }
    }
  },
  xaxis: {
    axisBorder: {
      show: false
    }
  },
  grid: {
    borderColor: getColor('border-color'),
    position: 'back',
    padding: {
      top: -20,
      right: 0,
      bottom: -15,
      left: 0
    }
  },
  fill: {
    type: 'image',
    opacity: 0.87,
    image: {
      src: [stock],
      width: 466,
      height: 406
    }
  }
});

// CUSTOM DATALABELS BAR

export const getCustomDataLabelsBarChart = () => ({
  chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      barHeight: '100%',
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: 'bottom'
      }
    }
  },
  colors: [getColor('primary'), getColor('secondary'), getColor('info'), getColor('danger'), getColor('purple'), getColor('warning'), getColor('dark'), getColor('pink'), getColor('success'), getColor('orange')],
  dataLabels: {
    enabled: true,
    // textAnchor: 'none',
    style: {
      colors: ['#fff']
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
    },
    offsetX: 10,
    offsetY: -1,
    dropShadow: {
      enabled: false
    }
  },
  series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  stroke: {
    width: 0,
    colors: ['#fff']
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'India'],
    axisBorder: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: false
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
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      }
    }
  }
});

// PATTERNED BAR CHART

export const getPatternedBarChart = () => ({
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
      horizontal: true,
      barHeight: '60%'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2
  },
  series: [{
    name: 'Marine Sprite',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Tank Picture',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'Bucket Slope',
    data: [9, 7, 5, 8, 6, 9, 4]
  }],
  xaxis: {
    categories: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
    axisBorder: {
      show: false
    }
  },
  yaxis: {
    title: {
      text: undefined
    }
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return val + 'K';
      }
    }
  },
  colors: [getColor('primary'), getColor('secondary'), getColor('info'), getColor('danger')],
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'] // string or array of strings
    }
  },
  states: {
    hover: {
      filter: {
        type: 'none'
      }
    }
  },
  legend: {
    position: 'right'
  },
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      top: -20,
      right: 0,
      bottom: -11,
      left: 0
    }
  },
  responsive: [{
    breakpoint: 600,
    options: {
      legend: {
        show: false
      }
    }
  }]
});

// Bar with Markers

export const getMarkersBarChart = () => ({
  series: [{
    name: 'Actual',
    data: [{
      x: '2017',
      y: 12,
      goals: [{
        name: 'Expected',
        value: 14,
        strokeWidth: 2,
        strokeDashArray: 2,
        strokeColor: getColor('secondary')
      }]
    }, {
      x: '2018',
      y: 44,
      goals: [{
        name: 'Expected',
        value: 54,
        strokeWidth: 5,
        strokeHeight: 10,
        strokeColor: getColor('secondary')
      }]
    }, {
      x: '2019',
      y: 54,
      goals: [{
        name: 'Expected',
        value: 52,
        strokeWidth: 10,
        strokeHeight: 0,
        strokeLineCap: 'round',
        strokeColor: getColor('secondary')
      }]
    }, {
      x: '2020',
      y: 66,
      goals: [{
        name: 'Expected',
        value: 61,
        strokeWidth: 10,
        strokeHeight: 0,
        strokeLineCap: 'round',
        strokeColor: getColor('secondary')
      }]
    }, {
      x: '2021',
      y: 81,
      goals: [{
        name: 'Expected',
        value: 66,
        strokeWidth: 10,
        strokeHeight: 0,
        strokeLineCap: 'round',
        strokeColor: getColor('secondary')
      }]
    }, {
      x: '2022',
      y: 67,
      goals: [{
        name: 'Expected',
        value: 70,
        strokeWidth: 5,
        strokeHeight: 10,
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
      horizontal: true
    }
  },
  colors: [getColor('primary'), getColor('secondary'), getColor('info'), getColor('danger')],
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected']
  },
  xaxis: {
    axisBorder: {
      show: false
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