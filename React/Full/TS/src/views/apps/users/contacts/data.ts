import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'

import caFlag from '@/assets/images/flags/ca.svg'
import cnFlag from '@/assets/images/flags/cn.svg'
import esFlag from '@/assets/images/flags/es.svg'
import gbFlag from '@/assets/images/flags/gb.svg'
import inFlag from '@/assets/images/flags/in.svg'
import usFlag from '@/assets/images/flags/us.svg'

export type ContactType = {
  id: number
  name: string
  avatar?: string
  position: string
  role: string
  email: string
  mobileNo: string
  location: string
  url: string
  updatedTime: string
  flag: string
  variant: string
}

export const contacts = [
  {
    id: 1,
    name: 'Sophia Carter',
    avatar: user5,
    position: 'Lead UI/UX Designer',
    role: 'Admin',
    email: 'sophia@designhub.com',
    mobileNo: '+44 7911 123456',
    location: 'London, UK',
    url: 'www.sophiacarter.com',
    updatedTime: '30 min ago',
    flag: gbFlag,
    variant: 'warning',
  },
  {
    id: 2,
    name: 'Marcus Lee',
    avatar: user6,
    position: 'Senior Developer',
    role: 'Team Lead',
    email: 'marcus@devhub.com',
    mobileNo: '+1 408-222-9876',
    location: 'Austin, TX',
    url: 'www.devhub.com',
    updatedTime: '1 hour ago',
    flag: usFlag,
    variant: 'success',
  },
  {
    id: 3,
    name: 'Emily Davis',
    avatar: user7,
    position: 'Marketing Strategist',
    role: 'Member',
    email: 'emily@marketboost.com',
    mobileNo: '+1 212-555-7890',
    location: 'New York, NY',
    url: 'www.marketboost.com',
    updatedTime: '10 min ago',
    flag: usFlag,
    variant: 'danger',
  },
  {
    id: 4,
    name: 'Daniel Smith',
    avatar: user8,
    position: 'Data Analyst',
    role: 'Contributor',
    email: 'daniel@analyticspro.io',
    mobileNo: '+1 987-654-3210',
    location: 'Toronto, Canada',
    url: 'www.analyticspro.io',
    updatedTime: '45 min ago',
    flag: caFlag,
    variant: 'info',
  },
  {
    id: 5,
    name: 'Daniel Morris',
    avatar: user7,
    position: 'Project Manager',
    role: 'Team Lead',
    email: 'daniel@projecthub.io',
    mobileNo: '+1 212 555 7890',
    location: 'New York, USA',
    url: 'www.danielmorris.com',
    updatedTime: '1 hour ago',
    flag: usFlag,
    variant: 'success',
  },
  {
    id: 6,
    name: 'Jessica Chen',
    avatar: user4,
    position: 'UI/UX Designer',
    role: 'Editor',
    email: 'jessica@uxstudio.cn',
    mobileNo: '+86 10-1234-5678',
    location: 'Beijing, China',
    url: 'www.uxstudio.cn',
    updatedTime: '20 min ago',
    flag: cnFlag,
    variant: 'success',
  },
  {
    id: 7,
    name: 'Arjun Patel',
    position: 'Software Engineer',
    role: 'Member',
    email: 'arjun@techflow.in',
    mobileNo: '+91 98765-43210',
    location: 'Bangalore, India',
    url: 'www.techflow.in',
    updatedTime: '10 min ago',
    flag: inFlag,
    variant: 'warning',
  },
  {
    id: 8,
    name: 'Olivia Garcia',
    avatar: user6,
    position: 'Content Strategist',
    role: 'Guest',
    email: 'olivia@contentwave.es',
    mobileNo: '+34 912 345 678',
    location: 'Madrid, Spain',
    url: 'www.contentwave.es',
    updatedTime: '5 min ago',
    flag: esFlag,
    variant: 'danger',
  },
]
