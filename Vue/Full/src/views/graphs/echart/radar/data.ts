import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { getColor } from '@/helpers/chart'

// basic radar chart

export const getBasicBasicRadarChart = (): EChartsOption => ({
  radar: {
    indicator: [
      { name: 'Sales', max: 6500, color: getColor('body-color') },
      { name: 'Administration', max: 16000, color: getColor('body-color') },
      { name: 'Information Technology', max: 30000, color: getColor('body-color') },
      { name: 'Customer Support', max: 38000, color: getColor('body-color') },
      { name: 'Development', max: 52000, color: getColor('body-color') },
      { name: 'Marketing', max: 25000, color: getColor('body-color') },
    ],
    splitArea: {
      show: true,
      areaStyle: {
        color: [
          getColor('light-rgb', 0.5),
          getColor('light-rgb', 0),
          getColor('light-rgb', 0.5),
          getColor('light-rgb', 0),
          getColor('light-rgb', 0.5),
        ],
      },
    },
    splitLine: {
      lineStyle: {
        color: Array(5).fill(getColor('border-color')),
        width: 1,
      },
    },
    axisLine: {
      lineStyle: {
        color: getColor('border-color'),
      },
    },
  },

  legend: {
    data: ['Allocated Budget', 'Actual Spending'],
    orient: 'vertical',
    left: 'left',
    textStyle: {
      color: getColor('tertiary-color'),
    },
  },
  textStyle: {
    fontFamily: getComputedStyle(document.body).fontFamily,
  },

  series: [
    {
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget',
          areaStyle: {
            color: getColor('primary-rgb', 0.5),
          },
          lineStyle: {
            color: getColor('primary-rgb', 0.5),
          },
          itemStyle: {
            color: getColor('primary'),
          },
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending',
          areaStyle: {
            color: getColor('secondary-rgb', 0.5),
          },
          lineStyle: {
            color: getColor('secondary-rgb', 0.5),
          },
          itemStyle: {
            color: getColor('secondary'),
          },
        },
      ],
    },
  ],
})

// Proportion of Browsers radar chart

export const getProportionofBrowsersChart = (): EChartsOption => ({
  tooltip: {
    trigger: 'item',
  },
  legend: {
    type: 'scroll',
    bottom: 0,
    textStyle: {
      color: getColor('tertiary-color'),
    },
    pageIconColor: getColor('tertiary-color'),
    pageTextStyle: {
      color: getColor('tertiary-color'),
    },
    data: (function () {
      const list = []
      for (let i = 1; i <= 28; i++) {
        list.push(i + 2000 + '')
      }
      return list
    })(),
  },
  textStyle: {
    fontFamily: getComputedStyle(document.body).fontFamily,
  },
  visualMap: {
    top: 'middle',
    right: 10,
    color: [getColor('danger'), getColor('warning')],
    calculable: true,
    textStyle: {
      color: getColor('tertiary-color'),
    },
  },
  radar: {
    indicator: [
      { name: 'IE8-', max: 400, color: getColor('body-color') },
      { name: 'IE9+', max: 400, color: getColor('body-color') },
      { name: 'Safari', max: 400, color: getColor('body-color') },
      { name: 'Firefox', max: 400, color: getColor('body-color') },
      { name: 'Chrome', max: 400, color: getColor('body-color') },
    ],
    splitArea: {
      show: true,
      areaStyle: {
        color: [
          getColor('light-rgb', 0.5),
          getColor('light-rgb', 0),
          getColor('light-rgb', 0.5),
          getColor('light-rgb', 0),
          getColor('light-rgb', 0.5),
        ],
      },
    },
    splitLine: {
      lineStyle: {
        color: Array(5).fill(getColor('border-color')),
        width: 1,
      },
    },
    axisLine: {
      lineStyle: {
        color: getColor('border-color'),
      },
    },
  },
  series: (function () {
    const series: EChartsOption['series'] = []
    for (let i = 1; i <= 28; i++) {
      series.push({
        type: 'radar' as const,
        symbol: 'none',
        lineStyle: {
          width: 1,
        },
        emphasis: {
          areaStyle: {
            color: 'rgba(0,250,0,0.3)',
          },
        },
        data: [
          {
            value: [(40 - i) * 10, (38 - i) * 4 + 60, i * 5 + 10, i * 9, (i * i) / 2],
            name: i + 2000 + '',
          },
        ],
      })
    }
    return series
  })(),
})

//Customized Radar Chart

export const getCustomizedRadarChart = (): EChartsOption => ({
  color: [getColor('warning'), getColor('danger'), getColor('secondary'), getColor('primary')],

  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle: {
      color: getColor('tertiary-color'),
    },
  },
  textStyle: {
    fontFamily: getComputedStyle(document.body).fontFamily,
  },
  radar: [
    {
      indicator: [{ text: 'Indicator1' }, { text: 'Indicator2' }, { text: 'Indicator3' }, { text: 'Indicator4' }, { text: 'Indicator5' }],
      center: ['25%', '50%'],
      radius: 120,
      startAngle: 90,
      splitNumber: 4,
      shape: 'circle',
      axisName: {
        formatter: '【{value}】',
        color: getColor('body-color'),
      },
      splitArea: {
        areaStyle: {
          color: [getColor('warning'), getColor('danger'), getColor('secondary'), getColor('primary')],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 5,
        },
      },
      axisLine: {
        lineStyle: {
          color: 'transparent',
          width: 5,
        },
      },
      splitLine: {
        lineStyle: {
          color: 'transparent',
          width: 5,
        },
      },
    },
    {
      indicator: [
        { text: 'Indicator1', max: 150 },
        { text: 'Indicator2', max: 150 },
        {
          text: 'Indicator3',
          max: 150,
        },
        { text: 'Indicator4', max: 120 },
        { text: 'Indicator5', max: 108 },
        { text: 'Indicator6', max: 72 },
      ],
      center: ['75%', '50%'],
      radius: 120,
      axisName: {
        color: getColor('body-color'),
      },
      splitArea: {
        areaStyle: {
          color: [getColor('light'), getColor('info'), getColor('purple'), getColor('warning')],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 5,
        },
      },
      axisLine: {
        lineStyle: {
          color: 'transparent',
          width: 5,
        },
      },
      splitLine: {
        lineStyle: {
          color: 'transparent',
          width: 5,
        },
      },
    },
  ],
  series: [
    {
      type: 'radar',
      emphasis: {
        lineStyle: {
          width: 4,
        },
      },
      data: [
        {
          value: [100, 8, 0.4, -80, 2000],
          name: 'Data A',
        },
        {
          value: [60, 5, 0.3, -100, 1500],
          name: 'Data B',
        },
      ],
    },
    {
      type: 'radar',
      radarIndex: 1,
      data: [
        {
          value: [120, 118, 130, 100, 99, 70],
          name: 'Data C',
          symbol: 'rect',
          symbolSize: 12,
          lineStyle: {
            type: 'dashed',
          },
          label: {
            show: true,
            formatter: function (params) {
              return String(params.value)
            },
          },
        },
        {
          value: [100, 93, 50, 90, 70, 60],
          name: 'Data D',
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: getColor('primary-rgb', 0.1),
                offset: 0,
              },
              {
                color: getColor('primary-rgb', 0.7),
                offset: 1,
              },
            ]),
          },
        },
      ],
    },
  ],
})

// multiple readar chart

export const getMultipleRadarChart = (): EChartsOption => ({
  tooltip: {
    trigger: 'axis',
  },
  textStyle: {
    fontFamily: getComputedStyle(document.body).fontFamily,
  },
  legend: {
    left: 'center',
    textStyle: {
      color: getColor('body-color'),
    },
    data: ['A Software', 'A Phone', 'Another Phone', 'Precipitation', 'Evaporation'],
  },
  grid: {
    right: 5,
    left: 5,
    top: 5,
    bottom: 5,
    containLabel: true,
  },
  radar: [
    {
      indicator: [
        { text: 'Brand', max: 100 },
        { text: 'Content', max: 100 },
        { text: 'Usability', max: 100 },
        { text: 'Function', max: 100 },
      ],
      center: ['25%', '60%'],
      radius: 80,
      axisName: {
        color: getColor('body-color'),
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: [
            getColor('light-rgb', 0.5),
            getColor('light-rgb', 0),
            getColor('light-rgb', 0.5),
            getColor('light-rgb', 0),
            getColor('light-rgb', 0.5),
          ],
        },
      },
      splitLine: {
        lineStyle: {
          color: Array(5).fill(getColor('border-color')),
          width: 1,
        },
      },
      axisLine: {
        lineStyle: {
          color: getColor('border-color'),
        },
      },
    },
    {
      indicator: [
        { text: 'Look', max: 100 },
        { text: 'Photo', max: 100 },
        { text: 'System', max: 100 },
        { text: 'Performance', max: 100 },
        { text: 'Screen', max: 100 },
      ],
      radius: 80,
      center: ['50%', '60%'],
      axisName: {
        color: getColor('body-color'),
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: [
            getColor('light-rgb', 0.5),
            getColor('light-rgb', 0),
            getColor('light-rgb', 0.5),
            getColor('light-rgb', 0),
            getColor('light-rgb', 0.5),
          ],
        },
      },
      splitLine: {
        lineStyle: {
          color: Array(5).fill(getColor('border-color')),
          width: 1,
        },
      },
      axisLine: {
        lineStyle: {
          color: getColor('border-color'),
        },
      },
    },
    {
      indicator: (() => {
        const res = []
        for (let i = 1; i <= 12; i++) {
          res.push({ text: i + '月', max: 100 })
        }
        return res
      })(),
      center: ['75%', '60%'],
      radius: 80,
      axisName: {
        color: getColor('body-color'),
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: [
            getColor('light-rgb', 0.5),
            getColor('light-rgb', 0),
            getColor('light-rgb', 0.5),
            getColor('light-rgb', 0),
            getColor('light-rgb', 0.5),
          ],
        },
      },
      splitLine: {
        lineStyle: {
          color: Array(5).fill(getColor('border-color')),
          width: 1,
        },
      },
      axisLine: {
        lineStyle: {
          color: getColor('border-color'),
        },
      },
    },
  ],
  series: [
    {
      type: 'radar',
      tooltip: {
        trigger: 'item',
      },
      areaStyle: {},
      data: [
        {
          value: [60, 73, 85, 40],
          name: 'A Software',
        },
      ],
    },
    {
      type: 'radar',
      radarIndex: 1,
      areaStyle: {},
      data: [
        {
          value: [85, 90, 90, 95, 95],
          name: 'A Phone',
        },
        {
          value: [95, 80, 95, 90, 93],
          name: 'Another Phone',
        },
      ],
    },
    {
      type: 'radar',
      radarIndex: 2,
      areaStyle: {},
      data: [
        {
          name: 'Precipitation',
          value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
        },
        {
          name: 'Evaporation',
          value: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3],
        },
      ],
    },
  ],
})
