import { LineChart, PieChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

import { useId } from 'react'
import { useIsClient } from 'usehooks-ts'

import CustomEChart from '@/components/CustomEChart.tsx'
import BaseVectorMap from '@/components/maps/BaseVectorMap.tsx'

import { getEchartOptions, getOrdersStatsOptions, getWorldMapOptions } from '../data'

export const DonutChart = () => {
  return <CustomEChart extensions={[PieChart, TooltipComponent, CanvasRenderer]} getOptions={getEchartOptions} style={{ height: 60, width: 60 }} />
}

export const OrdersChart = () => {
  return <CustomEChart extensions={[LineChart, TooltipComponent, CanvasRenderer]} getOptions={getOrdersStatsOptions} style={{ height: 405 }} />
}

export const WorldMap = () => {
  const id = useId()
  const isClient = useIsClient()
  return isClient && <BaseVectorMap id={id} options={getWorldMapOptions()} style={{ height: 297 }} />
}
