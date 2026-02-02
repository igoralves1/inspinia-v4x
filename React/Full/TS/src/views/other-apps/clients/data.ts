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
import deFlag from '@/assets/images/flags/de.svg'
import gbFlag from '@/assets/images/flags/gb.svg'
import inFlag from '@/assets/images/flags/in.svg'
import jpFlag from '@/assets/images/flags/jp.svg'
import mxFlag from '@/assets/images/flags/mx.svg'
import sgFlag from '@/assets/images/flags/sg.svg'
import usFlag from '@/assets/images/flags/us.svg'

export type ClientType = {
  name: string
  email: string
  image: string
  phone: string
  countryCode: string
  flag: string
  enrollDate: string
  type: string
  role: string
  status: 'active' | 'inactive' | 'pending'
  url: string
}

export const clients: ClientType[] = [
  {
    name: 'Emily Parker',
    email: 'emily@startupwave.io',
    image: user7,
    phone: '+1 (415) 992-3412',
    countryCode: 'US',
    flag: usFlag,
    enrollDate: 'Feb 2, 2024',
    type: 'Project',
    role: 'Frontend Developer',
    status: 'active',
    url: '/pages/profile',
  },
  {
    name: 'Liam Scott',
    email: 'liam@creativelogic.net',
    image: user3,
    phone: '+44 20 7946 0958',
    countryCode: 'UK',
    flag: gbFlag,
    enrollDate: 'Jan 15, 2024',
    type: 'Contract',
    role: 'UI/UX Designer',
    status: 'pending',
    url: '/pages/profile',
  },
  {
    name: 'Sofia Müller',
    email: 'sofia@designhub.de',
    image: user4,
    phone: '+49 89 1234 5678',
    countryCode: 'DE',
    flag: deFlag,
    enrollDate: 'Mar 12, 2024',
    type: 'Project',
    role: 'Visual Designer',
    status: 'active',
    url: '/pages/profile',
  },
  {
    name: 'Carlos Méndez',
    email: 'carlos@techlaunch.mx',
    image: user5,
    phone: '+52 55 1234 9876',
    countryCode: 'MX',
    flag: mxFlag,
    enrollDate: 'Jan 8, 2024',
    type: 'Contract',
    role: 'Full Stack Developer',
    status: 'inactive',
    url: '/pages/profile',
  },
  {
    name: 'Nina Patel',
    email: 'nina@pixelhype.in',
    image: user6,
    phone: '+91 99876 54321',
    countryCode: 'IN',
    flag: inFlag,
    enrollDate: 'Feb 19, 2024',
    type: 'Project',
    role: 'Brand Strategist',
    status: 'active',
    url: '/pages/profile',
  },
  {
    name: 'Oliver Chen',
    email: 'oliver@brandflow.sg',
    image: user8,
    phone: '+65 6789 1234',
    countryCode: 'SG',
    flag: sgFlag,
    enrollDate: 'Jan 30, 2024',
    type: 'Retainer',
    role: 'Creative Director',
    status: 'pending',
    url: '/pages/profile',
  },
  {
    name: 'Maya Tanaka',
    email: 'maya@visiontokyo.jp',
    image: user9,
    phone: '+81 3 1234 5678',
    countryCode: 'JP',
    flag: jpFlag,
    enrollDate: 'Mar 5, 2024',
    type: 'Project',
    role: 'Product Designer',
    status: 'active',
    url: '/pages/profile',
  },
  {
    name: 'Lucas Ferreira',
    email: 'lucas@devstudio.br',
    image: user10,
    phone: '+55 11 99876 5432',
    countryCode: 'BR',
    flag: brFlag,
    enrollDate: 'Feb 24, 2024',
    type: 'Contract',
    role: 'Backend Engineer',
    status: 'active',
    url: '/pages/profile',
  },
  {
    name: 'Anna Schmidt',
    email: 'anna@uxhaus.de',
    image: user1,
    phone: '+49 30 4567 8910',
    countryCode: 'DE',
    flag: deFlag,
    enrollDate: 'Mar 9, 2024',
    type: 'Retainer',
    role: 'UX Consultant',
    status: 'pending',
    url: '/pages/profile',
  },
  {
    name: 'Jason Lee',
    email: 'jason@webfoundry.au',
    image: user2,
    phone: '+61 2 9876 1234',
    countryCode: 'AU',
    flag: auFlag,
    enrollDate: 'Mar 14, 2024',
    type: 'Contract',
    role: 'Web Developer',
    status: 'active',
    url: '/pages/profile',
  },
]
