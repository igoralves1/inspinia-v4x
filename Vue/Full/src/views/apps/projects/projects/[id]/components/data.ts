
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
import type { ActivityType, CommentType, FileType, TaskType, TeamMemberType } from './types'

export const teamMembers: TeamMemberType[] = [
  {
    avatar: user3,
    name: 'Ava Brooks',
    role: 'UI/UX Designer',
    url: '/pages/profile',
  },
  {
    avatar: user4,
    name: 'Liam Carter',
    role: 'Frontend Developer',
    url: '/pages/profile',
  },
  {
    avatar: user5,
    name: 'Sophia Lee',
    role: 'Project Manager',
    url: '/pages/profile',
  },
  {
    avatar: user6,
    name: 'Noah Kim',
    role: 'Backend Developer',
    url: '/pages/profile',
  },
  {
    avatar: user7,
    name: 'Emma Watson',
    role: 'QA Engineer',
    url: '/pages/profile',
  },
  {
    avatar: user8,
    name: 'James Nolan',
    role: 'DevOps Engineer',
    url: '/pages/profile',
  },
  {
    avatar: user9,
    name: 'Olivia Reed',
    role: 'Product Owner',
    url: '/pages/profile',
  },
  {
    avatar: user10,
    name: 'Daniel Craig',
    role: 'Data Scientist',
    url: '/pages/profile',
  },
]

export const files: FileType[] = [
  {
    icon: 'tabler:file-text',
    name: 'Project-Brief.pdf',
    size: 210000,
  },
  {
    icon: 'tabler:file-music',
    name: 'Team-Intro.mp3',
    size: 5600000,
  },
  {
    icon: 'tabler:file-zip',
    name: 'UI-Kit.zip',
    size: 4200000,
  },
  {
    icon: 'tabler:file-type-png',
    name: 'Brand-Logo.png',
    size: 120000,
  },
  {
    icon: 'tabler:video',
    name: 'Promo-Video.mp4',
    size: 7800000,
  },
  {
    icon: 'tabler:file-code',
    name: 'dashboard-config.json',
    size: 52400,
  },
]

export const comments: CommentType[] = [
  {
    name: 'Liam Carter',
    avatar: user8,
    date: '15 Apr 2025',
    time: '09:20AM',
    message: 'Customers are reporting that the checkout page freezes after submitting their payment information.',
    reply: [
      {
        name: 'Nina Bryant',
        avatar: user10,
        date: '15 Apr 2025',
        time: '11:47AM',
        message:
          'That might be caused by the third-party payment gateway. I recommend testing in incognito mode and checking for any JS errors in the console.',
      },
      {
        name: 'Sophie Allen',
        avatar: user3,
        date: '16 Apr 2025',
        time: '10:15AM',
        message: "We’ve noticed this issue before when the CDN cache hasn't been cleared properly. Try purging the cache and reloading the page.",
      },
    ],
  },
  {
    name: 'Daniel West',
    avatar: user6,
    date: '14 Apr 2025',
    time: '04:15PM',
    message: 'You can also clear the browser cache or try a different browser. We had a similar issue with Chrome extensions interfering before.',
  },
  {
    name: 'Nina Bryant',
    avatar: user10,
    date: '16 Apr 2025',
    time: '08:04AM',
    message: "The System Status Page has been updated. We're actively monitoring and will release a patch within 24 hours.",
    reply: [
      {
        name: 'Daniel West',
        avatar: user6,
        date: '16 Apr 2025',
        time: '08:30AM',
        message: "Thanks for the update! We'll notify the customers and let them know the issue is being resolved.",
      },
    ],
  },
]

export const tasks: TaskType[] = [
  {
    id: 1,
    title: 'Finalize monthly performance report',
    name: 'Liam James',
    avatar: user2,
    time: 'Yesterday',
    tasks: { completed: 7, total: 7 },
    comments: 12,
    status: 'completed',
  },
  {
    id: 2,
    title: 'Design wireframes for new onboarding flow',
    name: 'Sophia Lee',
    avatar: user4,
    time: 'Tomorrow',
    tasks: { completed: 2, total: 5 },
    comments: 7,
    status: 'delayed',
  },
  {
    id: 3,
    title: 'Update customer segmentation dashboard',
    name: 'Noah Carter',
    avatar: user5,
    time: 'Friday',
    tasks: { completed: 0, total: 4 },
    comments: 3,
    status: 'pending',
  },
  {
    id: 4,
    title: 'Conduct competitor analysis report',
    name: 'Emily Davis',
    avatar: user6,
    time: 'Next Week',
    tasks: { completed: 1, total: 6 },
    comments: 5,
    status: 'in-progress',
  },
  {
    id: 5,
    title: 'Implement API for mobile integration',
    name: 'Lucas White',
    avatar: user7,
    time: 'Today',
    tasks: { completed: 6, total: 6 },
    comments: 10,
    status: 'review',
  },
  {
    id: 6,
    title: 'QA testing for billing module',
    name: 'Olivia Martin',
    avatar: user8,
    time: 'Monday',
    tasks: { completed: 4, total: 8 },
    comments: 14,
    status: 'in-progress',
  },
  {
    id: 7,
    title: 'Schedule product roadmap presentation',
    name: 'Ethan Moore',
    avatar: user9,
    time: 'Next Month',
    tasks: { completed: 0, total: 1 },
    comments: 0,
    status: 'planned',
  },
]

export const activities: ActivityType[] = [
  {
    avatar: user1,
    name: 'Daniel Martinez',
    action: 'uploaded a revised contract file.',
    datetime: 'Today 10:15 am - 24 Apr, 2025',
    timeAgo: '5m ago',
  },
  {
    avatar: user2,
    name: 'Nina Patel',
    action: 'commented on your design update.',
    datetime: 'Today 8:00 am - 24 Apr, 2025',
    timeAgo: '2h ago',
  },
  {
    avatar: user3,
    name: 'Jason Lee',
    action: 'completed the feedback review.',
    datetime: 'Yesterday 6:10 pm - 23 Apr, 2025',
    timeAgo: '16h ago',
  },
  {
    avatar: user4,
    name: 'Emma Davis',
    action: 'shared a link in the marketing group chat.',
    datetime: 'Yesterday 3:25 pm - 23 Apr, 2025',
    timeAgo: '19h ago',
    extra: {
      type: 'button',
      label: 'View',
      icon: 'tablerLink',
      url: '',
    },
  },
  {
    avatar: user5,
    name: 'Leo Zhang',
    action: 'sent you a private message.',
    datetime: '2 days ago 11:45 am - 22 Apr, 2025',
    timeAgo: '30h ago',
    extra: {
      type: 'message',
      message: 'Let’s sync up on the product roadmap tomorrow afternoon, does 2 PM work for you?',
    },
  },
]
