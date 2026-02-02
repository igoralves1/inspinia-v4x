import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type TeamMemberType = {
  avatar: StaticImageData
  name: string
  role: string
  url: string
}

export type FileType = {
  icon: IconType
  name: string
  size: number
}

export type CommentType = {
  name: string
  avatar: StaticImageData
  date: string
  time: string
  message: string
  reply?: CommentType[]
}

export type TaskType = {
  id: number
  title: string
  name: string
  avatar: StaticImageData
  time: string
  tasks: {
    total: number
    completed: number
  }
  comments: number
  status: 'completed' | 'delayed' | 'pending' | 'in-progress' | 'review' | 'planned'
}

export type ActivityType = {
  name: string
  avatar: StaticImageData
  action: string
  datetime: string
  timeAgo: string
  extra?: {
    type: 'button' | 'message'
    label?: string
    icon?: string
    url?: string
    message?: string
  }
}
