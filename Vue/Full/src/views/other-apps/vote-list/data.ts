import user10 from '@/assets/images/users/user-10.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'

export type VoteListItemType = {
  id: number
  title: string
  description: string
  author: string
  image: string
  postedOn: string
  category: string
  comments: number
  endsIn: string
  votes: number
  status: 'open' | 'closed' | 'starting-soon'
  canVote: boolean
  userVote?: 'up' | 'down' | null
}

export const voteList: VoteListItemType[] = [
  {
    id: 1,
    title: 'Should remote work be a permanent option for all employees?',
    description:
      'Remote work has seen a massive rise in popularity since 2020. This vote explores whether it should remain a flexible option moving forward.',
    author: 'Emily Parker',
    image: user7,
    postedOn: 'Jan 12, 2025',
    category: 'Workplace',
    comments: 89,
    endsIn: '5 days',
    votes: 1284,
    status: 'closed',
    canVote: false,
  },
  {
    id: 2,
    title: 'Should companies implement a 4-day workweek?',
    description:
      'As work-life balance becomes a higher priority, many advocate for a shorter workweek to improve productivity and employee well-being.',
    author: 'Daniel Stone',
    image: user4,
    postedOn: 'Feb 1, 2025',
    category: 'Productivity',
    comments: 54,
    endsIn: '4 days',
    votes: 985,
    status: 'open',
    canVote: true,
    userVote: 'down',
  },
  {
    id: 3,
    title: 'Should AI be part of everyday business operations?',
    description:
      'As AI becomes more accessible, businesses are debating its integration into daily operations for tasks like customer support and analysis.',
    author: 'Liam Torres',
    image: user8,
    postedOn: 'Mar 3, 2025',
    category: 'Technology',
    comments: 112,
    endsIn: '2 days',
    votes: 1140,
    status: 'open',
    canVote: true,
  },
  {
    id: 4,
    title: 'Should companies go fully remote?',
    description: 'With the success of remote setups, some argue that physical offices are no longer necessary. Others miss in-person collaboration.',
    author: 'Sophia Ray',
    image: user6,
    postedOn: 'Jan 28, 2025',
    category: 'Remote',
    comments: 40,
    endsIn: '3 days',
    votes: 800,
    status: 'closed',
    canVote: false,
  },
  {
    id: 5,
    title: 'Is a degree still essential in tech hiring?',
    description: 'Many argue that skills matter more than formal education in today’s tech industry. Should degrees still be a hiring requirement?',
    author: 'Jordan Smith',
    image: user9,
    postedOn: 'Jan 10, 2025',
    category: 'Career',
    comments: 87,
    endsIn: '1 day',
    votes: 1004,
    status: 'open',
    canVote: true,
    userVote: 'down',
  },
  {
    id: 6,
    title: 'Should meetings be reduced to increase efficiency?',
    description: 'Teams spend hours in meetings weekly. Is cutting down on them the secret to improved focus and output?',
    author: 'Rachel Lee',
    image: user10,
    postedOn: 'Feb 5, 2025',
    category: 'Efficiency',
    comments: 33,
    endsIn: '6 days',
    votes: 728,
    status: 'starting-soon',
    canVote: false,
  },
  {
    id: 7,
    title: 'Is hybrid work the best model moving forward?',
    description: 'Hybrid setups offer flexibility and collaboration—but do they satisfy everyone? Let’s vote on the future of work.',
    author: 'Harvey Nash',
    image: user3,
    postedOn: 'Jan 18, 2025',
    category: 'Hybrid',
    comments: 61,
    endsIn: '2 days',
    votes: 887,
    status: 'closed',
    canVote: false,
  },
]
