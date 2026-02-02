import user1 from '@/assets/images/users/user-1.jpg'
import user10 from '@/assets/images/users/user-10.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'
import { format, startOfYear, subDays } from 'date-fns'

import type { IconType } from 'react-icons'
import {
  TbBrandFigma,
  TbBrush,
  TbChartBar,
  TbCodeDots,
  TbDeviceLaptop,
  TbPresentation,
  TbPuzzle,
  TbServer,
  TbShieldCheck,
  TbWorld,
} from 'react-icons/tb'

const randomDate = (start: Date, end: Date): Date => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

const today = new Date()
const sevenDaysAgo = subDays(today, 7)
const thirtyDaysAgo = subDays(today, 30)
const yearStart = startOfYear(today)

const projectDueDates = [
  ...Array(3)
    .fill(null)
    .map(() => randomDate(new Date(today.setHours(0, 0, 0, 0)), new Date())),
  ...Array(3)
    .fill(null)
    .map(() => randomDate(sevenDaysAgo, today)),
  ...Array(2)
    .fill(null)
    .map(() => randomDate(thirtyDaysAgo, sevenDaysAgo)),
  ...Array(2)
    .fill(null)
    .map(() => randomDate(yearStart, thirtyDaysAgo)),
]

export type ProjectType = {
  id: number
  icon: IconType
  title: string
  updatedTime: string
  task: {
    total: number
    completed: number
    new?: number
  }
  members: string[]
  progress: number
  attachments: number
  comments: number
  dueDate: string
  status: 'in-progress' | 'completed' | 'overdue' | 'in-review' | 'on-hold'
  variant: string
}

export const projects: ProjectType[] = [
  {
    id: 1,
    icon: TbCodeDots,
    title: 'AI Analytics Dashboard',
    updatedTime: '5 minutes ago',
    task: { total: 60, completed: 18, new: 4 },
    members: [user2, user3, user5, user1],
    progress: 65,
    attachments: 15,
    comments: 5,
    dueDate: format(projectDueDates[0], 'dd MMM, yyyy'),
    status: 'in-progress',
    variant: 'success',
  },
  {
    id: 2,
    icon: TbDeviceLaptop,
    title: 'E-commerce Platform',
    updatedTime: '12 minutes ago',
    task: { total: 40, completed: 10 },
    members: [user6, user8, user7],
    progress: 25,
    attachments: 8,
    comments: 3,
    dueDate: format(projectDueDates[1], 'dd MMM, yyyy'),
    status: 'in-review',
    variant: 'warning',
  },
  {
    id: 3,
    icon: TbBrush,
    title: 'UI Kit Design',
    updatedTime: '30 minutes ago',
    task: { total: 40, completed: 20 },
    members: [user4],
    progress: 50,
    attachments: 12,
    comments: 7,
    dueDate: format(projectDueDates[2], 'dd MMM, yyyy'),
    status: 'overdue',
    variant: 'danger',
  },
  {
    id: 4,
    icon: TbWorld,
    title: 'Website Redesign',
    updatedTime: '1 hour ago',
    task: { total: 30, completed: 15, new: 1 },
    members: [user2, user7, user9],
    progress: 50,
    attachments: 6,
    comments: 2,
    dueDate: format(projectDueDates[3], 'dd MMM, yyyy'),
    status: 'in-review',
    variant: 'info',
  },
  {
    id: 5,
    icon: TbChartBar,
    title: 'Marketing Report',
    updatedTime: '2 hours ago',
    task: { total: 40, completed: 40 },
    members: [user5, user10, user8, user2],
    progress: 100,
    attachments: 20,
    comments: 10,
    dueDate: format(projectDueDates[4], 'dd MMM, yyyy'),
    status: 'completed',
    variant: 'primary',
  },
  {
    id: 6,
    icon: TbPresentation,
    title: 'Sales Pitch Deck',
    updatedTime: '45 minutes ago',
    task: { total: 12, completed: 9, new: 1 },
    members: [user9, user10],
    progress: 75,
    attachments: 5,
    comments: 1,
    dueDate: format(projectDueDates[5], 'dd MMM, yyyy'),
    status: 'in-review',
    variant: 'info',
  },
  {
    id: 7,
    icon: TbBrandFigma,
    title: 'Mobile UI Mockups',
    updatedTime: 'yesterday',
    task: { total: 10, completed: 6, new: 3 },
    members: [user7, user4, user5, user1],
    progress: 60,
    attachments: 7,
    comments: 0,
    dueDate: format(projectDueDates[6], 'dd MMM, yyyy'),
    status: 'in-progress',
    variant: 'warning',
  },
  {
    id: 8,
    icon: TbServer,
    title: 'Server Maintenance',
    updatedTime: '3 days ago',
    task: { total: 3, completed: 3 },
    members: [user6, user5, user9, user10],
    progress: 100,
    attachments: 2,
    comments: 1,
    dueDate: format(projectDueDates[7], 'dd MMM, yyyy'),
    status: 'completed',
    variant: 'success',
  },
  {
    id: 9,
    icon: TbShieldCheck,
    title: 'Security Audit',
    updatedTime: 'last week',
    task: { total: 10, completed: 5, new: 1 },
    members: [user7, user9],
    progress: 50,
    attachments: 6,
    comments: 4,
    dueDate: format(projectDueDates[8], 'dd MMM, yyyy'),
    status: 'on-hold',
    variant: 'dark',
  },
  {
    id: 10,
    icon: TbPuzzle,
    title: 'Plugin Development',
    updatedTime: '4 days ago',
    task: { total: 6, completed: 2, new: 1 },
    members: [user3],
    progress: 33,
    attachments: 4,
    comments: 2,
    dueDate: format(projectDueDates[9], 'dd MMM, yyyy'),
    status: 'in-progress',
    variant: 'warning',
  },
]
