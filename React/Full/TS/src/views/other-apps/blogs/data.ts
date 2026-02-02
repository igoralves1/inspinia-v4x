import blog1 from '@/assets/images/blog/blog-1.jpg'
import blog2 from '@/assets/images/blog/blog-2.jpg'
import blog3 from '@/assets/images/blog/blog-3.jpg'
import blog4 from '@/assets/images/blog/blog-4.jpg'
import blog5 from '@/assets/images/blog/blog-5.jpg'

import user1 from '@/assets/images/users/user-1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'

export type BlogType = {
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

export const blogs: BlogType[] = [
  {
    id: 1,
    title: 'Mastering Figma: 7 Pro Tips for Better UI Design',
    description: 'Unlock advanced techniques in Figma that can speed up your workflow and help you create pixel-perfect designs every time.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: { name: 'Emma Blake', avatar: user6 },
    category: 'Design',
    tags: ['Figma', 'UX', 'Tips'],
  },
  {
    id: 2,
    image: blog1,
    title: 'Building REST APIs with Node.js',
    description: 'Learn how to design and build scalable REST APIs with Node.js and Express in this step-by-step tutorial.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: { name: 'John Doe', avatar: user3 },
    category: 'Development',
    tags: ['Node.js', 'API', 'Tutorial'],
  },
  {
    id: 3,
    image: blog2,
    title: 'SEO Strategies for 2025: How to Rank Higher',
    description: "Boost your website's search engine ranking with these proven SEO techniques for 2025.",
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: { name: 'Sophie Green', avatar: user2 },
    category: 'Marketing',
    tags: ['SEO', 'Marketing', 'Growth'],
  },
  {
    id: 4,
    title: 'Web Design Trends to Watch in 2025',
    description: 'Explore the top web design trends that will shape the user experience in 2025.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: { name: 'Anna White', avatar: user5 },
    category: 'Design',
    tags: ['Web Design', 'UX/UI', 'Trends'],
  },
  {
    id: 5,
    image: blog3,
    title: '5 Key Tips for New Entrepreneurs',
    description: 'Start your entrepreneurial journey with these 5 essential tips that will guide you through the first year of business.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: { name: 'David Clark', avatar: user7 },
    category: 'Business',
    tags: ['Business', 'Entrepreneur', 'Startup'],
  },
  {
    id: 6,
    image: blog4,
    title: 'The Future of Artificial Intelligence',
    description: 'Discover how AI is transforming industries and what the future holds for this cutting-edge technology.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: { name: 'Michael Turner', avatar: user4 },
    category: 'Technology',
    tags: ['AI', 'Technology', 'Innovation'],
  },
  {
    id: 7,
    title: 'Top Data Science Trends in 2025',
    description: 'Get ahead in the data science field with the latest trends, technologies, and tools that are reshaping the industry.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: { name: 'Olivia Brown', avatar: user1 },
    tags: ['Data Science', 'Trends', '2025'],
    category: 'Data Science',
    variant: 'primary',
  },
  {
    id: 8,
    image: blog5,
    title: 'Top Data Science Trends in 2025',
    description: 'Get ahead in the data science field with the latest trends, technologies, and tools that are reshaping the industry.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: '1,284',
    user: { name: 'Olivia Brown', avatar: user1 },
    category: 'Data Science',
    tags: ['Data Science', 'Trends', '2025'],
  },
]
