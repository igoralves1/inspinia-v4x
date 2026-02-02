
import type { BlogType, FeedType, StatCard, TaskType } from './types'
import blog3 from '@/assets/images/blog/blog-3.jpg'
import blog4 from '@/assets/images/blog/blog-4.jpg'
import blog5 from '@/assets/images/blog/blog-5.jpg'

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


export const socialFeed: FeedType[] = [
  {
    image: user3,
    name: 'Ava Brooks',
    email: 'ava@pixelsuite.io',
    icon: 'tabler:message',
    variant: 'btn-primary',
  },
  {
    image: user4,
    name: 'Leo Martin',
    email: 'leo@designbyte.com',
    badge: 'New Request',
    icon: 'tabler:check',
    variant: 'primary',
    isRequest: true,
  },
  {
    image: user5,
    name: 'Sophie Moore',
    action: 'Liked your post',
    time: '2m ago',
  },
  {
    image: user6,
    name: 'Liam Johnson',
    action: 'Commented on your photo',
    icon: 'tabler:eye',
    variant: 'secondary',
  },
  {
    image: user7,
    name: 'Mia Collins',
    action: 'Invited you to join "Design Ninjas"',
    icon: 'tabler:user-plus',
    variant: 'primary',
  },
  {
    image: user8,
    name: 'Ethan Green',
    action: 'Mentioned you in a comment',
    icon: 'tabler:bell',
    variant: 'info',
  },
  {
    image: user9,
    name: 'Emma King',
    action: 'Tagged you in a photo',
    icon: 'tabler:camera',
    variant: 'secondary',
  },
  {
    image: user10,
    name: 'Jack Wilson',
    action: 'Started following you',
    icon: 'tabler:user-check',
    variant: 'primary',
  },
  {
    image: user1,
    name: 'Isabella Lee',
    action: 'Reacted to your story',
    time: '15m ago',
  },
  {
    image: user2,
    name: 'Benjamin Gray',
    action: 'Shared your post',
    icon: 'tabler:share',
    variant: 'success',
  },
]

export const statCards: StatCard[] = [
  {
    id: 1,
    title: 'My Tasks',
    value: 124,
    badgeText: '+3 New',
    badgeVariant: 'primary',
    icon: 'tabler:checklist',
    pointColor: 'primary',
    description: 'Total Tasks',
    total: '12,450',
  },
  {
    id: 2,
    title: 'Messages',
    value: 69.5,
    suffix: 'k',
    badgeText: '+5 New',
    badgeVariant: 'secondary',
    icon: 'tabler:message-circle',
    pointColor: 'secondary',
    description: 'Total Messages',
    total: '32.1M',
  },
  {
    id: 4,
    title: 'Clients',
    value: 184,
    badgeText: '+4 New',
    badgeVariant: 'secondary',
    icon: 'tabler:users',
    pointColor: 'secondary',
    description: 'Total Clients',
    total: '9,835',
  },
  {
    id: 5,
    title: 'Revenue',
    value: 125.5,
    prefix: '$',
    suffix: 'k',
    badgeText: '+1.5%',
    badgeVariant: 'primary',
    icon: 'tabler:credit-card',
    pointColor: 'primary',
    description: 'Total Revenue',
    total: '$12.5M',
  },
]

export const blogs: BlogType[] = [
  {
    category: 'Technology',
    image: blog4,
    title: 'The Future of Artificial Intelligence',
    description: 'Discover how AI is transforming industries and what the future holds for this cutting-edge technology.',
    tags: ['AI', 'Technology', 'Innovation'],
    date: 'Jan 12, 2025',
    comments: 89,
    views: 1284,
    author: {
      name: 'Michael Turner',
      image: user4,
    },
    link: '',
  },
  {
    category: 'Data Science',
    image: blog5,
    title: 'Top Data Science Trends in 2025',
    description: 'Get ahead in the data science field with the latest trends, technologies, and tools that are reshaping the industry.',
    tags: ['Data Science', 'Trends', '2025'],
    date: 'Jan 12, 2025',
    comments: 89,
    views: 1284,
    author: {
      name: 'Olivia Brown',
      image: user1,
    },
    link: '',
  },
  {
    category: 'Business',
    image: blog3,
    title: '5 Key Tips for New Entrepreneurs',
    description: 'Start your entrepreneurial journey with these 5 essential tips that will guide you through the first year of business.',
    tags: ['Business', 'Entrepreneur', 'Startup'],
    date: 'Jan 12, 2025',
    comments: 89,
    views: 1284,
    author: {
      name: 'David Clark',
      image: user7,
    },
    link: '',
  },
]

export const tasks: TaskType[] = [
  {
    title: 'Admin Dashboard Template - Final Touch',
    dueDays: 2,
    status: 'in-progress',
    assignBy: {
      name: 'Liam Johnson',
      image: user3,
      email: 'liam@pixelcraft.io',
    },
    startDate: 'Apr 15, 2025',
    priority: 'high',
    progress: 70,
    totalTime: '8h 45min',
  },
  {
    title: 'Tailwind UI Kit Design',
    dueDays: 10,
    status: 'completed',
    assignBy: {
      name: 'Ava Reynolds',
      image: user5,
      email: 'ava@designwave.co',
    },
    startDate: 'Mar 29, 2025',
    priority: 'low',
    progress: 100,
    totalTime: '34h 10min',
  },
  {
    title: 'React + Next.js Starter Template',
    dueDays: 5,
    status: 'in-progress',
    assignBy: {
      name: 'Noah Carter',
      image: user2,
      email: 'noah@devspark.com',
    },
    startDate: 'Apr 12, 2025',
    priority: 'medium',
    progress: 45,
    totalTime: '14h 25min',
  },
  {
    title: 'Laravel Template Docs Update',
    dueDays: 4,
    status: 'on-hold',
    assignBy: {
      name: 'Sophia Bennett',
      image: user1,
      email: 'sophia@codepress.io',
    },
    startDate: 'Apr 10, 2025',
    priority: 'low',
    progress: 30,
    totalTime: '6h 50min',
  },
  {
    title: 'Portfolio Website Redesign',
    dueDays: 12,
    status: 'out-dated',
    assignBy: {
      name: 'Mason Clark',
      image: user6,
      email: 'mason@webgenius.dev',
    },
    startDate: 'Apr 01, 2025',
    priority: 'high',
    progress: 10,
    totalTime: '11h 30min',
  },
]
