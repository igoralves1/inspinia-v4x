import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type BasicActivityType = {
  status: string
  variant: string
  time: string
  name: string
  avatar: StaticImageData
  action: string
}

export type ExpandedActivityType = {
  icon: IconType
  title: string
  label: string
  variant: string
  time: string
  description: string
  avatar: StaticImageData
  name: string
  profileUrl: string
}
