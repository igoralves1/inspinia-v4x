import type { VariantType } from '@/types'
import type { EChartsOption } from 'echarts'

export type StatisticCardType = {
  title: string
  badgeColor: string
  badgeText: string
  count: {
    value: number
    prefix?: string
    suffix?: string
  }
  metric: string
}

export type StatisticsWithChartType = {
  title: string
  badge: {
    text: string
    variant: VariantType
  }
  count: {
    value: number
    prefix?: string
    suffix?: string
  }
  description: string
  chartOptions: () => EChartsOption
  ChartType: 'line' | 'bar' | 'pie'
  chartHeight: string
  chartWidth: string
}

export type QuarterlyReport = {
  id: number
  quarter: string
  period: string
  revenue: string
  expense: string
  margin: string
}
