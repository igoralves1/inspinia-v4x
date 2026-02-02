import { LineChart, PieChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import CustomEChart from '@/components/CustomEChart.tsx'

import { getPieEchartOptions, getProgressChartOptions, getRevenueChartOptions } from '../data'

export const DonutChart = () => {
  return <CustomEChart extensions={[PieChart, TooltipComponent, CanvasRenderer]} getOptions={getPieEchartOptions} style={{ height: 30, width: 30 }} />
}

export const RevenueChart = () => {
  return <CustomEChart extensions={[LineChart, TooltipComponent, CanvasRenderer]} getOptions={getRevenueChartOptions} style={{ height: 252 }} />
}

export const ProjectProgressChart = () => {
  return <CustomEChart extensions={[PieChart, TooltipComponent, CanvasRenderer]} getOptions={getProgressChartOptions} style={{ height: 278 }} />
}
