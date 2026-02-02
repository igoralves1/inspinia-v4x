import { getColor } from '@/helpers/color';
const sparkDataVisits = [120, 135, 160, 180, 170, 145, 190, 210, 185, 195, 220, 240, 230, 250, 270, 265, 280, 300, 310, 305, 320, 330, 345, 360];
const sparkDataViews = [500, 540, 520, 560, 580, 610, 590, 600, 630, 660, 640, 650, 670, 680, 700, 720, 740, 760, 750, 770, 790, 810, 830, 850];
const sparkDataBounce = [45, 42, 40, 39, 38, 37, 35, 34, 36, 33, 32, 31, 30, 29, 28, 27, 27, 26, 25, 24, 24, 23, 22, 21];
export const getSpark1Chart = () => ({
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    width: 2,
    curve: 'straight'
  },
  fill: {
    opacity: 0.2
  },
  series: [{
    name: 'Unique Visitors',
    data: sparkDataVisits
  }],
  colors: [getColor('primary')],
  yaxis: {
    min: 0
  },
  title: {
    text: '12,520',
    offsetX: 0,
    style: {
      fontSize: '20px',
      fontWeight: 600
    }
  },
  subtitle: {
    text: 'Visitors',
    offsetX: 0,
    style: {
      fontSize: '14px',
      fontWeight: 500
    }
  }
});
export const getSpark2Chart = () => ({
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    width: 2,
    curve: 'straight'
  },
  fill: {
    opacity: 0.2
  },
  series: [{
    name: 'Page Views',
    data: sparkDataViews
  }],
  colors: [getColor('secondary')],
  yaxis: {
    min: 0
  },
  title: {
    text: '32,870',
    offsetX: 0,
    style: {
      fontSize: '20px',
      fontWeight: 600
    }
  },
  subtitle: {
    text: 'Page Views',
    offsetX: 0,
    style: {
      fontSize: '14px',
      fontWeight: 500
    }
  }
});
export const getSpark3Chart = () => ({
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    width: 2,
    curve: 'straight'
  },
  fill: {
    opacity: 0.2
  },
  series: [{
    name: 'Bounce Rate',
    data: sparkDataBounce
  }],
  colors: [getColor('danger')],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  yaxis: {
    min: 0
  },
  title: {
    text: '21.0%',
    offsetX: 0,
    style: {
      fontSize: '20px',
      fontWeight: 600
    }
  },
  subtitle: {
    text: 'Bounce Rate',
    offsetX: 0,
    style: {
      fontSize: '14px',
      fontWeight: 500
    }
  }
});
export const getChart1 = () => ({
  chart: {
    type: 'line',
    width: 140,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  series: [{
    data: [10, 30, 50, 25, 60, 70, 55, 35, 45, 20, 65]
  }],
  colors: [getColor('purple')],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
});
export const getChart2 = () => ({
  chart: {
    type: 'line',
    width: 140,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  series: [{
    data: [20, 35, 15, 30, 40, 60, 70, 45, 50, 55, 25]
  }],
  colors: [getColor('info')],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
});
export const getChart3 = () => ({
  chart: {
    type: 'line',
    width: 140,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  series: [{
    data: [5, 15, 25, 20, 35, 45, 30, 25, 15, 10, 40]
  }],
  colors: [getColor('gray')],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
});
export const getChart4 = () => ({
  chart: {
    type: 'line',
    width: 140,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  series: [{
    data: [40, 60, 50, 70, 55, 30, 20, 15, 10, 25, 35]
  }],
  colors: [getColor('warning')],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
});
export const getChart5 = () => ({
  chart: {
    type: 'bar',
    width: 100,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  series: [{
    data: [18, 28, 32, 22, 41, 36, 20, 15, 27, 33, 25]
  }],
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  colors: [getColor('purple')],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
});
export const getChart6 = () => ({
  chart: {
    type: 'bar',
    width: 100,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  series: [{
    data: [10, 25, 20, 35, 30, 40, 45, 50, 55, 60, 48]
  }],
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  colors: [getColor('info')],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
});
export const getChart7 = () => ({
  chart: {
    type: 'bar',
    width: 100,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  series: [{
    data: [50, 42, 36, 28, 20, 18, 25, 32, 40, 46, 51]
  }],
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  colors: [getColor('gray')],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
});
export const getChart8 = () => ({
  chart: {
    type: 'bar',
    width: 100,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  series: [{
    data: [12, 18, 25, 30, 24, 28, 36, 42, 39, 44, 33]
  }],
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  colors: [getColor('warning')],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
});