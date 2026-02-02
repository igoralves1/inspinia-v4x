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

import auFlag from '@/assets/images/flags/au.svg'
import brFlag from '@/assets/images/flags/br.svg'
import caFlag from '@/assets/images/flags/ca.svg'
import deFlag from '@/assets/images/flags/de.svg'
import frFlag from '@/assets/images/flags/fr.svg'
import gbFlag from '@/assets/images/flags/gb.svg'
import inFlag from '@/assets/images/flags/in.svg'
import itFlag from '@/assets/images/flags/it.svg'
import jpFlag from '@/assets/images/flags/jp.svg'
import usFlag from '@/assets/images/flags/us.svg'
import type {
  CommentType,
  CountryDataType,
  FileItemType,
  Widget1Type,
  Widget2Type,
  Widget3Type,
  Widget4Type,
  Widget5Type,
  Widget6Type,
  Widget7Type,
} from './types'

export const widget1Data: Widget1Type[] = [
  {
    title: 'Orders',
    icon: 'tabler:shopping-cart',
    description: 'Total Orders',
    variant: 'success',
    count: { value: 1250 },
    totalCount: '15,320',
  },
  {
    title: 'Revenue',
    icon: 'tabler:currency-dollar',
    description: 'Total Revenue',
    variant: 'warning',
    count: { value: 98.7, prefix: '$', suffix: 'k' },
    totalCount: '$1.2M',
  },
  {
    title: 'Ratings',
    icon: 'tabler-star',
    description: 'Average Rating',
    variant: 'info',
    count: { value: 4.8 },
    totalCount: '5k Reviews',
  },
  {
    title: 'Products',
    icon: 'tabler:box',
    description: 'Total Products',
    variant: 'secondary',
    count: { value: 350 },
    totalCount: '750 Variants',
  },
]

export const widget2Data: Widget2Type[] = [
  {
    title: 'Total sales in period',
    variant: 'primary',
    count: { value: 24500, prefix: '$' },
    percentage: 18.45,
    percentageIcon: 'tabler:arrow-up',
    isPositive: true,
  },
  {
    title: 'Number of customers',
    count: { value: 1240 },
    percentage: 10.35,
    percentageIcon: 'tabler:arrow-down',
    isPositive: false,
  },
  {
    title: 'Average order value',
    count: { value: 65.49, prefix: '$', suffix: ' USD' },
    percentage: 5.92,
    percentageIcon: 'tabler:arrow-up',
    isPositive: true,
  },
  {
    title: 'Products sold in the period',
    variant: 'secondary',
    count: { value: 3750 },
    percentage: 22.61,
    percentageIcon: 'tabler:bolt',
    isPositive: true,
  },
  {
    title: 'Total sales in period',
    variant: 'warning',
    count: { value: 24500, prefix: '$' },
    percentage: 18.45,
    percentageIcon: 'tabler:arrow-up',
    isPositive: true,
  },
  {
    title: 'Number of customers',
    count: { value: 1240 },
    percentage: 10.35,
    percentageIcon: 'tabler:arrow-down',
    isPositive: false,
  },
]

export const countriesData: CountryDataType[] = [
  {
    rank: 1,
    code: 'de',
    name: 'Germany',
    flag: deFlag,
    visitors: 10412,
    trend: { value: 1.5, type: 'success' },
  },
  {
    rank: 2,
    code: 'fr',
    name: 'France',
    flag: frFlag,
    visitors: 8934,
    trend: { value: -0.8, type: 'danger' },
  },
  {
    rank: 3,
    code: 'in',
    name: 'India',
    flag: inFlag,
    visitors: 14217,
    trend: { value: 3.2, type: 'success' },
  },
  {
    rank: 4,
    code: 'us',
    name: 'United States',
    flag: usFlag,
    visitors: 18522,
    trend: { value: 2.1, type: 'success' },
  },
  {
    rank: 5,
    code: 'gb',
    name: 'United Kingdom',
    flag: gbFlag,
    visitors: 7614,
    trend: { value: -1.2, type: 'danger' },
  },
  {
    rank: 6,
    code: 'ca',
    name: 'Canada',
    flag: caFlag,
    visitors: 6221,
    trend: { value: 0.9, type: 'success' },
  },
  {
    rank: 7,
    code: 'jp',
    name: 'Japan',
    flag: jpFlag,
    visitors: 5785,
    trend: { value: 0, type: 'warning' },
  },
  {
    rank: 8,
    code: 'au',
    name: 'Australia',
    flag: auFlag,
    visitors: 4918,
    trend: { value: 1.1, type: 'success' },
  },
  {
    rank: 9,
    code: 'br',
    name: 'Brazil',
    flag: brFlag,
    visitors: 3874,
    trend: { value: -0.5, type: 'danger' },
  },
  {
    rank: 10,
    code: 'it',
    name: 'Italy',
    flag: itFlag,
    visitors: 4105,
    trend: { value: 0.7, type: 'success' },
  },
]

export const comments: CommentType[] = [
  {
    name: 'Liam Carter',
    avatar: user8,
    date: '15 Apr 2025',
    time: '09:20AM',
    message: 'Loving the new dashboard update! The UI feels much smoother and more intuitive now. Great job!',
    views: 1200,
    likes: 320,
    comments: 14,
    reply: [
      {
        name: 'Nina Bryant',
        avatar: user10,
        date: '15 Apr 2025',
        time: '10:00AM',
        message: 'Totally agree! The load speed is noticeably faster too.',
        views: 860,
        likes: 150,
        comments: 6,
      },
      {
        name: 'Sophie Allen',
        avatar: user3,
        date: '15 Apr 2025',
        time: '12:10PM',
        message: 'Hope we get more dark mode themes next!',
        views: 580,
        likes: 90,
        comments: 3,
      },
    ],
  },
]

export const fileItems: FileItemType[] = [
  {
    name: 'Meeting-Notes.docx',
    icon: 'tabler:file-text',
    size: 1200,
    users: [user4, user7, user1, user2],
  },
  {
    name: 'Design-Specs.pdf',
    icon: 'tabler:file-type-pdf',
    size: 3600,
    users: [user8, user2, user6, user9, user10],
  },
  {
    name: 'Assets-Package.zip',
    icon: 'tabler:file-type-zip',
    size: 7400,
    users: [user1, user6],
  },
  {
    name: 'Marketing-Plan.pptx',
    icon: 'tabler:file-type-ppt',
    size: 5000,
    users: [user10, user4, user1, user3, user6],
  },
  {
    name: 'Wireframe.png',
    icon: 'tabler:photo',
    size: 820,
    users: [user9],
  },
]

export const widget3Data: Widget3Type[] = [
  {
    title: 'My Tasks',
    description: 'Total Tasks',
    label: '+3 New',
    icon: 'tabler:checklist',
    count: { value: 124 },
    variant: 'primary',
    totalCount: '12,450',
  },
  {
    title: 'Messages',
    description: 'Total Messages',
    label: '+5 New',
    icon: 'tabler:message-circle',
    count: { value: 69.5, suffix: 'k' },
    variant: 'purple',
    totalCount: '32.1M',
  },
  {
    title: 'Approvals',
    description: 'Total Approvals',
    label: '+2 New',
    icon: 'tabler:file-check',
    count: { value: 32 },
    variant: 'dark',
    totalCount: '1,479',
  },
  {
    title: 'Clients',
    description: 'Total Clients',
    label: '+4 New',
    icon: 'tabler:users',
    count: { value: 184 },
    variant: 'info',
    totalCount: '9,835',
  },
  {
    title: 'Revenue',
    description: 'Total Revenue',
    label: '+1.5%',
    icon: 'tabler:credit-card',
    count: { prefix: '$', value: 125.5, suffix: 'k' },
    variant: 'danger',
    totalCount: '$12.5M',
  },
]

export const widget4Data: Widget4Type[] = [
  {
    title: 'Total Sales',
    description: 'Monthly Total Sales',
    icon: 'tabler:credit-card',
    label: 'Monthly',
    variant: 'success',
    count: { value: 320, prefix: '$', suffix: 'K' },
  },
  {
    title: 'Total Orders',
    description: 'Monthly Total Orders',
    icon: 'tabler:package',
    label: 'Monthly',
    variant: 'primary',
    count: { value: 245 },
  },
  {
    title: 'New Customers',
    description: 'Monthly New Customers',
    icon: 'tabler:users',
    label: 'Monthly',
    variant: 'info',
    count: { value: 4382 },
  },
  {
    title: 'Revenue',
    description: 'Monthly Revenue',
    icon: 'tabler:chart-bar',
    label: 'Monthly',
    variant: 'warning',
    count: { value: 89.45, prefix: '$', suffix: 'K' },
  },
]

export const widget5Data: Widget5Type[] = [
  {
    title: 'Total Property Value',
    icon: 'tabler:home-heart',
    variant: 'primary',
    count: { value: 150, prefix: '$', suffix: 'M' },
  },
  {
    title: 'Monthly Rental Income',
    icon: 'tabler:wallet',
    variant: 'secondary',
    count: { value: 80, prefix: '$', suffix: 'M' },
  },
  {
    title: 'Average Property Price',
    icon: 'tabler:tags',
    variant: 'info',
    count: { value: 500, prefix: '$', suffix: 'K' },
  },
  {
    title: 'Latest Property Sale',
    icon: 'tabler:building',
    variant: 'danger',
    count: { value: 1.2, prefix: '$', suffix: 'M' },
  },
]

export const widget6Data: Widget6Type[] = [
  {
    title: 'Backend API Integration',
    progress: 72.5,
    description: 'Estimated completion: 2 days.',
    status: 'in-progress',
  },
  {
    title: 'UI Design',
    progress: 100,
    description: 'Delivered yesterday at 5:00 pm.',
    status: 'completed',
  },
  {
    title: 'Database Optimization',
    progress: 45,
    description: 'Next review: Monday 10:00 am.',
    status: 'pending',
  },
  {
    title: 'Server Uptime',
    progress: 99.9,
    description: 'Last downtime: 7 days ago.',
    status: 'stable',
  },
]

export const widget7Data: Widget7Type[] = [
  {
    title: 'Total Property Value',
    icon: 'tabler:building-skyscraper',
    variant: 'primary',
    count: { value: 150, prefix: '$', suffix: 'M' },
  },
  {
    title: 'Properties Sold',
    icon: 'tabler:home-dollar',
    variant: 'success',
    count: { value: 320 },
  },
  {
    title: 'Active Listings',
    icon: 'tabler:building-store',
    variant: 'warning',
    count: { value: 180 },
  },
  {
    title: 'Agents Available',
    icon: 'tabler:users-group',
    variant: 'info',
    count: { value: 85 },
  },
  {
    title: 'Upcoming Viewings',
    icon: 'tabler:calendar-time',
    variant: 'danger',
    count: { value: 42 },
  },
  {
    title: 'New Constructions',
    icon: 'tabler:building-warehouse',
    variant: 'secondary',
    count: { value: 27 },
  },
]

export const messages = [
  {
    message: 'Hey! Are you available for a quick call? 📞',
    time: '08:55 am',
    fromUser: false,
    avatar: user5,
  },
  {
    message: 'Sure, give me 5 minutes. Just wrapping something up.',
    time: '08:57 am',
    fromUser: true,
    avatar: user2,
  },
  {
    message: "Perfect. Let me know when you're ready 👍",
    time: '08:58 am',
    fromUser: false,
    avatar: user5,
  },
  {
    message: 'Ready now. Calling you!',
    time: '09:00 am',
    fromUser: true,
    avatar: user2,
  },
  {
    message: 'Thanks for your time earlier!',
    time: '09:45 am',
    fromUser: false,
    avatar: user5,
  },
  {
    message: 'Of course! It was a productive discussion.',
    time: '09:46 am',
    fromUser: true,
    avatar: user2,
  },
  {
    message: 'I’ll send over the updated files by noon.',
    time: '09:50 am',
    fromUser: false,
    avatar: user5,
  },
]
