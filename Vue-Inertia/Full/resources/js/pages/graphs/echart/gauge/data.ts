import type { EChartsOption } from 'echarts'
import { getColor } from '@/helpers/chart'

// basic gauge chart

export const getGaugeChart = (): EChartsOption => ({
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%',
    padding: [7, 15],
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
  textStyle: { fontFamily: getComputedStyle(document.body).fontFamily },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      radius: '95%',
      progress: {
        show: true,
        itemStyle: { color: getColor('primary') },
      },
      pointer: { itemStyle: { color: getColor('primary') } },
      axisLine: { lineStyle: { color: [[1, getColor('light')]] } },
      axisLabel: { color: getColor('tertiary-color'), fontSize: 12 },
      detail: {
        valueAnimation: true,
        formatter: (value) => `{value|${value}}\n{name|SCORE}`,
        rich: {
          value: { fontSize: 24, fontWeight: 'bold', lineHeight: 30, color: getColor('body-color') },
          name: { fontSize: 14, color: getColor('tertiary-color'), padding: [8, 0, 0, 0] },
        },
      },
      data: [{ value: 50 }],
    },
  ],
})

// speed stage gauge chat

export const getSpeedStageGaugeChart = (): EChartsOption => ({
  series: [
    {
      type: 'gauge',
      radius: '95%',
      axisLine: {
        lineStyle: {
          width: 30,
          color: [
            [0.3, getColor('success')],
            [0.7, getColor('warning')],
            [1, getColor('danger')],
          ],
        },
      },
      pointer: { itemStyle: { color: 'auto' } },
      axisTick: { distance: -30, length: 8, lineStyle: { color: '#fff', width: 2 } },
      splitLine: { distance: -30, length: 30, lineStyle: { color: '#fff', width: 4 } },
      axisLabel: { color: 'inherit', distance: 40, fontSize: 12 },
      detail: {
        valueAnimation: true,
        formatter: '{value} km/h',
        color: 'inherit',
        fontSize: 18,
        fontWeight: 'bold',
      },
      data: [{ value: 70 }],
    },
  ],
  textStyle: { fontFamily: getComputedStyle(document.body).fontFamily },
})

// ring gauge chart

export const getRingGaugeChart = (): EChartsOption => ({
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    backgroundColor: getColor('body-bg'),
    borderColor: getColor('border-color'),
    textStyle: { color: getColor('light-text-emphasis') },
    borderWidth: 1,
    formatter: (params) => {
      const data = (params as any[])[0]
      return `
                      <div>
                        <h6 class="fs-9 text-body-tertiary mb-0">
                          <span class="fas fa-circle me-1" style='color:${data.color}'></span>
                          ${data.name} : ${data.value}
                        </h6>
                      </div>
                    `
    },
    transitionDuration: 0,
    axisPointer: { type: 'none' },
  },
  textStyle: { fontFamily: getComputedStyle(document.body).fontFamily },
  series: [
    {
      type: 'gauge',
      radius: '100%',
      startAngle: 90,
      endAngle: -270,
      pointer: { show: false },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: { borderWidth: 1, borderColor: getColor('border-color') },
      },
      axisLine: { lineStyle: { width: 30, color: [[1, getColor('light')]] } },
      splitLine: { show: false, distance: 0, length: 10 },
      axisTick: { show: false },
      axisLabel: { show: false, distance: 50 },
      data: [
        {
          value: 80,
          title: { offsetCenter: ['0%', '0%'] },
          detail: { offsetCenter: ['0%', '0%'] },
          itemStyle: { color: getColor('primary') },
        },
      ],
      title: { fontSize: 14 },
      detail: { width: 50, height: 14, fontSize: 28, color: 'auto', formatter: '{value}%' },
    },
  ],
})

// temperature gauge chart

let temperatureInstance: any = null

export function setTemperatureChartInstance(instance: any) {
  temperatureInstance = instance
}

let temperatureValue = +(Math.random() * 60).toFixed(2)

export const getTemperatureChart = (): EChartsOption => ({
    
  series: [
    {
      type: 'gauge',
      radius: '100%',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 60,
      splitNumber: 12,
      itemStyle: {
        color: getColor('danger'),
      },
      progress: { show: true, width: 30 },
      pointer: { show: false },
      axisLine: { lineStyle: { width: 30, color: [[1, getColor('light')]] } },
      axisTick: { distance: -45, splitNumber: 5, lineStyle: { width: 2, color: '#999' } },
      splitLine: { distance: -52, length: 14, lineStyle: { width: 3, color: '#999' } },
      axisLabel: { distance: -20, color: getColor('tertiary-color'), fontSize: 16 },
      anchor: { show: false },
      title: { show: false },
      detail: {
        valueAnimation: true,
        width: '60%',
        lineHeight: 40,
        borderRadius: 8,
        offsetCenter: [0, '-15%'],
        fontSize: 28,
        fontWeight: 'bolder',
        formatter: '{value} °C',
        color: 'inherit',
      },
      data: [{ value: temperatureValue }],
    },
    {
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 60,
      itemStyle: { color: '#FD7347' },
      progress: { show: true, width: 8 },
      pointer: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      detail: { show: false },
      data: [{ value: temperatureValue }],
    },
  ],

})

export function startTemperatureAnimation() {
  function run() {
    temperatureValue = +(Math.random() * 60).toFixed(2)
    if (temperatureInstance) {
      temperatureInstance.setOption({
        series: [{ data: [{ value: temperatureValue }] }, { data: [{ value: temperatureValue }] }],
      })
    }
  }

  setTimeout(run, 0)
  setInterval(run, 2000)
}

// ring gauge chart

export const getMultiRingGaugeChart = (): EChartsOption => ({
  series: [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      radius: '85%',
      pointer: { show: false },
      center: ['50%', '50%'],
      progress: { show: true, overlap: false, roundCap: true, clip: false, itemStyle: { color: getColor('info') } },
      axisLine: { lineStyle: { width: 8, color: [[1, getColor('light')]] } },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      data: [79],
      detail: { show: false },
      animationDuration: 2000,
    },
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      radius: '70%',
      pointer: { show: false },
      center: ['50%', '50%'],
      progress: { show: true, overlap: false, roundCap: true, clip: false, itemStyle: { color: getColor('primary') } },
      axisLine: { lineStyle: { width: 8, color: [[1, getColor('light')]] } },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      data: [85],
      detail: { show: false },
      animationDuration: 2000,
    },
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      radius: '55%',
      pointer: { show: false },
      center: ['50%', '50%'],
      progress: { show: true, overlap: false, roundCap: true, clip: false, itemStyle: { color: getColor('success') } },
      axisLine: { lineStyle: { width: 8, color: [[1, getColor('light')]] } },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      data: [70],
      detail: { show: false },
      animationDuration: 2000,
    },
  ],
  textStyle: { fontFamily: getComputedStyle(document.body).fontFamily },
})

// multi gauge chart

let gaugeInstance: any = null

export function setGaugeChartInstance(instance: any) {
  gaugeInstance = instance
}

export const gaugeData = [
  {
    value: 20,
    name: 'Good',
    title: { offsetCenter: ['-40%', '80%'] },
    detail: { offsetCenter: ['-40%', '95%'] },
  },
  {
    value: 40,
    name: 'Better',
    title: { offsetCenter: ['0%', '80%'] },
    detail: { offsetCenter: ['0%', '95%'] },
  },
  {
    value: 60,
    name: 'Perfect',
    title: { offsetCenter: ['40%', '80%'] },
    detail: { offsetCenter: ['40%', '95%'] },
  },
]

export const getMultiGaugeChart = (): EChartsOption => ({
  series: [
    {
      type: 'gauge',
      radius: '95%',
      anchor: {
        show: true,
        showAbove: true,
        size: 18,
        itemStyle: { color: '#FAC858' },
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 8,
        length: '70%',
        offsetCenter: [0, '8%'],
      },
      progress: {
        show: true,
        overlap: true,
        roundCap: true,
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          color: [[1, getColor('light')]],
        },
      },
      axisLabel: {
        color: getColor('tertiary-color'),
        fontSize: 12,
      },
      data: gaugeData,
      title: {
        fontSize: 14,
        color: getColor('body-color'),
      },
      detail: {
        width: 30,
        height: 14,
        fontSize: 12,
        color: '#fff',
        backgroundColor: 'inherit',
        borderRadius: 3,
        formatter: '{value}%',
      },
    },
  ],

})

export function startGaugeAnimation() {
  function run() {
    for (let i = 0; i < gaugeData.length; i++) {
      gaugeData[i]!.value = +(Math.random() * 100).toFixed(2)
    }
    if (gaugeInstance) {
      gaugeInstance.setOption({
        series: [{ data: gaugeData }],
      })
    }
  }

  setTimeout(run, 0)
  setInterval(run, 2000)
}
