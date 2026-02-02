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

import type { IconType } from 'react-icons'
import {
  TbActivity,
  TbAward,
  TbBrush,
  TbCalculator,
  TbChartArcs,
  TbChartBar,
  TbCode,
  TbCurrencyBitcoin,
  TbCurrencyEuro,
  TbLayoutKanban,
  TbPhoto,
  TbSettings,
  TbShieldCheck,
  TbSpeakerphone,
  TbTrendingUp,
  TbWallet,
} from 'react-icons/tb'

export type TeamType = {
  id: number
  name: string
  members: string[]
  description: string
  stats: {
    icon: IconType
    name: string
    count?: {
      value: number | string
      prefix?: string
      suffix?: string
    }
  }[]
  progress: number
  progressTitle: string
  lastUpdatedTime: string
  isNew?: boolean
}

export const teams: TeamType[] = [
  {
    id: 1,
    name: 'Design Team',
    members: [user7, user8, user9, user10],
    description:
      'The Design Team focuses on creating intuitive user experiences and visually appealing interfaces. We handle UI/UX design, prototyping, and brand consistency across all digital products.',
    stats: [
      { icon: TbLayoutKanban, name: 'Projects', count: { value: 25 } },
      { icon: TbAward, name: 'Ranking', count: { value: 5, prefix: '#' } },
      { icon: TbWallet, name: 'Budgets', count: { value: 20.3, prefix: '$', suffix: 'M' } },
    ],
    progress: 65,
    lastUpdatedTime: '1 hour ago',
    isNew: true,
    progressTitle: 'Status of current project',
  },
  {
    id: 2,
    name: 'Development Team',
    members: [user1, user2, user3, user4, user5, user6],
    description:
      'The Development Team builds and maintains core product features, ensuring robust performance, scalability, and code quality across all platforms. We specialize in full-stack development and agile delivery.',
    stats: [
      { icon: TbCode, name: 'Projects', count: { value: 42 } },
      { icon: TbChartBar, name: 'Ranking', count: { value: 2, prefix: '#' } },
      { icon: TbWallet, name: 'Budgets', count: { value: 32.7, prefix: '$', suffix: 'M' } },
    ],
    progress: 78,
    lastUpdatedTime: '30 mins ago',
    progressTitle: 'Status of current project',
  },
  {
    id: 3,
    name: 'Administrator Team',
    members: [user10, user9, user8],
    description:
      'The Administrator Team manages system settings, user roles, permissions, and ensures data security and compliance across platforms.',
    stats: [
      { icon: TbSettings, name: 'Tasks', count: { value: 18 } },
      { icon: TbActivity, name: 'Ranking', count: { value: 6, prefix: '#' } },
      { icon: TbShieldCheck, name: 'Access', count: { value: 'Full' } },
    ],
    progress: 53,
    lastUpdatedTime: '45 mins ago',
    progressTitle: 'Status of current ops',
  },
  {
    id: 4,
    name: 'Finance Team',
    members: [user2, user10, user8, user3, user1],
    description:
      'The Finance Team handles budgeting, forecasts, and financial analysis. We ensure transparency and strategic alignment with business goals.',
    stats: [
      { icon: TbCalculator, name: 'Reports', count: { value: 30 } },
      { icon: TbTrendingUp, name: 'Ranking', count: { value: 3, prefix: '#' } },
      { icon: TbCurrencyEuro, name: 'Budgets', count: { value: 28.9, prefix: '$', suffix: 'M' } },
    ],
    progress: 72,
    lastUpdatedTime: '20 mins ago',
    progressTitle: 'Q2 Audit Progress',
  },
  {
    id: 5,
    name: 'Marketing Team',
    members: [user9, user3, user5, user7, user10, user1, user2],
    description:
      'The Marketing Team manages branding, campaigns, and audience engagement. We drive growth through creative storytelling and data-driven strategies.',
    stats: [
      { icon: TbSpeakerphone, name: 'Campaigns', count: { value: 18 } },
      { icon: TbChartArcs, name: 'Reach', count: { value: 1.2, suffix: 'M' } },
      { icon: TbCurrencyBitcoin, name: 'Budgets', count: { value: 12.4, prefix: '$', suffix: 'M' } },
    ],
    progress: 60,
    lastUpdatedTime: '45 mins ago',
    progressTitle: 'Campaign Completion',
  },
  {
    id: 6,
    name: 'Graphic Team',
    members: [user9, user1, user10, user7, user6],
    description:
      'The Graphic Team brings visual concepts to life. We handle illustrations, digital assets, brand collateral, and motion graphics to support product and marketing teams.',
    stats: [
      { icon: TbBrush, name: 'Designs', count: { value: 36 } },
      { icon: TbPhoto, name: 'Assets', count: { value: 89 } },
      { icon: TbCurrencyEuro, name: 'Budgets', count: { value: 8.1, prefix: '$', suffix: 'M' } },
    ],
    progress: 82,
    lastUpdatedTime: '10 mins ago',
    progressTitle: 'Current Load',
  },
]
