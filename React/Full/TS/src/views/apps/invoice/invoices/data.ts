import user10 from '@/assets/images/users/user-10.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'

export type InvoiceType = {
  id: string
  date: string
  name: string
  image?: string
  email: string
  purchase: string
  amount: number
  status: 'paid' | 'pending' | 'overdue' | 'draft'
}

export const invoices: InvoiceType[] = [
  {
    id: 'INS-0120010',
    date: 'Feb 2 - Feb 10, 2025',
    name: 'Emily Parker',
    image: user7,
    email: 'emily@startupwave.io',
    purchase: 'Inspinia - Extended License',
    amount: 999,
    status: 'paid',
  },
  {
    id: 'INS-0120009',
    date: 'Feb 5 - Feb 12, 2025',
    name: 'Michael Scott',
    email: 'michael@dundermifflin.com',
    purchase: 'CRM Dashboard - Regular License',
    amount: 249,
    status: 'pending',
  },
  {
    id: 'INS-0120008',
    date: 'Jan 10 - Jan 15, 2025',
    name: 'Samantha Reed',
    image: user3,
    email: 'samantha@alphatech.com',
    purchase: 'Landing Page - Agency Pack',
    amount: 349,
    status: 'overdue',
  },
  {
    id: 'INS-0120007',
    date: 'Mar 1 - Mar 5, 2025',
    name: 'Jonathan Lee',
    image: user2,
    email: 'jonathan@zenflow.io',
    purchase: 'Task Manager - SaaS Version',
    amount: 799,
    status: 'draft',
  },
  {
    id: 'INS-0120006',
    date: 'Mar 10 - Mar 15, 2025',
    name: 'Carlos Diaz',
    email: 'carlos@themeverse.com',
    purchase: 'Admin Panel - Developer License',
    amount: 199,
    status: 'paid',
  },
  {
    id: 'INS-0120005',
    date: 'Mar 20 - Mar 25, 2025',
    name: 'Lisa Brown',
    image: user4,
    email: 'lisa@digitize.io',
    purchase: 'Analytics Suite - Enterprise',
    amount: 499,
    status: 'pending',
  },
  {
    id: 'INS-0120004',
    date: 'Apr 1 - Apr 7, 2025',
    name: 'Ryan Mitchell',
    email: 'ryan@bizsol.com',
    purchase: 'Sales App - Regular License',
    amount: 499,
    status: 'draft',
  },
  {
    id: 'INS-0120003',
    date: 'Apr 8 - Apr 12, 2025',
    name: 'Nina Hughes',
    image: user8,
    email: 'nina@creativelabs.io',
    purchase: 'Marketing Kit - Extended License',
    amount: 899,
    status: 'paid',
  },
  {
    id: 'INS-0120002',
    date: 'Apr 10 - Apr 14, 2025',
    name: 'Oliver Grant',
    image: user9,
    email: 'oliver@nextgenapps.com',
    purchase: 'Mobile Kit - Standard Plan',
    amount: 599,
    status: 'pending',
  },
  {
    id: 'INS-0120001',
    date: 'Apr 15 - Apr 20, 2025',
    name: 'Sophia Kim',
    image: user10,
    email: 'sophia@pixelhub.io',
    purchase: 'UI Kit - Commercial License',
    amount: 749,
    status: 'overdue',
  },
]
