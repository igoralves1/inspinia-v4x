import type { KanbanSectionType, KanbanTaskType } from '@/types/kanban'

import user1 from '@/assets/images/users/user-1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'

import kanbanImg1 from '@/assets/images/kanban/img-1.png'
import kanbanImg2 from '@/assets/images/kanban/img-2.png'
import kanbanImg3 from '@/assets/images/kanban/img-3.png'
import kanbanImg4 from '@/assets/images/kanban/img-4.png'

export const kanbanSectionsData: KanbanSectionType[] = [
  {
    id: '501',
    title: 'To Do',
  },
  {
    id: '502',
    title: 'In Progress',
  },
  {
    id: '503',
    title: 'In Review',
  },
  {
    id: '504',
    title: 'Done',
  },
]

export const KanbanTaskData: KanbanTaskType[] = [
  {
    id: '601',
    sectionId: '501',
    category: { name: 'Design', variant: 'success' },
    title: 'AI Analytics Dashboard',
    users: [user2, user3, user5, user1],
    date: '25 May, 2025',
    status: 'todo',
    progress: 65,
  },
  {
    id: '602',
    sectionId: '501',
    category: { name: 'Development', variant: 'warning' },
    title: 'Marketing Landing Page Redesign',
    users: [user6, user4, user8],
    date: '10 Jun, 2025',
    image: kanbanImg1,
    status: 'todo',
  },
  {
    id: '603',
    sectionId: '501',
    category: { name: 'UI/UX', variant: 'info' },
    title: 'E-Commerce Website Redesign',
    users: [user4, user6, user7, user8],
    date: '28 May, 2025',
    status: 'todo',
  },
  {
    id: '604',
    sectionId: '501',
    category: { name: 'App Development', variant: 'warning' },
    title: 'Mobile App Redesign',
    users: [user1, user2, user3],
    date: '30 May, 2025',
    status: 'todo',
    progress: 80,
  },
  {
    id: '605',
    sectionId: '501',
    category: { name: 'Marketing', variant: 'purple' },
    title: 'CRM System Upgrade',
    users: [user4],
    date: '30 May, 2025',
    image: kanbanImg2,
    status: 'todo',
    progress: 45,
  },
  {
    id: '606',
    sectionId: '502',
    category: { name: 'Testing', variant: 'info' },
    title: 'E-commerce Website QA Testing',
    users: [user3, user7, user9],
    date: '18 Jun, 2025',
    status: 'in-progress',
  },
  {
    id: '607',
    sectionId: '502',
    category: { name: 'UI/UX', variant: 'info' },
    title: 'Mobile App Redesign',
    users: [user5, user2, user3, user9],
    date: '10 Jun, 2025',
    status: 'in-progress',
  },
  {
    id: '608',
    sectionId: '502',
    category: { name: 'UI/UX Design', variant: 'success' },
    title: 'Website User Experience Overhaul',
    users: [user4, user5, user6],
    date: '15 June, 2025',
    status: 'in-progress',
    progress: 55,
  },
  {
    id: '609',
    sectionId: '502',
    category: { name: 'Marketing', variant: 'danger' },
    title: 'Customer Engagement Platform Development',
    users: [user5, user6],
    date: '10 June, 2025',
    status: 'in-progress',
  },

  {
    id: '610',
    sectionId: '503',
    category: { name: 'Design', variant: 'success' },
    title: 'AI Analytics Dashboard',
    users: [user2, user3, user5, user1],
    date: '25 May, 2025',
    image: kanbanImg3,
    status: 'in-review',
    progress: 65,
  },
  {
    id: '611',
    sectionId: '503',
    category: { name: 'Development', variant: 'warning' },
    title: 'Marketing Landing Page Redesign',
    users: [user6, user4, user8],
    date: '10 Jun, 2025',
    status: 'in-review',
  },
  {
    id: '612',
    sectionId: '503',
    category: { name: 'UI/UX', variant: 'info' },
    title: 'E-Commerce Website Redesign',
    users: [user4, user6, user7, user8],
    date: '28 May, 2025',
    status: 'in-review',
  },

  {
    id: '613',
    sectionId: '504',
    category: { name: 'Testing', variant: 'info' },
    title: 'E-commerce Website QA Testing',
    users: [user3, user7, user9],
    date: '18 Jun, 2025',
    status: 'done',
  },
  {
    id: '614',
    sectionId: '504',
    category: { name: 'UI/UX', variant: 'info' },
    title: 'Mobile App Redesign',
    users: [user5, user2, user3, user9],
    date: '10 Jun, 2025',
    image: kanbanImg4,
    status: 'done',
  },
]
