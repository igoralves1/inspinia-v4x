import type { IconType } from 'react-icons'

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

import { TbBrandFigma, TbCode, TbDatabase, TbFileTypePdf, TbFolder, TbMusic, TbPackage, TbVideo } from 'react-icons/tb'

export type FileRecordType = {
  id: string
  name: string
  icon: IconType
  size: number
  type: string
  modified: string
  avatar: string
  email: string
  sharedWith: {
    avatar: string
    email?: string
    name?: string
  }[]
  isFavorite: boolean
  selected?: boolean
}

export const fileRecords: FileRecordType[] = [
  {
    id: '1',
    name: 'Project Overview Video',
    icon: TbVideo,
    size: 120000000,
    type: 'MP4',
    modified: '2025-04-02',
    avatar: user3,
    email: 'john@techgroup.com',
    sharedWith: [{ avatar: user5 }, { avatar: user7 }, { avatar: user6 }, { avatar: user4 }],
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Team Meeting Video',
    icon: TbVideo,
    size: 200000000,
    type: 'MP4',
    modified: '2025-04-15',
    avatar: user4,
    email: 'michael@devteam.com',
    sharedWith: [{ avatar: user2 }, { avatar: user3 }, { avatar: user5 }],
    isFavorite: false,
  },
  {
    id: '3',
    name: 'Marketing Strategy Design',
    icon: TbBrandFigma,
    size: 150000000,
    type: 'Figma',
    modified: '2025-04-20',
    avatar: user2,
    email: 'susan@marketing.com',
    sharedWith: [{ avatar: user1 }, { avatar: user3 }, { avatar: user6 }, { avatar: user9 }],
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Client Proposal PDF',
    icon: TbFileTypePdf,
    size: 45000000,
    type: 'PDF',
    modified: '2025-05-05',
    avatar: user8,
    email: 'mark@clientservices.com',
    sharedWith: [{ avatar: user2 }, { avatar: user4 }, { avatar: user7 }],
    isFavorite: false,
  },
  {
    id: '5',
    name: 'Database Schema',
    icon: TbDatabase,
    size: 30000000,
    type: 'MySQL',
    modified: '2025-04-01',
    avatar: user2,
    email: 'alex@creatix.io',
    sharedWith: [{ avatar: user4 }, { avatar: user8 }],
    isFavorite: false,
  },
  {
    id: '6',
    name: 'Website Script',
    icon: TbCode,
    size: 15000000,
    type: 'JS',
    modified: '2025-04-02',
    avatar: user3,
    email: 'john@techgroup.com',
    sharedWith: [{ avatar: user5 }, { avatar: user7 }, { avatar: user6 }, { avatar: user4 }],
    isFavorite: false,
  },
  {
    id: '7',
    name: 'Dependency Package',
    icon: TbPackage,
    size: 5000000,
    type: 'DEP',
    modified: '2025-04-15',
    avatar: user4,
    email: 'michael@devteam.com',
    sharedWith: [{ avatar: user2 }, { avatar: user3 }, { avatar: user5 }],
    isFavorite: false,
  },
  {
    id: '8',
    name: 'Internet Portal',
    icon: TbFolder,
    size: 87000000,
    type: 'Folder',
    modified: '2025-03-10',
    avatar: user6,
    email: 'emma@devcore.com',
    sharedWith: [{ avatar: user7 }, { avatar: user9 }, { avatar: user10 }, { avatar: user3 }, { avatar: user8 }],
    isFavorite: false,
  },
  {
    id: '9',
    name: 'Podcast Episode 12',
    icon: TbMusic,
    size: 55000000,
    type: 'Audio',
    modified: '2025-04-01',
    avatar: user2,
    email: 'alex@creatix.io',
    sharedWith: [{ avatar: user4 }, { avatar: user8 }],
    isFavorite: false,
  },
]
