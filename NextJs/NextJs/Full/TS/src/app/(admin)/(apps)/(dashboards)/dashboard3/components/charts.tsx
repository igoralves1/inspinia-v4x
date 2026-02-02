'use client'

import ApexChartClient from '@/components/client-wrapper/ApexChartClient'
import { getAnalyticsOverViewOptions, getOrdersChartOptions, getPostsChartOptions, getSessionsDevicesOptions } from '../data'

export const AnalyticsOverViewChart = () => {
  return <ApexChartClient getOptions={getAnalyticsOverViewOptions} series={getAnalyticsOverViewOptions().series} type="area" height={326} />
}

export const SessionsDevicesChart = () => {
  return <ApexChartClient getOptions={getSessionsDevicesOptions} series={getSessionsDevicesOptions().series} type="bubble" height={225} />
}

export const OrdersChart = () => {
  return <ApexChartClient getOptions={getOrdersChartOptions} series={getOrdersChartOptions().series} type="bar" height={60} />
}

export const PostsChart = () => {
  return <ApexChartClient getOptions={getPostsChartOptions} series={getPostsChartOptions().series} type="area" height={60} />
}
