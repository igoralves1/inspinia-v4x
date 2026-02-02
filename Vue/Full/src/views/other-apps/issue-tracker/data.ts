import type { BaseColorVariant } from 'bootstrap-vue-next'
import user1 from '@/assets/images/users/user-1.jpg'
import user10 from '@/assets/images/users/user-10.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'

export type IssueType = {
  id: number
  issueID: string
  status: 'in-progress' | 'open' | 'resolved' | 'review' | 'pending'
  description: string
  name: string
  image: string
  createdAt: string
  dueDate: string
  tags: string[]
  progress: number
  variant: keyof BaseColorVariant
  comments: number
  files: number
}

export const issues: IssueType[] = [
  {
    id: 1,
    issueID: 'ISSUE-104',
    status: 'in-progress',
    description: 'User profile update not saving on mobile devices',
    name: 'Jason Lee',
    image: user3,
    createdAt: '10.02.2025',
    dueDate: '15.02.2025',
    tags: ['Mobile', 'UI', 'Urgent'],
    progress: 60,
    variant: 'warning',
    comments: 12,
    files: 3,
  },
  {
    id: 2,
    issueID: 'ISSUE-105',
    status: 'open',
    description: 'Payment gateway fails to respond on checkout',
    name: 'Sophia Mendes',
    image: user4,
    createdAt: '08.02.2025',
    dueDate: '14.02.2025',
    tags: ['Payments', 'Critical'],
    progress: 25,
    variant: 'danger',
    comments: 8,
    files: 2,
  },
  {
    id: 3,
    issueID: 'ISSUE-106',
    status: 'resolved',
    description: 'Dark mode breaks UI on dashboard view',
    name: 'Mason Clark',
    image: user2,
    createdAt: '03.02.2025',
    dueDate: '07.02.2025',
    tags: ['UI', 'Enhancement'],
    progress: 100,
    variant: 'success',
    comments: 15,
    files: 1,
  },
  {
    id: 4,
    issueID: 'ISSUE-107',
    status: 'review',
    description: 'Push notifications are delayed by 5-10 minutes',
    name: 'Olivia Stone',
    image: user5,
    createdAt: '11.02.2025',
    dueDate: '17.02.2025',
    tags: ['Notification', 'Backend'],
    progress: 40,
    variant: 'info',
    comments: 5,
    files: 0,
  },
  {
    id: 5,
    issueID: 'ISSUE-108',
    status: 'pending',
    description: 'Contact page returns 404 after deployment',
    name: 'Daniel Reed',
    image: user1,
    createdAt: '09.02.2025',
    dueDate: '13.02.2025',
    tags: ['Deployment', 'Routing'],
    progress: 10,
    variant: 'secondary',
    comments: 2,
    files: 1,
  },
  {
    id: 6,
    issueID: 'ISSUE-109',
    status: 'in-progress',
    description: 'Export to PDF does not include chart section',
    name: 'Nathan White',
    image: user6,
    createdAt: '12.02.2025',
    dueDate: '18.02.2025',
    tags: ['Export', 'Charts'],
    progress: 50,
    variant: 'warning',
    comments: 6,
    files: 2,
  },
  {
    id: 7,
    issueID: 'ISSUE-110',
    status: 'open',
    description: 'Search bar does not return any results for valid keywords',
    name: 'Emma Watson',
    image: user9,
    createdAt: '13.02.2025',
    dueDate: '16.02.2025',
    tags: ['Search', 'Bug'],
    progress: 20,
    variant: 'danger',
    comments: 4,
    files: 0,
  },
  {
    id: 8,
    issueID: 'ISSUE-111',
    status: 'in-progress',
    description: 'Email verification link expires instantly after signup',
    name: 'Ava Johnson',
    image: user10,
    createdAt: '10.02.2025',
    dueDate: '20.02.2025',
    tags: ['Authentication', 'High Priority'],
    progress: 45,
    variant: 'warning',
    comments: 6,
    files: 1,
  },
  {
    id: 9,
    issueID: 'ISSUE-112',
    status: 'review',
    description: 'Footer links appear broken on Safari browser',
    name: 'Liam Gray',
    image: user8,
    createdAt: '12.02.2025',
    dueDate: '19.02.2025',
    tags: ['UI', 'Safari', 'Low'],
    progress: 30,
    variant: 'info',
    comments: 3,
    files: 0,
  },
  {
    id: 10,
    issueID: 'ISSUE-113',
    status: 'pending',
    description: 'Reports are showing times in UTC instead of local timezone',
    name: 'Noah Mitchell',
    image: user1,
    createdAt: '14.02.2025',
    dueDate: '22.02.2025',
    tags: ['Reports', 'Timezone'],
    progress: 15,
    variant: 'secondary',
    comments: 1,
    files: 1,
  },
]
