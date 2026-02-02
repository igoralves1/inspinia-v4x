import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type MemberRoleType = {
  id: number
  title: string
  description: string
  icon: IconType
  features: string[]
  users: StaticImageData[]
  updatedTime: string
}

export type UserType = {
  id: string
  name: string
  email: string
  avatar: StaticImageData
  role: string
  date: string
  time: string
  status: 'inactive' | 'active' | 'suspended'
  selected?: boolean
}
