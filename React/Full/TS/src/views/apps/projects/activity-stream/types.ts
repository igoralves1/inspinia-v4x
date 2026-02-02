import type { IconType } from 'react-icons'

export type BasicActivityType = {
  status: string
  variant: string
  time: string
  name: string
  avatar: string
  action: string
}

export type ExpandedActivityType = {
  icon: IconType
  title: string
  label: string
  variant: string
  time: string
  description: string
  avatar: string
  name: string
  profileUrl: string
}
