import type { ApexOptions } from 'apexcharts'
import { getColor } from '@/helpers/chart'

// Simple line chart

export const getHeatmapSingleSeriesChart = (): ApexOptions => ({
  chart: {
    height: 380,
    type: 'line',
    zoom: { enabled: false },
  },
  dataLabels: {
    enabled: false,
  },
  colors: [getColor('primary')],
  stroke: {
    width: [2],
    curve: 'smooth',
  },
  series: [
    {
      name: 'Revenue',
      data: [12, 28, 18, 34, 42, 39, 48, 55, 63],
    },
  ],
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2,
    },
    borderColor: getColor('border-color'),
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
})

export const getLineChart = (): ApexOptions => ({
  chart: {
    height: 380,
    type: 'line',
    zoom: { enabled: false },
    toolbar: { show: false },
  },
  colors: [getColor('info'), getColor('danger')],
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '10px',
      fontWeight: 'bold',
      colors: [getColor('info'), getColor('danger')],
    },
    background: {
      enabled: true,
      padding: 8,
      borderRadius: 4,
    },
    offsetY: 3,
  },
  stroke: {
    width: [2, 2],
    curve: 'smooth',
  },
  series: [
    {
      name: 'Revenue - 2024',
      data: [45, 52, 48, 58, 63, 72, 80],
    },
    {
      name: 'Expenses - 2024',
      data: [25, 35, 32, 40, 38, 36, 34],
    },
  ],
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2,
    },
    borderColor: getColor('border-color'),
    padding: {
      top: 0,
      right: 20,
      bottom: 0,
      left: 20,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  yaxis: {
    title: {
      text: 'Amount (in K)',
      offsetX: 0,
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
    labels: {
      offsetX: -7,
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    offsetY: 5,
  },
})

// Zoomable Timeseries

const userGrowthData = [
  [new Date('2024-02-01').getTime(), 4200000],
  [new Date('2024-02-02').getTime(), 4300000],
  [new Date('2024-02-03').getTime(), 4120000],
  [new Date('2024-02-04').getTime(), 4400000],
  [new Date('2024-02-05').getTime(), 4500000],
  [new Date('2024-02-06').getTime(), 4600000],
  [new Date('2024-02-07').getTime(), 4380000],
  [new Date('2024-02-08').getTime(), 4450000],
  [new Date('2024-02-09').getTime(), 4700000],
  [new Date('2024-02-10').getTime(), 4650000],
  [new Date('2024-02-11').getTime(), 4850000],
  [new Date('2024-02-12').getTime(), 4700000],
  [new Date('2024-02-13').getTime(), 4880000],
  [new Date('2024-02-14').getTime(), 4950000],
  [new Date('2024-02-15').getTime(), 5100000],
  [new Date('2024-02-16').getTime(), 5050000],
  [new Date('2024-02-17').getTime(), 4980000],
  [new Date('2024-02-18').getTime(), 5200000],
  [new Date('2024-02-19').getTime(), 5300000],
  [new Date('2024-02-20').getTime(), 5180000],
  [new Date('2024-02-21').getTime(), 5500000],
  [new Date('2024-02-22').getTime(), 5400000],
  [new Date('2024-02-23').getTime(), 5520000],
  [new Date('2024-02-24').getTime(), 5650000],
  [new Date('2024-02-25').getTime(), 5800000],
]

export const getZoomableTimeseriesChart = (): ApexOptions => ({
  chart: {
    type: 'area',
    stacked: false,
    height: 360,
    zoom: {
      enabled: true,
    },
    toolbar: { show: true },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [3],
  },
  series: [
    {
      name: 'User Growth',
      data: userGrowthData,
    },
  ],
  markers: {
    size: 0,
    // style: 'full',
  },
  colors: [getColor('danger')],
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2,
    },
    borderColor: getColor('border-color'),
    padding: {
      right: 20,
    },
  },
  fill: {
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 70, 80, 100],
    },
  },
  yaxis: {
    min: 1000000,
    max: 6000000,
    labels: {
      formatter: function (val) {
        return (val / 1000).toFixed(0) + 'K'
      },
    },
    title: {
      text: 'Users',
      offsetX: -5,
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  xaxis: {
    type: 'datetime',
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000).toFixed(0) + 'K'
      },
    },
  },
})

// Syncing charts

export const getSyncingCharts = (): ApexOptions => ({
  chart: {
    type: 'line',
    height: 160,
    id: 'fb',
    group: 'social',
    toolbar: { show: false },
  },
  colors: [getColor('primary')],
  stroke: {
    width: [3],
    curve: 'straight',
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    followCursor: false,
    theme: 'light',
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
    y: {
      formatter: function (val: any) {
        return val
      },
    },
  },
  series: [
    {
      data: [
        [new Date('2024-05-01').getTime(), 28],
        [new Date('2024-05-02').getTime(), 35],
        [new Date('2024-05-03').getTime(), 32],
        [new Date('2024-05-04').getTime(), 30],
        [new Date('2024-05-05').getTime(), 34],
        [new Date('2024-05-06').getTime(), 38],
        [new Date('2024-05-07').getTime(), 36],
        [new Date('2024-05-08').getTime(), 40],
        [new Date('2024-05-09').getTime(), 42],
        [new Date('2024-05-10').getTime(), 39],
      ],
    },
  ],
  xaxis: {
    type: 'datetime',
    labels: {
      datetimeFormatter: {
        day: 'dd MMM',
      },
    },
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2,
    },
    borderColor: getColor('border-color'),
    padding: { right: 20 },
  },
})

export const getSyncingCharts2 = (): ApexOptions => ({
  chart: {
    height: 200,
    type: 'line',
    id: 'yt',
    group: 'social',
    toolbar: { show: false },
  },
  colors: [getColor('danger')],
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    followCursor: false,
    theme: 'light',
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
    y: {
      formatter: function (val: any) {
        return val
      },
    },
  },
  stroke: {
    width: [3],
    curve: 'smooth',
  },
  series: [
    {
      data: [
        [new Date('2024-05-01').getTime(), 120],
        [new Date('2024-05-02').getTime(), 160],
        [new Date('2024-05-03').getTime(), 150],
        [new Date('2024-05-04').getTime(), 180],
        [new Date('2024-05-05').getTime(), 170],
        [new Date('2024-05-06').getTime(), 200],
        [new Date('2024-05-07').getTime(), 190],
        [new Date('2024-05-08').getTime(), 210],
        [new Date('2024-05-09').getTime(), 230],
        [new Date('2024-05-10').getTime(), 240],
      ],
    },
  ],
  fill: {
    gradient: {
      // enabled: true,
      opacityFrom: 0.6,
      opacityTo: 0.8,
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
  },
  xaxis: {
    type: 'datetime',
    labels: {
      datetimeFormatter: {
        day: 'dd MMM',
      },
    },
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2,
    },
    borderColor: getColor('border-color'),
    padding: { right: 20 },
  },
})

// Missing Data

export const getMissingLineChart = (): ApexOptions => ({
  chart: {
    height: 380,
    type: 'line',
    zoom: {
      enabled: false,
    },
    animations: {
      enabled: false,
    },
    toolbar: { show: false },
  },
  stroke: {
    width: [5, 5, 4],
    curve: 'straight',
  },
  series: [
    {
      name: 'Slack',
      data: [45, 50, 48, 60, 42, 55, null, 56, null, 60, null, 66, 50, 69, 75, 71],
    },
    {
      name: 'Zoom',
      data: [30, 28, 35, null, 25, 42, 39, null, 47, 32, 50, 41, null, 53, 45, 55],
    },
    {
      name: 'Notion',
      data: [null, 25, 35, 20, 30, 22, 38, null, 34, 29, 37, 39, 45, 41, 33, 44],
    },
  ],
  labels: [
    '01 Jan',
    '02 Jan',
    '03 Jan',
    '04 Jan',
    '05 Jan',
    '06 Jan',
    '07 Jan',
    '08 Jan',
    '09 Jan',
    '10 Jan',
    '11 Jan',
    '12 Jan',
    '13 Jan',
    '14 Jan',
    '15 Jan',
    '16 Jan',
  ],
  colors: [getColor('secondary'), getColor('warning'), getColor('info')],
  grid: {
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.2,
    },
    borderColor: getColor('border-color'),
    padding: {
      bottom: 5,
    },
  },
  legend: {
    offsetY: 5,
  },
})

// Dashed line chart

export const getDashedLineChart = (): ApexOptions => ({
  chart: {
    height: 380,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: { show: false },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [3, 5, 3],
    curve: 'straight',
    dashArray: [0, 8, 5],
  },
  series: [
    {
      name: 'Charging Time',
      data: [30, 45, 28, 20, 36, 25, 22, 18, 10, 12, 20, 15],
    },
    {
      name: 'Energy Delivered',
      data: [22, 35, 55, 38, 16, 21, 33, 40, 39, 53, 30, 34],
    },
    {
      name: 'Sessions Completed',
      data: [60, 50, 65, 85, 58, 40, 70, 60, 90, 63, 48, 52],
    },
  ],
  markers: {
    size: 0,
  },
  xaxis: {
    categories: ['01 Mar', '02 Mar', '03 Mar', '04 Mar', '05 Mar', '06 Mar', '07 Mar', '08 Mar', '09 Mar', '10 Mar', '11 Mar', '12 Mar'],
  },
  colors: [getColor('primary'), getColor('secondary'), getColor('gray')],
  tooltip: {
    y: {
      title: {
        formatter: function (seriesName) {
          if (seriesName === 'Charging Time') return 'Charging Time (mins)'
          else if (seriesName === 'Energy Delivered') return 'Energy Delivered (kWh)'
          else if (seriesName === 'Sessions Completed') return 'Sessions'
          return seriesName
        },
      },
    },
  },
  grid: {
    borderColor: getColor('border-color'),
  },
  legend: {
    offsetY: 7,
  },
})

// Stepline Charts

export const getSteplineChart = (): ApexOptions => ({
  chart: {
    type: 'line',
    height: 360,
    toolbar: { show: false },
  },
  stroke: {
    curve: 'stepline',
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      data: [120, 115, 130, 90, 70, 95, 85, 75, 140, 140, 125],
    },
  ],
  colors: [getColor('purple')],
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  grid: {
    padding: { right: 20 },
  },
})

// Brush Chart

function generateDayWiseTimeSeries(baseval: any, count: any, yrange: any) {
  let i = 0
  const series = []
  while (i < count) {
    const x = baseval
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push([x, y])
    baseval += 86400000
    i++
  }
  return series
}

const common = generateDayWiseTimeSeries(new Date('01 Jan 2024').getTime(), 185, {
  min: 40,
  max: 90,
})

export const getBrushChart = (): ApexOptions => ({
  series: [
    {
      data: common,
    },
  ],
  chart: {
    id: 'chart2',
    type: 'line',
    height: 230,
    toolbar: {
      autoSelected: 'pan',
      show: false,
    },
  },
  colors: [getColor('secondary')],
  stroke: {
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: 'datetime',
  },
})

export const getBrushChart2 = (): ApexOptions => ({
  series: [
    {
      data: common,
    },
  ],
  chart: {
    id: 'chart1',
    height: 130,
    type: 'area',
    brush: {
      target: 'chart2',
      enabled: true,
    },
    selection: {
      enabled: true,
      xaxis: {
        min: new Date('15 Mar 2024').getTime(),
        max: new Date('15 May 2024').getTime(),
      },
    },
  },
  colors: [getColor('secondary')],
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.91,
      opacityTo: 0.1,
    },
  },
  xaxis: {
    type: 'datetime',
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    tickAmount: 2,
  },
})

// Realtime chart

export function createDailyTimeSeries(
  baseval: number,
  count: number,
  yrange: {
    min: number
    max: number
  },
): [number, number][] {
  const series: [number, number][] = []
  for (let i = 0; i < count; i++) {
    const x = baseval
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    series.push([x, y])
    baseval += 86400000 // 1 day in ms
  }
  return series
}

export function generateNewPoint(baseval: number, yrange: { min: number; max: number }): [number, number] {
  const newDate = baseval + 86400000
  const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  return [newDate, y]
}

export const getRealTimeChartOptions = (_p0: [number, number][]): ApexOptions => ({
  chart: {
    height: 350,
    type: 'line',
    animations: {
      enabled: true,
      dynamicAnimation: {
        speed: 2000,
      },
    },
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  colors: ['#0d6efd'],
  markers: { size: 0 },
  xaxis: {
    type: 'datetime',
    range: 86400000 * 9,
  },
  yaxis: { max: 100 },
  legend: { show: false },
  grid: {
    borderColor: '#e0e0e0',
  },
})
