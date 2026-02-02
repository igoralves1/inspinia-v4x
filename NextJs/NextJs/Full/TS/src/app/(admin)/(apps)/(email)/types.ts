import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type ActionType = {
  icon: IconType
  label: string
}

export type EmailSidebarItemType = {
  label: string
  icon: IconType
  link: string
  badge?: {
    variant: string
    text: string
  }
}

export type EmailType = {
  id: number
  isStarred: boolean
  variant?: string
  avatar?: StaticImageData
  name: string
  subject: string
  snippet: string
  attachments: number
  date: string
  time: string
  isRead: boolean
}
