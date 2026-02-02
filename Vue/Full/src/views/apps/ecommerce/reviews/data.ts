import type { ApexOptions } from 'apexcharts'

import product2 from '@/assets/images/products/2.png'
import product3 from '@/assets/images/products/3.png'
import product4 from '@/assets/images/products/4.png'
import product5 from '@/assets/images/products/5.png'
import product6 from '@/assets/images/products/6.png'

import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user8 from '@/assets/images/users/user-8.jpg'

export type ProductReviewType = {
  id: number
  productName: string
  image: string
  name: string
  avatar: string
  email: string
  rating: number
  message: string
  description: string
  date: string
  time: string
  status: 'published' | 'pending'
}

export const reviews: { progress: number; count: number }[] = [
  {
    progress: 85,
    count: 128,
  },
  {
    progress: 15,
    count: 37,
  },
  {
    progress: 10,
    count: 15,
  },
  {
    progress: 7,
    count: 7,
  },
  {
    progress: 2,
    count: 2,
  },
]

export const productReviews: ProductReviewType[] = [
  {
    id: 1,
    productName: 'Wireless Earbuds',
    image: product2,
    name: 'Sophia Lee',
    avatar: user8,
    email: 'sophia.lee@digitalshop.com',
    rating: 5,
    message: 'Great product, would buy again!',
    description: 'These earbuds are amazing, the sound quality is top-notch. Totally worth the price!',
    date: '22 Apr, 2025',
    time: '04:10 PM',
    status: 'published',
  },
  {
    id: 2,
    productName: 'Smart Watch',
    image: product3,
    name: 'David Smith',
    avatar: user6,
    email: 'david.smith@healthstore.com',
    rating: 4.5,
    message: 'Decent, but overpriced',
    description: "It does the job, but I feel like it's a little expensive for what it offers.",
    date: '23 Apr, 2025',
    time: '02:20 PM',
    status: 'pending',
  },
  {
    id: 3,
    productName: '4K Ultra HD TV',
    image: product4,
    name: 'Alice Johnson',
    avatar: user3,
    email: 'alice.johnson@homesupplies.com',
    rating: 5,
    message: 'Amazing quality!',
    description: 'The TV has incredible picture quality. Totally worth the investment!',
    date: '24 Apr, 2025',
    time: '09:15 AM',
    status: 'published',
  },
  {
    id: 4,
    productName: 'Smartphone X',
    image: product5,
    name: 'Michael Green',
    avatar: user2,
    email: 'michael.green@mobileshop.com',
    rating: 5,
    message: 'Perfect phone, highly recommended!',
    description: 'The camera is amazing and the performance is smooth. Definitely the best smartphone I have used!',
    date: '25 Apr, 2025',
    time: '11:30 AM',
    status: 'published',
  },
  {
    id: 5,
    productName: 'Gaming Laptop',
    image: product6,
    name: 'Chris Evans',
    avatar: user4,
    email: 'chris.evans@gamestore.com',
    rating: 4.5,
    message: 'Great for gaming but heavy',
    description: "The performance is amazing, but it's a bit too heavy to carry around all day.",
    date: '26 Apr, 2025',
    time: '10:00 AM',
    status: 'pending',
  },
]

export const getReviewChartOptions: () => ApexOptions = () => ({
  chart: {
    type: 'area',
    height: 185,
    toolbar: { show: false },
  },
  grid: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  series: [
    {
      name: 'Reviews',
      data: [5, 8, 6, 7, 10, 12, 9, 14, 11, 15, 17, 19, 14, 13, 16, 18, 22, 20, 19, 17, 15, 18, 20, 23, 21, 22, 24, 26, 25, 28],
    },
  ],
  xaxis: {
    categories: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
    labels: {
      rotate: -45,
      style: {
        fontSize: '10px',
      },
    },
  },
  colors: ['#1ab394'],
  fill: {
    opacity: 0.3,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return `${val} Reviews`
      },
    },
  },
})
