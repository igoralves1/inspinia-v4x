'use client'

import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
import { getSalesChartOptions } from '../data'

const SalesChart = () => {
  return <ApexChartClient getOptions={getSalesChartOptions} series={getSalesChartOptions().series} type="line" height={400} />
}
export default SalesChart
