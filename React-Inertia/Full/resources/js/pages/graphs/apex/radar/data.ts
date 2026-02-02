import { getColor } from '@/helpers/color'
import type { ApexOptions } from 'apexcharts'

// BASIC RADAR CHART

export const getBasicRadarChart = (): ApexOptions => ({
  chart: {
    height: 350,
    type: 'radar',
    toolbar: { show: false },
  },
  series: [
    {
      name: 'Series 1',
      data: [85, 70, 60, 90, 75, 65],
    },
  ],
  labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL'],
  colors: [getColor('primary')],
})

// RADAR WITH POLYGON-FILL

export const getRadarPolygonChart = (): ApexOptions => ({
  chart: {
    height: 350,
    type: 'radar',
  },
  series: [
    {
      name: 'Activity Level',
      data: [80, 60, 75, 90, 50, 70, 65],
    },
  ],
  colors: [getColor('secondary')],
  labels: ['Cardio', 'Strength Training', 'Flexibility', 'Endurance', 'Balance', 'HIIT', 'Mobility'],
  plotOptions: {
    radar: {
      size: 120,
    },
  },
  markers: {
    size: 4,
    colors: [getColor('danger')],
    strokeWidth: 2,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + ' pts'
      },
    },
  },
  yaxis: {
    tickAmount: 7,
    labels: {
      formatter: function (val: any, i) {
        return i % 2 === 0 ? val : ''
      },
    },
  },
})

// RADAR – MULTIPLE SERIES
export const generateRandomSeries = () => [
  {
    name: 'Marketing',
    data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: 'Sales',
    data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: 'IT',
    data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
  },
]

export const getRadarMultiPleSeriesChart = (): ApexOptions => ({
  chart: {
    height: 350,
    type: 'radar',
    toolbar: { show: false },
  },
  colors: [getColor('primary'), getColor('secondary'), getColor('purple')],
  stroke: {
    width: 0,
  },
  plotOptions: {
    radar: {
      size: 120,
    },
  },
  fill: {
    opacity: 0.4,
  },
  markers: {
    size: 0,
  },
  legend: {
    offsetY: 5,
  },
  labels: ['Customer Satisfaction', 'Revenue Growth', 'Efficiency', 'Innovation', 'Support Quality', 'Compliance'],
})
