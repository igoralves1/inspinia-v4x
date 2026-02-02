import type { VariantType } from '@/types'

import type { IconType } from 'react-icons'

type CountType = {
  value: number
  prefix?: string
  suffix?: string
}

export type Widget1Type = {
  title: string
  icon: IconType
  description: string
  variant: VariantType
  count: CountType
  totalCount: string
}

export type Widget2Type = {
  title: string
  variant?: VariantType
  count: CountType
  percentage: number
  percentageIcon: IconType
  isPositive: boolean
}

export type CountryDataType = {
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

export type CommentType = {
  name: string
  avatar: string
  date: string
  time: string
  message: string
  views: number
  likes: number
  comments: number
  reply?: CommentType[]
}

export type FileItemType = {
  name: string
  icon: IconType
  size: number
  users: string[]
}

export type Widget3Type = {
  title: string
  description: string
  label: string
  icon: IconType
  count: CountType
  variant: string
  totalCount: string
}

export type Widget4Type = {
  title: string
  description: string
  icon: IconType
  label: string
  variant: VariantType
  count: CountType
}

export type Widget5Type = {
  title: string
  icon: IconType
  variant: VariantType
  count: CountType
}

export type Widget6Type = {
  title: string
  progress: number
  description: string
  status: string
}

export type Widget7Type = {
  title: string
  icon: IconType
  variant: VariantType
  count: CountType
}

export type ChatMessageType = {
  message: string
  time: string
  fromUser: boolean
  avatar: string
}
