import type { ApexOptions } from "apexcharts"
import { getColor } from "@/helpers/chart"


export type SalesDataType = {
  date: string
  orders: number
  refunds: number
  averageRevenuePerOrder: string
  tax: string
  revenue: string
  balance: string
}

export const salesData: SalesDataType[] = [
  {
    date: '10 July, 2025',
    orders: 68,
    refunds: 4,
    averageRevenuePerOrder: '$18.60',
    tax: '$25.78',
    revenue: '$612.70',
    balance: '$6625.46',
  },
  {
    date: '09 July, 2025',
    orders: 85,
    refunds: 1,
    averageRevenuePerOrder: '$22.10',
    tax: '$31.85',
    revenue: '$786.35',
    balance: '$6012.76',
  },
  {
    date: '08 July, 2025',
    orders: 61,
    refunds: 3,
    averageRevenuePerOrder: '$17.40',
    tax: '$23.67',
    revenue: '$531.10',
    balance: '$5226.41',
  },
  {
    date: '07 July, 2025',
    orders: 79,
    refunds: 2,
    averageRevenuePerOrder: '$20.65',
    tax: '$29.45',
    revenue: '$726.80',
    balance: '$4695.31',
  },
  {
    date: '06 July, 2025',
    orders: 53,
    refunds: 6,
    averageRevenuePerOrder: '$15.10',
    tax: '$20.89',
    revenue: '$400.55',
    balance: '$3968.51',
  },
  {
    date: '05 July, 2025',
    orders: 91,
    refunds: 4,
    averageRevenuePerOrder: '$22.50',
    tax: '$32.90',
    revenue: '$851.30',
    balance: '$3567.96',
  },
  {
    date: '04 July, 2025',
    orders: 47,
    refunds: 5,
    averageRevenuePerOrder: '$16.25',
    tax: '$22.05',
    revenue: '$382.47',
    balance: '$2716.66',
  },
  {
    date: '03 July, 2025',
    orders: 82,
    refunds: 1,
    averageRevenuePerOrder: '$21.03',
    tax: '$31.11',
    revenue: '$792.65',
    balance: '$2334.19',
  },
  {
    date: '02 July, 2025',
    orders: 65,
    refunds: 3,
    averageRevenuePerOrder: '$17.92',
    tax: '$24.15',
    revenue: '$583.42',
    balance: '$1541.54',
  },
  {
    date: '01 July, 2025',
    orders: 73,
    refunds: 2,
    averageRevenuePerOrder: '$19.85',
    tax: '$27.34',
    revenue: '$660.12',
    balance: '$958.12',
  },
]

export const getSalesChartOptions = (): ApexOptions => {
  return {
    chart: {
      height: 400,
      type: 'line',
      stacked: false,
      toolbar: { show: false },
    },
    stroke: {
      width: [0, 0, 2, 2, 2],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
      },
    },
    colors: [getColor('primary'), getColor('danger'), getColor('secondary'), '#bbcae14d',getColor('primary'),],
    series: [
      {
        name: 'Orders',
        type: 'bar',
        data: [320, 402, 391, 334, 390, 330],
      },
      {
        name: 'Refunds',
        type: 'bar',
        data: [20, 30, 28, 22, 35, 25],
      },
      {
        name: 'Avg. Revenue/Order',
        type: 'line',
        data: [15.5, 16.2, 15.8, 16.0, 15.9, 16.3],
      },
      {
        name: 'Revenue',
        type: 'area',
        data: [4960, 6512, 6182, 5344, 6201, 5379],
      },
      {
        name: 'Tax',
        type: 'bar',
        data: [496, 651, 618, 534, 620, 537],
      },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yaxis: [
      {
        title: {
          text: 'Orders / Refunds / Avg Revenue',
          style: {
            fontSize: '11px',
            fontWeight: 600,
          },
        },
      },
      {
        opposite: true,
        title: {
          text: 'Revenue / Tax',
          style: {
            fontSize: '11px',
            fontWeight: 600,
          },
        },
      },
    ],
    legend: {
      show: false,
    },
  }
}
