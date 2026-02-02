import ComponentCard from '@/components/cards/ComponentCard'
import CustomEChart from '@/components/CustomEChart.tsx'
import { getColor } from '@/helpers/color'
import type { EChartsOption } from 'echarts'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { useEffect, useState } from 'react'

type DataPoint = [string, number]

const oneDay = 24 * 3600 * 1000

function createInitialData(count = 1000, start = new Date(2023, 9, 3), base = 1000): DataPoint[] {
  let now = start
  let value = base
  const d: DataPoint[] = []

  for (let i = 0; i < count; i++) {
    now = new Date(+now + oneDay)
    value = value + Math.random() * 21 - 10
    d.push([[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'), Math.round(value)])
  }

  return d
}

const DynamicAreaChart = () => {
  const [data, setData] = useState<DataPoint[]>(() => createInitialData(1000))

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const lastPoint = prev[prev.length - 1]
        const lastDate = new Date(lastPoint[0])
        let value = lastPoint[1]

        const newPoints: DataPoint[] = []
        for (let i = 0; i < 5; i++) {
          const newDate = new Date(+lastDate + oneDay * (i + 1))
          value = value + Math.random() * 21 - 10
          newPoints.push([[newDate.getFullYear(), newDate.getMonth() + 1, newDate.getDate()].join('/'), Math.round(value)])
        }

        return [...prev.slice(5), ...newPoints]
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const getDynamicAreaChart = (): EChartsOption => ({
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
        data,
        areaStyle: { opacity: 0.2 },
        lineStyle: { width: 3 },
      },
    ],
  })

  return (
    <ComponentCard title="Dynamic Area">
      <CustomEChart extensions={[LineChart, CanvasRenderer]} getOptions={getDynamicAreaChart} style={{ height: '300px' }} />
    </ComponentCard>
  )
}

export default DynamicAreaChart
