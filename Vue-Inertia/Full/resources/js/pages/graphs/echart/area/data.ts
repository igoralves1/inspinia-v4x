import type { EChartsOption } from 'echarts'
import { getColor } from '@/helpers/chart'

// basic area chart

export const getAreaChart = (): EChartsOption => ({
  grid: {
    left: '0%',
    right: '0%',
    bottom: '0%',
    top: '4%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine: {
      lineStyle: {
        color: getColor('body-secondary-color'),
      },
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#858d98',
      },
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(133, 141, 152, 0.1)',
      },
    },
  },
  tooltip: {
    trigger: 'axis',
    padding: [5, 0],
    backgroundColor: getColor('secondary-bg'),
    borderColor: getColor('border-color'),
    textStyle: { color: getColor('light-text-emphasis') },
    borderWidth: 1,
    transitionDuration: 0.125,
    axisPointer: { type: 'none' },
    shadowBlur: 2,
    shadowColor: 'rgba(76, 76, 92, 0.15)',
    shadowOffsetX: 0,
    shadowOffsetY: 1,
    formatter: function (params: any) {
      const title = params[0].name
      let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor('border-color')}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`
      params.forEach((item: any) => {
        content += `<div style="margin-top: 4px; padding: 3px 15px;">
                            <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                            ${item.seriesName} : <strong>${item.value}</strong>
                        </div>`
      })
      return content
    },
  },
  series: [
    {
      data: [150, 180, 120, 190, 110, 170, 130],
      type: 'line',
      areaStyle: {
        opacity: 0.2,
        color: getColor('primary'),
      },
      lineStyle: {
        color: getColor('primary'),
      },
      symbol: 'circle',
      symbolSize: 6,
    },
  ],
  textStyle: {
    fontFamily: getComputedStyle(document.body).fontFamily,
  },
  color: [getColor('primary')],
})

// stacked area charts

export const getStackedAreaChart = (): EChartsOption => ({
  textStyle: {
    fontFamily: getComputedStyle(document.body).fontFamily,
  },
  tooltip: {
    trigger: 'axis',
    padding: [5, 0],
    backgroundColor: getColor('secondary-bg'),
    borderColor: getColor('border-color'),
    textStyle: { color: getColor('light-text-emphasis') },
    borderWidth: 1,
    transitionDuration: 0.125,
    axisPointer: { type: 'none' },
    shadowBlur: 2,
    shadowColor: 'rgba(76, 76, 92, 0.15)',
    shadowOffsetX: 0,
    shadowOffsetY: 1,
    formatter: function (params: any) {
      const title = params[0].name
      let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor('border-color')}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`
      params.forEach((item: any) => {
        content += `<div style="margin-top: 4px; padding: 3px 15px;">
                            <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                            ${item.seriesName} : <strong>${item.value}</strong>
                        </div>`
      })
      return content
    },
  },
  xAxis: {
    type: 'category',
    data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: getColor('tertiary-bg'),
        type: 'dashed',
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: getColor('body-color'),
      margin: 15,
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: getColor('border-color'),
        type: 'dashed',
      },
    },
    axisLabel: {
      show: true,
      color: getColor('body-color'),
      margin: 15,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
  },
  series: [
    {
      name: 'Matcha Latte',
      type: 'line',
      symbolSize: 6,
      itemStyle: {
        color: getColor('info'),
        borderColor: getColor('info'),
        borderWidth: 2,
      },
      areaStyle: {
        opacity: 0.2,
        color: getColor('info'),
      },
      lineStyle: {
        color: getColor('info'),
      },
      symbol: 'circle',
      stack: 'product',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Milk Tea',
      type: 'line',
      symbolSize: 10,
      itemStyle: {
        color: getColor('success'),
        borderColor: getColor('success'),
        borderWidth: 2,
      },
      areaStyle: {
        opacity: 0.2,
        color: getColor('success'),
      },
      lineStyle: {
        color: getColor('success'),
      },
      symbol: 'circle',
      stack: 'product',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Cheese Cocoa',
      type: 'line',
      symbolSize: 10,
      itemStyle: {
        color: getColor('danger'),
        borderColor: getColor('danger'),
        borderWidth: 2,
      },
      areaStyle: {
        opacity: 0.2,
        color: getColor('danger'),
      },
      lineStyle: {
        color: getColor('danger'),
      },
      symbol: 'circle',
      stack: 'product',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Cheese Brownie',
      type: 'line',
      symbolSize: 10,
      itemStyle: {
        color: getColor('warning'),
        borderColor: getColor('warning'),
        borderWidth: 2,
      },
      areaStyle: {
        opacity: 0.2,
        color: getColor('warning'),
      },
      lineStyle: {
        color: getColor('warning'),
      },
      symbol: 'circle',
      stack: 'product',
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Matcha Cocoa',
      type: 'line',
      symbolSize: 10,
      itemStyle: {
        color: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 2,
      },
      lineStyle: {
        color: getColor('primary'),
      },
      symbol: 'circle',
      stack: 'product',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
  grid: {
    right: 22,
    left: 5,
    bottom: 5,
    top: 8,
    containLabel: true,
  },
})

// area chart with marker

export const getAreawithMarkerChart = (): EChartsOption => ({
  textStyle: {
    fontFamily: getComputedStyle(document.body).fontFamily,
  },
  color: [getColor('primary'), getColor('warning')],
  tooltip: {
    trigger: 'axis',
    padding: [5, 0],
    backgroundColor: getColor('secondary-bg'),
    borderColor: getColor('border-color'),
    textStyle: { color: getColor('light-text-emphasis') },
    borderWidth: 1,
    transitionDuration: 0.125,
    axisPointer: { type: 'none' },
    shadowBlur: 2,
    shadowColor: 'rgba(76, 76, 92, 0.15)',
    shadowOffsetX: 0,
    shadowOffsetY: 1,
    formatter: function (params: any) {
      const title = params[0].name
      let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor('border-color')}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`
      params.forEach((item: any) => {
        content += `<div style="margin-top: 4px; padding: 3px 15px;">
                            <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                            ${item.seriesName} : <strong>${item.value}</strong>
                        </div>`
      })
      return content
    },
  },
  xAxis: {
    type: 'category',
    data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    boundaryGap: false,
    axisLine: {
      lineStyle: { color: getColor('tertiary-bg'), type: 'solid' },
    },
    axisTick: { show: false },
    axisLabel: {
      color: getColor('body-color'),
      margin: 15,
    },
    splitLine: { show: false },
  },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { color: getColor('border-color') } },
    axisLabel: {
      show: true,
      color: getColor('body-color'),
      margin: 15,
    },
    axisTick: { show: false },
    axisLine: { show: false },
  },
  series: [
    {
      name: 'Max',
      type: 'line',
      data: [10, 11, 13, 11, 12, 9, 12],
      symbolSize: 10,
      areaStyle: {
        opacity: 0.2,
        color: getColor('primary'),
      },
      lineStyle: { color: getColor('primary') },
      symbol: 'circle',
      markPoint: {
        itemStyle: { color: getColor('primary') },
        label: { color: '#fff' },
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' },
        ],
      },
      markLine: {
        lineStyle: { color: getColor('primary') },
        label: { color: getColor('body-color') },
        data: [{ type: 'average', name: 'average' }],
      },
    },
    {
      name: 'Min',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      symbolSize: 10,
      itemStyle: {
        color: getColor('danger'),
        borderColor: getColor('danger'),
        borderWidth: 2,
      },
      areaStyle: {
        opacity: 0.2,
        color: getColor('danger'),
      },
      lineStyle: { color: getColor('danger') },
      symbol: 'circle',
      markPoint: {
        itemStyle: { color: getColor('danger') },
        label: { color: '#fff' },
        data: [{ name: 'Weekly lowest', value: -2, xAxis: 1, yAxis: -1.5 }],
      },
      markLine: {
        lineStyle: { color: getColor('danger') },
        label: { color: getColor('body-color') },
        data: [
          { type: 'average', name: 'average' },
          [
            { symbol: 'none', x: '90%', yAxis: 'max' },
            {
              symbol: 'circle',
              label: { position: 'start', formatter: 'Max' },
              type: 'max',
              name: 'Highest point',
            },
          ],
        ],
      },
    },
  ],
  grid: {
    right: '5%',
    left: '5%',
    bottom: '10%',
    top: '15%',
  },
})

// dynamic line chart

let now = new Date(2023, 9, 3)
let value = Math.random() * 100
const oneDay = 24 * 3600 * 1000

export function createInitialData(count = 1000) {
  const data: [string, number][] = []
  for (let i = 0; i < count; i++) {
    data.push(generateRandomPoint())
  }
  return data
}

export function generateRandomPoint(): [string, number] {
  now = new Date(+now + oneDay)
  value = value + Math.random() * 21 - 10
  return [[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'), Math.round(value)]
}

export const getDynamicAreaChart = (data: [string, number][]): EChartsOption => ({
  color: [getColor('purple')],
  textStyle: {
    fontFamily: getComputedStyle(document.body).fontFamily,
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params: any) {
      const item = params[0]
      const date = new Date(item.name)
      const day = date.getDate()
      const month = date.toLocaleString('default', { month: 'long' })
      const year = date.getFullYear()
      return `${day} ${month}, ${year} : ${item.value[1]}`
    },
    axisPointer: {
      type: 'none',
      animation: false,
    },
    padding: [12, 16],
    backgroundColor: getColor('secondary-bg'),
    borderColor: getColor('border-color'),
    textStyle: { color: getColor('light-text-emphasis') },
    borderWidth: 1,
    transitionDuration: 0.125,
    shadowBlur: 2,
    shadowColor: 'rgba(76, 76, 92, 0.15)',
    shadowOffsetX: 0,
    shadowOffsetY: 1,
  },
  xAxis: {
    type: 'time',
    splitLine: { show: false },
    axisLine: {
      lineStyle: { color: getColor('tertiary-bg'), type: 'solid' },
    },
    axisLabel: {
      color: getColor('body-color'),
      margin: 15,
    },
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    axisLabel: {
      show: true,
      color: getColor('body-color'),
      margin: 15,
    },
    splitLine: {
      lineStyle: { color: 'rgba(133, 141, 152, 0.1)' },
    },
  },
  grid: {
    left: '7%',
    right: '5%',
    bottom: '10%',
    top: '5%',
  },
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      showSymbol: false,
      data: data,
      areaStyle: { opacity: 0.2 },
      lineStyle: { width: 3 },
    },
  ],
})

//step area chart

export const getStepAreaChart = (): EChartsOption => ({
  tooltip: {
    trigger: 'axis',
    padding: [12, 16],
    backgroundColor: getColor('secondary-bg'),
    borderColor: getColor('border-color'),
    textStyle: { color: getColor('light-text-emphasis') },
    borderWidth: 1,
    transitionDuration: 0.125,
    axisPointer: { type: 'none' },
    shadowBlur: 2,
    shadowColor: 'rgba(76, 76, 92, 0.15)',
    shadowOffsetX: 0,
    shadowOffsetY: 1,
  },
  legend: {
    data: ['Step Start', 'Step Middle', 'Step End'],
    textStyle: {
      color: '#858d98',
    },
  },
  grid: {
    left: '0%',
    right: '0%',
    bottom: '0%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine: {
      lineStyle: { color: getColor('tertiary-bg'), type: 'dashed' },
    },
    axisLabel: {
      color: getColor('body-color'),
      margin: 15,
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#858d98',
      },
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(133, 141, 152, 0.1)',
      },
    },
  },
  textStyle: {
    fontFamily: getComputedStyle(document.body).fontFamily,
  },
  color: [getColor('purple'), getColor('warning'), getColor('success')],
  series: [
    {
      name: 'Step Start',
      type: 'line',
      areaStyle: {
        opacity: 0.2,
      },
      step: 'start',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Step Middle',
      type: 'line',
      areaStyle: {
        opacity: 0.2,
      },
      step: 'middle',
      data: [220, 282, 201, 234, 290, 430, 410],
    },
    {
      name: 'Step End',
      type: 'line',
      step: 'end',
      data: [450, 432, 401, 454, 590, 530, 510],
    },
  ],
})
