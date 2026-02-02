import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user8 from '@/assets/images/users/user-8.jpg'

type SearchResultType = {
  title: string
  description: string
  url: string
  image: string
  author: string
  publishedDate: string
  sales: number
  comments: number
  likes: number
}

export const searchResults: SearchResultType[] = [
  {
    title: 'INSPINIA - Multipurpose Admin Dashboard Template',
    description:
      'INSPINIA is a premium admin dashboard template built with Bootstrap. It offers a wide range of UI components, layouts, and features for building modern web apps like CRMs, SaaS dashboards, and admin panels.',
    url: 'https://wrapbootstrap.com/theme/inspinia-multipurpose-admin-dashboard-template-WB0R5L90S?ref=inspinia',
    image: user4,
    author: 'WebAppLayers',
    publishedDate: 'Feb 1, 2025',
    sales: 1238,
    comments: 54,
    likes: 892,
  },
  {
    title: 'Homer - Responsive Admin Theme',
    description:
      'Homer is a clean and fully responsive admin dashboard built with Bootstrap. It features a modern design, modular structure, and reusable UI components, making it ideal for analytics dashboards, CRM systems, and custom backend solutions.',
    url: 'https://wrapbootstrap.com/theme/homer-responsive-admin-template-WB055J451?ref=inspinia',
    image: user5,
    author: 'WebAppLayers',
    publishedDate: 'Jan 20, 2025',
    sales: 978,
    comments: 37,
    likes: 765,
  },
  {
    title: 'LUNA - Responsive Admin Theme',
    description:
      'LUNA is a stylish and responsive admin theme built with Bootstrap. It includes clean layouts, powerful UI elements, and a lightweight structure—perfect for backend systems, SaaS products, and admin panels.',
    url: 'https://wrapbootstrap.com/theme/luna-responsive-admin-dashboard-template-WB0J69TPB?ref=inspinia',
    image: user6,
    author: 'WebAppLayers',
    publishedDate: 'Dec 12, 2024',
    sales: 846,
    comments: 42,
    likes: 683,
  },
  {
    title: 'Homer - Responsive Admin Theme',
    description:
      'Homer is a clean and fully responsive admin dashboard built with Bootstrap. It features a modern design, modular structure, and reusable UI components, making it ideal for analytics dashboards, CRM systems, and custom backend solutions.',
    url: 'https://wrapbootstrap.com/theme/homer-responsive-admin-template-WB055J451?ref=inspinia',
    image: user5,
    author: 'WebAppLayers',
    publishedDate: 'Jan 20, 2025',
    sales: 978,
    comments: 37,
    likes: 765,
  },
]

export const users = [user4, user5, user3, user8, user2]
