import blog1 from '@/assets/images/blog/blog-1.jpg'
import blog2 from '@/assets/images/blog/blog-2.jpg'
import blog3 from '@/assets/images/blog/blog-3.jpg'
import blog5 from '@/assets/images/blog/blog-5.jpg'
import gallery8 from '@/assets/images/gallery/8.jpg'
import stock4 from '@/assets/images/stock/small-4.jpg'

import user1 from '@/assets/images/users/user-1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'

export type MasonryCardType = {
  id: number
  image?: string
  title?: string
  description?: string
  date?: string
  comments?: number
  views?: string
  user: {
    name: string
    avatar: string
  }
  category?: string

  tags?: string[]
  variant?: string
}

export const masonryItems: MasonryCardType[] = [
  {
    id: 1,
    title: 'Mastering Figma: 7 Pro Tips for Better UI Design',
    description: 'Unlock advanced techniques in Figma that can speed up your workflow and help you create pixel-perfect designs every time.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: {
      name: 'Emma Blake',
      avatar: user6,
    },
    tags: ['Figma', 'UX', 'Tips'],
  },
  {
    id: 2,
    image: blog1,
    user: {
      name: 'John Doe',
      avatar: user3,
    },
    category: 'Development',
  },
  {
    id: 3,
    title: 'AI Breakthroughs to Watch in 2025',
    description: 'Explore the game-changing AI innovations set to redefine industries and everyday life in the coming year.',
    date: 'Feb 8, 2025',
    comments: 102,
    views: '1,542',
    user: {
      name: 'Liam Carter',
      avatar: user2,
    },
    category: 'Artificial Intelligence',
    variant: 'danger',
  },
  {
    id: 4,
    image: blog2,
    title: 'SEO Strategies for 2025: How to Rank Higher',
    description: "Boost your website's search engine ranking with these proven SEO techniques for 2025.",
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: {
      name: 'Sophie Green',
      avatar: user2,
    },
    category: 'Marketing',
    tags: ['SEO', 'Marketing', 'Growth'],
  },
  {
    id: 5,
    image: gallery8,
    user: {
      name: 'John Doe',
      avatar: user3,
    },
    category: 'Development',
  },
  {
    id: 6,
    image: blog3,
    title: '5 Key Tips for New Entrepreneurs',
    description: 'Start your entrepreneurial journey with these 5 essential tips that will guide you through the first year of business.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: {
      name: 'David Clark',
      avatar: user7,
    },
    category: 'Business',
    tags: ['Business', 'Entrepreneur', 'Startup'],
  },
  {
    id: 7,
    image: stock4,
    title: 'The Future of Artificial Intelligence',
    description: 'Discover how AI is transforming industries and what the future holds for this cutting-edge technology.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: {
      name: 'Michael Turner',
      avatar: user4,
    },
    category: 'Technology',
  },
  {
    id: 8,
    title: 'Cyber Threats to Watch Out for in 2025',
    description: 'Stay protected by understanding the most pressing cybersecurity threats and how to safeguard your digital world.',
    date: 'Mar 5, 2025',
    comments: 67,
    views: '1,039',
    user: {
      name: 'Ethan Wilson',
      avatar: user4,
    },
    category: 'Cybersecurity',
    variant: 'secondary',
  },
  {
    id: 9,
    image: blog5,
    title: 'Top Data Science Trends in 2025',
    description: 'Get ahead in the data science field with the latest trends, technologies, and tools that are reshaping the industry.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: {
      name: 'Olivia Brown',
      avatar: user1,
    },
    category: 'Data Science',
  },
  {
    id: 10,
    title: 'Web Design Trends to Watch in 2025',
    description: 'Explore the top web design trends that will shape the user experience in 2025.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: {
      name: 'Anna White',
      avatar: user5,
    },
    tags: ['Web Design', 'UX/UI', 'Trends'],
  },
  {
    id: 11,
    title: 'Sustainable Technologies Shaping the Future',
    description: 'Discover how clean energy, eco-innovation, and green infrastructure are driving the global sustainability movement.',
    date: 'Mar 22, 2025',
    comments: 76,
    views: '1,196',
    user: {
      name: 'Sophia Turner',
      avatar: user3,
    },
    category: 'Green Tech',
    variant: 'success',
  },
]
