import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user6 from '@/assets/images/users/user-6.jpg'

export const ratings = [
  { stars: 5, progress: 85, count: 128 },
  { stars: 4, progress: 10, count: 37 },
  { stars: 3, progress: 3, count: 15 },
  { stars: 2, progress: 1, count: 7 },
  { stars: 1, progress: 1, count: 2 },
]

export type ReviewType = {
  id: number
  userName: string
  userEmail: string
  userAvatar: string
  rating: number
  title: string
  comment: string
  date: string
  time: string
  status: 'Published' | 'Pending'
}

export const reviewsData: ReviewType[] = [
  {
    id: 1,
    userName: 'Sophia Lee',
    userEmail: 'sophia.lee@digitalshop.com',
    userAvatar: user2,
    rating: 5,
    title: 'Great product, would buy again!',
    comment: 'These earbuds are amazing, the sound quality is top-notch. Totally worth the price!',
    date: '22 Apr, 2025',
    time: '04:10 PM',
    status: 'Published',
  },
  {
    id: 2,
    userName: 'David Smith',
    userEmail: 'david.smith@healthstore.com',
    userAvatar: user6,
    rating: 4.5,
    title: 'Decent, but overpriced',
    comment: "It does the job, but I feel like it's a little expensive for what it offers.",
    date: '23 Apr, 2025',
    time: '02:20 PM',
    status: 'Pending',
  },
  {
    id: 3,
    userName: 'Alice Johnson',
    userEmail: 'alice.johnson@homesupplies.com',
    userAvatar: user3,
    rating: 5,
    title: 'Amazing quality!',
    comment: 'The TV has incredible picture quality. Totally worth the investment!',
    date: '24 Apr, 2025',
    time: '09:15 AM',
    status: 'Published',
  },
  {
    id: 4,
    userName: 'Michael Green',
    userEmail: 'michael.green@mobileshop.com',
    userAvatar: user2,
    rating: 5,
    title: 'Perfect phone, highly recommended!',
    comment: 'The camera is amazing and the performance is smooth. Definitely the best smartphone I have used!',
    date: '25 Apr, 2025',
    time: '11:30 AM',
    status: 'Published',
  },
  {
    id: 5,
    userName: 'Chris Evans',
    userEmail: 'chris.evans@gamestore.com',
    userAvatar: user4,
    rating: 4.5,
    title: 'Great for gaming but heavy',
    comment: "The performance is amazing, but it's a bit too heavy to carry around all day.",
    date: '26 Apr, 2025',
    time: '10:00 AM',
    status: 'Pending',
  },
]
