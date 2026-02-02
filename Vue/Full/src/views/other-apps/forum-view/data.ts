import user1 from '@/assets/images/users/user-1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user8 from '@/assets/images/users/user-8.jpg'

export type ForumPostType = {
  id: string
  category: string
  title: string
  description: string
  author: string
  image: string
  timeAgo: string
  answers: number
  endsIn: string
  votes: number
  badge: string | number
  variant: string
  url: string
}

export const forumPosts: ForumPostType[] = [
  {
    id: 'forum-1',
    category: 'Development Talk',
    title: "What's the best JavaScript framework in 2025?",
    description:'With so many frameworks available, developers often debate which one offers the best balance of performance, scalability, and ease of use. Share your thoughts!',
    author: 'James Milton',
    image: user5,
    timeAgo: '1 hour ago',
    answers: 45,
    endsIn: '3 days',
    votes: 732,
    badge: 'New',
    variant: 'success',
    url: '',
  },
  {
    id: 'forum-2',
    category: 'AI & Ethics',
    title: 'Should AI tools be regulated by governments?',
    description: 'As AI becomes more powerful, discussions around ethics and control are growing. What’s your take on government involvement?',
    author: 'Amira Lee',
    image: user8,
    timeAgo: '2 hours ago',
    answers: 62,
    endsIn: '4 days',
    votes: 894,
    badge: 23,
    variant: 'warning',
    url: '',
  },
  {
    id: 'forum-3',
    category: 'Product Design',
    title: 'Is minimalism still relevant in modern UI design?',
    description: 'Clean interfaces have been a trend for years, but some argue they now lack innovation. What’s your opinion?',
    author: 'Liam Carter',
    image: user2,
    timeAgo: '3 hours ago',
    answers: 31,
    endsIn: '2 days',
    votes: 410,
    badge: 8,
    variant: 'info',
    url: '',
  },
  {
    id: 'forum-4',
    category: 'Career Growth',
    title: 'What’s better for growth: startups or large companies?',
    description: 'Both have pros and cons—startups offer agility, while big companies provide stability. Which helped your career most?',
    author: 'Noah Bennett',
    image: user6,
    timeAgo: '5 hours ago',
    answers: 50,
    endsIn: '1 day',
    votes: 612,
    badge: 12,
    variant: 'primary',
    url: '',
  },
  {
    id: 'forum-5',
    category: 'DevOps',
    title: 'CI/CD or traditional release cycles: what works better?',
    description: "Continuous deployment speeds up delivery, but some teams prefer slower, stable releases. What’s your team's approach?",
    author: 'Sofia Kim',
    image: user4,
    timeAgo: '8 hours ago',
    answers: 76,
    endsIn: '6 days',
    votes: 1005,
    badge: 18,
    variant: 'secondary',
    url: '',
  },
  {
    id: 'forum-6',
    category: 'Open Source',
    title: 'What’s the best way to start contributing to open source?',
    description: 'Many developers want to join the open-source movement but don’t know where to begin. What advice would you give?',
    author: 'Daniel Reed',
    image: user1,
    timeAgo: '12 minutes ago',
    answers: 39,
    endsIn: '7 days',
    votes: 558,
    badge: 7,
    variant: 'dark',
    url: '',
  },
]
