export type FeedType = {
  image: string
  name: string
  action?: string
  email?: string
  time?: string
  badge?: string
  icon?: string
  variant?: string
  isRequest?: boolean
}

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

export type BlogType = {
  category: string
  image: string
  title: string
  description: string
  tags: string[]
  date: string
  comments: number
  views: number
  author: {
    name: string
    image: string
  }
  link: string
}

export type TaskType = {
  title: string
  dueDays: number
  status: 'in-progress' | 'completed' | 'on-hold' | 'out-dated'
  assignBy: {
    name: string
    image: string
    email: string
  }
  startDate: string
  priority: 'high' | 'low' | 'medium'
  progress: number
  totalTime: string
}
