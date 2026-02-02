import type { ApexOptions } from 'apexcharts'
import type { IconType } from 'react-icons'
import {
  TbActivity,
  TbArrowDownLeft,
  TbBrandFacebook,
  TbBroadcast,
  TbClock,
  TbEye,
  TbMailFast,
  TbRepeatOnce,
  TbRocket,
  TbSpeakerphone,
  TbTrendingUp,
  TbUser,
  TbUsers,
} from 'react-icons/tb'

import { getColor } from '@/helpers/color'

import auFlag from '@/assets/images/flags/au.svg'
import brFlag from '@/assets/images/flags/br.svg'
import caFlag from '@/assets/images/flags/ca.svg'
import deFlag from '@/assets/images/flags/de.svg'
import frFlag from '@/assets/images/flags/fr.svg'
import gbFlag from '@/assets/images/flags/gb.svg'
import inFlag from '@/assets/images/flags/in.svg'
import itFlag from '@/assets/images/flags/it.svg'
import jpFlag from '@/assets/images/flags/jp.svg'
import usFlag from '@/assets/images/flags/us.svg'
import user3Img from '@/assets/images/users/user-3.jpg'
import user4Img from '@/assets/images/users/user-4.jpg'
import user6Img from '@/assets/images/users/user-6.jpg'
import user7Img from '@/assets/images/users/user-7.jpg'

type CountryDataType = {
  rank: number
  code: string
  name: string
  flag: string
  visitors: number
  trend: {
    value: number
    type: 'success' | 'danger' | 'warning'
  }
}

export type ChatItemType = {
  id: number
  name: string
  avatar?: string
  avatarText?: string
  avatarColor?: string
  status?: 'active' | 'inactive'
  badge?: number
  time?: string
  message: string
}

export type CampaignDataType = {
  id: number
  name: string
  icon: IconType
  iconProps: {
    className: string
  }
  visitors: number
  newUsers: number
  sessions: number
  bounceRate: number
  pagesPerVisit: number
  avgDuration: string
  leads: number
  revenue: string
  conversion: number
}

export const campaignsData: CampaignDataType[] = [
  {
    id: 1,
    name: 'Spring Launch',
    icon: TbRocket,
    iconProps: { className: 'fs-lg me-1 text-primary' },
    visitors: 502,
    newUsers: 260,
    sessions: 6845,
    bounceRate: 18.22,
    pagesPerVisit: 3.15,
    avgDuration: '01:40',
    leads: 432,
    revenue: '$3.64M',
    conversion: 6.15,
  },
  {
    id: 2,
    name: 'Facebook Push',
    icon: TbBrandFacebook,
    iconProps: { className: 'fs-lg me-1 text-info' },
    visitors: 478,
    newUsers: 245,
    sessions: 6120,
    bounceRate: 21.03,
    pagesPerVisit: 2.87,
    avgDuration: '01:28',
    leads: 398,
    revenue: '$3.10M',
    conversion: 5.65,
  },
  {
    id: 3,
    name: 'Holiday Buzz',
    icon: TbSpeakerphone,
    iconProps: { className: 'fs-lg me-1 text-success' },
    visitors: 445,
    newUsers: 230,
    sessions: 5710,
    bounceRate: 23.12,
    pagesPerVisit: 2.45,
    avgDuration: '01:22',
    leads: 372,
    revenue: '$2.86M',
    conversion: 5.12,
  },
  {
    id: 4,
    name: 'Email Reconnect',
    icon: TbMailFast,
    iconProps: { className: 'fs-lg me-1 text-warning' },
    visitors: 392,
    newUsers: 190,
    sessions: 5210,
    bounceRate: 25.74,
    pagesPerVisit: 2.18,
    avgDuration: '01:50',
    leads: 340,
    revenue: '$2.45M',
    conversion: 4.88,
  },
  {
    id: 5,
    name: 'Display Retarget',
    icon: TbBroadcast,
    iconProps: { className: 'fs-lg me-1' },
    visitors: 338,
    newUsers: 160,
    sessions: 4670,
    bounceRate: 19.88,
    pagesPerVisit: 1.92,
    avgDuration: '02:05',
    leads: 298,
    revenue: '$1.95M',
    conversion: 4.62,
  },
]

export const chatItems: ChatItemType[] = [
  {
    id: 1,
    name: 'Lucas Miller',
    avatar: user3Img,
    status: 'active',
    badge: 5,
    message: 'active now',
  },
  {
    id: 2,
    name: 'Amelia Green',
    avatar: user4Img,
    time: '25min ago',
    message: 'See you soon!',
  },
  {
    id: 3,
    name: 'Sophia Turner',
    avatarText: 'S',
    avatarColor: 'info',
    badge: 1,
    message: 'Good Morning! 👋',
  },
  {
    id: 4,
    name: 'Noah Smith',
    avatar: user6Img,
    time: '1h ago',
    message: "Let's catch up later.",
  },
  {
    id: 5,
    name: 'Emma Johnson',
    avatar: user7Img,
    time: '3h ago',
    message: 'Sent you the files.',
  },
]

function generateRandomData(count: number, min: number, max: number) {
  return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min)
}

function generateSessionAndPageViewData(count: number) {
  const sessions = generateRandomData(count, 250, 450)
  const pageViews = sessions.map((session) => Math.floor(session * (2 + Math.random() * 0.1)))
  return { sessions, pageViews }
}

function generateRandomDeviceData(name: string, minY: number, maxY: number, count = 10) {
  const data = []
  for (let i = 1; i <= count; i++) {
    const y = Math.floor(Math.random() * (maxY - minY + 1)) + minY
    const z = Math.floor(Math.random() * (35 - 15 + 1)) + 15
    data.push({ x: i, y: y, z: z })
  }
  return { name, data }
}

const { sessions, pageViews } = generateSessionAndPageViewData(19)

export type AnalyticsCardProps = {
  value: number
  unit: string
  percentage: number
  isPositive: boolean
  title: string
  icon: IconType
  percentageIcon: IconType
}

export const analyticsCardsData: AnalyticsCardProps[] = [
  {
    value: 14.59,
    unit: 'M',
    percentage: 5.2,
    isPositive: true,
    title: 'Total Views',
    icon: TbEye,
    percentageIcon: TbTrendingUp,
  },
  {
    value: 815.58,
    unit: 'k',
    percentage: 3.9,
    isPositive: true,
    title: 'Sessions',
    icon: TbClock,
    percentageIcon: TbActivity,
  },
  {
    value: 41.3,
    unit: '%',
    percentage: 1.1,
    isPositive: false,
    title: 'Bounce Rate',
    icon: TbRepeatOnce,
    percentageIcon: TbArrowDownLeft,
  },
  {
    value: 56.39,
    unit: 'k',
    percentage: 2.3,
    isPositive: true,
    title: 'Active Users',
    icon: TbUser,
    percentageIcon: TbUsers,
  },
]

export const getAnalyticsOverViewOptions = (): ApexOptions => ({
  chart: {
    height: 326,
    type: 'area',
    toolbar: { show: false },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
    curve: 'smooth',
  },
  colors: [getColor('primary'), getColor('secondary')],
  series: [
    {
      name: 'Sessions',
      data: sessions,
    },
    {
      name: 'Page Views',
      data: pageViews,
    },
  ],
  legend: {
    offsetY: 5,
  },
  xaxis: {
    categories: [
      '',
      '8 AM',
      '9 AM',
      '10 AM',
      '11 AM',
      '12 PM',
      '1 PM',
      '2 PM',
      '3 PM',
      '4 PM',
      '5 PM',
      '6 PM',
      '7 PM',
      '8 PM',
      '9 PM',
      '10 PM',
      '11 PM',
      '12 AM',
      '',
    ],
    axisBorder: { show: false },
    axisTicks: { show: false },
    tickAmount: 6,
    labels: {
      style: {
        fontSize: '12px',
      },
    },
  },
  tooltip: {
    shared: true,
    y: {
      formatter: function (val, { seriesIndex }) {
        if (seriesIndex === 0) {
          return val + ' Sessions'
        } else if (seriesIndex === 1) {
          return val + ' Page Views'
        }
        return `${val}`
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.2,
      stops: [15, 120, 100],
    },
  },
  grid: {
    borderColor: getColor('border-color'),
    padding: {
      bottom: 5,
    },
  },
})

export const getSessionsDevicesOptions = (): ApexOptions => ({
  chart: {
    height: 208,
    type: 'bubble',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [generateRandomDeviceData('Desktop', 20, 150), generateRandomDeviceData('Mobile', 20, 120), generateRandomDeviceData('Tablet', 20, 60)],
  fill: {
    opacity: 0.8,
    gradient: {
      // @ts-expect-error its a valid property
      enabled: false,
    },
  },
  xaxis: {
    min: 0,
    max: 11,
    // @ts-expect-error its a valid property
    show: false,
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    min: 0,
    max: 170,
    show: false,
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  grid: {
    padding: {
      top: -20,
      right: 20,
      bottom: 0,
      left: 20,
    },
    borderColor: getColor('border-color'),
  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'center',
  },
})

export const getOrdersChartOptions = (): ApexOptions => ({
  series: [
    {
      type: 'column',
      data: [
        [0, 2],
        [1, 3],
        [2, 4],
        [3, 8],
        [4, 5],
        [5, 12],
        [6, 17],
        [7, 19],
        [8, 6],
        [9, 9],
        [10, 14],
        [11, 17],
        [12, 12],
        [13, 6],
        [14, 4],
      ],
    },
    {
      type: 'column',
      data: [
        [0, 9],
        [1, 7],
        [2, 4],
        [3, 8],
        [4, 4],
        [5, 12],
        [6, 4],
        [7, 6],
        [8, 5],
        [9, 10],
        [10, 4],
        [11, 5],
        [12, 10],
        [13, 2],
        [14, 6],
      ],
    },
  ],
  chart: {
    height: 60,
    width: 205,
    parentHeightOffset: 0,
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
    active: {
      filter: {
        type: 'none',
      },
    },
  },
  colors: ['#1ab394', '#e5e9f2'],
  plotOptions: {
    bar: {
      columnWidth: '60%',
    },
  },
  stroke: {
    curve: 'straight',
    lineCap: 'square',
  },
  tooltip: {
    enabled: false,
    onDatasetHover: {
      highlightDataSeries: false,
    },
    x: {
      show: false,
    },
  },
})

export const getPostsChartOptions = (): ApexOptions => ({
  chart: {
    type: 'area',
    height: 60,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 1.5,
  },
  fill: {
    opacity: 1,
    gradient: {
      shade: '#1ab394',
      type: 'horizontal',
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 0.1,
      opacityTo: 0.2,
      stops: [0, 80, 100],
      colorStops: [],
    },
  },
  series: [
    {
      data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6],
    },
  ],
  yaxis: {
    min: 0,
  },
  colors: ['#1ab394'],
  tooltip: {
    enabled: false,
  },
})

export const countriesData: CountryDataType[] = [
  {
    rank: 1,
    code: 'de',
    name: 'Germany',
    flag: deFlag,
    visitors: 10412,
    trend: { value: 1.5, type: 'success' },
  },
  {
    rank: 2,
    code: 'fr',
    name: 'France',
    flag: frFlag,
    visitors: 8934,
    trend: { value: 0.8, type: 'danger' },
  },
  {
    rank: 3,
    code: 'in',
    name: 'India',
    flag: inFlag,
    visitors: 14217,
    trend: { value: 3.2, type: 'success' },
  },
  {
    rank: 4,
    code: 'us',
    name: 'United States',
    flag: usFlag,
    visitors: 18522,
    trend: { value: 2.1, type: 'success' },
  },
  {
    rank: 5,
    code: 'gb',
    name: 'United Kingdom',
    flag: gbFlag,
    visitors: 7614,
    trend: { value: 1.2, type: 'danger' },
  },
  {
    rank: 6,
    code: 'ca',
    name: 'Canada',
    flag: caFlag,
    visitors: 6221,
    trend: { value: 0.9, type: 'success' },
  },
  {
    rank: 7,
    code: 'jp',
    name: 'Japan',
    flag: jpFlag,
    visitors: 5785,
    trend: { value: 0, type: 'warning' },
  },
  {
    rank: 8,
    code: 'au',
    name: 'Australia',
    flag: auFlag,
    visitors: 4918,
    trend: { value: 1.1, type: 'success' },
  },
  {
    rank: 9,
    code: 'br',
    name: 'Brazil',
    flag: brFlag,
    visitors: 3874,
    trend: { value: -0.5, type: 'danger' },
  },
  {
    rank: 10,
    code: 'it',
    name: 'Italy',
    flag: itFlag,
    visitors: 4105,
    trend: { value: 0.7, type: 'success' },
  },
]
