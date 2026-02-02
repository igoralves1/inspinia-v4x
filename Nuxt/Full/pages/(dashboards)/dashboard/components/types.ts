export type StatCard = {
  id: number
  title: string
  value: number | string
  suffix?: string
  prefix?: string
  badgeText: string
  badgeVariant: 'primary' | 'secondary' | 'light'
  icon: string
  iconBg?: string
  pointColor: string
  description: string
  total: string
}

export type QuarterlyReport = {
  id: number
  quarter: string
  period: string
  revenue: string
  expense: string
  margin: string
}

export type ProjectStat = {
  id: number
  title: string
  count: string
  percentage: number
  variant: 'secondary' | 'info' | 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark'
  showPercentage: boolean
}

export type TimelineEvent = {
  id: number
  icon: string
  iconColor: string
  title: string
  time: string
  description: string
  tag: string
  tagVariant: string
  userName: string
  userImage: any
  userLink: string
  hasDivider: boolean
}

export type DiscussionMessage = {
  id: number
  userName: string
  userImage?: any
  userInitials?: string
  userInitialsColor?: string
  timeAgo: string
  message: string
  hasAvatar: boolean
}

export type ActivityItem = {
  id: number
  text: string
  time: string
  badgeVariant: 'primary' | 'info' | 'secondary' | 'light' | 'warning' | 'danger' | 'success' | 'dark'
  badgeText?: 'dark' | 'light'
}
