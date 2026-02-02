import type { BlogType, PricingPlanType, ServiceType } from '@/views/landing/components/types'

// Import user avatars
import user1 from '@/assets/images/users/user-1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user7 from '@/assets/images/users/user-7.jpg'

// Import blog images
import blog3 from '@/assets/images/blog/blog-3.jpg'
import blog4 from '@/assets/images/blog/blog-4.jpg'
import blog5 from '@/assets/images/blog/blog-5.jpg'

export const services: ServiceType[] = [
  {
    name: 'Digital Strategy',
    description: 'Crafting data-driven strategies to maximize online growth and brand engagement.',
    icon: 'tabler:bulb',
  },
  {
    name: 'SEO Optimization',
    description:
      'Improve search engine rankings and increase website visibility through tailored SEO practices.',
    icon: 'tabler:chart-bar',
  },
  {
    name: 'Social Media Marketing',
    description:
      'Engage your audience across platforms with strategic content and campaign management.',
    icon: 'tabler:speakerphone',
  },
  {
    name: 'Web Development',
    description: 'Building fast, responsive, and scalable websites that meet your business needs.',
    icon: 'tabler:world',
  },
  {
    name: 'Email Marketing',
    description:
      'Connect with your audience and boost conversions through targeted email campaigns.',
    icon: 'tabler:mail',
  },
  {
    name: 'E-Commerce Solutions',
    description: 'Launch and manage high-performing online stores with secure, scalable features.',
    icon: 'tabler:shopping-cart',
  },
  {
    name: 'Content Creation',
    description: 'Produce compelling visuals and copy to drive traffic and build brand identity.',
    icon: 'tabler:camera',
  },
  {
    name: 'Security Audits',
    description:
      'Ensure your website and data are secure with comprehensive vulnerability assessments.',
    icon: 'tabler:shield-check',
  },
]

export const pricingPlans: PricingPlanType[] = [
  {
    name: 'Single License',
    price: 49,
    description: 'Perfect for personal or one-client projects',
    highlight: 'Single project use',
    features: [
      { text: '1 project usage', included: true },
      { text: 'Full component access', included: true },
      { text: 'Basic documentation', included: true },
      { text: 'No multi-client use', included: false },
      { text: 'No SaaS/resale rights', included: false },
    ],
    btnClass: 'btn-outline-primary',
  },
  {
    name: 'Multiple License',
    price: 249,
    description: 'For developers or agencies working with multiple clients',
    highlight: 'Up to 5 projects',
    features: [
      { text: 'Use in up to 5 projects', included: true },
      { text: 'Commercial client use', included: true },
      { text: 'Lifetime updates', included: true },
      { text: 'Premium support', included: true },
      { text: 'No resale/SaaS rights', included: false },
    ],
    btnClass: 'btn-primary',
    isPopular: true,
  },
  {
    name: 'Extended License',
    price: 999,
    description: 'For SaaS products or items offered in paid applications',
    highlight: 'Commercial redistribution rights',
    features: [
      { text: 'Unlimited project usage', included: true },
      { text: 'SaaS & resale rights', included: true },
      { text: 'Full Figma source files', included: true },
      { text: 'Priority support', included: true },
      { text: 'Custom licensing agreement', included: true },
    ],
    btnClass: 'btn-dark',
  },
]

export const testimonials = [
  {
    avatar: user1,
    name: 'Emily Carter',
    title: 'Absolutely love it!',
    description:
      'This gadget exceeded all my expectations. Sleek design and incredible performance!',
    rating: 5,
  },
  {
    avatar: user2,
    name: 'Michael Zhang',
    title: 'Great value for money',
    description: 'Sturdy build and long battery life. Would definitely recommend it to friends!',
    rating: 4.5,
  },
  {
    avatar: user3,
    name: 'Sara Lopez',
    title: 'Top-notch customer service',
    description: 'The team helped me with my issue right away. Smooth experience overall!',
    rating: 4,
  },
  {
    avatar: user4,
    name: 'James Whitman',
    title: 'Highly impressed',
    description:
      'The performance and features are unmatched in this price range. Highly impressed!',
    rating: 5,
  },
  {
    avatar: user5,
    name: 'Aisha Khan',
    title: 'Smooth experience from start to finish',
    description: 'The website, shipping, and support all worked flawlessly. Very satisfied!',
    rating: 4.5,
  },
]

export const blogs: BlogType[] = [
  {
    category: 'Technology',
    image: blog4,
    title: 'The Future of Artificial Intelligence',
    description:
      'Discover how AI is transforming industries and what the future holds for this cutting-edge technology.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: 1284,
    author: {
      name: 'Michael Turner',
      image: user4,
    },
    url: '#',
  },
  {
    category: 'Data Science',
    image: blog5,
    title: 'Top Data Science Trends in 2025',
    description:
      'Get ahead in the data science field with the latest trends, technologies, and tools that are reshaping the industry.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: 1284,
    author: {
      name: 'Olivia Brown',
      image: user1,
    },
    url: '#',
  },
  {
    category: 'Business',
    image: blog3,
    title: '5 Key Tips for New Entrepreneurs',
    description:
      'Start your entrepreneurial journey with these 5 essential tips that will guide you through the first year of business.',
    date: 'Jan 12, 2025',
    comments: 89,
    views: 1284,
    author: {
      name: 'David Clark',
      image: user7,
    },
    url: '#',
  },
]
