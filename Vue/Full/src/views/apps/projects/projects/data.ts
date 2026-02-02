import type { BaseColorVariant } from 'bootstrap-vue-next'
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


export type ProjectType = {
    id: string
    title: string
    icon: string
    variant: keyof BaseColorVariant 
    updatedTime: string
    task: {
        total: number
        completed: number
        new?: number
    }
    files: number
    comments: number
    date: string
    members: string[]
    status: 'in-progress' | 'pending-review' | 'delayed'
    progress: number
}

export const projects: ProjectType[] = [
    {
        id: 'proj-1',
        title: 'AI Analytics Dashboard',
        icon: 'tabler:code-dots',
        variant: 'success',
        updatedTime: '5 minutes ago',
        task: { total: 60, completed: 18, new: 4 },
        files: 15,
        comments: 5,
        date: '10 Jun, 2025',
        members: [user2, user3, user5, user1],
        status: 'in-progress',
        progress: 65,
    },
    {
        id: 'proj-2',
        title: 'Marketing Automation Platform',
        icon: 'tabler:speakerphone',
        variant: 'danger',
        updatedTime: '2 hours ago',
        task: { total: 80, completed: 25 },
        files: 22,
        comments: 12,
        date: '25 May, 2025',
        members: [user4, user6, user7, user8],
        status: 'delayed',
        progress: 45,
    },
    {
        id: 'proj-3',
        title: 'Website Redesign',
        icon: 'tabler:world-www',
        variant: 'info',
        updatedTime: '1 day ago',
        task: { total: 90, completed: 35 },
        files: 19,
        comments: 8,
        date: '15 May, 2025',
        members: [user9, user3, user5, user1],
        status: 'pending-review',
        progress: 40,
    },
    {
        id: 'proj-4',
        title: 'Sales Insight Tool',
        icon: 'tabler:chart-bar',
        variant: 'secondary',
        updatedTime: '3 days ago',
        task: { total: 50, completed: 12, new: 2 },
        files: 10,
        comments: 3,
        date: '20 May, 2025',
        members: [user2, user4, user5, user7],
        status: 'in-progress',
        progress: 30,
    },
    {
        id: 'proj-5',
        title: 'Cyber Security System',
        icon: 'tabler:bulb',
        variant: 'warning',
        updatedTime: '4 hours ago',
        task: { total: 100, completed: 45 },
        files: 35,
        comments: 14,
        date: '5 Jul, 2025',
        members: [user1, user4, user5, user8],
        status: 'in-progress',
        progress: 70,
    },
    {
        id: 'proj-6',
        title: 'AI Performance Dashboard',
        icon: 'tabler:device-desktop-analytics',
        variant: 'primary',
        updatedTime: '2 days ago',
        task: { total: 40, completed: 28, new: 4 },
        files: 18,
        comments: 9,
        date: '15 Jun, 2025',
        members: [user6, user7, user2, user3],
        status: 'pending-review',
        progress: 65,
    },
    {
        id: 'proj-7',
        title: 'Cloud Sync Platform',
        icon: 'tabler:cloud-code',
        variant: 'info',
        updatedTime: '10 mins ago',
        task: { total: 30, completed: 12 },
        files: 8,
        comments: 3,
        date: '28 April, 2025',
        members: [user9, user10, user2],
        status: 'in-progress',
        progress: 40,
    },
    {
        id: 'proj-8',
        title: 'Data Mining Toolkit',
        icon: 'tabler:database-search',
        variant: 'danger',
        updatedTime: '30 mins ago',
        task: { total: 25, completed: 7, new: 2 },
        files: 12,
        comments: 5,
        date: '10 May, 2025',
        members: [user4, user6, user9],
        status: 'delayed',
        progress: 28,
    },
]
