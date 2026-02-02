import CustomApexChart from '@/components/CustomApexChart.tsx'
import { getAnalyticsOverViewOptions, getOrdersChartOptions, getPostsChartOptions, getSessionsDevicesOptions } from '../data'

export const AnalyticsOverViewChart = () => {
  return <CustomApexChart getOptions={getAnalyticsOverViewOptions} series={getAnalyticsOverViewOptions().series} type="area" height={326} />
}

export const SessionsDevicesChart = () => {
  return <CustomApexChart getOptions={getSessionsDevicesOptions} series={getSessionsDevicesOptions().series} type="bubble" height={208} />
}

export const OrdersChart = () => {
  return <CustomApexChart getOptions={getOrdersChartOptions} series={getOrdersChartOptions().series} type="bar" height={60} />
}

export const PostsChart = () => {
  return <CustomApexChart getOptions={getPostsChartOptions} series={getPostsChartOptions().series} type="area" height={60} />
}
