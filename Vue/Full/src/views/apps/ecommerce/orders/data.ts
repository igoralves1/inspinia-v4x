import user1 from '@/assets/images/users/user-1.jpg'
import user10 from '@/assets/images/users/user-10.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user9 from '@/assets/images/users/user-9.jpg'

import amex from '@/assets/images/cards/american-express.svg'
import bhim from '@/assets/images/cards/bhim.svg'
import discover from '@/assets/images/cards/discover-card.svg'
import googleWallet from '@/assets/images/cards/google-wallet.svg'
import mastercard from '@/assets/images/cards/mastercard.svg'
import payoneer from '@/assets/images/cards/payoneer.svg'
import paypal from '@/assets/images/cards/paypal.svg'
import stripe from '@/assets/images/cards/stripe.svg'
import unionpay from '@/assets/images/cards/unionpay.svg'
import visa from '@/assets/images/cards/visa.svg'

export type OrderStatisticsType = {
  title: string
  count: number
  change: string
  icon: string
  variant: string
}

export type OrderType = {
  id: string
  date: string
  time: string
  customer: {
    name: string
    avatar: string
    email: string
  }
  amount: number
  paymentStatus: 'paid' | 'pending' | 'failed' | 'refunded'
  orderStatus: 'delivered' | 'processing' | 'cancelled' | 'shipped'
  paymentMethod: {
    type: 'card' | 'upi' | 'other'
    image: string
    vendor?: 'mastercard' | 'visa' | 'paypal' | 'stripe' | 'american-express' | 'discover' | 'unionpay' | 'payoneer' | 'google-wallet' | 'bhim'
    email?: string
    upiId?: string
    cardNumber?: string
  }
}

export const orderStats: OrderStatisticsType[] = [
  {
    title: 'Completed Orders',
    count: 1240,
    change: '+3.34',
    icon: 'tabler:check',
    variant: 'success',
  },
  {
    title: 'Pending Orders',
    count: 320,
    change: '-1.12',
    icon: 'tabler:hourglass',
    variant: 'warning',
  },
  {
    title: 'Canceled Orders',
    count: 87,
    change: '-0.75',
    icon: 'tabler:x',
    variant: 'danger',
  },
  {
    title: 'New Orders',
    count: 540,
    change: '+4.22',
    icon: 'tabler:shopping-cart',
    variant: 'info',
  },
  {
    title: 'Returned Orders',
    count: 120,
    change: '+0.56',
    icon: 'tabler:repeat',
    variant: 'primary',
  },
]

export const orders: OrderType[] = [
  {
    id: 'WB20100',
    date: '25 June, 2025',
    time: '10:10 AM',
    customer: {
      name: 'Mason Carter',
      avatar: user2,
      email: 'mason.carter@shopmail.com',
    },
    amount: 129.45,
    paymentStatus: 'paid',
    orderStatus: 'delivered',
    paymentMethod: {
      type: 'card',
      image: visa,
      vendor: 'visa',
      cardNumber: 'xxxx 7832',
    },
  },
  {
    id: 'WB20101',
    date: '7 May, 2025',
    time: '11:45 AM',
    customer: {
      name: 'Ava Martin',
      avatar: user9,
      email: 'ava.martin@marketplace.com',
    },
    amount: 87.0,
    paymentStatus: 'pending',
    orderStatus: 'processing',
    paymentMethod: {
      type: 'card',
      image: mastercard,
      vendor: 'mastercard',
      cardNumber: 'xxxx 5487',
    },
  },
  {
    id: 'WB20102',
    date: '26 Apr, 2025',
    time: '1:20 PM',
    customer: {
      name: 'Noah Wilson',
      avatar: user1,
      email: 'noah.wilson@ecomsite.com',
    },
    amount: 59.9,
    paymentStatus: 'failed',
    orderStatus: 'cancelled',
    paymentMethod: {
      type: 'other',
      image: paypal,
      vendor: 'paypal',
      email: 'xxx@email.com',
    },
  },
  {
    id: 'WB20103',
    date: '27 Apr, 2025',
    time: '3:30 PM',
    customer: {
      name: 'Isabella Moore',
      avatar: user10,
      email: 'isabella.moore@onlineshop.com',
    },
    amount: 215.2,
    paymentStatus: 'paid',
    orderStatus: 'shipped',
    paymentMethod: {
      type: 'card',
      image: stripe,
      vendor: 'stripe',
      cardNumber: 'xxxx 9901',
    },
  },
  {
    id: 'WB20104',
    date: '28 Apr, 2025',
    time: '9:55 AM',
    customer: {
      name: 'Lucas Bennett',
      avatar: user5,
      email: 'lucas.bennett@shopzone.com',
    },
    amount: 345.75,
    paymentStatus: 'paid',
    orderStatus: 'delivered',
    paymentMethod: {
      type: 'card',
      image: amex,
      vendor: 'american-express',
      cardNumber: 'xxxx 4678',
    },
  },
  {
    id: 'WB30100',
    date: '20 Apr, 2025',
    time: '2:30 PM',
    customer: {
      name: 'Emma Johnson',
      avatar: user3,
      email: 'emma.johnson@storemail.com',
    },
    amount: 199.99,
    paymentStatus: 'paid',
    orderStatus: 'delivered',
    paymentMethod: {
      type: 'card',
      image: discover,
      vendor: 'discover',
      cardNumber: 'xxxx 1234',
    },
  },
  {
    id: 'WB30101',
    date: '21 Apr, 2025',
    time: '9:15 AM',
    customer: {
      name: 'Liam Thompson',
      avatar: user4,
      email: 'liam.thompson@buynow.com',
    },
    amount: 75.5,
    paymentStatus: 'pending',
    orderStatus: 'processing',
    paymentMethod: {
      type: 'card',
      image: unionpay,
      vendor: 'unionpay',
      cardNumber: 'xxxx 9876',
    },
  },
  {
    id: 'WB30102',
    date: '22 Apr, 2025',
    time: '4:45 PM',
    customer: {
      name: 'Sophia Davis',
      avatar: user5,
      email: 'sophia.davis@shopsite.com',
    },
    amount: 45.25,
    paymentStatus: 'failed',
    orderStatus: 'cancelled',
    paymentMethod: {
      type: 'other',
      image: payoneer,
      vendor: 'payoneer',
      email: 'xxx@email.com',
    },
  },
  {
    id: 'WB30103',
    date: '10 May, 2025',
    time: '11:00 AM',
    customer: {
      name: 'Oliver Brown',
      avatar: user6,
      email: 'oliver.brown@webstore.com',
    },
    amount: 299.0,
    paymentStatus: 'paid',
    orderStatus: 'shipped',
    paymentMethod: {
      type: 'upi',
      image: googleWallet,
      vendor: 'google-wallet',
      upiId: 'xxx@google',
    },
  },
  {
    id: 'WB30104',
    date: '24 Apr, 2025',
    time: '8:20 AM',
    customer: {
      name: 'Charlotte Lee',
      avatar: user7,
      email: 'charlotte.lee@marketzone.com',
    },
    amount: 420.8,
    paymentStatus: 'paid',
    orderStatus: 'delivered',
    paymentMethod: {
      type: 'upi',
      image: bhim,
      vendor: 'bhim',
      upiId: 'xxxx@upi',
    },
  },
]
