'use client'
import { LineChart, PieChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import dynamic from 'next/dynamic'

import { getPieEchartOptions, getProgressChartOptions, getRevenueChartOptions } from '../data'

const EChartClient = dynamic(() => import('@/components/client-wrapper/EChartClient'), { ssr: false })

export const DonutChart = () => {
  return <EChartClient extensions={[PieChart, TooltipComponent, CanvasRenderer]} getOptions={getPieEchartOptions} style={{ height: 30, width: 30 }} />
}

export const RevenueChart = () => {
  return <EChartClient extensions={[LineChart, TooltipComponent, CanvasRenderer]} getOptions={getRevenueChartOptions} style={{ height: 252 }} />
}

export const ProjectProgressChart = () => {
  return <EChartClient extensions={[PieChart, TooltipComponent, CanvasRenderer]} getOptions={getProgressChartOptions} style={{ height: 278 }} />
}
