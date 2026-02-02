import type { EChartsOption } from "echarts"
import type { ActivityItem, DiscussionMessage, ProjectStat, QuarterlyReport, StatCard, TimelineEvent } from "./types"
import { generateRandomEChartData } from "@/helpers/generators"
import { getColor } from "@/helpers/chart"

import user1 from '@/assets/images/users/user-1.jpg'
import user10 from '@/assets/images/users/user-10.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'

export const statCards: StatCard[] = [
  {
    id: 1,
    title: 'My Tasks',
    value: 124,
    badgeText: '+3 New',
    badgeVariant: 'primary',
    icon: 'tabler:checklist',
    pointColor: 'primary',
    description: 'Total Tasks',
    total: '12,450',
  },
  {
    id: 2,
    title: 'Messages',
    value: 69.5,
    suffix: 'k',
    badgeText: '+5 New',
    badgeVariant: 'secondary',
    icon: 'tabler:message-circle',
    pointColor: 'secondary',
    description: 'Total Messages',
    total: '32.1M',
  },
  {
    id: 3,
    title: 'Approvals',
    value: 32,
    badgeText: '+2 New',
    badgeVariant: 'light',
    icon: 'tabler:file-check',
    pointColor: 'primary',
    description: 'Total Approvals',
    total: '1,024',
  },
  {
    id: 4,
    title: 'Clients',
    value: 184,
    badgeText: '+4 New',
    badgeVariant: 'secondary',
    icon: 'tabler:users',
    pointColor: 'secondary',
    description: 'Total Clients',
    total: '9,835',
  },
  {
    id: 5,
    title: 'Revenue',
    value: 125.5,
    prefix: '$',
    suffix: 'k',
    badgeText: '+1.5%',
    badgeVariant: 'primary',
    icon: 'tabler:credit-card',
    pointColor: 'primary',
    description: 'Total Revenue',
    total: '$12.5M',
  },
]

export const quarterlyReports: QuarterlyReport[] = [
  {
    id: 1,
    quarter: 'Quarter 1',
    period: 'January - March 2024',
    revenue: '$210k',
    expense: '$165k',
    margin: '$45k',
  },
  {
    id: 2,
    quarter: 'Quarter 2',
    period: 'April - June 2024',
    revenue: '$225k',
    expense: '$175k',
    margin: '$50k',
  },
  {
    id: 3,
    quarter: 'Quarter 3',
    period: 'July - September 2024',
    revenue: '$240k',
    expense: '$190k',
    margin: '$50k',
  },
  {
    id: 4,
    quarter: 'Quarter 4',
    period: 'October - December 2024',
    revenue: '$260k',
    expense: '$210k',
    margin: '$50k',
  },
]

export const projectStats: ProjectStat[] = [
  {
    id: 1,
    title: 'Completed Projects',
    count: '+ 180',
    percentage: 54.2,
    variant: 'secondary',
    showPercentage: true,
  },
  {
    id: 2,
    title: 'Ongoing Projects',
    count: '+ 120',
    percentage: 36.15,
    variant: 'info',
    showPercentage: true,
  },
  {
    id: 3,
    title: 'Pending Approvals',
    count: '+ 32',
    percentage: 9.65,
    variant: 'secondary',
    showPercentage: true,
  },
]

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    icon: 'tabler:rocket',
    iconColor: 'primary',
    title: 'New Feature Released',
    time: 'Today at 3:45 PM',
    description: 'Launched the real-time chat feature across all user accounts.',
    tag: 'Deploy',
    tagVariant: 'info',
    userName: 'Natalie Brooks',
    userImage: user1,
    userLink: '/pages/profile',
    hasDivider: true,
  },
  {
    id: 2,
    icon: 'tabler:calendar-event',
    iconColor: 'warning',
    title: 'Team Sync-Up',
    time: 'Today at 2:00 PM',
    description: 'Reviewed sprint progress and discussed remaining tasks with the dev team.',
    tag: 'Meeting',
    tagVariant: 'secondary',
    userName: 'Oliver Grant',
    userImage:user6,
    userLink: '/pages/profile',
    hasDivider: true,
  },
  {
    id: 3,
    icon: 'tabler:palette',
    iconColor: 'success',
    title: 'UI Design Review',
    time: 'Today at 1:15 PM',
    description: 'Updated component spacing and colors for improved accessibility.',
    tag: 'Design',
    tagVariant: 'success',
    userName: 'Clara Jensen',
    userImage:user9,
    userLink: '/pages/profile',
    hasDivider: true,
  },
  {
    id: 4,
    icon: 'tabler:database',
    iconColor: 'danger',
    title: 'Database Optimization',
    time: 'Today at 12:30 PM',
    description: 'Improved DB query performance, reducing load time by 35%.',
    tag: 'Backend',
    tagVariant: 'danger',
    userName: 'Leo Armstrong',
    userImage: user10,
    userLink: '/pages/profile',
    hasDivider: true,
  },
  {
    id: 5,
    icon: 'tabler:shield-check',
    iconColor: 'info',
    title: 'Security Audit Completed',
    time: 'Today at 11:00 AM',
    description: 'Completed internal security audit with no critical issues found.',
    tag: 'Audit',
    tagVariant: 'warning',
    userName: 'Liam Carter',
    userImage: user8,
    userLink: '/pages/profile',
    hasDivider: true,
  },
  {
    id: 6,
    icon: 'tabler:user-plus',
    iconColor: 'success',
    title: 'New Team Member Joined',
    time: 'Today at 10:15 AM',
    description: 'Michael Lee has joined the development team as a Frontend Engineer.',
    tag: 'Onboarding',
    tagVariant: 'primary',
    userName: 'Emma Davis',
    userImage:user7,
    userLink: '/pages/profile',
    hasDivider: false,
  },
]

export const discussionMessages: DiscussionMessage[] = [
  {
    id: 1,
    userName: 'Alex Johnson',
    userImage: user8,
    timeAgo: '10m ago',
    message: 'Excited to share our latest project update with everyone!',
    hasAvatar: true,
  },
  {
    id: 2,
    userName: 'Den Nowdya',
    userInitials: 'DN',
    userInitialsColor: 'purple',
    timeAgo: '1h ago',
    message: 'Looking forward to the upcoming team meeting.',
    hasAvatar: false,
  },
  {
    id: 3,
    userName: 'Michael Brown',
    userImage: user10,
    timeAgo: '16h ago',
    message: "Great insights shared in today's brainstorming session!",
    hasAvatar: true,
  },
  {
    id: 4,
    userName: 'Emily Watson',
    userImage:user1,
    timeAgo: '20h ago',
    message: 'Wrapping up an amazing design concept for the client.',
    hasAvatar: true,
  },
  {
    id: 5,
    userName: 'Monica Smith',
    userImage:user6,
    timeAgo: '2 days ago',
    message: 'Testing some new UI enhancements—excited for feedback!',
    hasAvatar: true,
  },
]

export const activityItems: ActivityItem[] = [
  {
    id: 1,
    text: 'Reviewed project proposal',
    time: '09:30 AM',
    badgeVariant: 'primary',
  },
  {
    id: 2,
    text: 'Team stand-up meeting',
    time: '11:00 AM',
    badgeVariant: 'info',
  },
  {
    id: 3,
    text: 'Sent client invoice',
    time: '01:15 PM',
    badgeVariant: 'secondary',
  },
  {
    id: 4,
    text: 'Responded to support tickets',
    time: '03:40 PM',
    badgeVariant: 'light',
    badgeText: 'dark',
  },
  {
    id: 5,
    text: 'Finalized design mockups',
    time: '05:10 PM',
    badgeVariant: 'warning',
    badgeText: 'light',
  },
]

export const getPieEchartOptions = (): EChartsOption => {
  const charityData = generateRandomEChartData(['Charity A', 'Charity B', 'Charity C'])
  return {
    tooltip: { show: false },
    series: [
      {
        type: 'pie',
        radius: ['60%', '100%'],
        // @ts-expect-error hoverAnimation is a valid property
        hoverAnimation: false,
        label: { show: false },
        labelLine: { show: false },
        data: charityData.map((item, index) => ({
          value: item.value,
          itemStyle: {
            color: index === 0 ? getColor('primary') : index === 1 ? getColor('secondary') : '#bbcae14d',
          },
        })),
      },
    ],
  }
}

export const getRevenueChartOptions = (): EChartsOption => {
  const xLabels = Array.from({ length: 15 }, (_, i) => `Day ${i + 1}`)

  return {
    textStyle: { fontFamily: getComputedStyle(document.body).fontFamily },
    tooltip: {
      trigger: 'axis',
      padding: [5, 0],
      backgroundColor: getColor('secondary-bg'),
      borderColor: getColor('border-color'),
      textStyle: { color: getColor('light-text-emphasis') },
      borderWidth: 1,
      transitionDuration: 0.125,
      axisPointer: { type: 'none' },
      shadowBlur: 2,
      shadowColor: 'rgba(76, 76, 92, 0.15)',
      shadowOffsetX: 0,
      shadowOffsetY: 1,
    },
    xAxis: {
      type: 'category',
      data: xLabels,
      boundaryGap: false,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: getColor('secondary-color'), margin: 15 },
      splitLine: { show: false },
    },
    yAxis: {
      max: 1800,
      type: 'value',
      splitLine: { lineStyle: { color: '#676b891f', type: 'dashed' } },
      boundaryGap: [0, '100%'],
      axisLabel: {
        show: true,
        color: getColor('secondary-color'),
        margin: 15,
        formatter: function (value:any) {
          return '$' + value
        },
      },
      axisTick: { show: false },
      axisLine: { show: false },
    },
    series: [
      {
        name: 'Total Revenue',
        type: 'line',
        smooth: true,
        symbolSize: 2,
        itemStyle: {
          color: getColor('primary'),
          borderColor: getColor('primary'),
          borderWidth: 2,
        },
        areaStyle: {
          opacity: 0.2,
          color: getColor('primary'),
        },
        lineStyle: {
          color: getColor('primary'),
        },
        symbol: 'circle',
        stack: 'data',
        data: [45, 88, 120, 160, 210, 240, 350, 420, 380, 500, 640, 710, 890, 1150, 1200],
      },
      {
        name: 'Orders',
        type: 'line',
        smooth: true,
        symbolSize: 2,
        itemStyle: {
          color: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 2,
        },
        areaStyle: {
          opacity: 0.2,
          color: getColor('secondary'),
        },
        lineStyle: {
          color: getColor('secondary'),
        },
        symbol: 'circle',
        stack: 'data',
        data: [15, 30, 35, 50, 55, 75, 95, 120, 135, 160, 180, 210, 250, 390, 450],
      },
    ],
    grid: {
      right: 20,
      left: 5,
      bottom: 5,
      top: 8,
      containLabel: true,
    },
  }
}

export const getProgressChartOptions = (): EChartsOption => {
  return {
    tooltip: {
      trigger: 'item',
      padding: [8, 15],
      backgroundColor: getColor('secondary-bg'),
      borderColor: getColor('border-color'),
      textStyle: { color: getColor('light-text-emphasis') },
      borderWidth: 1,
      transitionDuration: 0.125,
      axisPointer: { type: 'none' },
      shadowBlur: 2,
      shadowColor: 'rgba(76, 76, 92, 0.15)',
      shadowOffsetX: 0,
      shadowOffsetY: 1,
    },
    textStyle: {
      fontFamily: getComputedStyle(document.body).fontFamily,
    },
    series: [
      {
        name: 'Project Progress',
        type: 'pie',
        radius: [60, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        label: {
          color: getColor('secondary-color'),
        },
        data: [
          { value: 85, name: 'Website Redesign', itemStyle: { color: getColor('primary') } },
          {
            value: 70,
            name: 'Mobile App',
            itemStyle: { color: getColor('secondary') },
          },
          { value: 55, name: 'CRM Integration', itemStyle: { color: getColor('info') } },
          {
            value: 60,
            name: 'Product Launch',
            itemStyle: { color: getColor('success') },
          },
          { value: 75, name: 'Backend Refactor', itemStyle: { color: getColor('light') } },
          {
            value: 50,
            name: 'Client Dashboard',
            itemStyle: { color: getColor('warning') },
          },
        ],
      },
    ],
  }
}
